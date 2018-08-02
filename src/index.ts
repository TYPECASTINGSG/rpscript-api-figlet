var figlet = require('figlet');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Generate Text Banner with Figlet.
 * @see {@link https://www.npmjs.com/package/figlet|Figlet}
 * @namespace Figlet
*/
@RpsModule("figlet")
export default class RPSFiglet {

  /**
 * @function figlet
 * @memberof Figlet
 * @example
 * ; Display fanciful ascii art
 * figlet 'Boo!' --font="Ghost"
 * 
 * @param {string} text Text to be converted to ascii art.
 * @param {*} options List of options for Figlet.
 * @returns {string} Ascii art format.
 * @summary figlet :: String → String
 * 
 * @see {@link https://www.npmjs.com/package/figlet}
 * 
*/
  @rpsAction({verbName:'figlet'})
  async figlet (ctx:RpsContext,opts:Object, text?:string) : Promise<string|Function>{
    if(text)
      return figlet.textSync(text,opts);
    else
      return function(text){return figlet.textSync(text,opts);}
  }

}
