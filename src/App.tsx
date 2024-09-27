import HumanBody from "@/components/HumanBody";
import bodyparts from "@/assets/humanBody.json";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
// import { cn } from "@/lib/utils"

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-500">
      <Card className="w-[580px] h-[700px] content-center bg-gray-300">
        <CardHeader className="flex items-center">
          <CardTitle className="text-xl">Human Body</CardTitle>
        </CardHeader>
        <HumanBody
          bodyparts={bodyparts}
          className="fill-[#edfafa] stroke-blue-950 stroke-1"
        />
      </Card>
    </div>
  );
}

export default App;
