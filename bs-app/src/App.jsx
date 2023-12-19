// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/myFooter";

function App() {
	return (
		<div className="App">
			<MyNav />
			<MyFooter />
		</div>
	);
}

export default App;
