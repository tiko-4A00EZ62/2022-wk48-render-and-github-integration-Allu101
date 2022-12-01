const express = require('express');
const {
  createInvoice,
  deleteById,
  getAllInvoices,
  getById,
  updateInvoice,
} = require('../controllers/electricity');

const router = express.Router();

router.post('/', createInvoice);
router.delete('/:id', deleteById);
router.get('/', getAllInvoices);
router.get('/:id', getById);
router.put('/', updateInvoice);

module.exports = router;
