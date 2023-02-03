import React from 'react';
import { useFilter } from '../store';

const Controls = () => {
  const { filter, setFilter, filterByCompany, setFilterByCompany } = useFilter();

  return (
    <div className="controls">
      <button
        disabled={filterByCompany === 'allCompany'}
        onClick={() => setFilterByCompany('allCompany')}>
        All
      </button>
      <button disabled={filterByCompany === 'Elmerck'} onClick={() => setFilter('Elmerck')}>
        Elmerck
      </button>
      <button disabled={filterByCompany === 'Pride Vape'} onClick={() => setFilter('Pride Vape')}>
        Pride Vape
      </button>
      <button disabled={filter === 'uncompleted'} onClick={() => setFilter('uncompleted')}>
        Not completed
      </button>
      <button disabled={filter === 'completed'} onClick={() => setFilter('completed')}>
        Completed
      </button>
    </div>
  );
};

export default Controls;
