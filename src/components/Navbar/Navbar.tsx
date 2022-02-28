import '../styles/stylesheet.css';

const Navbar = () => {
  
  // TODO: REMOVE AND REPLACE WITH TOPBAR BURGER < 830PX VIEWPORT

  return (
    <div className="nav-bar">
      <ul className="nav-bar-elements">
        <li>New Arrivals</li>
        <li>Designer</li>
        <li>Bags</li>
        <li>Shoes</li>
        <li>Clothing</li>
        <li>Jewellery</li>
        <li>Accessories</li>
        <li className="gold">New with Tag</li>
        <li className="red">Sale</li>
      </ul>
    </div>
  )
}

export default Navbar;