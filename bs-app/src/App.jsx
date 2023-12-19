// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/myFooter";
import Welcome from "./components/Welcome";

function App() {
	return (
		<div className="App">
			<MyNav />
			<Welcome name="GattoRude" fontSize="fs-2" textSize="fs-3" />
			<MyFooter />
		</div>
	);
}

export default App;
