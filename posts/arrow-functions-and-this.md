---
title: 'Arrow functions and this keyword'
metaTitle: 'Arrow functions and this keyword'
metaDesc: 'How arrow functions solve an old this keyword hack.'
summary: 'How arrow functions solve an old this keyword hack...'
date: 'Mar 17, 2023'
tags:
  - arrow functions, this, javascript
---

## What are arrow functions?

MDN definition

> An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

Fancy way of saying that arrow functions are a syntactical sugar to regular functions.
You can shorten your syntax and make things look pretty.
But can/should you use them everywhere? It's definitely tempting to.
However, arrow functions have certain rules:

- Arrow functions don't have their own bindings to [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments), or [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), and should not be used as [methods](https://developer.mozilla.org/en-US/docs/Glossary/Method).

- Arrow functions cannot be used as [constructors](https://developer.mozilla.org/en-US/docs/Glossary/Constructor). Calling them with [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) throws a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

The first point is extremely important. Perhaps the most important rule of an arrow function is that it doesn't have it's own `this` binding. In this post, we'll only cover the first point.

Let's take an example of `setTimeout`

```js
const obj = {
  count: 10,
  doSomethingLater() {
    setTimeout(function () {
      // here, this refers to the Window object
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater();
// logs "NaN", because the property "count" is not in the window scope.
```

We could use `call`, `apply` or `bind` to make sure the function executes in the proper scope. Or, we could use the ugly outdated hack of `let self = this`

```js
const obj = {
  count: 10,
  doSomethingLater() {
    let self = this;
    setTimeout(function () {
      // borrow "this" from the outer scope
      self.count++;
      console.log(self.count);
    }, 300);
  },
};

obj.doSomethingLater(); // logs "11"
```

Instead, with arrow functions, we can skip that hack, and just modify our syntax to

```js
const obj = {
  count: 10,
  doSomethingLater() {
    // The method syntax binds "this" to the "obj" context.
    // Here, doSomethingLater() is a method of "obj"
    setTimeout(() => {
      /* Since the arrow function doesn't have its own "this" binding and
      setTimeout (as a function call) doesn't create a binding
      itself, the "obj" context of the outer method is used.
      Basically, the arrow function "borrows" this from the outside scope.
      */
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // logs "11"
```

Arrow functions certainly are a great benefit of ES6, but use them properly.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) explains everything in detail.
