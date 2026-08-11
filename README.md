# TBI Research — Insights

Static site for [tbi-ksa.github.io/insights/](https://tbi-ksa.github.io/insights/) (custom domain `insights.tbiksa.com` planned for month 2). Built with [Eleventy](https://www.11ty.dev). A publication of **TBI Saudi Executive Education**.

## What publishes here

Three content types, in card-grid form on the home page and article-form at their permalink:

| Type | Cadence | Gate |
|------|---------|------|
| **Capability guide** | Weekly | Formspree gate (Name + Organization + WhatsApp + Email) → PDF brief |
| **Case study** | As consent lands | Same gate |
| **Market signal** | On escalation from the vertical-impact-brief pipeline (~monthly, T≥5) | Ungated |

Each capability guide draws from TBI's operating-excellence knowledge base. Each case study features a named client, published with signed consent. Each market signal is triaged from the daily vertical-impact-brief pipeline, escalated only when the underlying mechanism is verified and material.

## Build

```bash
npm install
npm run build   # → _site/
npm run serve   # → http://localhost:8080/insights/ with live reload
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds on push to `main` and publishes to GitHub Pages.

## Adding content

- Capability: `content/capabilities/<slug>.md` — frontmatter `title`, `date`, `vertical`, `summary`.
- Case study: `content/case-studies/<slug>.md` — same frontmatter plus optional `client`.
- Signal: `content/signals/<slug>.md` — same, plus `status: current` (or `closed` / `superseded` when the event passes).

The layout is `_includes/layouts/base.njk`. Design tokens are documented in `_includes/base.css` and derived from the TBI design system source-of-truth at `~/.claude/skills/tbi-design/colors_and_type.css`.

## Voice rules (from `tbi-design`)

Sentence case. No exclamation marks, no superlatives. Signed deltas. `SAR 142.08` prefix format. Quiet verb-led CTAs — "Read brief", "Brief us" — never "Learn more" or "Click here". Lucide icons at 1.5 stroke, no emoji.

## Provenance

Every claim in every published piece is marked on the provenance ladder: **VERIFIED** (checked against primary source), **CITED** (source named but not opened), **ASSERTED** (author judgement), **INHERITED** (from a prior piece). A published claim resting on an unchecked mechanism cannot print as a finding — this is the rule enforced upstream in the vertical-impact-brief pipeline.
