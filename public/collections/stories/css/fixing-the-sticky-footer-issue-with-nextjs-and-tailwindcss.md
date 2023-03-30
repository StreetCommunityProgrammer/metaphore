---
layout: post
title: Fixing the Sticky Footer Issue with Next.js and TailwindCSS
author: darkterminal
created_at: 2023-03-30T12:27:10Z
language: css
---

### The Back Story about your CSS Metaphor

As a software freestyle engineer, I'm always on the lookout for new and innovative ways to solve web design issues. One issue that has been bothering me lately is the sticky footer problem when using Next.js with TailwindCSS. When a website has a sticky footer, it stays at the bottom of the page, even if the content on the page is shorter than the screen height. However, when using Next.js with TailwindCSS, the sticky footer doesn't work as expected. So, I set out to find a solution that would fix this issue and make the sticky footer work seamlessly with Next.js and TailwindCSS.

### The CSS Story!

#### The Formula
This formula live on [Metaphore Website](https://metaphore.vercel.app) and this is second formula form the begin experiment [How to Fix the Next.js TailwindCSS Sticky Footer](https://metaphore.vercel.app/stories/css/how-to-fix-the-nextjs-tailwindcss-sticky-footer)
```jsx
{/* Main Element */}
<div className="min-h-screen flex flex-col relative pb-20">
  {/* Content here */}
  <div className="mt-auto">
    <div className="footer absolute bottom-0 w-full">
      {/* Footer content here */}
    </div>
  </div>
</div>
```

The metaphor above is a JSX element that can be used to fix the sticky footer issue when using Next.js with TailwindCSS. Let's take a closer look at how it works.

#### Place The First Stone
Add this class name in `body` element that use as your whole app layout.
```css
min-h-screen flex flex-col relative pb-20
```
![image](https://user-images.githubusercontent.com/32319439/228829653-4d872778-9ae7-4458-812e-0ce29eced5cb.png)

This sets the minimum height of **the element to the full screen height** (`min-h-screen`), and creates a `flex` container with flex direction set to column (`flex-col`) **so that the content inside is stacked vertically**. The `relative` position is used to allow the child elements to be positioned relative to this parent container. Finally, the `pb-20` class adds a padding bottom of 80 pixels to the container.

#### The Solution
![image](https://user-images.githubusercontent.com/32319439/228831085-497bd43c-5942-4157-b54e-7301d058f8df.png)

Next, we have the content of the page, which is contained within the div element with the className `mt-auto`. The `mt-auto` class is used to push the content to the top of the container, while leaving the remaining space at the bottom for the footer.

Finally, we have the footer element, which is contained within the div element with the className `footer absolute bottom-0 w-full`. The `footer` class is used to apply any styles specific to the footer, such as font size, color, and background color. The `absolute` position is used to position the element at the bottom of its parent container, and the `bottom-0` class is used to ensure it is flush with the bottom of the container. The `w-full` class is used to ensure the element spans the full width of its parent container.

By using these classes in the right combination, we can create a sticky footer that works seamlessly with [Next.js](https://nextjs.org) and [TailwindCSS](https://tailwindcss.com). This solution ensures that the footer stays at the bottom of the page, even if the content on the page is shorter than the screen height.

In conclusion, the sticky footer issue can be a frustrating problem to deal with, but by using the right combination of classes in our JSX element, we can solve this problem and create a seamless user experience for our website visitors.


### A CSS demo/repos link

https://metaphore.vercel.app/stories/css

### PayPal Link for Donation (CSS Storyteller)

https://paypal.me/larazusalhambra