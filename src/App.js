import "./App.css";
import Weather from "./Organisms/Weather";

export const App = () => {
  return (
    <div className="App">
      <Weather></Weather>
      <p className="text-sm">Copyright Jesse Stanger 2023</p>
    </div>
  );
};

export default App;
