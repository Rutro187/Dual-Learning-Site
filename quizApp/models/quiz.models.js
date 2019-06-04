const mongoose = require('mongoose');
const Quizzes = require('../schema/Quizzes');


async function getQuiz(req, res){
    try{
        const getRes = await Quizzes.find();
        console.log(getRes);
        res.send(getRes);
    }catch(err){
        console.log('Error:' + '' + err);
    }
}
function postQuiz(req, res){
        const postReq = new Quizzes({
            hash: 'abc123',
            title: 'Super Cool Quiz',
            description: 'A quiz thats cool',
            instructions: 'take the damn quiz',
            questions: ['this is a question', 'also a question', 'oh look another question'],
        })
        Quizzes.create({__id: 2}, function(err, postReq){
            if(err){
                return console.log('Error:' + ' ' + err)
            }
        })
}

module.exports.getQuiz = getQuiz;
module.exports.postQuiz = postQuiz;