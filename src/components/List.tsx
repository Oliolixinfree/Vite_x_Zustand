import React, { useState } from 'react';
import { useEliquids, useFilter } from '../store';
import Todo from './Eliquid';

const List = () => {
  const filter = useFilter((state) => state.filter);
  const filterCompany = useFilter((state) => state.filterByCompany);

  const eliquids = useEliquids((state) => {
    switch (filter) {
      case 'uncompleted':
        return state.eliquid.filter((el) => !el.completed);
      case 'completed':
        return state.eliquid.filter((el) => el.completed);
      case 'Elmerck':
        return state.eliquid.filter((el) => el.company === 'Elmerck');
      case 'Pride Vape':
        return state.eliquid.filter((el) => el.company === 'Pride Vape');
      default:
        return state.eliquid;
    }
  });

  // const filterByCompany = useEliquids((state) => {
  //   switch (filterCompany) {
  //     case 'bat':
  //       return state.eliquid.filter((i) => i.company === 'bat');
  //   }
  // });

  return (
    <section className="list">
      {eliquids.map((c) => (
        <Todo key={c.id} {...c} />
      ))}
    </section>
  );
};

export default List;
