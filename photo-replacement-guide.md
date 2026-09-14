# Photo Replacement Guide

Replace the placeholder images below with your own photographs before publishing.

## Images to Replace

| Location | File | Description | Suggested Photo |
|----------|------|-------------|-----------------|
| Hero background | `components/hero.tsx` | Large landscape/wide shot | Your strongest landscape or signature image |
| About portrait | `components/about.tsx` | Left column image | A portrait of you or your working environment |
| Portfolio (×6) | `components/portfolio.tsx` | Gallery grid images | Your best 6 photos, mix of landscape and portrait orientations |

## Tips

- The hero image works best at 1920×1080 or similar 16:9 aspect ratio
- The about image should be portrait-oriented (taller than wide)
- The portfolio grid has 3 columns on desktop; the first and fourth slots span 2 rows — put your strongest vertical images there
- All images load with `loading="lazy"` except the hero
- Replace the email address in `components/contact.tsx`
- Replace the photographer name and tagline in `components/hero.tsx` and `components/header.tsx`
- Update the about copy in `components/about.tsx` to reflect your actual story and specialty
- Adjust pricing and package names in `components/pricing.tsx` to match your actual rates

## Current Placeholders

All images use `picsum.photos` with fixed seeds for reproducibility. They will be replaced once you swap the URLs.