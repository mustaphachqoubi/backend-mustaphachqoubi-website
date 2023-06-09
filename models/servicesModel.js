const mongoose = require('mongoose');

const Schema = mongoose.Schema

const optionsSchema = new Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  number: { type: Number, require: true}
})

const featuresSchema = new Schema({
  name: { type: String, require: true }
})

const itemsSchema = new Schema({
  title: { type: String, require: true },
  features: { type: [ featuresSchema ], require: true },
  price: { type: Number, require: true },
  options: { type: [ optionsSchema ], require: false },
  number: { type: Number, require: true}
}) 

const servicesSchema = new Schema({
  title: {type: String, require: true},
  items: {type: [ itemsSchema ], require: true},
  number: { type: Number, require: true}
}, { timestamps: true })

module.exports = mongoose.model('Services', servicesSchema)
