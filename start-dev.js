var shell = require('shelljs');

require('dns').lookup(require('os').hostname(), function (err, hostname, fam) {
  shell.exec(`remotedev-debugger --hostname=${hostname} --port=5678 --injectserver`);
  setTimeout(() => {
    shell.exec('node node_modules/react-native/local-cli/cli.js start');
  }, 5000);
});
