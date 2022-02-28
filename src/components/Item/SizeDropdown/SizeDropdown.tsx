import '../../styles/stylesheet.css';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

  const SizeDropdown = (props: any) => {

    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => {
      console.log('Clicked')
      setIsActive(!isActive)
    }

    useEffect(() => {
      const pageClickEvent = (e:any) => {
        console.log(e)
      }

      if (isActive) {
        window.addEventListener('click', pageClickEvent)
      }
      
      return () => {
        window.removeEventListener('click', pageClickEvent)
        
      }

    }, [isActive])



  
  return (
    <>
      <div onClick={onClick} className="size-selector">

        <div className="size-button">
          <div className="select-size-title">
            <p>SELECT SIZE</p>
          </div>
          <div className="select-size-dd">
            <FontAwesomeIcon icon={isActive ? faAngleUp : faAngleDown}/>
          </div>
        </div>

          {isActive ?

          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            {props.sizes && props.sizes.map((item: any) => (
                // <div className="size-menu-dd" key={item.id}>
                  <p className="size-menu-dd-item" key={item.id}>
                    <span>{item.name}</span>
                    <span>€ {props.cost}</span>
                    <span>{item.qty} Left!</span>
                  </p>
                // </div>
               ))} 
            </div>
          
            // <div className="menu">
            //   {props.sizes && props.sizes.map((item: any) => (
            //     <div className="size-menu-dd" key={item.id}>
            //       <p className="size-menu-dd-item">
            //         <span>{item.name}</span>
            //         <span>€ {props.cost}</span>
            //         <span>{item.qty} Left!</span>
            //       </p>
            //     </div>
            //   ))}
            // </div>
          
          : null}
        
          </div>
    </>
  )
}

export default SizeDropdown;