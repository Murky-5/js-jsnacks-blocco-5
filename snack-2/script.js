const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const peopleName = people.map((eachName = []) => {
  for (let i = 0; i < people.length; i++){
    eachName.name[people[i].name]
  }
  console.log(eachName)
  return eachName
})

console.log(peopleName)
