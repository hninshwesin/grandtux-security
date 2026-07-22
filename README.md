# GrandTux Security Labs

Professional marketing website for **GrandTux Security Labs** — independent offensive security & cybersecurity services.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Pages

- `/` — Home
- `/services` — Penetration testing & security assessment services
- `/labs` — Research / labs positioning
- `/about` — About GrandTux
- `/contact` — Static email & website links

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export for Nginx)

```bash
npm run build
```

Static files are written to `out/`.

## Deploy (Nginx + grandtux.com)

1. Point DNS **A** records for `grandtux.com` and `www.grandtux.com` to your server IP.
2. On the server (Node.js 20+ and Nginx required):

```bash
# clone once
sudo mkdir -p /var/www
sudo git clone git@github.com:hninshwesin/grandtux-security.git /var/www/grandtux.com-src
cd /var/www/grandtux.com-src
bash deploy/server-setup.sh
```

3. Enable HTTPS:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d grandtux.com -d www.grandtux.com
```

### Update after new commits

```bash
cd /var/www/grandtux.com-src
sudo git pull origin main
sudo npm ci
sudo npm run build
sudo rsync -a --delete out/ /var/www/grandtux.com/
sudo systemctl reload nginx
```
