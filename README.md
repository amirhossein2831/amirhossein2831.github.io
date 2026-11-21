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
| `index.html` | Introduction, services, skills, projects and details, career, education, and contact |
| `projects.html`, `more.html` | Compatibility URLs that redirect to homepage sections |
| `assets/js/legacy-redirect.js` | Preserve legacy project and skills anchors |
| `assets/css/portfolio.css` | Measured Figma homepage and responsive adaptation |
| `assets/css/site.css` | Existing projects and experience page styles |
| `assets/fonts/` | Self-hosted Inter, Train One, Whisper, and their licenses |
| `assets/images/figma/` | Original curve, download icon, and stat-border assets |
| `assets/images/` | Portrait, favicon, and social preview image |
| `robots.txt`, `sitemap.xml` | Search engine discovery |

All navigation and project-detail links stay on the homepage. Keep section IDs stable so existing bookmarks continue working. GitHub Pages can serve these files directly from the repository root.

## Homepage reference

The homepage adapts [Desktop - 2, node 1:2](https://www.figma.com/design/wsZ2OIJhZ3CnMQQrMPkvZ1/Portfolio-website-template--Community-?node-id=1-2), read through the official Figma MCP server. The original frame is 1440 × 2040. Header and hero backgrounds now fill the viewport, while inner content stops scaling at 1440px to remain readable on wide screens. The portrait is 15% smaller than the source slot, and its floating metric badge has been removed.

Intentional substitutions are the natural portrait, lighter blue accent palette, personal name/monogram, resume-backed content and metrics, working social links with an explicit GitHub profile link, Career instead of the unused Blog link, and downloadable international CV. The longer name is fitted into the original single-line title slot. Stat-border assets keep their original geometry and receive a blue hue shift; the photograph receives no color filter.

The source contains no mobile frame and ends after About. Mobile layout and Services, Skills, Portfolio, Career, and Contact extensions are adaptations, not additional Figma screens. Project details sit directly below the project cards. Old project and experience URLs redirect here, with plain links available when JavaScript is disabled.
