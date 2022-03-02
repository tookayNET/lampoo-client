import '../styles/stylesheet.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import SizeDropdown from './SizeDropdown/SizeDropdown';
import { JSONdataType } from '../../interfaces';

// TODO: CORRECT TYPESCRIPE TYPE FROM ANY
const Item = ({ item }:any)  => {

  const [size, setSize] = useState<string|boolean>(false);

  return (
    <>
      {/* TOP DOWN TO, AND INCLUDING, PRICE */}
      <div className="upper-section">
        <div className="top-row">
          <div className="new-with-tag">
            {item.is_new_with_tag ? <p>NEW WITH TAG</p> : null}
          </div>
          <div className="remove-button">
            <FontAwesomeIcon icon={faX}/>
            <span className="tooltiptext">Remove Item</span>
          </div>
        </div>
        <div className="item-img">
          <img src={item.image} alt="Product"/>
        </div>
        <div className="designer">
          <h4>{item.designer}</h4>
        </div>
        <div className="name">
          <p>{item.name}</p>
        </div>
        <div className="size">
          <p>{item.sizes ? "More sizes available" : item.size }</p>
        </div>
        <div className="price">
          <p>€ {item.price}</p>
        </div>
      </div>

      {/* EST RETAIL DOWNWARDS */}
      <div className="lower-section">
        <div className="retail">
          <p>{item.retail ? `Est. Retail: €${item.retail}` : null }</p>
        </div>

        {/* DROPDOWN MENU FOR SIZES IF MULTIPLE EXIST */}
        {item.sizes ?
          <SizeDropdown sizes={item.sizes} cost={item.price} size={size} setSize={setSize} />
          : null
        }
        
        {/* ADD TO CART GREYED AND INACTIVE IF ONE OF MULTIPLE SIZES IS NOT ALREADY SELECTED */}
        <div className={`add-to-cart ${item.sizes ? "inactive" : "active"}`}>
          <p>ADD TO CART</p>
          <span className="tooltiptext">Add to Cart</span>
        </div>
      </div>
    </>
  )
}

export default Item;