---
title: React
description: Reference book for writing React applications and components
---

## Hooks
Hooks api is the future, pursuing coding in such manner is a must.
 - Useful [hooks](https://github.com/rehooks/awesome-react-hooks) reference
 - [RestHooks](https://resthooks.io/)

## State management

### Redux

1. avoid writing reducer manually - use [createSlice](https://redux-starter-kit.js.org/api/createslice#createslice)
   or a similar utility

## Styling

1. consider using css preprocessors such as [Sass](https://sass-lang.com/) and [css-modules](https://github.com/css-modules/css-modules)

2. favor **presentational component composition** over explicit styles
   - encapsulate styling and presentational logic inside components as much as you can and make them modifiable
     with props

Example:

GOOD ✅

```TSX
const MyCustomForm: React.FunctionComponent = () => {
    return (
        <Form>
            <FormItem>
                <Input />
            </FormItem>
        </Form>
    );
};
```

BAD 🛑

```TSX
const MyCustomForm: React.FunctionComponent = () => {
    return (
        <form className={"my-form"}>
            <fieldset className={"my-fieldset"}>
                <input type="text" />
            </fieldset>
        </form>
    );
};
```

## Rendering

- When rendering multiple items they all must be encapsulated within another element. E.g.
  `<p>text1</p><p>text2</p>` is not valid. The correct way is to encapsulate the elements like this
  `<div><p>text1</p><p>text2</p></div>`.
- Keys are significant if you render multiple elements. Each element must have a unique key. In the opposite case,
  it often comes to undesired effects when interacting with those same elements. You would think that the second
  parameter of .map() (index) is a good key, but due to
  [performance reasons](https://dev.to/jtonzing/the-significance-of-react-keys---a-visual-explanation--56l7) it is
  better to use a unique one for each element.
- If you have an array as data which you wish to render, just use .map whose callback returns an element. Don't
  forget the unique key on each element!
- Instead of divs you can use React.fragment (<></>) as a wrapper. It doesn't add any extra nodes to the DOM and
  can only accept the "key" attribute.
  
## Imports

- Absolute paths instead of relative ones are thought to be an [advantage](https://medium.com/beqode/absolute-vs-relative-import-paths-nodejs-1e4efa65a7bb) when building an app, consider using them.
- Absolute path example: import Button from "src/views/atoms/buttons",
- Relative path example: import Button from "../../atoms/buttons",
