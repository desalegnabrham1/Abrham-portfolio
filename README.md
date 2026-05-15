# Portfolio

A clean, responsive React portfolio site. This README explains how to run the project locally, add your resume PDF, and deploy to Vercel.

## Overview

This project is a Create React App-based portfolio with pages for Home, About, Projects, Contact and Resume. Static assets placed in the `public/` folder (like `resume.pdf`) are served directly at the site root.

## Add Your Resume

Place your PDF file in `public/` and name it `resume.pdf`. The app links to `/resume.pdf`.

PowerShell example:

```powershell
Copy-Item 'C:\path\to\YourResume.pdf' 'C:\Projects\Portfolio\public\resume.pdf'
```

There is a helper file at `public/ADD_RESUME.md` with the same instructions.

## Quick Start (Local)

Install dependencies and start the dev server:

```bash
npm install
npm start
```

Open http://localhost:3000 to view the site. Changes in `src/` reload automatically.

## Build

Create an optimized production build:

```bash
npm run build
```

The `build/` folder is ready to be served by any static host.

## Deploy to Vercel

Recommended: push the repository to GitHub (or GitLab/Bitbucket) and import it in Vercel. Suggested settings (Vercel usually detects these):

- Build Command: `npm run build`
- Output Directory: `build`

Alternatively use the Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

After deployment your resume will be available at `https://<your-site>/resume.pdf`.

## Notes

- If you prefer the resume to be bundled with the app instead of served from `public/`, move the PDF into `src/Assets/` and import it from components.
- Make sure filenames match exactly (case-sensitive on many hosts).

If you want, tell me the full local path to your resume PDF and I will copy it into `public/` and add a Navbar link for you.
