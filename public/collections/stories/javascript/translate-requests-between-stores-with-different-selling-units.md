---
layout: post
title: Translate Requests Between Stores with Different Selling Units
author: darkterminal
created_at: 2023-02-01T07:10:31Z
language: javascript
---

### Metaphore Name

Translate Requests Between Stores with Different Selling Units

### Share your metaphore story!

This JavaScript code provides a solution for translating requests between two stores, `storeABC` and `storeDEF`, that sell the same item `ABC KOPI MILK`, but with different units of measurement and amounts.

The stores are defined as objects with the properties `name` and `items`. The `items` property is an array of objects, where each object represents a different item and contains the properties `name`, `unit`, and `amount`.

```javascript
const storeABC = {
  name: 'ABC Shop',
  items: [
    {
      name: 'ABC KOPI MILK',
      unit: 'Box',
      amount: 12,
    },
  ],
};

const storeDEF = {
  name: 'DEF Shop',
  items: [
    {
      name: 'ABC KOPI MILK',
      unit: 'Jointly',
      amount: 1,
    },
  ],
};
```

In this example, `storeABC` has one item `ABC KOPI MILK` that is sold in the unit of `Jointly` with an amount of 12 `Jointly` per `Box`. On the other hand, `storeDEF` has the same item `ABC KOPI MILK` that is sold in the unit of `Jointly` with an `amount` of 1 `Jointly` per `Jointly`.

The function `convertUnits` takes in two stores, `fromStore` and `toStore`, as well as the `itemName` of the item to be transferred, and returns the conversion factor necessary to convert the units from one store to the other.

```javascript
function convertUnits(fromStore, toStore, itemName) {
  let fromItem;
  let toItem;

  for (const item of fromStore.items) {
    if (item.name === itemName) {
      fromItem = item;
      break;
    }
  }

  for (const item of toStore.items) {
    if (item.name === itemName) {
      toItem = item;
      break;
    }
  }

  if (!fromItem || !toItem) {
    console.error(`Item not found in either store: ${itemName}`);
    return;
  }

  if (fromItem.unit === toItem.unit) {
    console.error(
      `The units for the item are the same in both stores: ${fromItem.unit}`
    );
    return;
  }

  let conversionFactor = toItem.amount / fromItem.amount;

  return Math.ceil(conversionFactor);
}
```

## Finding the items in both stores

First, the function uses a for...of loop to find the item in both stores, and saves the item objects as the variables `fromItem` and `toItem`. If either of these items is not found in the respective store, the function returns an error message using `console.error`.

## Checking if units are the same

Next, the function checks if the units for the item are the same in both stores. If so, it returns another error message using `console.error`.

## Calculating the conversion factor

Finally, the function calculates the conversion factor by dividing the amount of `toItem` by the amount of `fromItem`. The conversion factor is then returned from the function and saved in the variable `conversionFactor`. The conversion factor represents the number of units of the `toStore` that can be obtained for each unit of the `fromStore`.

## Logging the conversion factor

Finally, the code logs the conversion factor using `console.log`. The returned value will represent the number of units of `toStore` that can be obtained for each unit of `fromStore`. In this example, the returned value would be 1 since 1 Jointly is equal to 12 Renteng.

Note that the code uses `Math.ceil` to round the conversion factor up to the nearest whole number. This ensures that the returned conversion factor is an integer, even if the calculation results in a fractional value.

### A demo/repos link

_No response_
