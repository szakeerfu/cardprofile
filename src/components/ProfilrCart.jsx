import React from 'react'
 import "./Cart.css"
import img from './imges/img2.png'
import Figma from './imges/figma.png'
import Adobie from './imges/adobe-illustrator.png'
import Ruby from './imges/ruby.png'


const style = {
  section: {
    color: "#000000",

  },

}



export const ProfilrCart = () => {
  return (
    <div className='menu__container'>

      <div className='menu'>
        <div className='submenu'>
          <img src={img} alt="" />
        </div >

        <section style={style.section}  >
         
          <div className='info'>
          <h1>
              UI/UX DEGINER
          </h1>
            <h3>
              Zakeer
            </h3>
            <p className='p'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam eaque porro magnam perferendis iusto iure 

            </p>
          </div>

          <div className='skills'>
           
              <img src={Figma} alt="" style={{ border: "2px solid yellow", }} />
              <img src={Adobie} alt="" style={{ border: "2px solid yellow" }} />
              <img src={Ruby} alt="" style={{ border: "2px solid yellow" }} />

            


          </div>


        </section>


      </div>
    </div>
  )
}

