const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const express = require('express');
const { urlencoded, json } = require('body-parser');
const app = express();
const multer = require('multer')
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('image')
app.use(awsServerlessExpressMiddleware.eventContext());
app.use(urlencoded({ extended: false }));
app.use(json());

app.post('/upload', multerUploads, (req, res) => {
    return res.status(200).json({
        messge: 'Image',
        data: {
            size: req.file.size
        }
      })
});

app.get('/', (req, res) => res.send('Hello world!'));

const binaryMimeTypes = [
  'image/gif',
  'image/jpg',
  'image/jpeg',
  'text/css',
  'text/html'
];

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);

module.exports.express = (event, context) => awsServerlessExpress.proxy(server, event, context);