---
title: 'Arrow functions and this keyword'
metaTitle: 'Arrow functions and this keyword'
metaDesc: 'How arrow functions solve an old this keyword hack.'
summary: 'How this keyword behaves in arrow functions'
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

- Arrow functions don't have their own bindings to [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments), or [super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), and should not be used as [methods](https://developer.mozilla.org/en-US/docs/Glossary/Method).

- Arrow functions cannot be used as [constructors](https://developer.mozilla.org/en-US/docs/Glossary/Constructor). Calling them with [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) throws a [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

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

The `setTimeout()` function creates a new execution context and the `this` keyword inside the function refers to the global object instead of the object `obj`. This is because in Javascript, the value of `this` is determined by how a function is called, not where it is defined.

One outdated hack to fix the issue is to assign `this` to a variable.

By assigning `this` to the variable `self` before the setTimeout call, we capture a reference to `obj`, allowing us to access its count property later on.

```js {6,8}
const obj = {
  count: 10,
  doSomethingLater() {
    // create a reference to "this" object,
    // and store it in a variable named "self
    let self = this;
    setTimeout(function () {
      self.count++;
      console.log(self.count);
    }, 300);
  },
};

obj.doSomethingLater(); // logs "11"
```

Or, we could use `bind` to make sure the function executes in the proper scope.

```js {8}
const obj = {
  count: 10,
  doSomethingLater() {
    setTimeout(
      function () {
        this.count++;
        console.log(this.count);
      }.bind(this),
      300
    );
  },
};

obj.doSomethingLater(); // logs "11"
```

### Why does the setTimeout function create a new execution context?

Confused about what execution context is? I suggest you read this [article](https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/#:~:text=There%20are%20two%20types%20of,representing%20the%20function's%20local%20scope.).

The `setTimeout()` function creates a new execution context because it uses a callback function that is executed after a specified delay.
When you pass a function as an argument to `setTimeout()`, JavaScript creates a new execution context for that function. This execution context is different from the current execution context, which is the context in which `setTimeout()` was called.

This new execution context has its own set of variables and a scope chain that is created based on where the function was defined. When the timer expires, the function is added to the event queue and eventually executed by the JavaScript engine in its own execution context.

Since the callback function passed to `setTimeout()` is executed in a new execution context, the value of `this` inside the function may not be what you expect. The value of `this` inside the callback function is not the same as `obj`, but the global object or undefined in strict mode. This is because the `this` keyword is determined by how the function is called, not where it is defined.

Instead, with arrow functions, we can skip that hack, and just modify our syntax to:

```js {4}
const obj = {
  count: 10,
  doSomethingLater() {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // logs "11"
```

Arrow functions solve the problem of `this` being different inside the `setTimeout()` callback function because they capture the `this` value from the surrounding context lexically, which is called a lexical `this`.

When an arrow function is used as the callback function passed to `setTimeout()`, it inherits the `this` value from the surrounding context lexically, which is the `this` value of the doSomethingLater() method of `obj`.

And, we know, `this` inside an object method refers to the object itself. So, arrow functions essentially "borrow" the `this` value from the surrounding context.

If we had no `setTimeout` inside `doSomethingLater()` method, it'd work as expected, as per the rule of `this` inside an object method, which refers to the object itself.

```js {4}
const obj = {
  count: 10,
  // Regular object method, `this` refers to the object itself, not the global scope
  doSomethingLater() {
    this.count++;
    console.log(this.count);
  },
};
obj.doSomethingLater(); // logs "11"
```

Arrow functions are a great feature of ES6, but use them properly.

It might be tempting to use them everywhere. For eg:

```js {3}
const obj = {
  count: 10,
  doSomethingLater: () => {
    console.log(this);
  },
};
obj.doSomethingLater(); // Logs Window. Yikes!!
```

If you do `this.count` in the above example, it will log `NaN` because there's no `count` property in the global scope.

As we had stated above, don't use arrow functions as object methods. Use a regular function instead, as below:

```js {4}
const obj = {
  count: 10,
  doSomethingLater() {
    console.log(this);
  },
};
obj.doSomethingLater();
// Logs { count: 10, doSomethingLater: ƒ doSomethingLater() }
```

If you want a detailed explanation on arrow functions and to check all the rules, you can check the official [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) documentation.
