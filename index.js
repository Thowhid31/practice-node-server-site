const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.get('/', (req, res)=>{
    res.send('Hey! Look mama I can code with NODE.js')
});

app.use(cors());
app.use(express.json())

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01700000000'},
    {id: 2, name: 'Sahana', email: 'sahana@gmail.com', phone: '01700000001'},
    {id: 3, name: 'Sohini', email: 'sohini@gmail.com', phone: '01700000004'},
    {id: 4, name: 'Saima', email: 'saima@gmail.com', phone: '01700000003'},
    {id: 5, name: 'Samia', email: 'samia@gmail.com', phone: '01700000005'},
    {id: 6, name: 'Sohana', email: 'sohana@gmail.com', phone: '01700000007'},
    {id: 7, name: 'Somaiya', email: 'somaiya@gmail.com', phone: '01700000008'},
    {id: 8, name: 'Sakya', email: 'sakya@gmail.com', phone: '01700000009'}
]

app.get('/users', (req, res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else{
        res.send(users)
    }
});

app.get('/user/:id', (req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find( u => u.id === id)
    res.send(user);
});

app.post('/user', (req, res)=>{
    console.log('request', req.body);
    const user = req.body;
    user.id =  users.length + 1;
    users.push(user);
    res.send(user)
})  

app.get('/fruits', (req, res)=>{
    res.send(['Mango', 'Apple', 'Oranges'])
})

app.get('/fruit/mango/fazle', (req, res)=>{
    res.send('sour sour fazle flavour')
})

app.listen(port, ()=>{
    console.log('Hello Node.js, I am coming.', port);
});