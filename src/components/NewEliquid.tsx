import React, { RefObject, useRef, useState } from 'react';
import { useEliquids } from '../store';

const NewEliquid = () => {
  const [value, setValue] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);
  const addEliquid = useEliquids((state) => state.addEliquid);

  const handleAddEliquid = () => {
    if (value !== '') {
      addEliquid(value);
    }
    setValue('');
  };

  return (
    <div>
      <input
        value={value}
        onChange={() => setValue(ref.current!.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddEliquid()}
        ref={ref}
        type="text"
        placeholder="add e-liquid..."
      />
      <button onClick={handleAddEliquid}>Save</button>
    </div>
  );
};

export default NewEliquid;
