import React from 'react';
import { useEliquids } from '../store';

const TotalEliquids = () => {
  const count = useEliquids((state) => state.eliquid.length);

  return <div className="total">Total Eliquids: {count}</div>;
};

export default TotalEliquids;
