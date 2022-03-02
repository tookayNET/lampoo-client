import '../styles/stylesheet.css';
import ApiService from '../../APIservice';
import Item from "../Item/Item";
import { useState, useEffect } from 'react';
import { JSONdataType } from '../../interfaces';

const Wishlist = () => {

  const [data, setData] = useState<any|null>(null);

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
        {data && data.map((item: JSONdataType, i: number) => (
          <div className="item-card" key={i}>
            <Item item={item}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Wishlist;