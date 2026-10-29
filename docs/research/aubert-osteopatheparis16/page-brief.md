# Aubert Ostéopathe Paris 16

## Route map

| Source | Local destination | Scope |
| --- | --- | --- |
| `https://www.aubert-osteopatheparis16.com/` | `/` | Homepage, including its in-page sections |
| Source detail pages linked in the menus/cards | Source URL | Not requested; remain outbound links |
| Doctolib booking page | Doctolib URL | External booking destination |

## Page structure and visual rules

At a 1280px desktop viewport the site content is 1265px wide (the remaining 15px is the browser scrollbar). The header is 202px tall and sticky. Its peach background contains a logo/wordmark and a 356×55px navy booking pill above a centered horizontal navigation row. Dropdowns open on hover and keyboard focus. The hero is a 336px office photograph with centered white title and subtitle.

Section order: hero; centered introductory copy; pediatric feature; adult feature; women’s feature; dark blue-gray expertise heading and four image-backed cards; osteopathy approach; blue biography panel; blue blog heading and three article cards; booking call-to-action; footer navigation, social links, and contact form.

The page uses a warm pale-peach outer background, blue-gray section panels, and dark slate text. Observed type families include Karla for the hero/body, Lato for the introductory heading, Gilda Display and Cormorant Garamond for display headings, and Dancing Script in the logo. The primary booking button is a muted blue pill.

The source retains a 980px minimum content layout on a 390px mobile viewport, producing a measured 983px document width and horizontal overflow rather than reflowing to a mobile layout. The local page intentionally preserves this behavior. The sticky header remains pinned while scrolling.

## Assets

All downloaded image files are under `public/sites/aubert-osteopatheparis16/`. Each source is a Wix media asset from `https://static.wixstatic.com/media/`.

| Source media ID | Local file | Use |
| --- | --- | --- |
| `8f98e6_445afa625b4741018dad935012daaef0~mv2.png` | `brand-logo.png` | Header mark |
| `8f98e6_639beaaad1794bf59b78d08e9980e125~mv2.jpg` | `hero-office.jpg` | Hero |
| `8f98e6_8cbe1770bdfc4cf686d3cf199e7ba09f~mv2.png` | `baby-care.webp` | Pediatric feature |
| `8f98e6_419617b258cc4aed9a05eebb68f1050f~mv2.png` | `adult-cabinet.webp` | Adult feature |
| `8f98e6_dd96275f7f294a238e809a7ca17c434d~mv2.png` | `women-care.webp` | Women’s feature |
| `8f98e6_5c3c2d86864c4d5098a0e2053d3100e4~mv2.jpg` | `expertise-baby.webp` | Baby expertise card |
| `8f98e6_7ba73e5b91b243f0a9174d71036a8f12~mv2.png` | `expertise-adult.webp` | Adult expertise card |
| `8f98e6_1c60c25133794131be9dff87ad79ec66~mv2.png` | `expertise-cranial.webp` | Stress/sleep expertise card |
| `8f98e6_8efff0b3a0104d019c8be64f3f25cc5d~mv2.png` | `expertise-jaw.webp` | Jaw expertise card |
| `nsplsh_1e38c407a0a74bcaa64510bdad1b74a3~mv2.jpg` | `approach-portrait.webp` | Osteopathy approach |
| `8f98e6_19c1fabaa44443b692d08e2b0394c269~mv2.jpg` | `charlotte-portrait.webp` | Biography |
| `7330891099023001f587d39335c34f22.jpg` | `blog-child-care.webp` | Blog card 1 |
| `8f98e6_7266b647b9da40cabdcdc3064da56d7b~mv2.webp` | `blog-feeding-optimized.webp` | Blog card 2 |
| `8f98e6_82ed64c71c2b41efbcaeaad3b3f2a008~mv2.jpg` | `blog-fertility.webp` | Blog card 3 |
| `9f9c321c774844b793180620472aa4f1.png` | `social-instagram.png` | Instagram |
| `9c4b521dd2404cd5a05ed6115f3a0dc8.png` | `social-twitter.png` | Twitter |
| `48a2a42b19814bcaa824450f23e8a253.png` | `social-linkedin.png` | LinkedIn |
| `e316f544f9094143b9eac01f1f19e697.png` | `social-facebook.png` | Facebook |
| `74d327d3628e4f14800301f1c61013b0.png` | `social-googleplus.png` | Google+ |

## Interaction notes and limits

- Header menus open on pointer hover and keyboard focus; section links scroll within `/`.
- Booking links keep the source Doctolib destination. Detail-page links remain on the source site because those routes were not requested.
- The source contact form requires name and email and permits an optional message. The clone has no mail service configured, so it reports that submission is unavailable and directs visitors to Doctolib instead of claiming a message was sent.
- Source visual samples were captured at desktop and 390px mobile widths, plus pediatric, adult, expertise, biography, blog, and footer scroll positions. The narrow viewport confirms the source’s horizontal overflow.
