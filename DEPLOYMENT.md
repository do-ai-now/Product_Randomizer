# Deploy Your App for Production

Your app currently uses `example.com` as a placeholder URL. For production, you must:

1. **Host** your app on a real server
2. **Update** the URL in `shopify.app.toml`
3. **Redeploy** so Shopify uses the new URL

---

## Step 1: Choose a Host

| Option | Free Tier | Best For |
|--------|-----------|----------|
| [Fly.io](https://fly.io) | Yes | Quick setup, good for Node.js |
| [Render](https://render.com) | Yes | Simple, connects to GitHub |
| [Railway](https://railway.app) | Yes ($5 credit) | Easy deploys |

---

## Step 2: Deploy to Fly.io (Example)

1. Install Fly CLI: https://fly.io/docs/hands-on/install-flyctl/
2. Sign up: `fly auth signup`
3. From your project:
   ```powershell
   cd c:\shopifyapp
   fly launch
   ```
   - Choose your app name (or accept the default)
   - Don't add a PostgreSQL or Redis database
4. Deploy:
   ```powershell
   fly deploy
   ```
5. Your app URL will be: `https://your-app-name.fly.dev`

---

## Step 3: Update shopify.app.toml

Edit `shopify.app.toml` and replace `example.com` with your real URL:

```toml
application_url = "https://your-app-name.fly.dev"
```

```toml
redirect_urls = [ "https://your-app-name.fly.dev/api/auth" ]
```

---

## Step 4: Set Environment Variables on Your Host

Your host needs these (Fly.io: `fly secrets set`, Render: Environment):

- `SHOPIFY_API_KEY` — From Partner Dashboard → Your app → Client credentials
- `SHOPIFY_API_SECRET` — Same place
- `SCOPES` — e.g. `write_products`
- `SHOPIFY_APP_URL` — Your app URL (e.g. `https://your-app.fly.dev`)

The hosting provider's Shopify guide will list the exact variables.

---

## Step 5: Redeploy to Shopify

```powershell
npx shopify app deploy
```

This pushes the updated `application_url` to Shopify. After that, installs on production stores will load from your hosted app.
