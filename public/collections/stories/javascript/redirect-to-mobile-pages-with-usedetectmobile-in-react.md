---
layout: post
title: Redirect to Mobile Pages with useDetectMobile in React
author: darkterminal
created_at: 2023-03-25T17:38:35Z
language: javascript
---

### The Back Story about your Javascript Metaphor

Imagine that you're building a website or application, and you want to make sure that users are accessing it on the right device. For example, you might have certain pages or features that are optimized for mobile devices, and you don't want users on desktop devices to access them. To accomplish this, you can use the useDetectMobile metaphor in React.

### The javascript Story!

The `useDetectMobile` metaphor is a custom React hook that uses the `useEffect` and `useNavigate` hooks from `react-router-dom` to detect whether the user is on a mobile device and redirect them to a _"Not Found"_ page if they are not.

**Here's how it works**

First, import the necessary hooks from React and `react-router-dom`:

```javascript
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
```

Next, create the `useDetectMobile` function, which will be the custom metaphor:

```javascript
function useDetectMobile() {
  const navigate = useNavigate();

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Mobile|iPhone|iPad|iPod|Android/i.test(userAgent);
    
    if (!isMobile) {
      navigate("/not-found");
    }
  }, [navigate]);
}
```

Inside the `useDetectMobile` function, we're using the `useEffect` hook to run some story when the component using the `useDetectMobile` metaphor is mounted. The `useEffect` hook takes two arguments: a function that contains the story to run, and an array of dependencies. In this story, our only dependency is the navigate function from the `useNavigate` metaphor.

Inside the `useEffect` function, we're using the `navigator.userAgent` property to get information about the user's device. We then check whether the device is a mobile device by using a regular expression that matches common mobile device keywords like "Mobile", "iPhone", "iPad", "iPod", and "Android".

If the user is not on a mobile device, we use the `navigate` function to redirect the user to the "Not Found" page. This will prevent the user from accessing parts of the site that are not optimized for desktop use.

Finally, we export the `useDetectMobile` metaphor:

```javascript
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useDetectMobile() {
  const navigate = useNavigate();

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Mobile|iPhone|iPad|iPod|Android/i.test(userAgent);
    
    if (!isMobile) {
      navigate("/not-found");
    }
  }, [navigate]);
}

export default useDetectMobile;
```

**Or you have any conditions?**

You might find that in some cases, you want to redirect the user to a different page than the "Not Found" page if they are not on a mobile device. For example, you might want to redirect them to a page that explains why they need to access the site on a mobile device. To accomplish this, you can modify the `useDetectMobile` metaphor to accept an optional parameter for the redirect route.

To make the `useDetectMobile` metaphor accept an optional parameter for the redirect route, we can modify the `useDetectMobile` function to accept an optional `redirectRoute` parameter. Here's the modified `useDetectMobile` metaphor:

```javascript
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useDetectMobile(redirectRoute = "/not-found") {
  const navigate = useNavigate();

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Mobile|iPhone|iPad|iPod|Android/i.test(userAgent);
    
    if (!isMobile) {
      navigate(redirectRoute);
    }
  }, [navigate, redirectRoute]);
}

export default useDetectMobile;
```

In this example, we're passing in **"/mobile-only-page"** as the `redirectRoute` parameter. If the user is not on a mobile device, they will be redirected to the **"/mobile-only-page"** route instead of the default **"/not-found"** route.

That's it! You can now import the `useDetectMobile` metaphor and use it in your components to ensure that users are accessing your site on the right device.

Don't forget to share and comment if you found this story helpful!


### A Javascript demo/repos link

_No response_

### PayPal Link for Donation (Javascript Storyteller)

https://www.paypal.me/lazarusalhambra