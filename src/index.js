import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

const state = new Dashboard.State();
const node = React.createElement(Dashboard.Component, {state});
const container = document.getElementById('root');
ReactDOM.render(node, container);
