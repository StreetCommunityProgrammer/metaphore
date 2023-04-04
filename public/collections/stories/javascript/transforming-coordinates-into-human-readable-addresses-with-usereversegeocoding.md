---
layout: post
title: Transforming Coordinates into Human-Readable Addresses with useReverseGeocoding
author: darkterminal
created_at: 2023-04-04T01:50:22Z
language: javascript
---

### The Back Story about your Javascript Metaphor

As a software freestyle engineer, you know that location-based features are becoming more and more common in web and mobile applications. However, sometimes it's not enough to simply display a set of coordinates to the user. To provide a better user experience, it's important to translate those coordinates into a human-readable address that users can easily understand. This is where reverse geocoding comes in.

### The javascript Story!

**Requirements**
- [react-geocode](https://www.npmjs.com/package/react-geocode)
- [Formik](https://www.npmjs.com/package/formik)

In order to achieve the functionality I needed, I started by importing two useful tools: `useState` and `useEffect` from the React library, and the `react-geocode` package. I also imported a utility function called `toObjectCoordinate` which converts a comma-separated string into an object with `lat` and `lng` keys. With these tools, I was able to create a custom hook called `useReverseGeocoding`, which accepts two optional parameters for latitude and longitude and returns an address string and two state setters for latitude and longitude.

## The Utils
```javascript
export default function toObjectCoordinate(latLong) {
    const index = latLong.split(',')
    return {
        lat: index[0],
        lng: index[1]
    }
}
```
The above function takes a string parameter `latLong`, which is a comma-separated string of latitude and longitude values. The function splits the string using the comma as a separator and returns an object with two properties - `lat` and `lng`.

## The Hook
```javascript
import { useState, useEffect } from "react";
import Geocode from "react-geocode";
import { maps } from '../constants/maps';

Geocode.setApiKey(maps.key);

const useReverseGeocoding = (lat = null, lng = null) => {
    const [address, setAddress] = useState("");
    const [latitude, setLatitide] = useState(lat);
    const [longitude, setLongitude] = useState(lng);

    useEffect(() => {
        if (latitude !== null || longitude !== null) {
            Geocode.fromLatLng(latitude, longitude).then(
                (response) => {
                    const address = response.results[0].formatted_address;
                    setAddress(address);
                },
                (error) => {
                    console.error(error);
                }
            );
        }
    }, [latitude, longitude]);

    return { address, setLatitide, setLongitude };
};

export default useReverseGeocoding;
```
The code then defines a custom hook called `useReverseGeocoding`. The hook takes two parameters - `lat` and `lng` - which are set to null by default. Inside the hook, three state variables are defined using the `useState` hook - `address`, `latitude`, and `longitude`. The hook also defines an effect that runs whenever latitude or longitude changes. The effect calls the `fromLatLng` method of the `Geocode` object to get the address from the geographic coordinates. If the call is successful, the address is stored in the address state variable. If there is an error, it is logged to the console.

The hook returns an object with three properties - `address`, `setLatitude`, and `setLongitude`. The `address` property contains the human-readable address obtained from the geographic coordinates. The `setLatitude` and `setLongitude` functions can be used to set the `latitude` and `longitude` state variables, respectively.

## The Component
```jsx
import { Form, Formik, useFormikContext } from 'formik'
import ValidationMessage from '../../../forms/ValidationMessage'
import useReverseGeocoding from '../../../hooks/useReverseGeocoding'
import toObjectCoordinate from '../../../Utils/toObjectCoordinate'
import React, { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet'
import { NewCustomer } from '../../../forms/states/NewCustomer'
import { customerValidation } from '../../../forms/validations/customerValidation'

const AddressReceiver = ({ address }) => {
    const { setFieldValue } = useFormikContext()

    useEffect(() => {
        setFieldValue('customerAddress', address)
    }, [address])
    return null
}


function FormCustomer() {
    const { address, setLatitide, setLongitude } = useReverseGeocoding()
    return (
        <>
            <Helmet>
                <title>Add New Customer</title>
            </Helmet>
            <section className='w-9/12 my-3 mx-auto'>
                <Formik
                    initialValues={NewCustomer}
                    validationSchema={customerValidation}
                    enableReinitialize={true}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, handleChange, setFieldValue }) => (
                        <Form autoComplete='off'>
                            {/* All form field... */}
                            <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Coordinate <sup className="text-error">*</sup></span>
                                            </label>
                                            <input type="text" name='customerCoordinate' value={values.customerCoordinate} onChange={(e) => {
                                                const value = e.target.value
                                                const { lat, lng } = toObjectCoordinate(value)
                                                setLatitide(lat)
                                                setLongitude(lng)
                                                setFieldValue('customerCoordinate', value)
                                            }} placeholder="Type here" className="input input-md input-bordered w-full" />
                                            <ValidationMessage name='customerCoordinate' errors={errors} touched={touched} />
                                        </div>
                            <div className="form-control w-full col-span-3">
                                    <label className="label">
                                        <span className="label-text">Address <sup className="text-error">*</sup></span>
                                    </label>
                                    <input type="text" name='customerAddress' value={values.customerAddress} onChange={handleChange} placeholder="Type here" className="input input-md input-bordered w-full" />
                                    <ValidationMessage name='customerAddress' errors={errors} touched={touched} />
                                </div>
                            <AddressReceiver address={address} />
                        </Form>
                    )}
                </Formik>
            </section>
        </>
    )
}
```
The `FormCustomer` component is a form that allows the user to input customer details, including their coordinate and address. The component utilizes the `useReverseGeocoding` hook to simplify the process of inputting the customer's address. When the user inputs the customer's coordinate, the `toObjectCoordinate` function is used to extract the latitude and longitude values and pass them to the `setLatitude` and `setLongitude` functions. This triggers the `useEffect` hook in the `useReverseGeocoding` function, which performs the reverse `geocoding` and updates the address variable. The `AddressReceiver` component is used to update the `customerAddress` field in the form with the retrieved address.

## The Result
![Peek 2023-04-04 08-48](https://user-images.githubusercontent.com/32319439/229665507-119551d5-1e46-40c9-8d9c-8296f17c9fe3.gif)

## The Conclusion
Reverse geocoding is an important feature for location-based applications that allows coordinates to be translated into human-readable addresses. The useReverseGeocoding hook and toObjectCoordinate utility function provided in the code snippet make it easy to implement reverse geocoding in a React application. By using these tools, developers can provide a better user experience by displaying easily understandable addresses to their users.

### A Javascript demo/repos link

None

### PayPal Link for Donation (Javascript Storyteller)

https://www.paypal.me/lazarusalhambra