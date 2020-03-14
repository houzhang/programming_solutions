const group1 = [100, 200, 150, 80, 180, 190, 50, 60, 100, 50];
const group2 = [101, 101, 101, 101];
const group3 = [100, 200, 150, 80];
const boatLimit = 200;

var ComputedSum = function(personOneWeight, personTwoWeight, sum) {
  this.personOneWeight = personOneWeight;
  this.personTwoWeight = personTwoWeight;
  this.sum = sum;
};

var Person = function(weight) {
  this.weight = weight;
  this.onboarded = false;
}

function calculateBoat(group, boatLimit) {
  let numberOfBoat = 0;
  let sumArray = [];
  // find the number of people weights are same as boat limit
  numberOfBoat = numberOfBoat + group.filter(personWeight => personWeight === boatLimit).length;

  // filter out any person weight is same as boat limit from the array
  const groupLessBoatLimit =
    group.filter(weight => weight < boatLimit)
         .map(weight => new Person(weight))

  console.log('numberOfBoat', numberOfBoat)
  console.log('groupLessBoatLimit', groupLessBoatLimit)

  for(i = 0; i < groupLessBoatLimit.length; i++) {
    console.log(`checking ${groupLessBoatLimit[i].weight}`)
    // ignore any person that is onboarded
    if (!groupLessBoatLimit[i].onboarded) {
      for(j = i + 1; j < groupLessBoatLimit.length; j++) {
        if (!groupLessBoatLimit[j].onboarded) {
          let sum = groupLessBoatLimit[i].weight + groupLessBoatLimit[j].weight;
          // finding any pair of poeple combined weights are within boat limit
          if (sum <= 200) {
            sumArray.push(new ComputedSum(groupLessBoatLimit[i].weight, groupLessBoatLimit[j].weight, sum));
            console.log(`${groupLessBoatLimit[i].weight} + ${groupLessBoatLimit[j].weight} = ${sum}`)
          }
        }
      }

      // set current element to onboarded
      groupLessBoatLimit[i].onboarded = true;

      if (sumArray.length > 0) {
        sumArray.sort((a, b) => a.sum - b.sum);
        // pick the largest of the combined weights
        const largestSum = sumArray.pop();
        console.log('largestSum',`${largestSum.personOneWeight} + ${largestSum.personTwoWeight} = ${largestSum.sum}`)

        const index = groupLessBoatLimit.findIndex(weight => (weight.weight === largestSum.personTwoWeight && !weight.onboarded));
        console.log('index to set onboarded', index);
        // mark a person onboard
        groupLessBoatLimit[index].onboarded = true;
        sumArray = [];
      }

      console.log('groupLessBoatLimit', groupLessBoatLimit);

      numberOfBoat++;
    }
  }

  return numberOfBoat;
}

console.log('Number of boats', calculateBoat(group1, 200));
