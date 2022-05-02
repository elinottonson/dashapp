// server/index.js

const express = require("express");
var bodyParser = require('body-parser')
const cors = require('cors');
const tokenizeText = require("./tokenizer");
const router = express.Router()

const PORT = process.env.PORT || 3001;

const app = express();
// create application/json parser
var jsonParser = bodyParser.json()
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cors());

app.use('/', router)
var natural = require('natural');
var tokenizer = new natural.WordPunctTokenizer();
var path = require('path');
const { text } = require("body-parser");

var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
var akid = process.env.akid
console.log(akid)
var secret = process.env.secret
console.log(secret)

function aws_bow(str, tokenizer, cap, stop, punct, res){
  AWS.config.update({accessKeyId: akid, secretAccessKey: secret});
  var lambda = new AWS.Lambda();
  console.log(tokenizer)
  var params = {
    FunctionName: 'bow_tool',/* required */
    Payload: JSON.stringify({
      "text": str,
      "tokenizer": tokenizer,
      "cap": cap,
      "stop": stop,
      "punct": punct
    })
  };
  lambda.invoke(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else{
      json_bow = JSON.parse(data.Payload)
      console.log(json_bow)
      res.send(json_bow['body'])         // successful response
    }
  });
}

router.post("/getBOW", jsonParser, (req, res) => {
  aws_bow(req.body.text, req.body.tokenizer, req.body.cap, req.body.stop, req.body.punct, res);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
