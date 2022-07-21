const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 3001;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.get("/equipments", (req, res) => {
//   res.send("Receive GET request");
// });

// app.get("/equipment/:id", (req, res) => {
//   res.send("Received GET request with parameter");
// });

// app.post("/equipment", (req, res) => {
//   res.send("Received a POST request");
// });

// app.put("/equipment/:id", (req, res) => {
//   res.send("Received PUT request");
// });

// app.delete("/equipment/:id", (req, res) => {
//   res.send("Received DELETE request");
// });

app.get("/api/equipments", db.getEquipments);
app.get("/api/equipment/:id", db.getEquipmentById);
app.post("/api/equipment", db.createEquipment);
app.put("/api/equipment/:id", db.updateEquipment);
app.delete("/api/equipment/:id", db.deleteEquipment);

app.get("/api/reports", db.getReports);
app.get("/api/report/:id", db.getReportById);
app.post("/api/report", db.createReport);
app.put("/api/report/:id", db.updateReport);
app.delete("/api/report/:id", db.deleteReport);

app.get("/api/reportcount", db.getReportCount);
app.get("/api/joins", db.getAllJoin);

app.listen(port, () => {
  console.log(`REST API listening at http://localhost:${port}`);
});

// app.listen(port, {'192.168.43.230', 'localhost'}, () => {
//   console.log('Listening to port:  ' + 3000);
// });
