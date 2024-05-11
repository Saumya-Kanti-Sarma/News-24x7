import { useState } from "react";
import styles from "./Nav.module.css"
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const Nav = ({ interChange }) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className={styles.components}>
        <div><b className={styles.logo}> News 24x7 </b></div>
        <ul>
          <li className={styles.casualLists} onClick={() => interChange('0%')}>
            Top Headlines</li>

          <li className={styles.casualLists}
            onClick={() => interChange('-100%')}>
            Tripura Headlines</li>

          <li className={styles.casualLists}
            onClick={() => interChange('-200%')}>
            Stocks </li>
          <div>
            <button className={styles.menu}
              onClick={() => { setMenu(true) }} >
              <FiAlignJustify className={styles.menuIcon} />
            </button>
          </div>
        </ul>
      </nav>
      {menu && <div className={styles.NotCasual}>
        <IoMdClose className={styles.crossbtn} onClick={() => { setMenu(false) }} />
        <li onClick={() => { interChange('0%'), setMenu(false) }}>Top Headlines</li>
        <li onClick={() => { interChange('-100%'), setMenu(false) }}>Tripura Headlines</li>
        <li onClick={() => { interChange('-200%'), setMenu(false) }}>Stocks </li>
      </div>
      }
    </>
  )
}

export default Nav
