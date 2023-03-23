import "./App.css";
import Header from "./components/header/Header";
import Routers from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routers/>
    </div>
  );
}

export default App;
