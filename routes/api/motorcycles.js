const express = require('express')
const router = express.Router()

const Motorcycle = require('../../models/Motorcycle')

router.get('/test', (req, res) => res.json({msg: 'server works'}))

// GET /api/motorcycles
router.get('/', (req, res) => {
  Motorcycle.find()
    .then(info => res.json(info))
    .catch(err => res.status(404).json({msg: 'no motorcycles found'}))
})

// POST /api/motorcycles
// Create new motorcycle 
router.post('/', (req, res) => {
  const newMotorcycle = new Motorcycle({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
  })

  newMotorcycle.save().then(info => res.json(info))
})

// DELETE /api/motorcycles
router.delete('/', (req, res) => {
  Motorcycle.findOneAndRemove({_id: req.body.id}).then(() => {
    res.json({success: true})
  })
})

// UPDATE /api/motorcycles/update/:id
router.post('/update/:id', (req, res) => {
  Motorcycle.findOneAndUpdate(
    {_id: req.params.id},
    {
      $set: {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
      },
    },
    {new: true},
  )
    .then(info => {
      res.json(info)
    })
    .catch(err => res.status(400).json({msg: 'Could not update'}))
})

module.exports = router