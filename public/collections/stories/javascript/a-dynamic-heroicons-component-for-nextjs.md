---
layout: post
title: A Dynamic Heroicons component for next.js
author: mkubdev
created_at: 2023-03-30T12:52:07Z
language: javascript
---

### The Back Story about your Javascript Metaphor

Hi there, I'm a software engineer who's obsessed with finding ways to write less code. I've always been drawn to elegant, efficient solutions that achieve maximum results with minimal effort. I believe that the best code is the code you don't have to write, and I'm always looking for ways to streamline my workflows and eliminate unnecessary complexity.  I love nothing more than finding a simple, elegant solution to a complex problem, and I'm always on the lookout for new tools and techniques that can help me write less code while still delivering top-notch results. To me, writing less code isn't just about being lazy or cutting corners - it's about being efficient, effective, and creative.

### The javascript Story!

#### The Formula

I've created a new component called `DynamicHeroicons` that allows for dynamic rendering of Heroicons based on a prop value. The component imports all the Solid icons from the `@heroicons/react/24/solid` package and selects the appropriate icon based on the value of the `icon` prop.

* `src/components/DynamicHeroicons.js`

```js
import * as HIconsSolid from '@heroicons/react/24/solid'

const DynamicHeroicons = (props) => {
  const {...icons} = HIconsSolid
  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className="h-6 w-6 text-white" aria-hidden="true" />
    </>
  )
}

export default DynamicHeroicons;
```

Here's how to use it in your code:

```html
import DynamicHeroicons from '@/components/DynamicHeroicons';

 // ....

<DynamicHeroicons icon="MagnifyingGlass" />
```

 Let me know if you have any questions or feedback.

### A Javascript demo/repos link

None

### PayPal Link for Donation (Javascript Storyteller)

None (yet)
