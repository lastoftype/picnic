# Picnic 
Nourish your most important relationships in meaningful ways. Picnic is like a Fitbit for your social life. 

![screenshot 2018-09-10 07 48 21](https://user-images.githubusercontent.com/3628831/45295796-ee0e2580-b4cd-11e8-9574-02432f77e31b.png)

## Install
```
$ git clone git@github.com:lastoftype/picnic.git
$ cd picnic
$ yarn
```

## Run local dev version
### Run mongodb (if you don't have a mlab.com `MONGODB_URI` value in the `.env` file)
```
$ mongod
```

### Then run app locally
```
$ yarn server
$ // Will set up server on localhost:4000 and API server on localhost:4000/api
```

## Deploy
```
$ yarn deploy
$ // now && now alias
```

## Credits
This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

The UI design for this project was also heavily influenced by [Stripe.com](https://stripe.com).