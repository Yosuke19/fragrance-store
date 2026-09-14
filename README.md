# Notesdecoeur Storefront — Simple Version

This version follows the same plain-file approach as the OZK Surfboards website. It has no framework, package manager, build process, or generated folders.

## Files you will normally edit

- `products.js` — add or change perfumes, descriptions, prices, sizes, notes, and images
- `Pictures/` — locally stored perfume product images
- `style.css` — change colors, spacing, fonts, and layout
- `index.html` — change the homepage headline and introductory content
- `about.html` — change the company story
- `inquiry.html` — change contact details and form topics
- `assets/logo.png` — the Notesdecoeur logo

`app.js` controls the product popup, favorites, cart, search, filters, and shared header/footer. You usually do not need to edit it.

## Preview locally

You can open `index.html` directly in a browser. For the most reliable preview, run a small local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Add a perfume

Open `products.js`, copy an existing product block, paste it before the final `];`, and update its values. Give every perfume a unique numeric `id`. Set the three prices with `atomizerPrices(2ml, 5ml, 10ml)`; for example, `atomizerPrices(6, 14, 25)`.

The current catalog contains starter prices only. Replace them with your final prices after confirming each bottle cost, packaging cost, payment fees, and target margin.

Descriptions and product photography should be original or properly licensed. To change a product picture, add the new image to `Pictures/`, then update that product's `image` value in `products.js`.

## Before taking payments

The cart works in the browser and remains saved on the customer’s device. The checkout button is intentionally a placeholder. Connect it to Stripe, Shopify, or another merchant checkout before launch. The inquiry and newsletter forms also need a form service or backend to send real messages.
