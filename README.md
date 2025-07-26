This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
offbeattreks
├─ .sanity
│  └─ runtime
│     ├─ app.js
│     └─ index.html
├─ eslint.config.mjs
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ BannerImg.png
│  ├─ BannerVideo.mp4
│  ├─ BG
│  │  ├─ BlogsBg.png
│  │  ├─ OslaVillageBg.png
│  │  └─ TreksBg.png
│  ├─ Blogs
│  │  ├─ OslaVillage.png
│  │  └─ TravelHacks.png
│  ├─ Camping.png
│  ├─ file.svg
│  ├─ FooterImg.png
│  ├─ globe.svg
│  ├─ HomePageBg.png
│  ├─ Icons
│  │  ├─ accommodationIcon.png
│  │  ├─ AdventureIcon.png
│  │  ├─ altitudeIcon.png
│  │  ├─ baseCampIcon.png
│  │  ├─ clockIcon.png
│  │  ├─ ExperienceIcon.png
│  │  ├─ regionIcon.png
│  │  ├─ SafetyAndSecurityIcon.png
│  │  ├─ sunIcon.png
│  │  ├─ TeamIcon.png
│  │  ├─ trekDistanceIcon.png
│  │  └─ trekkingIcon.png
│  ├─ next.svg
│  ├─ Testimonials
│  │  ├─ testimonial1.png
│  │  ├─ testimonial2.png
│  │  ├─ testimonial3.png
│  │  ├─ testimonial4.png
│  │  └─ testimonial5.png
│  ├─ TrekCalender
│  │  ├─ NagTibba.png
│  │  └─ SatTal.png
│  ├─ Treking.png
│  ├─ Treks
│  │  ├─ NagTibbaTrek.png
│  │  ├─ NagTibbaTrek1.png
│  │  ├─ NagTibbaTrek2.png
│  │  ├─ NagTibbaTrek3.png
│  │  ├─ NagTibbaTrek4.png
│  │  ├─ NagTibbaTrek5.png
│  │  ├─ NagTibbaTrek6.png
│  │  ├─ NagTibbaTrek7.png
│  │  ├─ NagTibbaTrek8.png
│  │  └─ SatTalTrek.png
│  ├─ vercel.svg
│  ├─ Walks.png
│  └─ window.svg
├─ README.md
├─ sanity.cli.js
├─ sanity.config.js
└─ src
   ├─ app
   │  ├─ api
   │  │  └─ draft-mode
   │  │     ├─ disable
   │  │     │  └─ route.js
   │  │     └─ enable
   │  │        └─ route.js
   │  ├─ blogs
   │  │  ├─ page.jsx
   │  │  └─ [slug]
   │  │     └─ page.jsx
   │  ├─ favicon.ico
   │  ├─ globals.css
   │  ├─ layout.jsx
   │  ├─ page.jsx
   │  ├─ studio
   │  │  └─ [[...tool]]
   │  │     └─ page.jsx
   │  └─ treks
   │     ├─ page.jsx
   │     └─ [slug]
   │        └─ page.jsx
   ├─ Components
   │  ├─ DisaleDraftMode
   │  │  └─ index.jsx
   │  ├─ Footer
   │  │  └─ index.jsx
   │  ├─ Navbar
   │  │  └─ index.jsx
   │  ├─ Section
   │  │  ├─ ArticleAndBlog
   │  │  │  └─ index.jsx
   │  │  ├─ Banner
   │  │  │  └─ index.jsx
   │  │  ├─ Testimonials
   │  │  │  └─ index.jsx
   │  │  ├─ TrekCalender
   │  │  │  └─ index.jsx
   │  │  └─ UpcomingTreks
   │  │     └─ index.jsx
   │  ├─ Styles
   │  │  └─ index.jsx
   │  └─ ui
   │     └─ Button.jsx
   └─ sanity
      ├─ env.js
      ├─ lib
      │  ├─ client.js
      │  ├─ image.js
      │  ├─ live.js
      │  └─ token.js
      ├─ portableText.jsx
      ├─ schemaTypes
      │  ├─ authorType.js
      │  ├─ blockContentType.js
      │  ├─ categoryType.js
      │  ├─ index.js
      │  └─ postType.js
      └─ structure.js

```