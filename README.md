To reproduce the issue:

- clone the repo
- run `yarn` at the root
- run `yarn build` in `packages/stencil-library`
- run `yarn build` in `packages/react-library`
- start the examples app by running `yarn start` in `packages/examples/react-webpack`
- go to http://localhost:8080
- open the console and reload the page

You should see the props issue:
```
connectedCallback > myProp: html case
componentWillLoad > myProp: jsx case
```
