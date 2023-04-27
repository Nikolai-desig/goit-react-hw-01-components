import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App'


ReactDOM.createRoot(document.getElementById('root')).render(App);
// const users = [
//   { name: 'Lexa', age: 20 },
//   { name: 'Lexa1', age: 201 },
//   { name: 'Lexa2', age: 202 },
//   { name: 'Lexa3', age: 203 },
// ];

const result = users.map(el => {
  return (
    <div>
      <p>{el.name}</p>
      <p>age:{el.age}</p>
    </div>
  );
})

// const p = (
//   <p id="Text3" className="qwerty">
//     Text Content
//   </p>
// );

// const div = (
//   <div id="123" className="qwerty">
//     {p}
//   </div>
// );


