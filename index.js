// code your solution here
function saturdayFun(activity ="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(result){
    const emphatic = function(option="a hard worker"){
        // console.log(`You are ${option}${result}${option}!`)
        return `You are ${result}${option}${result}!`
    }
    return emphatic
}