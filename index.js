const chalk = require('chalk');
const {
  readFileSync,
  writeFileSync,
  readJSONFile,
  writeJSONFile,
} = require('./src/helpers');
const { index, create, show } = require('./src/donationController');

function run() {
  const inform = console.log;
  const donations = readJSONFile('./data', 'donations.json');
  const action = process.argv[2];
  let donationsView = [];
  let updatedDonations = [];
  let writeToFile = false;

  switch (action) {
    case 'index':
      donationsView = index(donations);
      inform(donationsView);
      break;
    case 'create':
      updatedDonations = create(donations, process.argv.slice(3));
      writeToFile = true;
      inform('Item created!');
      inform(updatedDonations);
      break;
    case 'show':
      const showView = show(donations, process.argv[3]);
      inform(showView);
      break;
  }
  if (writeToFile) {
    writeJSONFile('./data', 'donations.json', updatedDonations);
  }
}

run();
