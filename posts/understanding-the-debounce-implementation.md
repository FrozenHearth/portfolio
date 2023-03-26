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

Being asked to implement `debounce` in an interview is a very common scenario. Normally, in our day-to-day job, we use lodash's debounce package. But understanding how it works under the hood is a whole other ballgame.

A `debounce` is a higher-order function, which is a function that returns another function.

**Debouncing** can be also be defined as a strategy that lets us improve performance by waiting until a certain amount of time has passed before triggering an event. When the user stops triggering the event, our code will run.

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

By implementing debounce, we can optimize the performance of our API calls by delaying the execution of `fetchTrendingRepos` until a certain amount of time has elapsed since the last keystroke. Without debounce, calling fetchTrendingRepos on each keystroke could result in multiple unnecessary API calls and slower response times.

## Here's a classic debounce implementation

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

1. We want to wait a certain amount before we call our callback function. We want to wait till the user finishes typing.
2. Our debounce should _return a function_. Why? This is done to form a closure around the `callback` and `wait` function parameters and the `timeoutId` variable so that their values are preserved.

So we need to do a few things:

1. Return a function.
2. Schedule a timeout, based on the `wait` argument we provide. `wait` will be in milliseconds.
3. Cancel any pre-existing timeout, as debounce can be called multiple times.
4. When the timeout expires, we need to call our callback function and feed it whatever arguments we have, with the spread operator. Why? Because the function being returned from debounce is supposed to act exactly the same as the function being provided, except for the fact that we're limiting how often it gets called. This means that if the original function was supposed to take two parameters, the returned function should too.

With this step-by-step breakdown, we can now construct our debounce function.

### Step 1:

```js
const debounce = (callback, wait) => {
  // Return a function.
  return () => {};
};
```

### Step 2:

```js {4, 7}
const debounce = (callback, wait) => {
  // Schedule a timeout, based on the `wait` argument we provide.
  // `wait` will be in milliseconds.
  let timeoutId = null;

  return () => {
    timeoutId = setTimeout(() => {}, wait);
  };
};
```

### Step 3:

```js {7}
const debounce = (callback, wait) => {
  let timeoutId = null;

  return () => {
    // Cancel any pre-existing timeout,
    // as debounce can be called multiple times.
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {}, wait);
  };
};
```

### Step 4:

```js {4, 10}
const debounce = (callback, wait) => {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      // When the timeout expires, we need to call our callback function
      // and feed it whatever arguments we have, with the spread operator
      callback(...args);
    }, wait);
  };
};
```

We've successfully implemented debounce, step-by-step. Note, that this ofcourse isn't how lodash implements debounce. This is a simplified implementation, which is enough to understand debounce, and explain it in an interview.
