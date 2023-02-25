---
layout: post
title: add-easy-fetching-on-nextjs
author: mkubdev
created_at: 2022-12-05T17:05:04Z
language: javascript
---

### Metaphore Name

Easy fetching on Next.js

### Share your metaphore story!

Sometimes, we face fetching issue between `development` and `production` NODE_ENV.. Next.js need a canonical URL once you use SSR strategy, but it's not required on local development.

A quick utility could be:
* Create a `config/index.tsx` at the root of the project
* Add:
```tsx
const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://your_deployment.server.com";
```
* And use this *metaphore* this way on SSR strategy pages:
```tsx
// src/pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import React, { forwardRef, useEffect, useRef } from "react";

// Import the config
import { server } from "config";

const Homepage: NextPage = ({ data }) => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
         {data}
      </div>
    </>
  );
};

Homepage.displayName = "Homepage";
export default Homepage;

export async function getServerSideProps(context) {
  const res = await fetch(`${server}/your/endpoint/1`); // use server export here!!
  const data = await res.json();
  
  return {
    props: {
      data, // will be passed to the page component as props
    }, 
  };
}
```
* Once you ship the app in production server, just update `config/index.tsx` accordingly



### A demo/repos link

_No response_