# Pioneer Indians Landing Page

This project is a static bilingual landing page concept for Pioneer Indians.

## Prerequisites

No build tools are required. Any modern web browser (Chrome, Firefox, Safari, Edge) works.

## Run locally

You can view the site in two ways:

### 1. Open the HTML file directly

1. Download or clone this repository.
2. Double-click `index.html` (or open it in your browser via **File → Open**).

> Note: Some browsers block `fetch` or relative asset paths when opening files directly. If any assets fail to load, use option 2 instead.

### 2. Serve with a local HTTP server (recommended)

From the project root, run one of the following commands to start a local server, then visit the printed URL in your browser (typically `http://localhost:8000`).

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have npm installed)
npx serve .

# Ruby
ruby -run -ehttpd . -p8000
```

Stop the server with `Ctrl+C`.

## Project structure

```
.
├── assets/    # SVG logos and decorative artwork
├── css/       # Global stylesheets
├── js/        # Language toggle and navigation logic
└── index.html # Main entry point
```

## Troubleshooting

* If language toggling or navigation animations do not work, ensure you are serving the files over HTTP using option 2 above.
* Clear your browser cache if styles or scripts seem out of date after pulling new changes.

## License

This project is distributed for demonstration purposes and does not include a specific license.
