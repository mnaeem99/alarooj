import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: SITE_URL.replace('https://', ''),
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}








