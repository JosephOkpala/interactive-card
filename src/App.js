import "./App.css";
import Card from "./components/Card";
import CardInfo from "./components/CardInfo";
import background from "./images/bg-main-desktop.png";

function App() {
  return (
    <div className="App">
      <img
        style={{ height: "100vh" }}
        src={background}
        alt=""
        className="background"
      />
      <div className="card-container">
        <Card />
        <CardInfo />
      </div>
    </div>
  );
}

export default App;
