# 🔄 Git Workflow Explained - How to Update Your Portfolio

## ⚠️ **IMPORTANT: You NEVER Switch Branches Manually!**

### **The Two Branches:**

1. **`main` branch** = Your SOURCE CODE (where you edit files)
   - This is where you make all your changes
   - Edit files here: `src/components/`, `src/pages/`, etc.
   - **You work here 99% of the time**

2. **`gh-pages` branch** = Your DEPLOYED WEBSITE (auto-created)
   - This contains ONLY the built `dist` folder
   - **You NEVER edit this manually**
   - It's automatically updated when you run `npm run deploy`

---

## ✅ **Correct Workflow (ALWAYS Do This):**

### **Step 1: Make Changes (on `main` branch)**
```bash
# You're already on main branch - GOOD!
# Edit your files:
# - src/components/ProjectsSection.tsx (add GitHub URLs)
# - src/components/Navbar.tsx (navigation)
# - Any other files you want to change
```

### **Step 2: Build**
```bash
npm run build
```
- This creates the `dist` folder with your built website

### **Step 3: Deploy**
```bash
npm run deploy
```
- This automatically:
  1. Takes everything from `dist` folder
  2. Pushes it to `gh-pages` branch
  3. Updates your live website

### **Step 4: Wait 2-3 minutes**
- GitHub Pages needs time to update

### **Step 5: Check Your Live Site**
```
https://hamdan070905.github.io/Ham-Portfolio
```

---

## ❌ **What NOT to Do:**

- ❌ **DON'T** manually switch to `gh-pages` branch
- ❌ **DON'T** edit files on `gh-pages` branch
- ❌ **DON'T** manually copy files to `gh-pages`
- ❌ **DON'T** worry about `gh-pages` branch at all!

---

## 🎯 **Simple Rule:**

**Always work on `main` branch.**
**Always run `npm run build` then `npm run deploy`.**
**That's it!**

---

## 📝 **Example: Adding GitHub URL to Project**

1. **Edit** `src/components/ProjectsSection.tsx` (on main branch)
   ```tsx
   githubUrl: "https://github.com/Hamdan070905/your-repo",
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Done!** Your live site updates automatically.

---

## 🔍 **Why Your Changes Aren't Showing:**

If you made changes but they're not on the live site:
- ✅ Did you run `npm run build`? (Creates dist folder)
- ✅ Did you run `npm run deploy`? (Sends to gh-pages)
- ✅ Did you wait 2-3 minutes? (GitHub needs time)

**You don't need to switch branches - just build and deploy!**
