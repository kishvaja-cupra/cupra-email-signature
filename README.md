# CUPRA and SEAT UK email signature generator

A small static website for generating a consistent corporate email signature. It is designed for GitHub Pages and requires no server, database or build process.

## Included features

- Required name and job-title fields
- Optional mobile number with validation for `+44 (0) 7777 111 222`
- CUPRA and SEAT product checkboxes generated from arrays in `script.js`
- Optional sections removed when left blank
- Live signature preview
- Rich-HTML clipboard copy
- Logo embedded in the copied signature as a Base64 data URI
- Responsive, accessible interface

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In the repository, open **Settings**, then **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

GitHub will show the published site address when deployment is complete.

## Update the product lists

Open `script.js` and edit these arrays near the top of the file:

```js
const cupraProducts = ['Raval', 'Terramar', 'Formentor', 'Leon', 'Born', 'Tavascan'];
const seatProducts = ['Ibiza', 'Arona', 'Leon', 'Ateca'];
```

The checkboxes are created automatically from those values.

## Replace the logo

The generator uses `assets/cupra-seat-logo.png` for the on-screen preview. The copied signature uses the Base64 value stored in `embeddedLogoDataUri` in `script.js`.

If the logo changes:

1. Replace `assets/cupra-seat-logo.png`.
2. Convert the new image to Base64.
3. Replace the full value of `embeddedLogoDataUri` in `script.js`, keeping the appropriate `data:image/...;base64,` prefix.

## Test before wider rollout

Test copying and pasting into the Outlook versions used by your organisation. Email clients can handle embedded images differently, so send test messages internally and externally before launch.
