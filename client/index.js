import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
	<Main />,
	document.getElementById('app') // make sure this is the same as the id of the div in index.html
);
