---
title: 'Understanding the debounce implementation'
metaTitle: 'Understanding the debounce implementation'
metaDesc: 'Diving deep into implementing debounce'
summary: 'Diving deep into implementing debounce'
date: 'Mar 26, 2023'
formattedDate: 'Mar-26-2023'
tags:
  - debounce, javascript
---

## What exactly is debounce?

Being asked to implement `debounce` in an interview is a very common scenario. Normally, in our day-to-day job, we use lodash's debounce package. But understanding how it works under the hood is a whole other ballgame.

A `debounce` is a higher-order function, which is a function that returns another function.

It is a programming practice used to ensure that it limits the rate at which a function gets invoked. An extremely common usage is calling an API with the search term as a parameter as the user types, so that the user can see the search results.
Imagine the user typing 20 letters, hitting backspace continually, and then typing a few other letters. The API would be unnecessarily get called tons of times. This especially can be a pain with APIs that have rate-limiting set.
Instead, with debounce, we can reduce the number of times the API is called. Say, we 'debounce' the user input by 500ms - this means that the API will be called after a delay of 500ms after the user stops typing. This reduces the number of API calls significantly.

In other words, `debouncing` is a strategy that lets us improve performance by waiting until a certain amount of time has passed before triggering an event. When the user stops triggering the event, our code will run.

### How we normally use debounce:

```js
const debouncedFunction = debounce(function() { ... }, 500)
```

What's the type of our debouncedFunction?

```js
console.log(typeof debouncedFunction); // `function`
```

A function itself!

Let's take an example of how we'd use it in a React component:

```jsx
function TrendingRepo() {
  const [repos, setRepos] = React.useState([]);
  const debounceOnChange = React.useCallback(
    debounce(fetchTrendingRepos, 400),
    []
  );

  function fetchTrendingRepos(value) {
    fetch(`https://github-trending-api.now.sh/repositories?language=${value}`)
      .then((res) => res.json())
      .then((res) => setRepos(res));
  }

  return (
    <div className="App">
      <h1>Search Trending Repos</h1>
      <input
        className="filter-input"
        placeholder="Language: Java, Javascript, Ruby, Python"
        onChange={(e) => debounceOnChange(e.target.value)}
      />
      <List trendingRepos={repos} />
    </div>
  );
}
```

Without debounce, we'd be calling `fetchTrendingRepos` on each keystroke. With debounce, we can call it 400ms after the user stops typing.

And here's the full implementation:

```js
const debounce = (callback, wait) => {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
```

Whoa, this looks very confusing, doesn't it? The simplest way to understand code is to break it down into parts.

As per our understanding:

1. We want to wait a certain amount before we call our function (for example, a function which calls the API for searching). We want to wait till the user finishes typing.
2. Our debounce should return a function. Why? This is done to form a closure around the `callback` and `wait` function parameters and the `timeoutId` variable so that their values are preserved.

So we need to do a few things:

1. Return a function.
2. Schedule a timeout, based on the `wait` argument we provide. `wait` will be in milliseconds.
3. Cancel any pre-existing timeout, as debounce can be called multiple times.
4. When the timeout expires, we need to call our callback function and feed it whatever arguments we have, with the spread operator. Why? Because the function being returned from debounce is supposed to act exactly the same as the function being provided, except for the fact that we're limiting how often it gets called. This means that if the original function was supposed to take two parameters, the returned function should too. Our callback function is the `fetchTrendingRepos` function in this case.

With this step-by-step breakdown, we can now construct our debounce function.

### Step 1:

```js
const debounce = (callback, wait) => {
  return () => {};
};
```

### Step 2:

```js {2, 5}
const debounce = (callback, wait) => {
  let timeoutId = null;

  return () => {
    timeoutId = setTimeout(() => {}, wait);
  };
};
```

### Step 3:

```js {5}
const debounce = (callback, wait) => {
  let timeoutId = null;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {}, wait);
  };
};
```

### Step 4:

```js {4, 8}
const debounce = (callback, wait) => {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
```

We've successfully implemented debounce, step-by-step. Note, that this ofcourse isn't how lodash implements debounce. This is a simplified implementation, which is enough to understand debounce, and explain it in an interview.
