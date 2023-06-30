#!/usr/bin/env node

const { program } = require('commander');

program
  .description('Compares two configuration files and shows a difference.')
  .option('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .parse(process.argv)
  .arguments('<filepath1> <filepath2>');
  

if (program.help) {
  program.help();
} else {
  console.log('Run your diff logic here.'); 
}
