const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Review');
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema(
    {
      orderName: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
      username: {
        type: String,
        required: true
    },
  },
{
        toJSON: {
        getters: true
      }
    }
  );
  
//   orderSchema.virtual('reviewCount').get(function() {
//     return this.reviews.length;
//   });
  
// create the combo order using the ComboSchema
const Order = model('Order', orderSchema);
  
// export the Order model
module.exports = Order;