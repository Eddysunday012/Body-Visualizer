import HumanBody from "@/components/HumanBody";
import bodyparts from "@/assets/humanBody.json";

function App() {
  return (
    <div className="flex h-screen w-screen justify-center bg-slate-500">
      <HumanBody
        bodyparts={bodyparts}
        className="fill-[#edfafa] stroke-blue-950 stroke-1"
      />
    </div>
  );
}

export default App;
