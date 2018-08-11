import {expect} from 'chai';
import m from 'mocha';

import RPSFiglet from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Figlet', () => {

  m.it('should print pretty text', async function () {
    let md = new RPSFiglet;

    let output = await md.figlet(new RpsContext,{},"Ghost","Hello World");
    console.log(output);

    let fn:any = await md.figlet(new RpsContext,{});
    console.log(fn("The Edge","Spooky"));

    let fn2:any = await md.figlet(new RpsContext,{},"Cosmike");
    console.log(fn2("Cosmike Here"));

  }).timeout(0);

})
