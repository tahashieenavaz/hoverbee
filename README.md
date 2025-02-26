<p align="center">
    <img src="./art/header.svg" />
</p>

Hoverbee lets you effortlessly attach elements to the cursor. I have kept the usage extremely minimal to avoid confusions of any sort.

<p align="center">
    <img src="./art/hoverbee.gif" />
</p>

- [Installation](#installation)
- [Configuration](#configuration)

## Installation

You only need to include the script tag somewhere inside your HTML page.

```html
<script src="https://unpkg.com/hoverbee"></script>
```

## Configuration

```js
hoverbee({
    // the target element, could be provided as a string selector or an Element instance
    element,

    // movement strength of the element wrt to the cursor
    strength = 10,

    // the distance at which the
    threshold = 200,

    // animation duration for the element moving while detached to cursor
    duration = 300,

    // animation duration for the element after detaching from the cursor to move back to the original location
    fallbackDuration = 300,
})
```
