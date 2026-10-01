const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database temporaneo in memoria (sostituibile con MongoDB o SQLite)
let savedCats = [];

// API: Recupera la lista dei gatti salvati
app.get("/api/cats", (req, res) => {
    res.json({ success: true, data: savedCats });
});

// API: Salva un nuovo gatto
app.post("/api/cats", (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ success: false, message: "URL mancante" });
    }
    
    const newCat = { id: Date.now(), url };
    savedCats.unshift(newCat); // Aggiunge in cima alla lista
    res.status(201).json({ success: true, data: newCat });
});

// API: Elimina un gatto salvato
app.delete("/api/cats/:id", (req, res) => {
    const catId = Number(req.params.id);
    savedCats = savedCats.filter(cat => cat.id !== catId);
    res.json({ success: true, message: "Gatto rimosso" });
});

app.listen(PORT, () => {
    console.log(`🚀 Backend attivo su http://localhost:${PORT}`);
});