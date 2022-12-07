function saturdayFun(fixed = "roller-skate") {
  return (`This Saturday, I want to ${fixed}!`);
}
saturdayFun('bathe my dog');

function mondayWork(blank = "go to the office") {
  return (`This Monday, I will ${blank}.`);
}
mondayWork("take PTO");

let wrapAdjective = function (special = "*") {
  return function (adj = "a hard worker",) {
    return `You are ${special}${adj}${special}!`;
  };
};
wrapAdjective("||")("a dedicated programmer");