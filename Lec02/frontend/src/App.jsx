import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // for web request - axios use
  return (
    <>
      <h1>Chai Aur Full Stack</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;

// Proxy - to standardization using /api/jokes in .get() method add in the vite.config.js file

// Build folder not to add in backend its a bad practice again and again build krna hoga coz propagate nhi hoga changes pr
