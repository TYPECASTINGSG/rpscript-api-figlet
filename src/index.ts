/**
 * @module Figlet
 */

var figlet = require('figlet');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("figlet")
export default class RPSFiglet {

  @rpsAction({verbName:'figlet'})
  async figlet (ctx:RpsContext,opts:Object, text:string) : Promise<string>{
    return figlet.textSync(text,opts);
  }

}
