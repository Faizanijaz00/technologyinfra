const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));
app.use(express.json({ limit: '10mb' }));

// API endpoint to save data
app.post('/api/save', (req, res) => {
    try {
        const data = req.body;
        data.exportDate = new Date().toISOString();
        const filePath = path.join(__dirname, 'data', 'technology-manager-data.json');
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log('Data saved to file:', new Date().toLocaleTimeString());
        res.json({ success: true });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// API endpoint to load data
app.get('/api/load', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'data', 'technology-manager-data.json');
        if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            res.json(data);
        } else {
            res.status(404).json({ error: 'No data file found' });
        }
    } catch (error) {
        console.error('Error loading data:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Data will auto-save to data/technology-manager-data.json');
});
