// code your solution here
function saturdayFun(activity ="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
// purpose of the below function is that the inner function can access the outer function elements/variables
function wrapAdjective(result){
    const emphatic = function(option="a hard worker"){
        return `You are ${result}${option}${result}!`
    }
    return emphatic
}