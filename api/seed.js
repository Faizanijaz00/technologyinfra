const { kv } = require('@vercel/kv');
const seedData = require('../data/technology-manager-data.json');

const KEY = 'tech-manager-data';

module.exports = async (req, res) => {
    const force = req.query && (req.query.force === '1' || req.query.force === 'true');
    try {
        const existing = await kv.get(KEY);
        if (existing && !force) {
            return res.status(200).json({
                success: false,
                message: 'KV already has data. Add ?force=1 to overwrite.'
            });
        }
        const data = { ...seedData, exportDate: new Date().toISOString() };
        await kv.set(KEY, data);
        return res.status(200).json({
            success: true,
            overwritten: Boolean(existing),
            message: existing ? 'Existing data overwritten.' : 'KV seeded from data/technology-manager-data.json.'
        });
    } catch (err) {
        console.error('KV seed error:', err);
        return res.status(500).json({ success: false, error: err.message });
    }
};
