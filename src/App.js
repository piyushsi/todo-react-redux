import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import { store } from './store';
import Todos from "./components/todos";

function App() {
	return (
    <Provider store={store}>
		<div className="App">
		<Todos/>
		</div>
    </Provider>

	);
}

export default App;
