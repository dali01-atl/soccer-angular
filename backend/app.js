const express = require('express');
const app = express();
//declaration du body parser qu'on a installé a traver npm i --save body-parser
const bodyParser = require('body-parser');
// import de notre module multter npm i -- save multer
const multer = require('multer');
// le path qui me doonne l'accer pour manipuler les dossier dans le serveur 
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// fixation du path pour muler(define image folder destination)
app.use('/images', express.static(path.join('backend/images')));
//importer match.js (import match model from models/match.js)
const Player = require('./models/player')
const Match = require('./models/match')
const User = require('./models/user')

// import mongoose module ????? yzid wa7dou 
const mongoose = require('mongoose');
const user = require('./models/user');
const player = require('./models/player')

//connect application to db named soccerDB et on change test par notre db "soccerDB" sil nn'existe pas il la crée 
// connect application to db 
// if not existe , create DB,else connect automatically
mongoose.connect('mongodb://localhost:27017/soccerDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// define images to insert 
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
//
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        // verify is image correspends to mine type 
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        // cb est call back (retour du request)
        cb(null, 'backend/images')
    },
    // define file name 
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
// la res est elle allMatches????? a verifier 
app.get('/allMatches', (req, res) => {
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    Match.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'here all objects',
                matches: docs
            });
        }
    })

});
// 

app.post('/addMatch', multer({ storage: storage }).single('image'), (req, res) => {
    console.log('here in adding', req.body);
    //
    url = req.protocol + '://' + req.get('host');
    // on a cree un new Match (notre model) et resevoire notre request from the front end a traver req.body 
    // apres installé npm i --save body-parser pour parser sur notre attribue dans un autre bash 
    const match = new Match({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        image: url + '/images/' + req.file.filename
    });

    console.log(('match after adding', match));
    // pour sauvé notre dooné inserer 
    //.then() est une fonction prédefinie pour donner un ordre apres le save 
    match.save().then(
        result => {
            if (result) {
                res.status(200).json({
                    message: "added successfully"
                })
            }
        }
    );
})


app.delete('/deleteMatch/:id', (req, res) => {
    //req.params.id : pour recupérer notre id automatiquement 
    console.log('here in delete', req.params.id);
    // _id c'est l'attribue dans la db 
    // delet one fct predefinie dans mongoose
    Match.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'deleted successfully'
                })
            }

        }
    )
});


app.get('/displayMatch/:id', (req, res) => {
    // req.params.id pour trouver l'id envoyer par le front 
    console.log('here in get', req.params.id);
    Match.findOne({ _id: req.params.id }).then(
        data => {
            if (data) {
                //res eli bech nraja3ha lel front b objet json
                res.status(200).json({
                    match: data
                    //on a crée match pour qu'on puissent l'envoyer au front dans service 
                })
            }
        }
    )
})


app.put('/editMatch/:id', (req, res) => {
    console.log("here in edit", req.params.id);
    const match = new Match({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        _id: req.body._id,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo
    });
    // update takes 2 params : 1st for search object and the 2nd to replace it 
    Match.update({ _id: req.params.id }, match).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'updated successfully'
                })
            }
        }
    )
});
// player .. get player.........*
app.get('/allPlayers', (req, res) => {
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    Player.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'here all objects',
                players: docs
            });
        }
    })

});
// add palyer
app.post('/addPlayer', multer({ storage: storage }).single('image'), (req, res) => {
    console.log('here in adding', req.body);
    //
    url = req.protocol + '://' + req.get('host');
    // on a cree un new Match (notre model) et resevoire notre request from the front end a traver req.body 
    // apres installé npm i --save body-parser pour parser sur notre attribue dans un autre bash 
    const player = new Player({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        date: req.body.date,
        grandTitre: req.body.grandTitre,
        commentaire: req.body.commentaire,

        image: url + '/images/' + req.file.filename
    });

    console.log(('player after adding', player));
    // pour sauvé notre dooné inserer 
    //.then() est une fonction prédefinie pour donner un ordre apres le save 
    player.save().then(
        result => {
            if (result) {
                res.status(200).json({
                    message: "added successfully"
                })
            }
        }
    );
})
app.delete('/deletePlayer/:id', (req, res) => {
    //req.params.id : pour recupérer notre id automatiquement 
    console.log('here in delete', req.params.id);
    // _id c'est l'attribue dans la db 
    // delet one fct predefinie dans mongoose
    Player.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'deleted successfully'
                })
            }

        }
    )
});
//display player
app.get('/displayPlayer/:id', (req, res) => {
    // req.params.id pour trouver l'id envoyer par le front 
    console.log('here in get', req.params.id);
    Player.findOne({ _id: req.params.id }).then(
        data => {
            if (data) {
                //res eli bech nraja3ha lel front b objet json
                res.status(200).json({
                    player: data
                    //on a crée match pour qu'on puissent l'envoyer au front dans service 
                })
            }
        }
    )
})
// edit player
app.put('/editPlayer/:id', (req, res) => {
    console.log("here in edit", req.params.id);
    const player = new Player({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        _id: req.body._id,
        date: req.body.date,
        grandTitre: req.body.grandTitre,
        commentaire: req.body.commentaire

    });
    // update takes 2 params : 1st for search object and the 2nd to replace it 
    Player.update({ _id: req.params.id }, player).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'updated successfully'
                })
            }
        }
    )
});

// partie user


app.get('/allUsers', (req, res) => {
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    User.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'here all objects',
                users: docs
            });
        }
    })

});
// add user ou signup
app.post('/addUser', (req, res) => {
    // console.log('here in adding', req.body);
    // //
    // url = req.protocol + '://' + req.get('host');
    // on a cree un new Match (notre model) et resevoire notre request from the front end a traver req.body 
    // apres installé npm i --save body-parser pour parser sur notre attribue dans un autre bash 
    const user = new User({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        tel: req.body.tel,
        pwd: req.body.pwd

        // image: url + '/images/' + req.file.filename
    });

    console.log(('user after adding', user));
    // pour sauvé notre dooné inserer 
    //.then() est une fonction prédefinie pour donner un ordre apres le save 
    user.save().then(
        result => {
            if (result) {
                res.status(200).json({
                    message: "added successfully"
                })
            }
        }
    );
})
app.delete('/deleteUser/:id', (req, res) => {
    //req.params.id : pour recupérer notre id automatiquement 
    console.log('here in delete', req.params.id);
    // _id c'est l'attribue dans la db 
    // delet one fct predefinie dans mongoose
    User.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'deleted successfully'
                })
            }

        }
    )
});
//display player
app.get('/displayPlayer/:id', (req, res) => {
    // req.params.id pour trouver l'id envoyer par le front 
    console.log('here in get', req.params.id);
    User.findOne({ _id: req.params.id }).then(
        data => {
            if (data) {
                //res eli bech nraja3ha lel front b objet json
                res.status(200).json({
                    user: data
                    //on a crée match pour qu'on puissent l'envoyer au front dans service 
                })
            }
        }
    )
})
// edit player
app.put('/editUser/:id', (req, res) => {
    console.log("here in edit", req.params.id);
    const user = new User({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        pwd: req.body.pwd,
        email: req.body.email,
        tel: req.body.tel

    });
    // update takes 2 params : 1st for search object and the 2nd to replace it 
    User.update({ _id: req.params.id }, user).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'updated successfully'
                })
            }
        }
    )
});


// login
app.post('/login', (req, res) => {
    console.log('here in login');
    console.log('req body', req.body);

    User.find({ email: req.body.email, pwd: req.body.pwd }).then(
        data => {
            console.log('login data', data);
            if (data) {
                res.status(200).json({
                    user: data
                })
            }

        }

    );
})
// search 
app.get('/api/search/:term', (req, res) => {
    console.log('req.body', req.body);
    console.log('req.params', req.params.term);
    Match.find({ teamOne: req.params.term }).then(
        result => {
            console.log('Here searched result', result);
            if (result) {
                res.send(result);
            }
        }
    )
});
// staduim
app.get('/allStadium', (req, res) => {
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    stadium.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'here all objects',
                stadiums: docs
            });
        }
    })

});
// add palyer
app.post('/addStudium', (req, res) => {
    console.log('here in adding', req.body);
    //
   
    // on a cree un new Match (notre model) et resevoire notre request from the front end a traver req.body 
    // apres installé npm i --save body-parser pour parser sur notre attribue dans un autre bash 
    const stadium = new Stadium({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        name: req.body.name,
        category: req.body.category,
        capacity: req.body.capacity,

    });

    console.log(('player after adding', stadium));
    // pour sauvé notre dooné inserer 
    //.then() est une fonction prédefinie pour donner un ordre apres le save 
    stadium.save().then(
        result => {
            if (result) {
                res.status(200).json({
                    message: "added successfully"
                })
            }
        }
    );
})



module.exports = app;