const jsdomGlobal = require('jsdom-global');
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const sinonChai = require('sinon-chai');

jsdomGlobal();

chai.should();
chai.use(sinonChai);
chai.use(chaiEnzyme());

