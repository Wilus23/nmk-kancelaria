# Project Instructions

## Product Context
- This project is a high-quality landing page for a law firm.
- The site must be designed and implemented with Sanity in mind, even if Sanity integration is not fully wired yet.
- Treat content structure, component boundaries, metadata, and future CMS mapping as if the page will be managed from Sanity.
- Sanity is important for this project and should be treated as a core future integration, not an afterthought.

## Team Context
- The team currently works primarily as UI designers, not programmers.
- Do not assume strong engineering knowledge on the user side.
- When making technical decisions, keep implementation pragmatic and explain things clearly in plain language when needed.
- Reduce unnecessary technical complexity where it does not improve UI quality, editor experience, performance, or future Sanity integration.

## Priorities
- UI quality is the top priority.
- Mobile is ultra important and must never be treated as a secondary breakpoint.
- Every section must feel intentional, premium, and conversion-focused because this is a landing page.
- Performance is mandatory: avoid heavy client-side code, unnecessary animations, oversized assets, layout shift, and avoidable bundle growth.

## Design Rules
- Always design and implement from Figma when a Figma node, file, or screenshot is available.
- Keep Figma fidelity high, but translate it cleanly into the project’s existing Next.js and CSS conventions.
- Prefer elegant, premium visual decisions over generic marketing-site patterns.
- The hero section, navigation, and above-the-fold layout must receive the highest design attention.
- Preserve strong visual clarity on mobile first, then scale upward to tablet and desktop.

## Technical Rules
- Build for Next.js App Router best practices.
- Keep server/client boundaries tight and do not push presentation logic into unnecessary client components.
- Optimize images, fonts, metadata, and loading behavior for landing-page performance.
- Reuse data-driven structures so future Sanity fields can map into components without a rewrite.
- Any CMS-facing content model should be simple, composable, and landing-page oriented.
- Prefer maintainable implementations that a design-led team can continue working with safely.

## Required Skill References
- Use `figma-implement-design` when implementing or refining UI from Figma.
- Use `ui-ux-pro-max` when improving visual hierarchy, spacing, typography, hover states, and overall polish.
- Use `next-best-practices` for App Router, image/font optimization, metadata, and performance-sensitive implementation details.
- Use `sanity-best-practices` whenever making decisions that affect future Sanity schema design, GROQ usage, content structure, or Visual Editing readiness.
- Use `seo-aeo-best-practices` for metadata, structured data, technical SEO, and landing-page discoverability.

## Delivery Standard
- Do not ship “good enough” UI.
- Check desktop and mobile behavior every time, with special focus on small screens.
- Treat visual polish, responsive layout, accessibility, and speed as part of the same requirement.
