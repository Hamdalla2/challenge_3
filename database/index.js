const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  'id':{type:Number, unique:true},
  "name": String,
  "owner": {
    "login": String,
  },
  "html_url": String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = function(repos){
  for(var i=0;i<repos.length;i++){
var repo1=new Repo({
  'id':repos[i].id,
  "name":repos[i].name,
  "owner": {
    "login": repos[i].owner.login,
  },
  "html_url": repos[i].html_url
});
repo1.save(function (err) {
  if (err) {return console.error(err)};
  console.log("Saved to collection.");
});
  }
}

let find = function (callback){
  Repo.find({}).limit(25).then((data)=>{
    callback(data)
  })
}

module.exports.save = save;
module.exports.find = find;
