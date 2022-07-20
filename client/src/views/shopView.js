import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products/Products';
import Shops from '../components/Shops/Shops';

import get from '../API/Api';

const ShopView = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    get
      .FetchProducts()
      .then(data => {
        setProducts(data.data.data.result);
      })
      .catch(error => console.log(error.message));
  }, []);

  const uArray = array => {
    var out = [];
    for (var i = 0, len = array.length; i < len; i++)
      if (out.indexOf(array[i]) === -1) out.push(array[i]);
    return out;
  };

  const allShops = products?.map(item => item.shop);
  const shops = uArray(allShops);

  const filteredProducts = products?.filter(item => item.shop === filter);

  return (
    <div style={{ display: 'flex' }}>
      <Shops onShop={setFilter} shops={shops} />
      {filter ? (
        <Products products={filteredProducts} />
      ) : (
        <Products products={products} />
      )}
    </div>
  );
};

export default ShopView;
