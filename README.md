# Ham Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start - How to Run Your Portfolio Locally

**Prerequisites:**
- Node.js (v18 or higher) - [Download here](https://nodejs.org/)
- npm or bun (package manager)

**Steps to Run:**

1. **Install Dependencies** (if you haven't already):
   ```bash
   npm install
   ```
   or if you're using bun:
   ```bash
   bun install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   or with bun:
   ```bash
   bun run dev
   ```

3. **View Your Portfolio:**
   - Open your browser and go to: `http://localhost:5173`
   - The page will automatically reload when you make changes to your code!

4. **Build for Production:**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist` folder.

5. **Preview Production Build:**
   ```bash
   npm run preview
   ```
   This lets you test how your portfolio will look after deployment.

## 📝 How to Edit Your Portfolio (FREE Methods)

**Since Lovable limit is reached, use these FREE tools:**

**Option 1: VS Code (Recommended - Best Editing Experience)**
1. Install VS Code: https://code.visualstudio.com/ (FREE)
2. Open this project folder in VS Code
3. Edit any file in `src/components/` folder
4. Run `npm run dev` to see changes live
5. Push to GitHub and deploy (see deployment section below)

**Option 2: Edit Directly on GitHub (No Installation Needed)**
- Go to your GitHub repository
- Click the "Edit" button (pencil icon) on any file
- Make changes and commit
- Deploy using one of the free hosting options below

**Option 3: GitHub Codespaces (Free Browser-Based Editor)**
- Go to your GitHub repository
- Click "Code" → "Codespaces" → "Create codespace"
- Edit files in the browser
- Commit and push changes

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 🌐 How to Deploy Your Portfolio (FREE Hosting Options)

### **Option 1: GitHub Pages (Already Configured!)**
```bash
npm run deploy
```
Your portfolio will be live at: `https://hamdan070905.github.io/Ham-Portfolio`

**To update after changes:**
```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

### **Option 2: Vercel (FREE - Auto-Deploy - Recommended!)**
1. Go to https://vercel.com (Sign up with GitHub - FREE)
2. Click **"Add New Project"**
3. Import your `Ham-Portfolio` repository
4. Click **"Deploy"**
5. **Done!** Your portfolio is live with `.vercel.app` URL
6. **Auto-updates:** Every `git push` automatically deploys!

### **Option 3: Netlify (FREE - Also Auto-Deploy)**
1. Go to https://netlify.com (Sign up with GitHub - FREE)
2. Click **"Add new site" → "Import an existing project"**
3. Select your `Ham-Portfolio` repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **"Deploy site"**
6. **Auto-updates** when you push to GitHub!

**📖 Detailed Guide:** See `FREE_EDITING_GUIDE.md` for complete instructions!

## ⚠️ Troubleshooting

**Error: "Cannot find module '@tanstack/react-query'" or similar**
- Run `npm install` again to install all dependencies
- Make sure you've installed Node.js properly

**Portfolio changes not appearing on live site?**
- Make sure you've pushed changes to GitHub: `git push`
- Go to Lovable and click **Share → Publish** again
- Wait a few minutes for deployment to complete

**Development server won't start?**
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Try `npm run dev` again

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
