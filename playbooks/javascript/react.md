---
title: React
description: Reference book for writing React applications and components
---

## Hooks
Hooks api is the future, pursuing coding in such manner is a must.
 - Useful [hooks](https://github.com/rehooks/awesome-react-hooks) reference
 - [RestHooks](https://resthooks.io/)

 We have written two short and useful blogs about hooks check them out:
  - [React hooks cheat sheet](https://dev.to/bornfightcompany/react-hooks-cheat-sheet-3kl9)
  - [How to: ReactJs custom hooks](https://dev.to/bornfightcompany/how-to-reactjs-custom-hooks-1617)
 
A whole project has been written completely in hooks, which confirms the safe usage and further encourages the usage of hooks.
When using hooks, a React developer should think of basic lifecycle events that came before them. In essence it helps in writing hooks in general. 
#### Best practices
UseState
- Try to write multiple simple useState hooks if the component's data is not that complex. Orient on writing less object and array useState hooks (this is to keep code clean, simple and understandable)

UseEffect
- When writing useEffect hook be sure to **never** forget to write the second parameter, which is the dependency array. Leaving it empty array makes it trigger once on component mount, not defining it means it will occur on each rerender (very easy to make infinite rerender loop). The same goes for useMemo and useCallback hooks.

Code style
- Use hooks at the top of the functional component. Order them by priority and be consistent between hooks on different components. 
Order priority example:
```
	1. Fetch data hooks
	2. Write/Manipulate data hooks
	3. State hooks
	4. Update hooks
	5. Other less impactful hooks
```
- Write your custom hooks  as soon as you need them in the new projects. This will make your code even cleaner and leaner. Also you can reuse it more ofthen troughout the app. If you see you are using same combination of same hooks in a couple of places, it is a perfect example to create a small custom hook. While creating it, make its name intuitive and readable so that anyone who joins the project can understand the code.

#### Custom hooks list
We have created couple of libraries that use custom hooks:
 - [Aardvark](https://github.com/bornfight/aardvark) - Oriented towards JSON:API specification. Exposes useGet, usePatch, useDelete, usePost, useGetAll as base custom hooks. Those are self inuitive of what are they doing. It also exports more controlled hooks: useGetControlled and useGetAllControlled which provide back a get function for you to call anywhere in the component.
 - [Locot](https://github.com/bornfight/locot) - exposes useAuth which in itself is a context hook. It provides back the functions to login & register a user and an action to refresh the token for authentication.

Other helpful custom hooks resources:
- [https://github.com/rehooks/awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks)

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

## CSS & SCSS

- Classes are used as css modules, which means the classes are scoped based on the component. In other words, usage of BEM is unnecessary, just write the classes with intuitive meanings.
- Prefer to write classNames using camelCase. That way the IntelliJ can figure out which class you want to use, and propose a suggestion (provided that the class itself was first written). Please look at the following example:
`<div className={styles.menuItemWidth}>container</div>` ✅	
`<div className={styles["menu-item-width"]}>container</div>` ❌
- If antd components are being used, this is a way to override them in their respective scope:
`.table {
    margin-top: 20px;

    :global(.ant-table-thead tr .ant-table-cell:last-child) {
        width: 50px;
    }

    :global(.ant-table-tbody tr .ant-table-cell:last-child) {
        width: 50px;
    }
}`
