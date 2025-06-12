function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun("go to church"));     
console.log(saturdayFun());

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
console.log(mondayWork()); 
console.log(mondayWork("work from home")); 

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
const wrap = wrapAdjective("!");
console.log(wrap("amazing")); 

console.log(wrapAdjective("%")("a dedicated programmer")); 