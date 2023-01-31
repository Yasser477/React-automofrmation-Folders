import React from 'react'

function ClickEvent() {

  function clickHandler(e){
    e.preventDefault();
    console.log('button click')
  }

  window.addEventListener()

  return (
    <div >
        <form>
           <button onClick={clickHandler}> click</button>
        </form>

        <form>

        <button> hello</button>

        </form>

    </div>
  )
}

export default ClickEvent