const cp = require('child_process');
const archive = 'https://dlcdn.apache.org/spark/spark-3.3.1/spark-3.3.1-bin-hadoop3.tgz'
const cmd = `curl -O ${archive}; tar -xvf ${archive.split('/').pop()}`;
const getSpark = cp.execSync(cmd,  (err, stdout, stderr) => {
  if (err) { console.error(err); return; }
  console.log(stdout);
});


