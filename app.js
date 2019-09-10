const fs = require('fs');
const http = require('http');

const readFile = (file) => {
  return new Promise (( resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject (err);
      } else {
        resolve(data.toString())
      }
    });
  });
};

const addGuest = (guest)=> {
  return readFile('./guests.json')
    .then(data => {
      const guests = JSON.parse(data);
      let max = guests.reduce((acc, guest) => {
        if(guest.id > acc){
          acc = guest.id;
        }
        return acc;
      }, 0);
      guest.id = max + 1;
      guests.push(guest);
      return writeFile('./guests.json', JSON.stringify(guests));
    })
    .then(()=> {
      return guest;
    });
    }

http.createServer((req, res )=> {
  if(req.url === '/api/guests') {
    readFile('./guests.json')
    .then(data => {
      res.write(data);
      res.end();
      })}
      else if(req.url === '/') {
        readFile('./index.html')
        .then(data => {
          res.write(data);
          res.end();
          })
      .catch(ex => {
        res.statusCode = 500;
        res.write(ex.message);
        res.end();
      })
    }}).listen(3000);
