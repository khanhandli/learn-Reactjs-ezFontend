import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
	useEffect(() => {
		const fetchProducts = async () => {
			const params = {
				_limit: 10,
			}
			const productList = await productApi.getAll(params);
			console.log(productList);
		}

		fetchProducts();
	}, []);

	const handleTodoFormSubmit = (value) => {
		console.log(value)
	}

	return (
		<div className="App">
			<Header />
			<h1>Header</h1>

			{/* Link router */}
			{/* <p><Link to="/todos">Todos</Link></p>
			<p><Link to="/albums">Album</Link></p> */}

			{/* Nav link router */}
			<p><NavLink to="/todo-list">Todos</NavLink></p>
			<p><NavLink to="/albums">Album</NavLink></p>

			{/* Routing  */}
			<Switch>
				<Redirect from="/home" to="/" exact />
				<Redirect from="/post-list/:postId" to="/posts/:postId" exact />


				<Route path="/" component={CounterFeature} exact />
				<Route path="/todo-list" component={TodoFeature} />
				<Route path="/albums" component={AlbumFeature} />

				<Route component={NotFound} />
			</Switch>

			{/* <AlbumFeature /> */}


			<h1>Footer</h1>
		</div >
	);
}

export default App;
