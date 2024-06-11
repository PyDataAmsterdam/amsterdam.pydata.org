# PyData Amsterdam 2024 Website

The website URL: https://amsterdam.pydata.org

This is the website for the PyData Amsterdam conference, 2024 edition, but can be reused/adapted/extended to being a website for subsequent conferences as well; or to being a general PyData Amsterdam website.

## Technical implementation

This website is built using a combination of [Gatsby](https://www.gatsbyjs.com/) and [Tailwind CSS](https://tailwindcss.com/). It uses component-based website building style, where each page consists of a Layout with (many) reusable sections in them, defined as React components.

## Run it locally

To run the website locally, clone this repository to your machine, and in the root of the project, first run

```
npm install --legacy-peer-deps
```

This will install all of the required website dependencies using `npm`.

Then, to launch the website for local development (with auto-reload listener), run:

```
gatsby develop -o
```

Othwerwise, to build the website, run:

```
npm run build
```

This will automatically run `gatsby build` for us. Alternatively, you can just run `gatsby build` directly.