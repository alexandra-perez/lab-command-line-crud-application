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
  const donation = donations.find(donation => donation.id === id);
  return `${chalk.green('ID:')} ${donation.id} ${chalk.green('Name:')} ${
    donation.name
  } ${chalk.green('Amount:')} ${donation.purchaseAmount} ${chalk.green(
    'Donation:'
  )} ${donation.donationAmount}`;
}

module.exports = { index, create, show };
