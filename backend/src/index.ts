import express, { type Express, type Request, type Response } from "express";
import fetch from "node-fetch";

const app: Express = express();
app.use(express.json());
const port = 3000;

app.get("/api", async (req: Request, res: Response) => {
  try {
    const response = await fetch("https://status.enka.network");
    if (response.ok) {
      res.send("UP");
    } else {
      res.send("DOWN");
    }
  } catch (error: any) {
    console.error(error.message);
    res.status(500);
  }
});

app.get("/profile/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await fetch(`https://enka.network/api/hsr/uid/${id}`, {
      headers: {
        "User-Agent": "StarRailProfileViewer",
      },
    });
    const profile = await response.json();
    res.send(profile);
  } catch (error: any) {
    console.error(error.message);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

//node src/index.ts to run
