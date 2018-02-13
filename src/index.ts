/*******************************
 * A anti key words module
 * @author TimRChen <timrchen95@gmail.com>
 * @github depositary: https://github.com/TimRChen/anti-key-wrods
 * @date: 2018.2.8
 ********************************/

// For Node/CommonJS [Why use like this?]You're loading a JSON file, not a module, so import shouldn't be used is this case.
declare function require(path: string): any;
const keywordsConfig = require("../config/keywords.json");

/** 
 * @class anti key words class.
 * @param {String} inputString
 */
class AntiKeyWords {
    public asterisk: String = "**";
    public inputString: String;
    public outputString: String = "";
    constructor(inWords: String) {
        this.inputString = inWords;
    };
    /**
     * combat key words.
     */
    private combatKeyWords(notKeyWords) {
        this.outputString += notKeyWords[0]; // get not repeat word.
    }
    /**
     * replace single key words
     */
    private replaceSingleKeyWords(combatWords) {
        let outputString = this.outputString;
        combatWords = "*";
        this.outputString += combatWords;
    }
    /**
     * replace and combat key words.
     */
    private replaceKeyWords(combatWords) {
        let outputString = this.outputString;
        combatWords = this.asterisk;
        this.outputString += combatWords;
    };
    /**
     * find key words.
     */
    private findKeyWords() {
        const _self = this;
        let combatWords;
        const keyWords = keywordsConfig.words;
        const singleKeyWords = keywordsConfig.singleWord;
        let inputString = this.inputString;
        for (let i = 0; i < inputString.length; i++) {
            if (inputString.length > 1) {
                combatWords = (inputString[i + 1] !== undefined) ? inputString[i] + inputString[i + 1] : inputString[i];
                if (keyWords.indexOf(combatWords) !== -1) { // deal with words.
                    _self.replaceKeyWords(combatWords);
                } else if (singleKeyWords.indexOf(combatWords[0]) !== -1 || singleKeyWords.indexOf(combatWords[1]) !== -1) { // deal with single words.
                    _self.replaceSingleKeyWords(combatWords);
                } else {
                    _self.combatKeyWords(combatWords);
                }
            } else {
                combatWords = inputString;
            }
        }
    };
    /**
     * filter key words.
     */
    public filterKeyWords() {
        this.findKeyWords();
    };
};


export default AntiKeyWords;