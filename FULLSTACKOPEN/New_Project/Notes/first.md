# we need to close the tag in the jsx file using the closing bracket as in <br/> yeah gotta do that

## React component (usually) needs to contain one root element. If we, for example, try to define the component App without the outermost div-element:

### First letter of React component names must be capitalized.

this is not possible

```javascript
const App = () => {
  return (
    <h1>Greetings</h1>
    <Hello name='Maya' age={26 + 10} />
    <Footer />
  )
}
```

instead of it you can use array of coopjenet

```javascript
const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name='Maya' age={26 + 10} />,
    <Footer />
  ]
}
```

fragmeents `<></>` closed and opened stuff
