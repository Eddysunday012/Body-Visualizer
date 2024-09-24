import HumanBody from "./components/HumanBody";
import bodyparts from "./assets/humanBody.json";

function App() {
  return (
    <div className="flex h-screen w-screen justify-center">
      <HumanBody bodyparts={bodyparts} />
    </div>
  );
}

export default App;
