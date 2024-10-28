import Footer from './features/Footer/Footer.jsx';
import Header from './features/Header/Header';
import TodoList from './features/todos/TodoList.jsx';
function App() {
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
