const models = require('./models');
const { Friend } = models;
const ObjectId = require('mongoose').Types.ObjectId; 

const postFriend = (req, res) => {

  const { name, description, lastSeen } = req.body
  const entry = new Friend({ name, description, lastSeen })

  entry
    .save()
    .then(data => res.send({ data }))
    .catch(err => {
      res.send({ err })
    })
}

const getFriend = (req, res) => {
  Friend
    .find({ _id: req.params.id })
    .exec((err, data) => {
      res.send({ data })
    })
}

const getAllFriends = (req, res) => {
  Friend
    .find({})
    .exec((err, data) => {
      res.send({ data })
    })
}

const removeFriend = (req, res) => {

  const { id } = req.body;

  Friend
    .deleteOne({ _id: id })
    .exec((err, data) => {
      res.send({ data })
    })
}

const updateFriend = (req, res) => {

  Friend.findById(req.params.id, (err, friend) => {
  if (err) return console.log(err);

  Object.keys(req.body).forEach((key, i) => {
    friend[key] = req.body[key];
  });

  friend.save((err, updatedFriend) => {
    if (err) return console.log(err);
      res.send(updatedFriend);
    });
  });
  
}

module.exports = { postFriend, getFriend, getAllFriends, removeFriend, updateFriend } 