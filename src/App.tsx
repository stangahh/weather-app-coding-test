
import "./App.css";
import Weather from "./Components/Organisms/Weather";

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <Weather></Weather>
      <p className="text-sm">Copyright Jesse Stanger 2023</p>
    </div>
  );
};

export default App;
