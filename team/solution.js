let students1 = new Map;
students1
  .set(0, [3])
  .set(1, [2])
  .set(2, [1, 4])
  .set(3, [0, 4, 5])
  .set(4, [2, 3])
  .set(5, [3]);

let students2 = new Map;
students2
  .set(0, [3])
  .set(1, [2])
  .set(2, [1, 3, 4])
  .set(3, [0, 2, 4, 5])
  .set(4, [2, 3])
  .set(5, [3])

function main(students) {
  let teamRed = [];
  let teamBlue = [];
  console.log('studennts', students);

  for (let [student, enemies] of students) {
    console.log('entry', `student: ${student}, enemies`);
    console.log('enemies', enemies);

    if (teamRed.includes(student) && teamBlue.includes(student)) {
      return false;
    } else {
      if (teamRed.includes(student)) {
        teamRed.push(student);
        teamBlue = [...teamBlue, ...enemies];
      } else {
        teamBlue.push(student);
        teamRed = [...teamRed, ...enemies];
      }
    }
    console.log('teamRed', teamRed);
    console.log('teamBlue', teamBlue);
  }

  return `[${[...new Set(teamRed)]}], [${[...new Set(teamBlue)]}]`;
}


console.log(main(students1));

console.log(main(students2));
