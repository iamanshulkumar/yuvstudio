import React from 'react'
let logo = "/assests/images/oldlogo.png";
const header = () => {
  return (
   <>
    <header>
        <div className="logo">
            <img src={logo}  width="220px" alt="logo"/>
        </div>
        <nav>
            <a href="">Home</a>
            <a href="">Contact</a>
        </nav>
    </header>
   </>
  )
}
export default header;