---
layout: post
title: Migrate CRA to Vite Without Changing Any Old Files
author: darkterminal
created_at: 2022-12-13T01:14:01Z
language: javascript
---

### The Back Story about this Metaphor

Migrate CRA to Vite Without Changing Any Old Files

### Metaphore story

When I need more speed in development phase, I choose Vite to boost my development workflow. But I have old (slow) CRA before.

Here my old CRA Directory Structure

```bash
whats-my-app/
  README.md
  .env
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
    components/
    utils/
    App.js
    index.css
    index.js
```

But wait... Vite work out of the book using `.tsx` and `.jsx` when first initial create vite app. But my old `metaphor` have `.js` extension and I don't want to rename and changing my old `metaphor` base.

So, here the step to chill and migrate...

1. Create file `vite.config.js` in the root directory

```javascript
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs/promises'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return defineConfig({
    build: {
      outDir: 'build'
    },
    server: {
      port: process.env.VITE_PORT
    },
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: "load-js-files-as-jsx",
            setup(build) {
              build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
                loader: "jsx",
                contents: await fs.readFile(args.path, "utf8"),
              }));
            },
          },
        ],
      },
    },
    plugins: [
      react()
    ],
  })
}
```

2. Remove all `react-scripts` command and package in `package.json`

```json
{
    // ...other mataphor
   "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
     }
    // ...other mataphor
]
```

3. Move `index.html` from `public` directory to root of project, and also make sure:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <!--- include your src/index.js file here --->
    <script type="module" src="/src/index.js"></script>
  </body>
</html>
```

5. Change `env` variable prefix `REACT_APP_` with `VITE_`
6. Install `vite` as dev dependencies `npm i --save-dev @types/react @types/react-dom @vitejs/plugin-react vite`

Here my new directory structure

```bash
whats-my-app/
  README.md
  .env
  node_modules/
  package.json
  public/
    favicon.ico
  src/
    assets/
    components/
    utils/
    App.js
    index.css
    index.js
  vite.config.js
  index.html
```

That's it! Enjoy your speed....

### A demo/repos link

_No response_
