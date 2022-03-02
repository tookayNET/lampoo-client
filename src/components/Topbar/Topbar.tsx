import '../styles/stylesheet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Topbar = () => {
  
  return (
    <div className="top-bar">
      
      {/* THIS DIV WILL ONLY BE VISIBLE WHEN THE WINDOW IS NARROWED */}
      <div className="top-bar-left">
        <FontAwesomeIcon icon={faBars} className="burger"/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="burger"/>
      </div>

      <img src="https://media.lampoo.com/logo/websites/1/Lampoo_logotype_black_1_.png" alt="Lampoo logo" className="logo" />

      {/* THIS DIV WILL ONLY BE VISIBLE WHEN THE WINDOW IS NARROWED */}
      <div className="top-bar-left">
        <FontAwesomeIcon icon={faHeart} className="burger"/>
        <FontAwesomeIcon icon={faBagShopping} className="burger" />
      </div>

    </div>
  )
}

export default Topbar;