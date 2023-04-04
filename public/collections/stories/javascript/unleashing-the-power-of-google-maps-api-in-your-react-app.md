---
layout: post
title: Unleashing the Power of Google Maps API in Your React App
author: darkterminal
created_at: 2023-04-04T15:05:39Z
language: javascript
---

### The Back Story about your Javascript Metaphor

Hello punk, location-based apps have become increasingly popular, and the Google Maps API is a fundamental tool for developers to build apps that require location services. However, integrating Google Maps API with a React application can be a challenge. In this metaphor story, I will explore how to use the Google Maps API in a React app to create a `MapLine` component that displays a line between two points on the map. We will also discuss a utility function called `toObjectCoordinate` that converts a latitude and longitude string into an object with `lat` and `lng` properties.

### The javascript Story!

#### The Brief
Google Maps API is a powerful tool that provides developers with a range of location-based services to integrate into their applications. The `MapLine` component I will write in in this metaphor story uses the Google Maps API to display a line between two points on the map. I will use the `useEffect` hook in React to load the API and create the map, and the `useRef` hook to get a reference to the HTML element that will display the map.


#### The MapLine Component
The `MapLine` component takes several `props`, including an:
- API key
- the center point of the map
- the zoom level
- and an array of points that define the line. 

In my example, I use the `toObjectCoordinate` utility function to convert two latitude and longitude strings into `objects` with `lat` and `lng` properties.

```jsx
<MapLine
    apiKey={maps.key}
    center={toObjectCoordinate(currentLocation, true)}
    points={[
      toObjectCoordinate(currentLocation, true),
      toObjectCoordinate(modalData.customerCoordinate, true),
    ]} 
    zoom={10}
/>
```

#### The Utility
The `toObjectCoordinate` function takes a `latitude` and `longitude` string as an argument and returns an object with `lat` and `lng` properties. The second argument is a `boolean` that indicates whether the function should convert the `string` values to `numbers` or return them as `strings`. The function splits the string by comma and returns an object with `lat` and `lng` properties.

```javascript
export default function toObjectCoordinate(latLong, toNumber = false) {
    const index = latLong.split(',')
    return {
        lat: toNumber ? Number(index[0]) : index[0],
        lng: toNumber ? Number(index[1]) : index[1],
    }
}
```

#### Implementation
The `useEffect` hook in the `MapLine` component loads the Google Maps API using the `Loader` object provided by the `@googlemaps/js-api-loader` package. Once the API is loaded, we create a new instance of the `google.maps.Map` object, set the center and zoom level, and add a new `google.maps.Polyline` object that represents the line between the two points. I also create a new `google.maps.Marker` object for each point on the line and add them to the map.

```javascript
import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MapLine = ({ apiKey, center, zoom, points, twStyle = 'w-full h-52' }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: apiKey,
            version: 'weekly',
        });

        loader.load().then(() => {
            if (mapRef.current instanceof Element) {
                const map = new google.maps.Map(mapRef.current, {
                    center: center,
                    zoom: zoom,
                });

                // Create a new line from point A to point B
                const line = new google.maps.Polyline({
                    path: points,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                });

                // Set the line on the map
                line.setMap(map);

                const bounds = new google.maps.LatLngBounds();
                points.forEach((point) => bounds.extend(point));
                map.fitBounds(bounds);

                // Add a marker to each point on the line
                points.forEach((point) => {
                    new google.maps.Marker({
                        position: point,
                        map: map,
                    });
                });

                // Hide the map control
                map.setOptions({ disableDefaultUI: true });
            }
        });
    }, [apiKey, center, zoom]);

    return <div ref={mapRef} className={twStyle} />;
};

export default MapLine;
```

#### The Conclusion

In conclusion, Google Maps API is a powerful tool for developers to create location-based applications. Integrating Google Maps API with a React application can be challenging, but using the `useEffect` and `useRef` hooks in combination with the `@googlemaps/js-api-loader` package can make the process smoother. The `MapLine` component discussed in this metaphor story uses the Google Maps API to display a line between two points on the map and utilizes a `toObjectCoordinate` utility function that converts a latitude and longitude string into an object with `lat` and `lng` properties. With this knowledge, developers can unlock the power of Google Maps API in their React applications.

![image](https://user-images.githubusercontent.com/32319439/229835632-eda0c26e-4e0f-42cc-a452-10a1edd797e7.png)


### A Javascript demo/repos link

_No response_

### PayPal Link for Donation (Javascript Storyteller)

https://www.paypal.me/lazarusalhambra