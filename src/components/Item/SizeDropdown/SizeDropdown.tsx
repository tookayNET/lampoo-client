import '../../styles/stylesheet.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const SizeDropdown = ({ sizes, cost, setSizeSet, size, item }: any) => {

  const [toggled, setToggled] = useState(true);
  const [chosenSize, setChosenSize] = useState<string>("");
  // const [chosenId, setChosenId] = useState<number>(0);
  
  const onClick = (e:any) => {
    // console.log(e)
    setToggled(!toggled)
  }
  
  const sizeSelected = (e:any) => {
    // console.log(e)
    setSizeSet(true);
    setChosenSize(e.target.parentElement.childNodes[0].innerText); 
  }

  return (
    <>
      <div className={toggled ? `size-button-wrapper` : `size-button-wrapper size-button-wrapper-shine`}>
        <div className="size-button" onClick={onClick}>
          <div className={toggled ? `size-button-contents minimised` : `size-button-contents shadow`}>
            <div className="size-selector">
              <div className="size-selector-title">
                  {chosenSize==="" ? <span>SELECT SIZE</span> : <span>{chosenSize}</span>}
              </div>
              <div className="size-selector-dd">
                { toggled ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}
              </div>
            </div>
            
              {!toggled && sizes.map((item: any, i: number) => (
                <div className="size-row" key={item.id} onClick={sizeSelected}>
                  <span className="col1">{item.name}</span>
                  <span className="col2">€ {cost}</span>
                  <span className="col3">{item.qty} Left!</span>
                </div>
              ))}  

          </div>
        </div>
      </div>
    </>
  )
}

export default SizeDropdown;