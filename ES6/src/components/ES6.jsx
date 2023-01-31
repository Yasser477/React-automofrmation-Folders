import React from 'react'

export default function ES6() {

    class person {

        constructor( name , age , color){

            this.Name = name
            this.Age = age
            this.color = color
        }

        present(){
            return 'this person' + this.Name + "he's" + this.Age + "yo , and he's" + this.color + '.'

        }
    }

    class Student extends person{

        constructor(name,age,color,price,room){
        super(name,age,color)
        this.price = price
        this.room = room
        
        }

        show(){

            return this.present() + "pay" + this.price + 'will be founded' + this.room
        }

    }

    const newPersonInfo = new Student('zakaria' , 20 , 'white' , 2 , 5 , 'next to the door')
    console.log(newPersonInfo.present)
  return (
    <div>{newPersonInfo.show()}</div>

    )

    // arrow function example

      //1: normal JavaScript function

      // function box(h,w) {
      //   return h + w
      // }

      //2: arrow function with return and argument

      // const box  = (h , w) => {
      //   return h + w;
      // }

      //3: arrow function without return and argument

      // eslint-disable-next-line no-unreachable
      const box  = (h , w) => h + w;


     

        // variables 

      
        const item = 'ball' 
        var price = 20 
        var friends = ['mohcine', 'ayoub' , 'Fati']
        let show = true 
        
        
        if(show) {
          document.write('<br/> I bought this ' + item + ' around ' + price);
        }
        


    // map arrey method example 
    
   const Myarray = friends.map((Element)=><li>{Element}</li>)


    //       map arrey method example 
  
    //   const myArrey = friends.map((item) => <li>{item}</li>)




  //Destructuring


  const studentInfo = {
    name: 'yasser bourada',
    age: 20 ,
    gender: 'male'
  }

  const {name, age, gender} = studentInfo

//Spread Opirator

const witchers = ['geralt', 'vesimir', 'lambart', 'vilker']

const [one, two, tree, ...others] = witchers 


//Ternary Operator

var bool = true
function isTrue(){
  return 'Variable returns true'
}

function isntTrue(){
  return 'Variable returns false'
}






// if (bool){

//     isTrue()
// }
// else{

//     isntTrue()
// }


 
// eslint-disable-next-line no-unreachable
bool ? isTrue() : isntTrue();




  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{gender}</li>
      </ul>

      <ul>
        <li>{one}</li>
        <li>{two}</li>
        <li>{tree}</li>
        <li>{others}</li>
      </ul>
    </div>
  )
}
