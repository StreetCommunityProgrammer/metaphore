---
layout: post
title: Check a String is a Valid Date or DateTime format in PHP
author: darkterminal
created_at: 2023-05-05T13:28:31Z
language: php
---

### The Back Story about your PHP Metaphor

I writing a story helper (little helper) to validate schema using PHP in my open-source project called [SleekwareDB](https://github.com/sleekwaredb/sleekwaredb) a Flat File database and RESTfull API using [SleekDB](https://sleekdb.github.io/). I know we have many libraries out there, never mind. It's just freestyled in my old language.

### The PHP Story!

You can check if a string is a valid date or datetime format in PHP using the `DateTime::createFromFormat()` method. This method returns a `DateTime` object if the input string is a valid date/datetime in the specified format, or `false` if it is not valid.

Here's an example function that checks whether a string is a valid date or datetime in the given format:

```php
function isDateTime($dateString, $format) {
    $dateObj = DateTime::createFromFormat($format, $dateString);
    return $dateObj !== false && !array_sum($dateObj->getLastErrors());
}
```

You can use this function like this:

```php
$dateString1 = '2022-05-01';
$dateString2 = '2022-05-01 10:30:00';
$format1 = 'Y-m-d';
$format2 = 'Y-m-d H:i:s';

if (isDateTime($dateString1, $format1)) {
    echo "$dateString1 is a valid date format.";
} else {
    echo "$dateString1 is not a valid date format.";
}

if (isDateTime($dateString2, $format2)) {
    echo "$dateString2 is a valid datetime format.";
} else {
    echo "$dateString2 is not a valid datetime format.";
}
```

This code will output:

```
2022-05-01 is a valid date format.
2022-05-01 10:30:00 is a valid datetime format.
```

That's it! Small and cringe... :smile: 

### A PHP demo/repos link

_No response_

### PayPal Link for Donation (PHP Storyteller)

_No response_