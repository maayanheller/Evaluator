import * as express from 'express';
import * as tf from '@tensorflow/tfjs-node';
import * as path from 'path';
import * as bodyParser from 'body-parser';

const app = express();
const CLIENT_BUILD_PATH = path.join(__dirname, '../client');
const addition_model = tf.loadLayersModel('file://apps/api/src/assets/addition.model/additionModel.json');
const subtruction_model = tf.loadLayersModel('file://apps/api/src/assets/subtruction.model/subtructionModel.json');
const jsonParser = bodyParser.json()


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(CLIENT_BUILD_PATH));


const add = async(eq) => {
  try {
    const eqNums = eq.split(" ");
    const num1 = parseFloat(eqNums[0]);
    const num2 = parseFloat(eqNums[2]);
    const res = (await addition_model).predict(tf.tensor([[num1, num2]])).toString().replace(/[^0-9.]/g, '');
    return res;
  }

  catch (e) {
    console.log("Error: " + e.message)
    return e;
  }
}

const sub = async(eq) => {
  try {
    const eqNums = eq.split(" ");
    const num1 = parseFloat(eqNums[0]);
    const num2 = parseFloat(eqNums[2]);
    const res = (await subtruction_model).predict(tf.tensor([[num1, num2]])).toString().replace(/[^0-9.]/g, '');
    return res;
  }

  catch (e) {
    console.log("Error: " + e.message)
    return e;
  }

}

app.post('/api/calculate', jsonParser ,async (req, res) => {
  if(req.body.eq.indexOf('+') != -1) {
    const answer = await add(req.body.eq)
    res.json({result: answer});
  }

  else if(req.body.eq.indexOf('-') != -1) {
    const answer = await sub(req.body.eq)
    res.json({result: answer});
  }

  else {
    res.json({result: req.body.eq});
  }
  
  
});

app.get('*', (req, res) => {
  res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
