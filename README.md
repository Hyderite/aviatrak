# [Project Name]
> A brief, high-level one-liner about what this project actually achieves.

[Insert Screenshot or Link to Live Demo here]

## Tech Stack
* **Runtime:** Node.js (via Nixpacks)
* **Language:** TypeScript
* **Styling:** PostCSS (Autoprefixer, etc.)
* **Deployment:** GitHub Actions + PM2
* **Server:** Debian 12 / Nginx

## Local Development
1. **Clone & Install:**
   ```bash
   git clone [repo-url]
   pnpm install

OR on pre-existing repos:
1. **Fetch and Merge:**
   ```bash
   git remote add template https://github.com/Hyderite/vps-template.git
   git fetch template
   git merge template/main --allow-unrelated-histories

2. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Integrated deployment template for master/main branch"
   git push origin master/main

## 📝 Configuration Note
This project uses **Cloudflare Service Tokens** (`CF_CLIENT_ID` and `CF_CLIENT_SECRET`) to securely bypass Access Policies during the GitHub Action deployment. Ensure these are set in your repository secrets for the pipeline to succeed.

## ⚖️ License & Attribution
**Aviatrak** is open-source software licensed under the [GNU AGPLv3](./LICENSE).
