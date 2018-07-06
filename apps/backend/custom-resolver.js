const defaultResolver = require('jest-resolve/build/default_resolver');
const ts = require('typescript');
const fs = require('fs');
const path = require('path');

const tsConfigPath =
  ts.findConfigFile(__dirname, ts.sys.fileExists, 'tsconfig.spec.json') ||
  ts.findConfigFile(__dirname, ts.sys.fileExists, 'tsconfig.test.json') ||
  ts.findConfigFile(__dirname, ts.sys.fileExists, 'tsconfig.jest.json') ||
  ts.findConfigFile(__dirname, ts.sys.fileExists, 'tsconfig.app.json') ||
  ts.findConfigFile(__dirname, ts.sys.fileExists, 'tsconfig.json');

const readResult = ts.readConfigFile(tsConfigPath, ts.sys.readFile);
const config = ts.parseJsonConfigFileContent(
  readResult.config,
  ts.sys,
  __dirname
);
const compilerOptions = config.options;

delete compilerOptions.moduleResolution;

const host = ts.createCompilerHost(compilerOptions, true);

module.exports = function(path, options) {
  console.time('resolve ' + path);
  let result;
  try {
    return require.resolve(path, {
      paths: [options.basedir]
    });
  } catch (e) {}
  options.extensions.forEach(ext => {
    try {
      result = require.resolve(path + ext, {
        paths: [options.basedir]
      });
    } catch (e) {}
  });
  if (result) {
    return result;
  }
  try {
    result = ts.resolveModuleName(path, options.basedir, compilerOptions, host)
      .resolvedModule.resolvedFileName;
    console.timeEnd('resolve ' + path);
    return result;
  } catch (e) {}
};
