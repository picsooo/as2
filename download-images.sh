#!/bin/bash
# ESASOUD V2 — Téléchargement des images depuis esasoud.net
BASE="https://www.esasoud.net"
DIR="assets/img"

mkdir -p "$DIR/categories" "$DIR/products" "$DIR/partners" "$DIR/gallery"

echo "Téléchargement des images hero..."
curl -sL -o "$DIR/main-slider-img.jpg"   "$BASE/images/main-slider-img.jpg"
curl -sL -o "$DIR/main-slider-img1.jpg"  "$BASE/images/main-slider-img1.jpg"
curl -sL -o "$DIR/main-slider-img2.jpg"  "$BASE/images/main-slider-img2.jpg"
curl -sL -o "$DIR/welding_1.jpg"         "$BASE/images/welding_1.jpg"
curl -sL -o "$DIR/about-team-banner.jpg" "$BASE/images/about-team-banner.jpg"

echo "Téléchargement catégories..."
curl -sL -o "$DIR/categories/consomable.jpg" "$BASE/components/com_jshopping/files/img_categories/consomable.jpg"
curl -sL -o "$DIR/categories/soudage.jpg"    "$BASE/components/com_jshopping/files/img_categories/soudage.jpg"
curl -sL -o "$DIR/categories/coupage.jpg"    "$BASE/components/com_jshopping/files/img_categories/coupage.jpg"
curl -sL -o "$DIR/categories/accesoires.jpg" "$BASE/components/com_jshopping/files/img_categories/accesoires.jpg"

echo "Téléchargement produit Caddy Arc..."
curl -sL -o "$DIR/products/caddy-arc-151i.jpg"      "$BASE/components/com_jshopping/files/img_products/902474_Caddy_Arc_151i.jpg"
curl -sL -o "$DIR/products/caddy-arc-151i-full.jpg"  "$BASE/components/com_jshopping/files/img_products/full_902474_Caddy_Arc_151i.jpg"

echo "Téléchargement logos partenaires..."
curl -sL -o "$DIR/partners/elbor.png"   "$BASE/images/partners/elborlogo.png"
curl -sL -o "$DIR/partners/swaty.png"   "$BASE/images/partners/swaty.png"
curl -sL -o "$DIR/partners/gce.png"     "$BASE/images/partners/gce.png"
curl -sL -o "$DIR/partners/chemtal.png" "$BASE/images/partners/chemtal.png"
curl -sL -o "$DIR/partners/osborn.png"  "$BASE/images/partners/osborn.png"
curl -sL -o "$DIR/partners/bosch.png"   "$BASE/images/partners/bosch.png"

echo "Téléchargement galerie..."
curl -sL -o "$DIR/gallery/electrodes.jpg"        "$BASE/images/cobalt_thumbs/gallery23-44/727/8cc1994dde069571bfe5edf1e7822185.jpg"
curl -sL -o "$DIR/gallery/poste-multiprocede.jpg" "$BASE/images/cobalt_thumbs/gallery23-43/727/62448a01125cebccfa3512491a345da9.jpg"
curl -sL -o "$DIR/gallery/gants.jpg"             "$BASE/images/cobalt_thumbs/gallery23-42/727/c9e61645f3f740197afa7fb17bf3d3ad.jpg"
curl -sL -o "$DIR/gallery/kit-torche-tig.jpg"    "$BASE/images/cobalt_thumbs/gallery23-41/727/d5d9d0e4068673aee603250d1eb43af8.jpg"
curl -sL -o "$DIR/gallery/poste-mma.jpg"         "$BASE/images/cobalt_thumbs/gallery23-40/727/49633121e88e2125a7069937885d5163.jpg"
curl -sL -o "$DIR/gallery/poste-industriel.jpg"   "$BASE/images/cobalt_thumbs/gallery23-39/727/fb04791e435ada34da98c5ca40642149.jpg"

echo "Terminé. Images dans ./$DIR/"
