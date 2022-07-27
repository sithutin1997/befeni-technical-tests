//object of operator functions for user input
const operatorObj = {
    'multiply' : function(result,value) {
        return result*value;
    },
    'add' : function(result,value) {
        return result+value;
    },
    'subtract' : function(result,value) {
        return result-value;
    },
    'divide' : function(result,value) {
        return result/value;
    }
}
let numValue = [];
let operatorValue = [];
let result = 0;

export const handleAnswer = (instruction,setInstruction,setAnswer) => {
    //separate the instruction string
    let spaceIndex = instruction.indexOf(' ')
    let operatorSubString = instruction.substring(0,spaceIndex);
    let valueSubString = instruction.substring(spaceIndex+1);
    let intValue = parseInt(valueSubString);
    operatorValue.push(operatorSubString);
    numValue.push(intValue);
    
    //check user input apply or not
    if(operatorSubString == 'apply') {
        //reverse looping for calculation
        for(let i = numValue.length - 1; i >= 0; i--) {
            if(operatorValue[i] == 'apply') {
                result = numValue[i];
            }else {
                result = process(result,numValue[i],operatorValue[i])
            }
        }
        setAnswer(result)
    }
    //clear input field
    setInstruction('')
    
}


//calculate function for user input
const process = (result,value,operator) => {
    return (operatorObj[operator](result,value))
} 