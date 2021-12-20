const lettersAndNums = "qwertyuiasdfghjklzxcvbnm12345678901234567890".split("");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function GenerateGUID(defis = false) {
    let GUID = "";
    for (let i = 1; i < 36; i++) {
        if (defis === true) {
            if (i % 6 === 0) {
                GUID = GUID + "-" + lettersAndNums[getRandomInt(lettersAndNums.length)]
            } else {
                GUID = GUID + lettersAndNums[getRandomInt(lettersAndNums.length)]
            }
        } else {
            GUID = GUID + lettersAndNums[getRandomInt(lettersAndNums.length)]
        }
    }
    return GUID;
}

export default GenerateGUID;