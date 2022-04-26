const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('Hey! Look mama I can code with NODE.js')
});

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
    res.send(users)
});

app.get('/user/:id', (req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find( u => u.id === id)
    res.send(user);
})

app.listen(port, ()=>{
    console.log('Hello Node.js, I am coming.', port);
});