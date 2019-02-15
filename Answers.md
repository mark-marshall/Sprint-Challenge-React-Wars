# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a user interface component library that was built to solve Facebooks problem of bringing disperate pieces of data/state together in components rendered on the browser.

2.  What does it mean to _think_ in react?

Thinking in React is about detailing the slices of state that you need, and building out a component hierarchy to suit them. It requires you to decide where pieces of state should live, although as a general rule, state should live on the parent container and components should be "dumb" wherever possible. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class components extend the React.Components which comes with a number of extra goodies that functional components do not have access to. This crucially includes the ability to use the setState method. In class components we also get the render() method which will automatically rerun when any piece of state changes - this is what allows our app to be reactive. Like class components, functional components have the ability to receive props but they cannot call the setState method.

4.  Describe state.

State is the heart of the react application, it's the data that our components can hold onto and pass around. Crucially, state is mutable.

5.  Describe props.

Props are what we use to pass state around between components. Every component can receive props, in the case of functional componnts, they are passed as arguments. Crucially, props are immutable.