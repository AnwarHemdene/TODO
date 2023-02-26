import { useState } from 'react';
import './index.css';

function List() {
    const [checked, setChecked] = useState(false)
  return (
    <div onClick={() => setChecked(!checked)}
     className={`box ${checked ? 'checked' : ''}`}>
          <div className="box-item">List</div>
    </div>
  );
}

export default List;
