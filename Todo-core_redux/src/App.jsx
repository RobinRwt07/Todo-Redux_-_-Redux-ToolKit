import Footer from './features/Footer/Footer.jsx';
import Header from './features/Header/Header';
import TodoList from './features/todos/TodoList.jsx';
import { store } from './store.js';

function App() {
	// subscribe method register the change listener. this listener gets called every time action is dispatch or state updated and return function to unregister the listerent
	store.subscribe(() => {
		console.log("action dispatch");
		console.log(store.getState());
	});

	return (
		<div className="App">
			<nav>
				<section>
					<h2>Redux Fundamentals Example</h2>
				</section>
			</nav>
			<main>
				<section className="medium-container">
					<h2>Todos</h2>
					<div className="todoapp">
						<Header />
						<TodoList />
						<Footer />
					</div>
				</section>
			</main>
		</div>
	)
}

export default App
