import React from 'react';
import { useEliquids } from '../store';
import { IEliquid } from '../types/eliquid.interface';

const Сigarettes = ({ id, title, company, completed }: IEliquid) => {
  const toggleEliquid = useEliquids((state) => state.toggleEliquid);

  return (
    <div className="cigarettes">
      <span>{id}. </span>
      <span>
        {title}, {company}
      </span>
      <input type="checkbox" checked={completed} onChange={() => toggleEliquid(id)} />
    </div>
  );
};

export default Сigarettes;
