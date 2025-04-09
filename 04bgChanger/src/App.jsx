import { useState } from "react";

const colors = [
  { name: "Red", value: "red" },
  { name: "Green", value: "green" },
  { name: "Blue", value: "blue" },
  { name: "Purple", value: "purple" },
  { name: "Pink", value: "pink" },
  { name: "Yellow", value: "goldenrod" },
  { name: "Orange", value: "orange" },
  { name: "Cyan", value: "cyan" },
  { name: "Teal", value: "teal" },
  { name: "Lime", value: "limegreen" },
  { name: "Magenta", value: "magenta" },
  { name: "Brown", value: "saddlebrown" },
];

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300 ease-in-out transition-all"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-2xl bg-white/80 backdrop-blur-lg px-5 py-4 rounded-3xl">
          {colors.map((c, i) => (
            <button
              key={i}
              onClick={() => setColor(c.value)}
              className="px-5 py-2 rounded-full font-semibold text-white shadow-md transform transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20 ring-2 ring-transparent hover:ring-white hover:ring-offset-2 hover:ring-offset-white/40
              bg-white/80 backdrop-blur-lg"
              style={{ backgroundColor: c.value }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
