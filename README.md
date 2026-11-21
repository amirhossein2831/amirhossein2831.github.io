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
| `assets/css/site.css` | Shared design and responsive layouts |
| `assets/images/` | Portrait, favicon, and social preview image |
| `robots.txt`, `sitemap.xml` | Search engine discovery |

Keep the shared navigation and footer consistent across all three pages. If a page URL changes, update its canonical URL, social metadata, and sitemap entry as well. GitHub Pages can serve these files directly from the repository root.
