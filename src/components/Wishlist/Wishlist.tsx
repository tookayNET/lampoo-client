import '../styles/stylesheet.css';
import ApiService from '../../APIservice';
import Item from "../Item/Item";
import { useState, useEffect } from 'react';

const Wishlist = () => {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    ApiService.getWishlist()
      .then((actualData) => {
        setData(actualData);
      })
  }, []);
  

  return (
    <>
      <div className="wishlist">
          <h3>Wishlist</h3>
      </div>
      <div className="items">
        {data && data.map((item: any) => (
          <div className="item-card" key={item.designer}>
            <Item item={item}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Wishlist;