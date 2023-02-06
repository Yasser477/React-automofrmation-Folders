import React from 'react'

function Person({person} ,{id}) {
  return (
    <div>
        
       <h2>{id}  i am {person.name} i am {person.age} i can {person.skill}</h2>

    </div>
  )
}

export default Person