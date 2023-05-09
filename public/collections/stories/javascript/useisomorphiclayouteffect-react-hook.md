---
layout: post
title: useIsomorphicLayoutEffect React hook
author: mkubdev
created_at: 2023-05-09T12:58:12Z
language: javascript
---

### The Back Story about your Javascript Metaphor

Check this gnarly snippet, dudes and dudettes! We've got ourselves a rad custom hook called `useIsomorphicLayoutEffect` that's ready to shred. This bad boy is like an isomorphic version of `useLayoutEffect` and can rock out in both server-side rendering and client-side rendering jams. 🎸

### The javascript Story!

## The hook

```js
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
```

## Usage

This snipp defines athe hook `useIsomorphicLayoutEffect`. The purpose of this hook is to provide an isomorphic version of the `useLayoutEffect` hook, which can be used in both server-side rendering and client-side rendering environments.

To understand why this is useful, let's first take a look at the difference between `useLayoutEffect` and `useEffect`.

`useEffect` is a hook provided by React that allows you to perform side-effects in a functional component after the component has rendered. This can include fetching data from an API, updating the DOM, or subscribing to events.

`useLayoutEffect` is a similar hook to `useEffect`, but it runs synchronously immediately after React has performed all DOM updates. This means that any updates to the DOM made by `useLayoutEffect` will be visible to the user before the browser has a chance to paint the screen. This can result in a smoother and more responsive user experience, but it can also cause performance issues if the updates are too heavy.

Now, let's say you are building a React app that needs to support both server-side rendering and client-side rendering. In a server-side rendering environment, there is no browser DOM available, so running `useLayoutEffect` would cause an error. However, you still need to perform some kind of side-effect to ensure that the component renders correctly on the server.

This is where `useIsomorphicLayoutEffect` comes in. By using `typeof window !== 'undefined'` to check if the code is running in a browser environment, `useIsomorphicLayoutEffect` can switch between `useLayoutEffect` and `useEffect` depending on the environment. This means that your code can be written once and used in both server-side and client-side rendering without any issues.

## Example

For example, let's say you have a component that needs to fetch data from an API and render it to the DOM. You can use `useIsomorphicLayoutEffect` to perform the fetch on the client side using `useLayoutEffect` for a smoother user experience, while using `useEffect` on the server side to ensure that the component renders correctly:

```js
// /components/MyComponent.jsx

function MyComponent() {
  const [data, setData] = useState(null);

  useIsomorphicLayoutEffect(() => {
    fetchData().then((response) => setData(response));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>{data}</div>;
}
```

* Explanation: 
`fetchData` is a function that returns a Promise that resolves to the data we want to render. `useIsomorphicLayoutEffect` is used to perform the fetch on the client side using `useLayoutEffect`, while using `useEffect` on the server side. The `if (!data)` check ensures that the component displays a "Loading..." message until the data has been fetched and rendered to the DOM.

> This snippet can be usefull for library like GSAP 😁



### A Javascript demo/repos link

_No response_

### PayPal Link for Donation (Javascript Storyteller)

_No response_