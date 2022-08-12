let students = [{
    name: 'John',
    firstNote: 8,
    secondNote: 6
}, {
    name: 'Mike',
    firstNote: 3,
    secondNote: 2
}, {
    name: 'Mary',
    firstNote: 10,
    secondNote: 8
}, {
    name: 'Pete',
    firstNote: 6,
    secondNote: 1
}]

function average() {
    for (let student of students) {
        let average = ((student.firstNote + student.secondNote) / 2).toFixed(2);
        console.log(`O aluno(a) ${student.name} opteve media  ${average}`);
        if (average >= 7) {
            console.log(`Parabém, foi aprovado(a)!\n`);
        } else {
            console.log(`Reprovado(a) tente mais uma vez!\n`);
        }
    }
}

average();