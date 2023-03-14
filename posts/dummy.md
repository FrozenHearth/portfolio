---
title: 'Next.js toggle between grid and list view'
metaTitle: 'Next.js toggle between grid and list view'
metaDesc: 'How to toggle between a grid and list in Next.js'
date: '2021-10-04'
tags:
  - nextjs
---

## Managing the state in Next.js

Since Next.js is React, we can use all the fantastic React state management tools, such as the useState, which we'll use for this purpose.

Open up your `pages/index.js` file and import the `useState` from React.

```js
import { useState } from 'react';
```

Then inside our page, we can define the state and its default value.
In our case, we'll use a boolean, where the default value (false) means it's in grid view, and if it's true, it will be in list view.

```js
const [toggleViewMode, setToggleViewMode] = useState(false);
```

The `toggleViewMode` will become the variable that we can read and use, and at the end of the line, you see `false`, which sets its default value.

The `setToggleViewMode` is the function we can call to change the value of this variable.

Let's go ahead and add a button that, on click, can change our variable.

```jsx
<div className="flex justify-end p-5">
  <button
    className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
    onClick={() => setToggleViewMode(!toggleViewMode)}
  >
    {toggleViewMode ? 'grid' : 'list'}
  </button>
</div>
```

And the next part is based on what the current value is.
So if the value is true, we show the grid. Else we show the list.

## Next.js toggle between list and grid view

Now that we have this state and button working, we need to change our main wrapping div.

Currently it looks like this:

```jsx
<div className='grid grid-cols-3 gap-4 p-5'>
```

```jsx
<div className={`grid grid-cols-${toggleViewMode ? '1' : '3'} gap-4 p-5`}>
```
