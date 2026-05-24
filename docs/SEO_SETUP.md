# SEO setup guide — alaroojtechnical.com

Your site already ships with **sitemap**, **robots.txt**, **Open Graph**, **JSON-LD**, **Google verification file**, and **IndexNow**. Use this checklist to get indexed and start earning traffic.

> **Realistic expectation:** New domains rarely get traffic in days. Indexing can take **1–4 weeks**; rankings for competitive keywords take **months**. Combine technical SEO with **Google Business Profile**, reviews, and local marketing.

---

## 1. Google (Search + Business)

### A. Google Search Console (required)

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Click **Add property** → choose **URL prefix**: `https://alaroojtechnical.com`
3. Verify ownership (your site already supports this):
   - **HTML file:** `https://alaroojtechnical.com/google4205df26671e0303.html` (file in `public/`)
   - **Or** HTML meta tag: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel env (see `.env.example`)
4. After verification:
   - **Sitemaps** → Submit: `https://alaroojtechnical.com/sitemap.xml`
   - **URL inspection** → enter homepage → **Request indexing**
   - Repeat for `/services`, `/products`, `/contact`
5. Check **Pages** → **Indexing** weekly for errors.

### B. Google Business Profile (critical for local UAE traffic)

1. [Google Business Profile](https://business.google.com) → create or claim listing.
2. Use exact business name: **AL AROOJ TECHNICAL TRADING F.Z.E**
3. Category: *Auto repair shop* / *Industrial equipment supplier* / *Machine maintenance*
4. Service areas: **Sharjah, Ajman** (and other emirates you serve).
5. Add phone **+971 56 486 1236**, website URL, hours, photos of work/equipment.
6. Post weekly updates; ask happy customers for **Google reviews** (biggest local ranking factor).

### C. Google Analytics 4 (optional but recommended)

1. [Google Analytics](https://analytics.google.com) → create property for `alaroojtechnical.com`.
2. Copy Measurement ID (`G-XXXXXXXX`).
3. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel → redeploy.

---

## 2. Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Sign in with Microsoft account → **Add a site** → `https://alaroojtechnical.com`
3. Verify:
   - Import from **Google Search Console** (easiest), or
   - **HTML meta tag:** set `NEXT_PUBLIC_BING_SITE_VERIFICATION` in Vercel, or
   - Upload XML file to `public/` if Bing provides one
4. **Sitemaps** → Submit: `https://alaroojtechnical.com/sitemap.xml`
5. Enable **IndexNow** in Bing settings (your key file is already on the site).

---

## 3. Sitemap

| URL | Purpose |
|-----|---------|
| `https://alaroojtechnical.com/sitemap.xml` | Auto-generated from `app/sitemap.ts` (home, services, products, etc.) |
| `https://alaroojtechnical.com/robots.txt` | Points crawlers to the sitemap |

Submit this URL in **Google Search Console** and **Bing Webmaster Tools**.  
After adding new products/pages, redeploy — the sitemap updates automatically.

---

## 4. Open Graph (social previews)

Tags are set in `app/layout.tsx` and per-page via `lib/seo.ts`.

**Improve previews:** add a dedicated image:

- Path: `public/images/og-cover.jpg`
- Size: **1200 × 630 px** (company photo, workshop, or branded banner)
- Test: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 5. IndexNow (Bing, Yandex, Naver, Seznam)

Already configured:

| Item | Location |
|------|----------|
| Key file | `https://alaroojtechnical.com/d8377f7b26ac38a65dd4e73360676b62.txt` |
| Ping script | `npm run indexnow` |

**After every production deploy**, run locally or in CI:

```bash
npm run indexnow
```

Expected response: `200` or `202`. This notifies search engines that URLs in your sitemap changed.

In **Bing Webmaster Tools** → **IndexNow** → confirm the key is detected.

---

## 6. Other high-impact actions (faster than pure SEO)

| Action | Why |
|--------|-----|
| **Google Business Profile** + reviews | Drives “near me” and map traffic |
| **WhatsApp / phone on every page** | Already on site — track calls in GBP |
| **List on UAE directories** | See **[UAE_DIRECTORIES.md](./UAE_DIRECTORIES.md)** — copy from `public/business-nap.txt` |
| **Instagram / Facebook** with website link | Social signals + direct leads |
| **Before/after project posts** | Content Google can rank |
| **Target long-tail keywords** | e.g. “car lift repair Ajman” not just “garage equipment” |
| **Backlinks** | Suppliers, partners, customer testimonials linking to you |

---

## 7. Environment variables (Vercel)

Copy from `.env.example` and add in **Vercel → Project → Settings → Environment Variables**:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Meta tag verification (optional if HTML file works) |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing meta verification |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 |

Redeploy after changing env vars.

---

## 8. Monthly maintenance checklist

- [ ] Request indexing for new/updated pages in Search Console
- [ ] Run `npm run indexnow` after deploys
- [ ] Check Search Console → **Coverage** and **Core Web Vitals**
- [ ] Add 1–2 gallery/blog posts with real project photos
- [ ] Respond to Google reviews and GBP messages
- [ ] Confirm sitemap URL count matches your pages

---

## Quick verification commands

```bash
# Sitemap reachable
curl https://alaroojtechnical.com/sitemap.xml

# Robots
curl https://alaroojtechnical.com/robots.txt

# IndexNow key
curl https://alaroojtechnical.com/d8377f7b26ac38a65dd4e73360676b62.txt

# IndexNow ping
npm run indexnow
```
