# UAE business directory listings — AL AROOJ TECHNICAL

**Important:** Directory sites require **your** login (trade license, phone OTP, email). We cannot create listings for you automatically. This guide gives you **where to sign up**, **what to paste**, and **how to wire listings into the website** after you’re live.

---

## Step 1 — Copy your business details (use everywhere)

Use the **exact same** name, phone, and website on every directory (Google calls this **NAP consistency**).

Open this file in the repo and copy all of it:

**`public/business-nap.txt`**

After deploy, you can also open: **https://alaroojtechnical.com/business-nap.txt**

---

## Step 2 — Register in priority order

Do **high** priority first (1–2 hours total):

| # | Directory | Sign up | Why |
|---|-----------|---------|-----|
| 1 | [Google Business Profile](https://business.google.com/) | Free | Map + “near me” searches |
| 2 | [Bing Places](https://www.bingplaces.com/) | Free | Import from Google when possible |
| 3 | [Apple Business Connect](https://businessconnect.apple.com/) | Free | iPhone / Apple Maps |
| 4 | [Facebook Page](https://www.facebook.com/pages/create) | Free | Social + local discovery |
| 5 | [Yellow Pages UAE](https://www.yellowpages.ae/) | Free/Paid | Classic UAE directory |

Then **medium** priority (spread over a week):

- [ATN Info](https://www.atninfo.com/) — industrial / B2B UAE  
- [UAE Business Directory](https://www.uaebusinessdirectory.com/)  
- [Dubizzle](https://www.dubizzle.com/) — post a **Services** ad with website + WhatsApp  
- [Instagram](https://www.instagram.com/) — business account, link in bio  
- [LinkedIn](https://www.linkedin.com/company/setup/new/) — company page  
- Ajman / Sharjah **Chamber** member directories (if you have membership)

Full list with notes: **`data/uae-directories.json`**

---

## Step 3 — What to enter on each form

| Field | Use this |
|-------|----------|
| **Business name** | AL AROOJ TECHNICAL TRADING F.Z.E |
| **Website** | https://alaroojtechnical.com |
| **Phone** | +971 56 486 1236 |
| **WhatsApp** | https://wa.me/971553250775 |
| **Email** | Alaroojtradings@gmail.com |
| **City / area** | Ajman (office) — **service areas**: Sharjah, Ajman, UAE |
| **Category** | Auto repair / garage equipment / industrial maintenance |
| **Description** | Text from `public/business-nap.txt` |
| **Photos** | Logo + 5–10 real job photos (compressors, lifts, booths) |

**Do not** use a different phone number or spelling of the company name on different sites.

---

## Step 4 — After each listing is live

1. Open **`data/uae-directories.json`**
2. Find the directory (e.g. `"id": "google-business"`)
3. Set **`profileUrl`** to your public page, for example:
   ```json
   "profileUrl": "https://www.facebook.com/YourPageName"
   ```
4. Deploy the site again

Effects:

- Footer shows **“Find us online”** with those links  
- Google **JSON-LD `sameAs`** includes them (helps connect your brand entities)  
- You have a checklist of completed listings in the repo  

---

## Step 5 — Monthly habits (10 minutes)

- [ ] Post 1 photo/update on Google Business Profile  
- [ ] Reply to reviews and WhatsApp leads within a few hours  
- [ ] Add one new directory from `data/uae-directories.json` if any `profileUrl` is still empty  
- [ ] Keep Dubizzle / social posts fresh with link to https://alaroojtechnical.com  

---

## Paid vs free

| Type | Examples | Tip |
|------|----------|-----|
| **Free** | Google, Bing, Apple, Facebook, many basic directories | Start here |
| **Freemium** | Yellow Pages UAE, ATN Info, Kompass | Free basic profile; upgrade only if they show real leads |
| **Paid ads** | Dubizzle promoted ads, Facebook ads | Use after free listings are complete |

Avoid paying for “SEO packages” that only submit to spam directories — they rarely help UAE local search.

---

## Troubleshooting

**“Google can’t verify my address”**  
- Choose **service-area business** (you visit customers) if you don’t have a public storefront.  
- Verify by phone or postcard using the number on your trade license.

**“Duplicate listing”**  
- Claim the existing listing instead of creating a second one.

**“No calls after listing”**  
- Directories take 2–8 weeks; combine with Google reviews, WhatsApp speed, and gallery photos on the website.

---

## Related

- [SEO_SETUP.md](./SEO_SETUP.md) — Search Console, sitemap, IndexNow  
- `data/uae-directories.json` — master checklist  
- `public/business-nap.txt` — copy-paste block  
