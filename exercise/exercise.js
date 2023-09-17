const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

console.log(person1);
console.log(person2);


/* perchè quando scriviamo < const person2 = person1 >,  l'oggetto <person2> non è una copia indipendente
dell 'oggetto <person1> , bensì è un oggetto che ha un riferimento a  <person1> : ovvero, l'oggetto <person2> 
è separato ma allo stesso tempo collegato all' oggetto <person1>.

Per cui qualsiasi modifica avviene in <person2> automaticamente avviene anche in <person1>.

*/
