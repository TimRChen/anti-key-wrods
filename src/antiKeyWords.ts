/*******************************
 * A anti key words module
 * @author TimRChen <timrchen95@gmail.com>
 * @github depositary: https://github.com/TimRChen/anti-key-wrods
 * @date: 2018.2.8
 ********************************/

import * as _ from "lodash";
// For Node/CommonJS [Why use like this?]You're loading a JSON file, not a module, so import shouldn't be used is this case.
declare function require(path: string): any;
const keywordsConfig = require("../config/keywords.json");

/** 
 * @class anti key words class.
 * @param {String} inputWords
 */
class AntiKeyWords {
    private asterisk: "**";
    private splitArray: Array<String>;
    public inputWords: String;
    constructor(inWords: String) {
        this.inputWords = inWords;
    };
    /**
     * find and replace key word to *.
     * Todo: could make * to anything.
     */
    private findAndReplace() {
        let splitArray = this.splitArray;
        splitArray.forEach(item => {
            let findOne = _.find(keywordsConfig.words, item); // words
            if (!findOne) {
                findOne = _.find(keywordsConfig.singleWord, item); // single word
            }
            return findOne ? this.asterisk : item;
        });
        this.splitArray = splitArray;
        return splitArray;
    };
    /**
     * split String to Array.
     */
    private splitStringToArray() {
        return new Promise<string>((resolve, reject) => {
            let splitArray = [];
            for(let i = 0; i < this.inputWords.length; i++) {
                splitArray.push(this.inputWords[i].toLowerCase());
            }
            this.splitArray = Array.from(new Set(splitArray))
            resolve("success");
        });
    };
    /**
     * match the key words.
     */
    private matchKeyWords() {
        return new Promise<string>((resolve, reject) => {
            if (_.indexOf(keywordsConfig.words, this.inputWords.toLowerCase()) !== -1 ||
                _.indexOf(keywordsConfig.singleWord, this.inputWords.toLowerCase()) !== -1) {
                resolve("matched"); // matched
            } else {
                reject("matchFailed"); // not match
            }
        });
    };
    /**
     * filter & replace key words.
     */
    public filterKeyWords() {
        this.matchKeyWords().then(result => {
            if (result === "matched") {
                this.splitStringToArray().then(result => {
                    if (result === "success") {
                        return this.findAndReplace(); // return the replaced string.
                    }
                });
            }
        }).catch(error => {
            console.error(error);
            return this.inputWords; // return the original string.
        });
    };
};


export default AntiKeyWords;