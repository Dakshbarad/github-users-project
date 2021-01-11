(Simple explanations to understand the code better)

## index.js in components and pages:
Index.js in folders : Note that each folder like pages or components consist of index.js. Whenever we import a folder instead of a specific file than the index.js inside the folder is executed/called. Here each index.js file is used to export different components available in the folder to avoid them calling separately.

## Styled Components
Styled component is a different way to apply css to elements. Refer to its docs for better understanding.
[Styled-Components - Main Docs](https://styled-components.com/)
```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```


