const { nanoid } = require('nanoid');
const { writeJSONFile } = require('./helpers');
const chalk = require('chalk');

function index(donations) {
  return donations;
}

function create(donations, {...args}) {
  const donation = {
    id: nanoid(8),
    name: process.argv[3],
    purchaseAmount: process.argv[4],
    donationAmount: process.argv[5],
  };

  donations.push(donation);

  return donations;
}

module.exports = { index, create };