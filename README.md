# React-
# React Learning — Components, Props & Re-rendering

## 1. Parent and Child Components

- **Parent (`App`)**: Stores data in state and passes data to child components through props.
- **Child (`Todo`)**: Receives props and returns JSX to describe its UI.
- **React**: Processes the component output and renders the UI in the browser.

## 2. Rendering Flow

1. React renders the `App` component.
2. `App` returns JSX containing a button and a list of `Todo` components.
3. `map()` creates an element for each todo object and passes its data as props.
4. Each `Todo` component returns JSX using its received props.
5. React renders the resulting UI in the browser.

## 3. State Update and Re-rendering

When the Add Todo button is clicked:

1. The `addtodos()` function executes.
2. `setTodos()` requests a state update with the old todos and a new todo.
3. React renders `App` again using the updated state.
4. The updated list produces the corresponding child elements and props.
5. React updates the browser UI where necessary.

## 4. Important Concepts

- **JSX**: A syntax for describing UI inside JavaScript.
- **Props**: Data passed from a parent component to a child component.
- **State**: Data managed by a component that can change over time.
- **Re-render**: React runs a component again to calculate its updated output.
- **`map()`**: Used to create a list of elements from an array.
- **`key`**: Helps React identify list elements between renders.

## 5. One-line Summary

State update → Parent re-render → Updated child elements and props → React updates the UI.
