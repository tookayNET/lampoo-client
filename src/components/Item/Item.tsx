import '../styles/stylesheet.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import SizeDropdown from './SizeDropdown/SizeDropdown';

// const element = <FontAwesomeIcon icon={faCoffee} />

const Item = (props: any) => {

  console.log(props)
  
  return (
    <>
      <div className="upper-section">
        <div className="top-row">
          <div className="new-with-tag">
            {props.item.is_new_with_tag ? <p>NEW WITH TAG</p> : null}
            {/* TODO: FIX THIS FUDGE */}
          </div>
          <div className="remove-button">
            <FontAwesomeIcon icon={faX}/>
            {/* <span>X</span> */}
            <span className="tooltiptext">Remove Item</span>
          </div>
        </div>
        <div className="item-img">
          <img src={props.item.image} alt="Item image"/>
        </div>
        <div className="designer">
          <h4>{props.item.designer}</h4>
        </div>
        <div className="name">
          <p>{props.item.name}</p>
        </div>
        <div className="size">
          <p>{props.item.sizes ? "More sizes available" : props.item.size }</p>
        </div>
        <div className="price">
          <p>€ {props.item.price}</p>
        </div>
      </div>
      <div className="lower-section">
        <div className="retail">
          <p>{props.item.retail ? `Est. Retail: €${props.item.retail}` : null }</p>
        </div>
        {props.item.sizes ? <SizeDropdown sizes={props.item.sizes} cost={props.item.price}/> : null}
        <div className="add-to-cart">
          <p>ADD TO CART</p>
          <span className="tooltiptext">Add to Cart</span>
        </div>
      </div>
    </>
  )
}

export default Item;