// Narrative list header with tabs

import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

// Header state
class State {
  tabs = [
    'My narratives',
    'Shared with me',
    'Tutorials',
    'Public'
  ];
  @observable selectedTab = 0;  // index into the tabs

  selectTab(idx) {
    if (idx === this.selectedTab) return
    this.selectedTab = idx;
  }
}

// Active and inactive tab styles
const tabClasses = {
  active: 'dib pv3 ph3 br--top br2 bt bl br b bg-light-gray b--black-20',
  inactive: 'dib pv3 pointer br--top br2 dim ph3 b--black-10 black-80'
}

// Header view
const Component = observer(({state}) =>
  <div className='flex justify-between'>
    <div className='pt2'>
      <ul className='list pa0 ma0 flex items-center' style={{position: 'relative', top: '1px'}}>
        { 
          state.tabs.map((tabText, idx) => {
            const className = state.selectedTab === idx ? tabClasses.active : tabClasses.inactive;
            return <li key={tabText} className={className} onClick={() => state.selectTab(idx)}>
              { tabText }
            </li>
          })
        }
      </ul>
    </div>

    <a className='pointer dim dib pa2 white br2 b bg-green dib' style={{marginTop: '1rem', height: '2.25rem'}}>
      <i className="fas fa-plus"></i> New Narrative
    </a>
  </div>
);

export default {Component, State};
