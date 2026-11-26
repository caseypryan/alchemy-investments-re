// One-off: build public/og-image.jpg (1200x630) from the homepage photo,
// a dark fade, the white logo and a short line of text.
// Run from the repo root: node scripts/make-share-image.js
const sharp = require('sharp')

const W = 1200
const H = 630

async function main() {
  const photo = await sharp('public/hero-drone.jpg')
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .toBuffer()

  const logo = await sharp('public/logo-white.png')
    .resize({ height: 110 })
    .toBuffer()

  const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0f1c2b" stop-opacity="0.92"/>
      <stop offset="0.62" stop-color="#0f1c2b" stop-opacity="0.72"/>
      <stop offset="1" stop-color="#0f1c2b" stop-opacity="0.25"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#fade)"/>
  <text x="70" y="330" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="64" font-weight="700" fill="#ffffff">Sell Your Las Vegas Home</text>
  <text x="70" y="400" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="36" font-weight="400" fill="#e6edf5">Cash offer or list with a top agent</text>
  <rect x="70" y="450" width="90" height="5" fill="#22c55e"/>
  <text x="70" y="520" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="#ffffff">(702) 718-6934</text>
  <text x="70" y="565" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="24" font-weight="400" fill="#c9d6e3">Licensed Nevada Brokerage · S.0184768</text>
</svg>`)

  await sharp(photo)
    .composite([
      { input: overlay, top: 0, left: 0 },
      { input: logo, top: 70, left: 70 },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile('public/og-image.jpg')

  const meta = await sharp('public/og-image.jpg').metadata()
  console.log(meta.width, meta.height, meta.format)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
