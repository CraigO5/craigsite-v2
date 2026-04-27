# Craig Ondevilla — Portfolio Website Spec

## What we're building

A personal portfolio website at **craigo.live** (existing domain, replacing current site). Brutalist + creative chaos aesthetic with a strict grid system. Dark mode primary. Showcases my work as a founding engineer.

## Pages

1. **Home (index)** — hero with massive typography, project index, stats
2. **Work** — list of all projects (could be same page as home, scroll target)
3. **Case study pages** — one per major project (4 total: Euno, CoverMe, Pisayian, Spyfall)
4. **About** — longer-form bio, photo, personality
5. **Contact** — email, links, resume download

## Tech stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel
- **Fonts:** Inter (loaded via `next/font/google`)
- **No CMS** — all content in TypeScript files / MDX
- **Optional:** Framer Motion for subtle entrance animations

## Aesthetic

**Reference:** Brutalist + creative chaos. Think Bryce Wilner, Locomotive, HyperWorks Studio.

**Mandatory characteristics:**
- Strict grid system with visible dividing lines (1px, dark border on dark bg, light on light)
- Massive headline typography — Inter Black weight, 100-200px+
- Tight letter-spacing on headlines (-5 to -10)
- Tiny ALL-CAPS labels with wide letter-spacing (3-4) for metadata
- Sentence/section numbering: [001], [002], etc.
- One single accent color used sparingly (orange-red)
- Mixing Inter Black with Georgia italic for editorial moments
- Generous use of horizontal/vertical rules
- Cell-based layouts where every region feels deliberately bordered

**Avoid:**
- Generic startup gradients
- Soft shadows or glows
- Multi-color palettes (one accent only)
- Centered "balanced" layouts (everything is intentionally off-center or full-bleed)
- Stock photography
- Generic icon sets — text labels only, or custom SVG only

## Color palette

```
--bg-primary: #1a1a1a      (homepage / dark sections)
--bg-secondary: #f4eee5    (cream, for case study pages)
--text-primary: #f4eee5    (on dark)
--text-primary-inverse: #1a1a1a   (on cream)
--text-muted: #888         (works on both bgs)
--accent: #d4451f          (orange-red — use sparingly, ONE block per screen)
--border: #333             (on dark) / #1a1a1a (on cream)
```

## Typography

- **Inter** (Google Fonts) — entire site
- **Georgia** (system serif) — italic only, used for editorial breaks
- **Type scale:**
  - Display: 140-240px, weight 900, tracking -7 to -10
  - H1: 56-80px, weight 900, tracking -2
  - H2: 32-48px, weight 900, tracking -1
  - Body: 14-16px, weight 400-500, line-height 1.6
  - Metadata labels: 11-12px, weight 700, tracking +2 to +3, ALL CAPS

## Homepage layout (the hero)

Strict 4-column grid, 5 rows. Dark background (#1a1a1a), cream text (#f4eee5).

**Row 1 (80px):** Top nav strip
- Left: "CRAIG ONDEVILLA — INDEX" (12px, 700, tracking 3)
- Right: WORK · ABOUT · CONTACT links

**Row 2-3 (200px each):** Hero
- Left 3 columns: Massive "FOUNDING\nENGINEER©" headline (140px, weight 900)
- Right column row 2: "[CURRENTLY] SHIPPING" stat block (with red accent on "PING")
- Right column row 3: "[STATS] 1,039\nCOMMITS · 12 MO" stat block

**Row 4 (120px):** Project index — 4 columns
- Each cell has [001]-[004] label + project name + 1-line subtitle
- Last cell flips to orange (#d4451f) accent background

**Row 5 (100px):** Footer strip
- Left: "EST. 2025 ☉ MOBILE / BACKEND / WEB"
- Right: "SCROLL FOR DETAIL ↓"

Every cell separated by 1px borders (#333 on dark bg).

## Project case study page structure

Switch to **cream background** (#f4eee5) with black text. Editorial layout.

```
[NAV BAR — same as homepage but inverted]

[001] / SELECTED WORK
EUNO                     ←— massive heading, 140px
A self-reflection AI app

[two-column metadata row]
ROLE: Founding Engineer       TIMELINE: Oct 2025 - Present
STACK: React Native, NestJS   COMMITS: 518

[Hero image / mockup]

[Long-form case study with sections]:
  - The problem
  - What I built
  - Architectural decisions (with code snippets)
  - What I learned

[Up next: → 002 / COVERME]
```

## Project content

### 001 / EUNO
- **Subtitle:** AI self-reflection companion
- **Stack:** React Native, NestJS, Vite, Supabase, LLMs
- **Role:** Founding Engineer
- **Timeline:** Oct 2025 – Present
- **Headline metric:** 518 commits in 6 months / 3 production repos
- **Case study sections to write:**
  - The problem: building AI that feels like a sharp friend, not a horoscope
  - What I built: 7-step deterministic AI agent pipeline
  - The data model: snapshots → tensions → versioned portraits
  - LLM cost optimization: from 2 calls to 1, dropped Sonnet for Haiku 4.5
  - Privacy architecture: AES-GCM, JWT migration, RLS sweep
  - BullMQ → QStash migration
- **Note:** Don't reveal proprietary product specifics — keep technical, not product

### 002 / COVERME
- **Subtitle:** AI cover letter generator
- **Stack:** Next.js, TypeScript, OpenAI API, Vercel
- **Role:** Solo developer
- **Timeline:** Jul 2025 – Present
- **Live link:** https://coverme.craigo.live/
- **Headline metric:** 500+ users, 1,000+ cover letters generated
- **Case study sections:**
  - The problem: cover letters are repetitive and time-consuming
  - What I built: bulk job description input → tailored cover letters in <5s
  - The prompt engineering iteration
  - What I'd do differently

### 003 / PISAYIAN DATA CLEANER
- **Subtitle:** CSV → relational tables for nonprofit alumni network
- **Stack:** Next.js, TypeScript, Tailwind, PapaParse, fflate
- **Role:** Frontend lead (team of 4)
- **Timeline:** September 2025 (hackathon, 36 hours)
- **Headline metric:** 1st place at Kapwa Codefest 2025 / 95% reduction in manual cleanup time
- **Live link:** https://csv-umber.vercel.app/

### 004 / SPYFALL
- **Subtitle:** Multiplayer browser-based social deduction game
- **Stack:** Next.js, TypeScript, Supabase realtime, Tailwind
- **Role:** Solo developer
- **Timeline:** Jun – Jul 2025
- **Repo:** https://github.com/CraigO5/spyfall
- **Case study sections:**
  - Building real-time multiplayer with Supabase channels
  - Designing the role-assignment algorithm
  - What I learned about latency

## About page content

- Hi, I'm Craig — founding engineer based in Champaign, IL
- B.S. Computer Science, UIUC, 2025 (with Honors, 3.69)
- Sole engineer at Euno building AI agent systems end-to-end
- 1st place winner at Kapwa Codefest 2025
- I make art when I'm not making software
- Background interest in ML applied to user modeling
- Open to AI engineering and senior full-stack roles

## Contact page content

- **Email:** craigondevilla1231@gmail.com
- **LinkedIn:** linkedin.com/in/craig-ondevilla
- **GitHub:** github.com/CraigO5
- **Resume:** Download link to PDF

## Specific behaviors

1. **Hover states:** Bold black underlines (4px thick) appear under nav links on hover. Project cells slightly invert colors.

2. **Cursor:** Custom cursor on the homepage (small black circle, 8px). Inverts to cream over the orange cell.

3. **Smooth scroll** between sections.

4. **Motion (subtle, optional):**
   - On page load: massive headline characters fade up one at a time (50ms stagger)
   - On scroll into project grid: cells reveal left-to-right with 100ms stagger
   - Don't overdo it — chaos brutalism is loud, motion should be restrained

5. **Responsive:** Mobile = single column stacks, headlines drop to 64-80px, all metadata stays in place.

6. **Dark/light mode:** Homepage is permanently dark. Case studies are permanently cream. About page = cream. No theme toggle.

## File structure

```
/app
  /page.tsx                  → home (dark grid hero)
  /work
    /[slug]/page.tsx         → dynamic case study route
  /about/page.tsx
  /contact/page.tsx
  /layout.tsx                → shared nav + font setup
  /globals.css

/components
  /Hero.tsx                  → the grid hero
  /ProjectCell.tsx           → project index cell
  /MetadataRow.tsx           → "ROLE: x | STACK: y" rows
  /CaseStudyHeader.tsx
  /Footer.tsx

/content
  /projects.ts               → typed project data array
  /caseStudies/euno.mdx
  /caseStudies/coverme.mdx
  /caseStudies/pisayian.mdx
  /caseStudies/spyfall.mdx

/public
  /assets/...                → screenshots, mockups
  /resume.pdf
```

## Build priority

1. **Layout + nav + fonts** — get the visual foundation right first
2. **Homepage hero** (the grid) — most important page, gets the aesthetic right
3. **One case study page** (Euno) as proof of concept for the layout
4. **Replicate for other 3 projects**
5. **About + Contact**
6. **Polish: hover states, cursor, motion**

## What I want from Claude Code

Build this iteratively:
1. Set up the Next.js project with Tailwind v4 and Inter font
2. Build the homepage hero (the brutalist grid) first — get this perfect before moving on
3. Build the Euno case study page as a template
4. Help me write case study content (I'll provide tech details, you help structure prose)
5. Polish for mobile responsiveness last

Ask me before adding any new dependency. Default to vanilla Next.js + Tailwind unless there's a strong reason otherwise.
