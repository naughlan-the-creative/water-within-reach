# Water Within Reach

**Live site → [naughlan-the-creative.github.io/water-within-reach](https://naughlan-the-creative.github.io/water-within-reach/)**

A responsive single-page site showing how many South African households have access to piped water, province by province, using data from the Stats SA *General Household Survey 2025*.

Designed and built by **Nolo Theledi** as part of a multimedia and graphic design portfolio.

## What it shows

- **The national picture:** 87.4% of households had access to piped or tap water in 2025, up only three percentage points since 2002.
- **The provincial divide:** an interactive bar chart comparing all nine provinces against the national figure, from 99.5% in the Western Cape to 63.2% in Limpopo.
- **The infrastructure:** a photo series of dams, pipes, towers and treatment works, colour graded in Photoshop.

## How it was built

Hand-coded in HTML, CSS and JavaScript. No frameworks, templates or chart libraries.

- **Responsive layout:** a 12-column grid with a maximum width of 1200 px. The gallery moves from one column on phones to two on tablets and three on desktops.
- **Interactive chart:** drawn in SVG by plain JavaScript. It redraws itself whenever its width changes, so labels stay readable on any screen, and it can be sorted by value or alphabetically.
- **Accessibility:** descriptive alt text on every image, an accessible label on the chart, keyboard-focus styles on the controls, and animations switched off for visitors who turn off motion in their system settings.
- **Performance:** photos resized for the web, from 13 MB down to about 2 MB in total, and lazy-loaded below the fold.
- **One design system:** the same typefaces (Source Serif 4 and Source Sans 3), three-colour palette and grid as the print pieces in the portfolio.

## Data and method

Source: Statistics South Africa, *General Household Survey 2025* (Statistical release P0318).

- Six provincial values and the national figure are taken from the text accompanying Figure 9.1 (p. 29).
- **Free State, North West and Mpumalanga** are not stated in that text, so they were calculated from Table 9.1 (p. 129) as:
  `(piped water in dwelling + in yard + neighbour's tap + public/communal tap) ÷ total households`
- This method reproduces the published national figure (87.4%) exactly, and the published provincial figures to within 0.3 percentage points.

All values and their sources are documented in [`js/data.js`](js/data.js).

## Files

```
index.html      page structure and content
css/style.css   layout, typography and colour (design tokens at the top)
js/data.js      chart data, with the source of every value
js/chart.js     the responsive SVG bar chart
images/         web-sized photos
```

## Credits

Photographs from [Unsplash](https://unsplash.com), used under the [Unsplash Licence](https://unsplash.com/license), colour graded and retouched by Nolo Theledi: Joe Dudeck, shiva Mangena, Hush Naidoo Jade Photography, Edrin Spahiu, Zobia Shakar, Wolfgang Weiser, Ivan Bandura, Andrew Wang, Simon Hurry, Being Organic in EU.

Typefaces: Source Serif 4 and Source Sans 3 by Adobe, via Google Fonts, under the SIL Open Font License.
