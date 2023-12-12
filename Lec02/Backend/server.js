import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// middleware - stop in between
// app.use(express.static("dist"));

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "The Mathematician's Dog",
      content:
        "Why was the mathematician's dog always so calm? Because he had his own natural log!",
    },
    {
      id: 2,
      title: "Coffee Break",
      content:
        "Why don't coffee beans ever get into arguments? Because they know how to espresso themselves!",
    },
    {
      id: 3,
      title: "The Generous Clown",
      content:
        "Why did the generous clown go to jail? Because he was caught giving too many free tickets!",
    },
    {
      id: 4,
      title: "The Invisible Man",
      content:
        "I used to be a baker because I kneaded dough. Now, I'm a banker because I need dough.",
    },
    {
      id: 5,
      title: "Light Bulb Moment",
      content:
        "How many software engineers does it take to change a light bulb? None, that's a hardware issue!",
    },
  ];
  res.send(jokes);
});

// For standardization resolving CORS errors use /api/jokes

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
