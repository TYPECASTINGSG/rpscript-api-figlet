var figlet = require('figlet');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Welcome to Basic Module
 * @namespace Figlet
*/
@RpsModule("figlet")
export default class RPSFiglet {

  /**
 * @function figlet
 * @memberof Figlet
 * @example
 *
 * figlet 'Boo!' --font="Ghost"
 * 
 * @param {string} text data to be printed out.
 * @returns {string} the formatted display.
 * @summary Display Ascii Art
 * @description Figlet. Ascii Art
 * 
 * @see {@link https://www.npmjs.com/package/figlet}
 * 
*/
  @rpsAction({verbName:'figlet'})
  async figlet (ctx:RpsContext,opts:Object, text:string) : Promise<string>{
    return figlet.textSync(text,opts);
  }

}
