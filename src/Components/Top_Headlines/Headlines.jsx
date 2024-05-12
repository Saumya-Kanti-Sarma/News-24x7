import React, { useState } from 'react'
import styles from "./Headlines.module.css"
import { IoMdClose } from "react-icons/io";


const Headlines = () => {
  return (
    <>
      <div className={styles.main}>

        <div className='individuals'>
          <img src="" onError={(e) => { e.target.src = 'def.jpg' }} />
          <div className='content-area'>
            <div className='content-heading '>
              <b>Heading:{ }</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliqLorem ipsum dolor sit amet consectetur adipisici. Molestiae aliq
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliq
              </p>
            </div>
            <div className='content-heading '>
              <b>Author: </b><p> Unknown</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Headlines
