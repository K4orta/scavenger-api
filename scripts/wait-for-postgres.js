const { Client } = require('pg')
const { exec } = require('child_process');

let timer
console.log('MIGRATTTTINGG')
function tryConnection() {
  const c = new Client()
  c.connect()

  c.query('SELECT NOW() as now')
    .then(res => {
      clearInterval(timer);
      exec(`${process.cwd()}/node_modules/.bin/db-migrate up`, (err, stdout, stderr) => {
        if (err) {
          console.log(err)
          // node couldn't execute the command
          return;
        }
      
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      })
      console.log('Done!')
      c.end()
    })
    .catch(() => console.log('Waiting to connect to database...'))
}

timer = setInterval(tryConnection, 1000)