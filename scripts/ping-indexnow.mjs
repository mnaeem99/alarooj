// Pings IndexNow (Bing/Yandex/Naver/Seznam) with every URL from the live sitemap.
// Usage: npm run indexnow
// Run after each production deploy.

// Keep in sync with lib/seo.ts INDEXNOW_KEY
const HOST = 'alaroojtechnical.com'
const KEY = 'd8377f7b26ac38a65dd4e73360676b62'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`
const SITEMAP_URL = `https://${HOST}/sitemap.xml`
const ENDPOINT = 'https://api.indexnow.org/IndexNow'

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL, { headers: { 'User-Agent': 'indexnow-pinger' } })
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status} ${res.statusText}`)
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  if (urls.length === 0) throw new Error('No <loc> entries found in sitemap')
  return urls
}

async function submit(urls) {
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })
  const text = await res.text()
  console.log(`IndexNow response: ${res.status} ${res.statusText}`)
  if (text) console.log(text)
  // 200 = accepted, 202 = accepted but slow validation, 422 = some URLs invalid
  if (![200, 202].includes(res.status)) process.exit(1)
}

async function main() {
  console.log(`Fetching ${SITEMAP_URL} ...`)
  const urls = await fetchSitemapUrls()
  console.log(`Submitting ${urls.length} URLs to IndexNow ...`)
  urls.forEach((u) => console.log('  ' + u))
  await submit(urls)
  console.log('Done.')
}

main().catch((err) => {
  console.error('IndexNow ping failed:', err.message)
  process.exit(1)
})
