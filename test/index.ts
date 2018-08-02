import {expect} from 'chai';
import m from 'mocha';

import RPSFiglet from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Figlet', () => {

  m.it('should print pretty text', async function () {
    let md = new RPSFiglet;

    let output = await md.figlet(new RpsContext,{font:'Ghost'},"Hello World");

    console.log(output);

    let fn:any = await md.figlet(new RpsContext,{font:'Ghost'});

    console.log(fn("Spooky"));

  }).timeout(0);

})
