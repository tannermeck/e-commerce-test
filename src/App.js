import { useState, useEffect } from 'react';
import { data } from './data/data';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [rent, setRent] = useState(true);
  const [buy, setBuy] = useState(true);
  const [barrow, setBarrow] = useState(true);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    const initialize = () => {
      setItems(data);
    };
    initialize();
  }, []);

  useEffect(() => {
    const filter = () => {
      const filteredItems = items.filter(
        (item) => (buy && item.buy) || (rent && item.rent) || (barrow && item.barrow)
      );
      setFiltered(filteredItems);
    };
    filter();
  }, [rent, barrow, buy, items]);
  const handleRent = () => {
    if (rent) return 'green';
  };
  return (
    <div className="App">
      <h1>Rent borrow buy</h1>
      <p className={rent ? 'green' : 'red'} onClick={() => setRent(!rent)}>
        Rent
      </p>
      <p className={barrow ? 'green' : 'red'} onClick={() => setBarrow(!barrow)}>
        Barrow
      </p>
      <p className={buy ? 'green' : 'red'} onClick={() => setBuy(!buy)}>
        Buy
      </p>
      {filtered.length
        ? filtered.map((item) => <h1 key={item.item}>{item.item}</h1>)
        : items.map((item) => <h1 key={item.item}>{item.item}</h1>)}
    </div>
  );
}

export default App;
