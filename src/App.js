import { useState } from 'react';
import './App.scss';
import Accordion from './Components/Accordion';
import { data } from './Utils/data';

function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }

  return (
    <div className='container'>
      <h1>CCT Lab Process</h1>
      {data.map(({ id, title, checklist }) => (
        <Accordion id={id} title={title} checklist={checklist} selected={selected} toggle={toggle} />
      ))}
    </div>
  );
}

export default App;