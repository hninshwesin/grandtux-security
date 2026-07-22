#!/usr/bin/env bash
# Run ON THE SERVER after cloning/pulling the repo.
# Usage: bash deploy/server-setup.sh

set -euo pipefail

DOMAIN="grandtux.com"
APP_DIR="/var/www/${DOMAIN}-src"
WEB_ROOT="/var/www/${DOMAIN}"
REPO="git@github.com:hninshwesin/grandtux-security.git"

echo "==> Ensuring directories"
sudo mkdir -p "$APP_DIR" "$WEB_ROOT"

if [ ! -d "$APP_DIR/.git" ]; then
  echo "==> Cloning repository"
  sudo git clone "$REPO" "$APP_DIR"
else
  echo "==> Pulling latest"
  sudo git -C "$APP_DIR" pull origin main
fi

echo "==> Installing dependencies & building static site"
cd "$APP_DIR"
sudo npm ci
sudo npm run build

echo "==> Publishing export to web root"
sudo rsync -a --delete "$APP_DIR/out/" "$WEB_ROOT/"

echo "==> Installing Nginx site config"
sudo cp "$APP_DIR/deploy/nginx-grandtux.com.conf" "/etc/nginx/sites-available/${DOMAIN}"
sudo ln -sfn "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/${DOMAIN}"
sudo nginx -t
sudo systemctl reload nginx

echo ""
echo "Done. Site files are in $WEB_ROOT"
echo "Next: point DNS A record for ${DOMAIN} (+ www) to this server IP,"
echo "then run: sudo certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
