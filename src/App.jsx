import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setConut] = useState(0);

  const addOne = () => {
    // write code here
    setConut(previousValue => previousValue + 1);
  };

  const add100 = () => {
    // write code here
    setConut(previousValue => previousValue + 100);
  };

  // DON'T change the code below
  const increase = () => {
    setConut(previousValue => {
      const next = previousValue;

      return count % 5 === 0 ? next + 100 : next;
    });

    // if (count % 5 === 0) {
    //   add100();
    // }

    addOne();
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
