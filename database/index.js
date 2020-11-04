const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/info');

let xSchema = mongoose.Schema({
  'id':{type:Number, unique:true},
  "name": String,
  "email": String,
  "password": String,
  "line1":String,
  "line2":String,
  "city":String,
  "state":String,
  "zipcode":Number,
  "phone":Number,
  "creditcard":Number,
  "expiry":String,
  "cvv":Number,
  "zipcodecc":Number
});

let Info = mongoose.model('Info', xSchema);

let save = function(data){
  for(var i in data){
var info=new Info({
  "name": data.name,
  "email": data.email,
  "password": data.password,
  "line1":data.line1,
  "line2":data.line2,
  "city":data.city,
  "state":data.state,
  "zipcode":data.zipcode,
  "phone":data.phone,
  "creditcard":data.creditcard,
  "expiry":data.expiry,
  "cvv":data.cvv,
  "zipcodecc":data.zipcodecc
});
info.save(function (err) {
  if (err) {return console.error(err)};
  console.log("Saved to collection.");
})}};

let find = function (callback){
  Info.find(function(err, data){
    if(err){
    callback(err, null)}
    callback(null, data)
  })
}

module.exports.save = save;
module.exports.find = find;
