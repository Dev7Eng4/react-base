- Use unknown instead of any

```
function myFunction(fn: unknown) {
  if (typeof fn === 'function') {
    fn(); // no type error
  }
}

invokeAnything(1);
```

aaaac

- use is operator
- use satisfies operator
- avoid using enums: enums make your code less reliable and efficient, if use enums you should declare value for enums
