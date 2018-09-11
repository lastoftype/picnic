const Avatars = require('@dicebear/avatars').default
const MaleSpriteCollection = require('@dicebear/avatars-male-sprites').default
const FemaleSpriteCollection = require('@dicebear/avatars-female-sprites')
  .default
const gender = require('gender-guess')

let maleAvatars = new Avatars(MaleSpriteCollection)
let femaleAvatars = new Avatars(FemaleSpriteCollection)

const getAvatar = name => {
  let guessed = gender.guess(name).gender
  return guessed === 'M' ? maleAvatars.create(name) : femaleAvatars.create(name)
}

export default getAvatar
