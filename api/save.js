const { kv } = require('@vercel/kv');

const KEY = 'tech-manager-data';

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }
    try {
        const body = req.body && typeof req.body === 'object'
            ? req.body
            : JSON.parse(req.body || '{}');
        const data = { ...body, exportDate: new Date().toISOString() };
        await kv.set(KEY, data);
        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('KV save error:', err);
        return res.status(500).json({ success: false, error: err.message });
    }
};
