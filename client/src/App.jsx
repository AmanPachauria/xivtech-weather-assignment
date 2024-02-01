import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [temp, setTemp] = useState({});

  const handleClick = async () => {
    const newText = text.split(", ");
    const resp = await axios.post(`http://localhost:8000`, {
      city: newText,
    });
    setTemp(resp.data.weather);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3>Xivtech</h3>
      <div className="flex flex-col items-center">
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-500 p-2"
          />
        </div>
        <div>
          <button onClick={handleClick} className="bg-blue-500 text-white p-2 mt-2">
            Submit
          </button>
        </div>
      </div>
      {Object.keys(temp).length > 0 ? (
        <div className="mt-4">
          {Object.entries(temp).map(([city, temperature]) => (
            <p key={city} className="mb-2">
              Temp - {city}: {temperature}
            </p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
