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
var pythonpath = path.join(__dirname, '.', 'bow.py');

var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-2'});
var akid = "AKIATG2HJP6QN2MB2YE2"
var secret = "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"

function remove_stopwords(str) {  
  res = []
  words = tokenizer.tokenize(str);
  for(i=0;i<words.length;i++) {
     word_clean = words[i].split(".").join("")
     if(!stopwords.includes(word_clean)) {
         res.push(word_clean)
     }
  }
  return(res.join(' '))
}   

function node_bow(str){
  stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']
  var txt = remove_stopwords(req.body.text)
  tokens = tokenizer.tokenize(txt);
  const lowercasedTokens = tokens.map(token => token.toLowerCase());
  bow = new Map();
  lowercasedTokens.forEach(token => {
    if(bow.has(token)){
      bow.set(token, (bow.get(token)+1));
    }
    else{
      bow.set(token, 1);
    }
  });
  sortedbow = new Map([...bow.entries()].sort((a, b) => b[1] - a[1]));
  console.log(sortedbow);
  res.send(Object.fromEntries(sortedbow));  

  // const { spawn } = require('child_process');
  // const pyProg = spawn('python', [pythonpath, req.body.text]);

  // let alldata = "";
  // pyProg.stdout.on('data', function(data) {
  //   alldata += data.toString();
  // });
  // pyProg.stderr.on('data', data => {
  //   console.error('err:' + data)
  // })
  // pyProg.on('exit', ()=> {
  //   console.log(alldata.toString())
  //   res.send(alldata);
  // });
}

function aws_bow(str, res){
  AWS.config.update({accessKeyId: akid, secretAccessKey: secret});
  var lambda = new AWS.Lambda();
  var params = {
    FunctionName: 'bag_of_words',/* required */
    Payload: JSON.stringify({
      "text": str,
      "option": "none"
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
require('./tokenizer');
router.post("/getBOW", jsonParser, (req, res) => {
  aws_bow(req.body.text, res);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
