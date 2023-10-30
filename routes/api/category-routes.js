const router = require('express').Router();
const { Category, Product } = require('../../models')

router.get('/', async (req, res) => {
  try{
    const categories = await Category.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(categories)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categories = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    });
    if (!categories) {
      res.status(404).json();
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const categories = await Category.create(req.body);
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json()
});

router.delete('/:id', async (req, res) => {
  try{ 
    const categories = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categories) {
      res.status(404).json();
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;