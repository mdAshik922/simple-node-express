const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!, i learn Es6 and node express with react')
})
const users =[
    { id: 0, name: 'Sabana', email: 'sabana@gmail.com', phone: '+01784569321'},
    { id: 1, name: 'Kala', email: 'kala@gmail.com', phone: '+01254863784'},
    { id: 2, name: 'Bobita', email: 'bobita@gmail.com', phone: '+01248763254'},
    { id: 3, name: 'Raju', email: 'raju@gmail.com', phone: '+01243874987'},
    { id: 4, name: 'Molla', email: 'molla@gmail.com', phone: '+0124568796'},
    { id: 5, name: 'Hero', email: 'hero@gmail.com', phone: '+012458796'},
]
app.get('/users', (req, res) =>{
   
     const search = req.query.search;
    if(search){
 const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes
 (search));
  
res.send(searchResult);
}
   else{
        res.send(users)
    }
})
app.get('/users/:id', (req, res) =>{
const id = req.params.id;
const user = users[id];
res.send(user);
});

//app post method
app.post('/users', (req, res) =>{
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('succes',req.body)
  // res.send(JSON.strringify(newUser))
  res.json(newUser)
})
app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('yemma')
})
app.listen(port, () => {
  console.log('Listen to port', port)
})