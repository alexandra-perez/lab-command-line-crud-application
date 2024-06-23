const chalk = require('chalk');
const {
  readFileSync,
  writeFileSync,
  readJSONFile,
  writeJSONFile,
} = require('./src/helpers');
const {
  index,
  create,
  show,
  update,
  destroy,
} = require('./src/donationController');

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
      const showView = show(donations, id, process.argv[4]);
      inform(showView);
      break;
    case 'update':
      updatedDonations = update(
        donations,
        process.argv[3],
        process.argv[4],
        process.argv[5],
        process.argv[6]
      );
      // inform(updatedDonations)
      writeToFile = true;
      break;
    case 'delete':
      updatedDonations = destroy(donations, process.argv[3]);
      writeToFile = true;
      break;
  }
  if (writeToFile) {
    writeJSONFile('./data', 'donations.json', updatedDonations);
  }
}

run();
