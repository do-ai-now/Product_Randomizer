# Featured Collection Grid — Getting Started (Beginner Guide)

This app adds a **Featured Collection Grid** block to your Shopify theme. The block shows random products from any collection you choose.

---

## What You Need

1. **Node.js** (version 20 or 22) — [nodejs.org](https://nodejs.org)
2. **Shopify Partner account** — [partners.shopify.com](https://partners.shopify.com)
3. **Development store** — Create one from your Partner dashboard

---

## Step 1: Install Dependencies

Open a terminal in the project folder and run:

```powershell
cd c:\shopifyapp
npm install
```

Wait for it to finish. You only need to do this once (or after pulling new changes).

---

## Step 2: Log In to Shopify

You need to connect this project to your Shopify app:

```powershell
npx shopify auth login
```

A browser window will open. Log in to your Partner account and approve access. The terminal will confirm when you’re connected.

---

## Step 3: Link to Your App (First Time)

If this is your first time, link the project to your app:

```powershell
npx shopify app config link
```

Select your app or create a new one. The CLI will set up the connection.

---

## Step 4: Run the App

Start the development server:

```powershell
npx shopify app dev
```

Or:

```powershell
npm run dev
```

The CLI will:

- Start your app
- Create a tunnel (public URL) so Shopify can reach it
- Print a **Preview URL** — open this to install the app on your dev store

**Keep the terminal open** while you’re working. Closing it stops the app.

---

## Step 5: Install the App on Your Store

1. Click the Preview URL shown in the terminal (or press **P** if prompted)
2. Choose your development store
3. Click **Install app**
4. Approve the requested permissions

---

## Step 6: Add the Block to Your Theme

1. In your store admin, go to **Online Store** → **Themes**
2. Click **Customize** on your current theme
3. Open a page (e.g. **Homepage**)
4. Click **Add block** or **Add section**
5. Under **Apps**, find **Featured Collection Grid**
6. Add it
7. In the block settings on the right:
   - **Collection** — Pick the collection whose products you want to show
   - **Heading** — Optional heading (e.g. “Featured Products”)
   - **Products to show** — Between 2 and 24 (default: 8)
   - **Columns** — 2–6 columns on desktop (2 on mobile)
8. Click **Save**

---

## Step 7: Check Your Storefront

Visit your store’s homepage (or the page where you added the block). You should see a grid of products from the selected collection. The order changes randomly each time the page loads.

---

## Troubleshooting

| Problem | What to try |
|---------|-------------|
| **"shopify" not recognized** | Use `npx shopify ...` instead of `shopify ...` |
| **App won’t start** | Run `npm install` again, then `npx shopify app dev` |
| **Block doesn’t appear** | Make sure the theme supports app blocks (Dawn, recent themes) |
| **No products show** | Pick a collection that has products |
| **Tunnel / 1033 error** | Keep the dev server running; don’t close the terminal |

---

## Project Structure (Simplified)

| Folder/File | Purpose |
|-------------|---------|
| `app/` | Admin app (what merchants see in Shopify admin) |
| `extensions/featured-collection-grid/` | Theme block (what customers see on the storefront) |
| `prisma/` | Database (sessions) |
| `shopify.app.toml` | App config |

---

## Next Steps

- Change the block layout or styling in `extensions/featured-collection-grid/`
- Customize the admin app UI in `app/routes/`
- Deploy with `npx shopify app deploy` when you’re ready for production
