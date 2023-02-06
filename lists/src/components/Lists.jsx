import React from 'react'
import Person from './Person'
function lists() {

  
  const persons = [ {
    id: 1,
    name: 'geralt of rivia',
    age: 30,
    skill: 'slay monsters'
  },
  {
    id: 2,
    name: 'yennefer of vengerberg',
    age: 25,
    skill: 'do magic'
  },
  {
    id: 3,
    name: 'yasser',
    age: 20,
    skill:  'do nothing'
  }]

  const personList = persons.map(
    person => <Person person={person} key={person.id}  />
    )

  return (
    <div>
      {
      <div>{personList}</div>
      }

      
    </div>
  )
}

export default lists