const { kv } = require('@vercel/kv');

const KEY = 'tech-manager-data';

module.exports = async (req, res) => {
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    try {
        const data = await kv.get(KEY);
        if (!data) {
            return res.status(404).json({ error: 'No data found' });
        }
        return res.status(200).json(data);
    } catch (err) {
        console.error('KV load error:', err);
        return res.status(500).json({ error: err.message });
    }
};
