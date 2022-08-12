# average-of-students

Objective of the project presented and the calculation of the average of each student's grades.

- [x] A **function** that will calculate the average of each student's grades;

```js
function average() {
     for (let student of students) {
         let average = ((student.firstNote + student.secondNote) / 2).toFixed(2);
         console.log(`Student ${student.name} opted for media ${average}`);
     }
}
```

- [x] Assuming the average for this contest is **7**, check **whether** each student was successful or not in entering the contest and show a message on the screen.

```js
if (average >= 7) {
             console.log(`Congratulations, you were approved!\n`);
         } else {
             console.log(`Failed, try again!\n`);
         }
```

## Instructions

### How to run the project

```bash
git clone https://github.com/GomidesTs/average-of-students.git

cd average-of-students
```

### At the terminal

```bash
node script.js
```

### In the browser

```html
Open the index file in your browser right click -> inspect element (or just f-12) -> console
```

## License

The MIT License (MIT)

Copyright (c)  Gomides Ts
