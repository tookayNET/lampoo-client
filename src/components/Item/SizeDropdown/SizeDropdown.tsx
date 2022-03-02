import '../../styles/stylesheet.css';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

  // TODO: ANY
const SizeDropdown = ({ sizes, cost, setSize, size }: any) => {

  console.log(sizes);
  const [toggled, settoggled] = useState(true);

  const dropDownRef = useRef(null);

  const onClick = () => {
    console.log('Clicked')
    settoggled(!toggled)
  }

    useEffect(() => {
    // TODO: ANY
    const pageClickEvent = (e:any) => {
      console.log(e)
    }

    if (toggled) {
      window.addEventListener('click', pageClickEvent)
    }
    
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }

  }, [toggled])


  return (
    <>
      <div className="size-button-wrapper">
        <div className="size-button" onClick={onClick}>
          {toggled ?
            <div className="size-button-contents minimised">
              
              <div className="size-selector">
                <div className="size-selector-title">
                  <span>SELECT SIZE</span>
                </div>
                <div className="size-selector-dd">
                  <FontAwesomeIcon icon={
                    toggled ? faAngleDown : faAngleUp} />
                </div>
              </div>

            </div>
            :
            <div className="size-button-contents shadow">
              
              <div className="size-selector">

                <div className="size-selector-title">
                  <span>SELECT SIZE</span>
                </div>
                <div className="size-selector-dd">
                  <FontAwesomeIcon icon={
                    toggled ? faAngleDown : faAngleUp} />
                </div>

              </div>
              
              {sizes.map((item: any) => (
                <div className="size-row" key={item.id}>
                  <span className="col1">{item.name}</span>
                  <span className="col2">€ {cost}</span>
                  <span className="col3">{item.qty} Left!</span>
                </div>
              ))}  

            </div>
          }
        </div>
      </div>


      {/* <div className="button1">
        <div onClick={ onClick } className="button2">
          <div className="button4">
            <span>BUTTO</span>
            <FontAwesomeIcon icon={faAngleDown}/>
          </div>
        </div>
        {toggled ?
        <div className="button3">
          <div className="button4">
            <span>BUTTOX</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <p>BUTTON</p>
          <p>BUTTON1</p>
          <p>BUTTON2</p>
          <p>BUTTON3</p>
        </div>
        : null}
      </div> */}


      {/* <div className="size-selector">
        <div className="button1">
        <div className="button2">  
        <div onClick={onClick} className="size-button">
          <div className="select-size-title">
            <span>SELECT SIZE</span>
          </div>
          <div className="select-size-dd">
            <FontAwesomeIcon icon={isActive ? faAngleUp : faAngleDown}/>
          </div>
            </div>
            </div>
        </div>
        <div className="button3"> */}

        {/* TODO: ANY */}
        {/* {props.sizes && isActive && props.sizes.map((item: any) => (
          <div className="menu" key={item.id}>
            <p className="col1">{item.name}</p>
            <p className="col2">€ {props.cost}</p>
            <p className="col3">{item.qty} Left!</p>
          </div>
        ))}  
      </div>
      </div> */}
          {/* <div className="test1">
            <p>{props.sizes[0].name}</p>
            <p>€ {props.cost}</p>
            <p>{props.sizes[0].qty} Left!</p>
            </div>
          </div> */}

          {/* {isActive ? */}

          {/* // <div className="test1"> */}

            {/* {props.sizes && props.sizes.map((item: any) => (
                // <div className="size-menu-dd" key={item.id}>
                  <p className="size-menu-dd-item" key={item.id}>
                    <span>{item.name}</span>
                    <span>€ {props.cost}</span>
                    <span>{item.qty} Left!</span>
                  </p>
                // </div>
               ))}  */}
          
            {/* <div className="menu">
              {props.sizes && props.sizes.map((item: any) => (
                <div className="size-menu-dd" key={item.id}>
                  <p className="size-menu-dd-item">
                    <span>{item.name}</span>
                    <span>€ {props.cost}</span>
                    <span>{item.qty} Left!</span>
                  </p>
                </div>
              ))}
            </div>
          
          : null}
        
          </div> */}
    </>
  )
}

export default SizeDropdown;