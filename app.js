const app = require('express')();
const bodyParser = require('body-parser');
const showdown = require('showdown');
const converter = new showdown.Converter();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: false
}));


app.get('/', (req, res) => {
    return res.send("welcome");
})

app.post('/convert', (req, res) => {
    console.log(req.body);
    if(req.body.data != undefined && req.body.data != null){
        console.log(converter.makeHtml(req.body.data));
    } else {
        return res.send({
            Error: 'No data'
        });
    }
})

app.listen(port, (err) => {
    if(err) return 'err';
    console.log('listening');
});