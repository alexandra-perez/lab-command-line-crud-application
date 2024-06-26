const { nanoid } = require('nanoid');
const { writeJSONFile } = require('./helpers');
const chalk = require('chalk');

function index(donations) {
  return donations
    .map((donation) => {
      return `${chalk.green('ID:')} ${donation.id} ${chalk.green('Name:')} ${
        donation.name
      } ${chalk.green('Amount:')} ${donation.purchaseAmount} ${chalk.green(
        'Donation:'
      )} ${donation.donationAmount}`;
    })
    .join('/n');
}

function create(donations, { ...args }) {
  const donation = {
    id: nanoid(8),
    name: process.argv[3],
    purchaseAmount: process.argv[4],
    donationAmount: process.argv[5],
  };
  donations.push(donation);
  return donations;
}

function show(donations, id) {
  const donation = donations.find((donation) => donation.id === id);
  return `${chalk.green('ID:')} ${donation.id} ${chalk.green('Name:')} ${
    donation.name
  } ${chalk.green('Amount:')} ${donation.purchaseAmount} ${chalk.green(
    'Donation:'
  )} ${donation.donationAmount}`;
}

function update(donations, id, name, purchaseAmount, donationAmount) {
  let index = donations.findIndex((donation) => donation.id === id);

  if (index > -1) {
    donations[index] = {
      id: id,
      name: name,
      purchaseAmount: purchaseAmount,
      donationAmount: donationAmount,
    };
  } else {
    console.log(
      chalk.red(
        'No donation found. Please verify the ID number is correct and try again.'
      )
    );
  }

  return donations;
}

function destroy(donations, id) {
  const index = donations.findIndex((donation) => donation.id === id);
  if (index > -1) {
    donations.splice(index, 1);
  } else {
    console.log(
      chalk.red(
        'No donation found. Please verify the ID number is correct and try again.'
      )
    );
  }

  return donations;
}

module.exports = { index, create, show, update, destroy };
