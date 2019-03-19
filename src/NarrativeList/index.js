import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

// Components
import Header from './Header';
import Filters from './Filters';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';

class State {
  constructor() {
    this.itemList = new ItemList.State();
    this.itemDetails = new ItemDetails.State(this.itemList);
  }
  @observable header = new Header.State();
  @observable filters = new Filters.State();
}

const Component = observer(({state}) =>
  <div>
    <Header.Component state={ state.header } />
    <div className='ba b--black-20'>
      <Filters.Component state={ state.filters } />
      <div className='pa3 flex'>
        <ItemList.Component state={state.itemList } />
        <ItemDetails.Component state={state.itemDetails } />
      </div>
    </div>
  </div>
);

export default {Component, State};
