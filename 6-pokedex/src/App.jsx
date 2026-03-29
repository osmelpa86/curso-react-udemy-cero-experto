import "./App.css";
import { BottomBar } from "./components/BottomBar";
import { PokeList } from "./components/PokeList";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <div>
      <TopBar />
      <PokeList />
      <BottomBar />
    </div>
  );
}

export default App;
