// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counter from './Components/counter/Counter';
import TodoApp from './Components/todo/TodoApp';

export default function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <TodoApp />
    </div>
  );
}

// function PlayingWithProps(Properties) {

//   console.log(Properties);
//   console.log(Properties.prop1);
//   console.log(Properties.prop2);

//   return (
//     <div></div>
//   );
// }

// we have enclosed it in curly braces because we are deconstructuring the object that is passed as an argument to the function and
// we are getting the values of prop1 and prop2 and assigning them to variables with the same name
/*function PlayingWithProps({ prop1, prop2 }) {

  console.log(prop1);
  console.log(prop2);

  return (
    <div></div>
  );
}
export default App;*/