import { Router } from 'express';
import { Price } from '../models/Price';

const router = Router();

router.get('/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const data = await Price.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

module.exports = router;
