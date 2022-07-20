import { Ul, Li } from './Shops.styled';

const Shops = ({ onShop, shops }) => {
  return (
    <Ul>
      <Li onClick={() => onShop('')}>All shops</Li>
      {shops?.map(item => {
        return <Li onClick={() => onShop(item)}> {item}</Li>;
      })}
    </Ul>
  );
};

export default Shops;
