#!/usr/bin/env node
const program = require('commander');
const countTodos = require('count-todos');

program
	.version(require('./package').version)
	.option('-p, --path [path]')
	.option('-e, --exclude [exclude]')
	.option('-f, --fileTypes [fileTypes]')
	.option('-v, --verbose')
	.parse(process.argv);

const exclusions = program.exclude ? program.exclude.split(',') : [];
const fileTypes = program.fileTypes ? program.fileTypes.split(',') : [];

const options = {
	exclude: exclusions,
	fileTypes: fileTypes,
	verbose: program.verbose,
};

if (program.path) {
	console.log(countTodos(program.path, options));
} else {
	console.log(countTodos(options));
}