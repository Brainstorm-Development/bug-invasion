# BugInvasion 🐞

**BugInvasion** is a lightweight and fun JavaScript library that brings tiny walking bugs to your webpage. Users can click on the bugs to make them disappear. Great for pranks, interactive websites, or just adding a playful touch to your project!

---

## Features
- Adds realistic walking bugs to your webpage.
- Bugs move randomly every 2 seconds.
- Users can click on a bug to remove it.
- Fully customizable: set the number of bugs, their size, and custom images.
- Easy to integrate with vanilla JavaScript, React, Angular, or Vue.
- Option to automatically end the invasion after a set duration.

---

## Installation

Install BugInvasion via npm:

```bash
npm install bug-invasion
```

---

## Usage

### 1. Using in Vanilla JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bug Invasion Example</title>
</head>
<body>
  <script type="module">
    import BugInvasion from 'bug-invasion';

    // Initialize BugInvasion
    const bugs = new BugInvasion({
      bugCount: 10, // Number of bugs
      bugImage: 'https://www.svgrepo.com/show/13138/bug.svg', // Bug icon URL
      bugSize: 50, // Size of bugs in pixels
      invasionDuration: 10000, // End the invasion after 10 seconds
    });
  </script>
</body>
</html>
```

---

### 2. Using in React

Install BugInvasion in your React project and use it in your components:

```javascript
import React, { useEffect } from 'react';
import BugInvasion from 'bug-invasion';

const BugInvasionApp = () => {
  useEffect(() => {
    const bugs = new BugInvasion({
      bugCount: 7,
      bugImage: 'https://www.svgrepo.com/show/13138/bug.svg',
      bugSize: 40,
      invasionDuration: 15000, // End the invasion after 15 seconds
    });

    // Cleanup on unmount
    return () => bugs.stopInvasion();
  }, []);

  return (
    <div>
      <h1>Welcome to Bug Invasion!</h1>
    </div>
  );
};

export default BugInvasionApp;
```

---

### 3. Using in Angular

Install the package in your Angular project, and use it in a component:

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import BugInvasion from 'bug-invasion';

@Component({
  selector: 'app-bug-invasion',
  template: '<h1>Welcome to Bug Invasion!</h1>',
})
export class BugInvasionComponent implements OnInit, OnDestroy {
  private bugs: any;

  ngOnInit(): void {
    this.bugs = new BugInvasion({
      bugCount: 8,
      bugImage: 'https://www.svgrepo.com/show/13138/bug.svg',
      bugSize: 50,
      invasionDuration: 20000, // End the invasion after 20 seconds
    });
  }

  ngOnDestroy(): void {
    this.bugs.stopInvasion();
  }
}
```

---

### 4. Using in Vue

Use BugInvasion in your Vue component:

```vue
<template>
  <div>
    <h1>Welcome to Bug Invasion!</h1>
  </div>
</template>

<script>
import BugInvasion from 'bug-invasion';

export default {
  mounted() {
    this.bugs = new BugInvasion({
      bugCount: 6,
      bugImage: 'https://www.svgrepo.com/show/13138/bug.svg',
      bugSize: 40,
      invasionDuration: 12000, // End the invasion after 12 seconds
    });
  },
  beforeDestroy() {
    this.bugs.stopInvasion();
  },
};
</script>
```

---

## API Options

| Option            | Type     | Default                           | Description                                                |
|-------------------|----------|-----------------------------------|------------------------------------------------------------|
| `bugCount`        | `number` | `5`                               | The number of bugs to create.                              |
| `bugImage`        | `string` | `'https://www.svgrepo.com/show/13138/bug.svg'` | URL of the bug image.                                      |
| `bugSize`         | `number` | `40`                              | Size of the bugs in pixels.                                |
| `bugLifespan`     | `number` | `15000`                           | How long each bug lives before disappearing (ms).          |
| `spawnInterval`   | `number` | `2000`                            | Time interval between new bug spawns (ms).                 |
| `moveSpeed`       | `number` | `2000`                            | How often bugs move to a new position (ms).                |
| `moveDistance`    | `number` | `100`                             | Maximum distance a bug can move in one step (pixels).      |
| `invasionDuration`| `number` | `null`                            | Duration of the invasion before it ends automatically (ms).|

---

## Methods

### `stopInvasion()`
Stops the invasion and removes all bugs from the page.

```javascript
const bugs = new BugInvasion({ bugCount: 10 });
bugs.stopInvasion(); // Removes all bugs
```

---

## License

**BugInvasion** is open-source and distributed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. 😊

---

Have fun with BugInvasion! 🐛🎉

