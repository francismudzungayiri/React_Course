import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("#FFD400");
  let bgColors = [
    { text: "red", color: "#FF0052" },
    { text: "green", color: "#00C68D" },
    { text: "blue", color: "#0055DA" },
  ];

  function changeColor(newcolor) {
    setColor(newcolor);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap fixed bottom-20 justify-center inset-x-0 px-3">
        <div className="flex flex-wrap gap-4 bg-white justify-center px-4 py-3 shadow-2xl rounded-2xl">
          {bgColors.map((btn) => {
            return (
              <Button
                key={btn.color}
                text={btn.text}
                color={btn.color}
                btnClick={() => changeColor(btn.color)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
