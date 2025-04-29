// pages/api/saveData.js
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      console.log("got here");
      const filePath = path.join(process.cwd(), "data.json");
      const fileContents = fs.readFileSync(filePath, "utf8");
      const newJson = fileContents ? JSON.parse(fileContents) : [];
      newJson.push(data);
      console.log("got here 2", newJson);
      // Writing data to a file
      fs.writeFileSync(filePath, JSON.stringify(newJson, null, 2));

      res.status(200).json({ message: "Data saved successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Failed to save data", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
