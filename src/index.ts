var figlet = require('figlet');
import {RpsContext,RpsModule,rpsAction,R} from 'rpscript-interface';

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
 * figlet "Ghost" 'Boo!'
 *
 * @param {string} font Style of the font
 * @param {string} text Text to be converted to ascii art.
 * @param {*} options refer to figlet documentation.
 * @summary figlet :: String → String → String
 * 
 * @see {@link https://www.npmjs.com/package/figlet}
 * 
*/
  @rpsAction({verbName:'figlet'})
  async figlet (ctx:RpsContext,opts:Object, ...params:string[]) : Promise<string|Function>{
    let fn = R.curry(function (font,text) {
      opts['font'] = font;
      return figlet.textSync(text,opts);
    });
    
    return R.apply(fn,params);
  }

}
