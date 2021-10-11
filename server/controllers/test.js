const knex = require('../mysqldb')



exports.usersAll = async (req, res) => {
  knex
    .select('*')
    .from('users') 
    .then(userData => {
      res.json(userData)
      console.log('run successfully');
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving users: ${err}` })
    })
}

exports.usersCreate = async (req, res) => {
  knex('users')
    .insert({ 
      'idcode': Date(),
      'name': req.body.name,
      'email': req.body.email,
      'contact': req.body.contact,
      'address': req.body.address
    })
    .then(() => {
      res.json({ message: `user \'${req.body.name}\' by ${req.body.email} created.` })
    })
    .catch(err => {
      res.json({ message: `There was an error creating ${req.body.name} user: ${err}` })
    })
}

exports.usersUpdate = async (req, res) => {
  if(req.body.idcode === ""){
    res.json({message:'idcode is required'})
    return false
  }
  if(req.body.name === ""){
    res.json({message:'name is required'})
    return false
  }
  if(req.body.email === ""){
    res.json({message:'email is required'})
    return false
  }
  if(req.body.contact === ""){
    res.json({message:'contact is required'})
    return false
  }
  if(req.body.address === ""){
    res.json({message:'address is required'})
    return false
  }

  knex('users')
    .where('idcode', req.body.idcode)
    .update({
      'name': req.body.name,
      'email': req.body.email,
      'contact': req.body.contact,
      'address': req.body.address
    }) 
    .then(() => {
      res.json({ message: `User ${req.body.idcode} update.` })
    })
    .catch(err => {
      res.json({ message: `There was an error deleting ${req.body.idcode} user: ${err}` })
    })
}

exports.usersDelete = async (req, res) => {
  knex('users')
    .where('idcode', req.body.idcode)
    .del() 
    .then(() => {
      res.json({ message: `User ${req.body.idcode} deleted.` })
    })
    .catch(err => {
      res.json({ message: `There was an error deleting ${req.body.id} user: ${err}` })
    })
}
