# AmirHossein Motaghian — Portfolio

A static portfolio for backend engineering and site reliability, published at [amirhossein2831.github.io](https://amirhossein2831.github.io/). No dependencies or build step are required.

## Preview locally

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`.

## Where to make changes

| Path | Content |
| --- | --- |
| `index.html` | Introduction, highlights, and contact |
| `projects.html` | Selected production work and public projects |
| `more.html` | Experience, skills, education, and interests |
| `assets/css/portfolio.css` | Measured Figma homepage and responsive adaptation |
| `assets/css/site.css` | Existing projects and experience page styles |
| `assets/fonts/` | Self-hosted Inter, Train One, Whisper, and their licenses |
| `assets/images/figma/` | Original curve, download icon, and stat-border assets |
| `assets/images/` | Portrait, favicon, and social preview image |
| `robots.txt`, `sitemap.xml` | Search engine discovery |

Keep the shared navigation and footer consistent across all three pages. If a page URL changes, update its canonical URL, social metadata, and sitemap entry as well. GitHub Pages can serve these files directly from the repository root.

## Homepage reference

The homepage follows [Desktop - 2, node 1:2](https://www.figma.com/design/wsZ2OIJhZ3CnMQQrMPkvZ1/Portfolio-website-template--Community-?node-id=1-2), read through the official Figma MCP server. The original frame is 1440 × 2040. Its header is 80px high, the portrait slot is at (720, 195) with size 648 × 692, and the About section begins at y=1016. Desktop proportions stop scaling at the reference's 1440px width.

Intentional substitutions are the natural portrait, blue accent palette, personal name/monogram, resume-backed content and metrics, working social links, Career instead of the unused Blog link, and downloadable international CV. The longer name is fitted into the original single-line title slot. Stat-border assets keep their original geometry and receive a blue hue shift; the photograph receives no color filter.

The source contains no mobile frame and ends after About. Mobile layout and Services, Portfolio, and Contact extensions are adaptations, not additional Figma screens. The separate projects and experience pages currently retain their earlier styling.
