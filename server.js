const dns = require('dns');
dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
]);

require('dotenv').config();
const connectDB = require('./src/db/db');
const app = require('./src/app');

connectDB()

const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`Server running at http://loaclhost:${PORT}`);
})