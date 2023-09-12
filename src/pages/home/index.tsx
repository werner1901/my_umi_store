import React from 'react';
import Carousel from './carousel/index'
import NavTable from './navtable/index'
import SearchInput from './searchinput/index'
import Recommend from './recommend';

export default () => {
  return (
    <div>
      <SearchInput />
      <Carousel />
      <NavTable />
      <Recommend />
    </div>
  );
};
