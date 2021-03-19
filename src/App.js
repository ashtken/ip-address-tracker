import "./styles/App.scss";
import { Header } from "./components/Header/Header";
import { Map } from "./components/Map/Map";
import { IPProvider } from "./contexts/IPContext";

function App() {
	return (
		<IPProvider>
			<div className="App">
				<Header />
				<Map />
			</div>
		</IPProvider>
	);
}

export default App;
