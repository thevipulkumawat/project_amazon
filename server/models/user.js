const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
      name: {
            require: true,
            type: String,
            trim: true,
      },
      email: {
              require: true,
              type: String,
              trim: true,
              validate: {
               validator: (value) => {

                    return value.match(re);
            },
               message: 'please enter a valid email address',
            },
      },
      password:{
              require: true,
              type: String,
//              validate: {
//                             validator: (value) =>
//                                  return value.length > 6;
//                          },
//                             message: 'please enter a long password',
//                          },

      },
      address: {
              type: String,
              default: '',
      },
      type: {
             type: String,
             default: 'user',
      },
//cart
});

const User = mongoose.model('User', userSchema);
module.exports = User;