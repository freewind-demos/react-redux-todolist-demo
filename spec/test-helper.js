const jsdomGlobal = require('jsdom-global');
const chai = require('chai');
const spies = require('chai-spies');
const chaiEnzyme = require('chai-enzyme');

jsdomGlobal();

chai.should();
chai.use(spies);
chai.use(chaiEnzyme());

