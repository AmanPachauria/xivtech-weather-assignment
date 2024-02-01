import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [temp, setTemp] = useState({});

  const handleClick = async () => {
    const newText = text.split(', ');
    const resp = await axios.post(`http://localhost:8000`, {
      city: newText,
    });
    setTemp(resp.data.weather);
  };

  return (
    <div>
      <h3>Xivtech</h3>
      <div>
        <div >
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
      {Object.keys(temp).length > 0 ? (
        <div>
          {Object.entries(temp).map(([city, temperature]) => (
            <p key={city}>Temp - {city}: {temperature}</p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;