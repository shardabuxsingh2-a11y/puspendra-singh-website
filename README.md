# Pushpendra Singh — Website

A responsive static website designed for GitHub Pages.

## Included
- Home page with apparel-themed illustrations
- Contact section with Google Maps embed
- Contact form that prepares an enquiry in WhatsApp (no server/database)
- WhatsApp buttons for +91 63060 02178
- Privacy Policy, Terms & Conditions, Shipping & Returns pages
- Udyam business details from the supplied certificate

## Publish on GitHub Pages
1. Sign in to GitHub and create a new **public** repository, for example `pushpendra-singh-website`.
2. Upload all files and the `assets` folder from this package. Keep the folder structure unchanged.
3. In the repository, open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select branch `main`, folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site. Open the Pages URL shown in Settings → Pages.

## Connect a Hostinger domain
After the GitHub Pages site works, add your domain under the repository's **Settings → Pages → Custom domain**. Then update DNS records at Hostinger according to GitHub's current Pages instructions. DNS record requirements vary depending on whether you use the apex/root domain or `www`.

## Important before publishing
- The map is an approximate location search based on the address text, not a verified pin. Check the address spelling and map result.
- The contact form does not store or email submissions. It opens WhatsApp with a prefilled message; the customer must press Send.
- Policy pages are starter templates. Review them against your actual business practices and applicable law.
- The site uses Google Fonts from Google Fonts; if you prefer a fully self-contained site, remove the `@import` line in `styles.css`.
- Never upload your Udyam certificate PDF or private financial details to the public repository. This site intentionally excludes PAN and bank details.
