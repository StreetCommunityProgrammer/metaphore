---
layout: post
title: How to Fix the Next.js TailwindCSS Sticky Footer
author: darkterminal
created_at: 2023-03-26T04:45:12Z
language: css
---

### The Back Story about your CSS Metaphor

The issue we are trying to solve is when using TailwindCSS with Next.js, the sticky footer doesn't work as expected.

### The CSS Story!

**How to fix the Next.js TailwindCSS sticky footer that is not fixed?** A sticky footer is a web design feature where the footer stays at the bottom of the page, even if the content on the page is shorter than the screen height. The issue we are trying to solve is when using TailwindCSS with Next.js, the sticky footer doesn't work as expected.

To solve this issue, we need to create a custom document in the `_document.js` file located in the `src/pages` folder. This file allows us to modify the default HTML document rendered by Next.js.

```javascript
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" data-theme="winter">
      <Head />
      <body className="flex flex-col min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

Adding the `flex flex-col min-h-screen` classes. This will make the `body` element a flex container with a vertical layout and set its minimum height to the height of the viewport. This is necessary to make the sticky footer work properly.

After creating the custom document, we need to create a `Layout` component inside the `src/components` folder. The `Layout` component will be responsible for rendering our app's main content, including the navbar, the main content section, and the footer.

```javascript
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='flex-1'>{children}</main>
      <Footer />
    </>
  );
}
```

The `Layout` component will take in `children` as props and render them inside the `main` tag. We can also include the `Navbar` and `Footer` components inside the `Layout` component.

Finally, we need to create the `Footer` component that will render the footer content. We can use the `self-end` class to position the footer at the bottom of the page. We can also add any additional styling or content to the `Footer` component.

```jsx
function Footer() {
  return (
    <footer className="footer self-end dark:bg-white bg-zinc-900 px-4 py-2 border-t-2">
      {/* Your footer content here */}
    </footer>
  );
}
```

By following these steps, we can **fix the Next.js TailwindCSS sticky footer issue** and create a custom layout for our Next.js app.

### A CSS demo/repos link

_No response_

### PayPal Link for Donation (CSS Storyteller)

https://paypal.me/lazarusalhambra