import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

// Components
import NarrativeList from './NarrativeList/index';

class State {
  @observable narrativeList = new NarrativeList.State();
}

const Component = observer(({state}) =>
  <section className='ph4 mt3 mw8 center'>
    <NarrativeList.Component state={ state.narrativeList } />
  </section>
)

export default {Component, State};
