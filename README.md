# FMZBC AV Training Resource Hub

A React/Vite resource hub primarily for AV volunteers. It focuses on training, service preparation, role practice, confidence-building progression, and reusable request/checklist templates.

The current app is built from the provided FMZBC AV documentation packages:

- Full AV Documentation Distribution Package
- Volunteer and Contractor Handbook
- AV Role Overview Document
- Volunteer Onboarding and Training Checklist
- AV Request Guides and Templates
- AV Incident / Issue Report Template
- Contractor Evaluation Template

## What It Includes

- Volunteer training library for orientation, booth walkthroughs, live-service practice, request prep, and issue reporting
- FMZBC AV process basics covering scope, deadlines, request flow, service/event flow, media standards, and issue response
- Volunteer prep guides for Sunday service, major events, ministry highlights, and media requests
- Role practice guidance with readiness labels, boundaries, and required next checks
- Onboarding checklist for tracking progress toward live operation
- Service prep coverage planner for full and reduced service support
- Copyable volunteer-facing templates and checklists, with contractor evaluation kept as a leader reference

## Privacy Filter

The site intentionally summarizes volunteer-facing process knowledge instead of publishing the full internal documentation. It does not expose vendor account details, purchase records, private links, login paths, room power sequences, routing diagrams, network escalation details, asset records, or leadership-only approval context.

## Run Locally

```bash
npm install --cache .npm-cache
npm run build
```

The GitHub Pages deployment uses the generated root `index.html` plus the root `assets/` folder. The React source remains in `src/` for future updates.

Production build:

```bash
npm run build
```
