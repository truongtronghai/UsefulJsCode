//remove duplicate
const notDuplicatedMessageTime = messageTime.reduce(
  (accumulator, currentValue) => {
    if(accumulator.find(e => e==currentValue) === undefined){
      return [...accumulator, currentValue]
    } 
    return accumulator
  },
  []
);
