import SHOP_DATA from '../../shop-data.json';

const AppShop = () => {
  return (
    <div>
      {SHOP_DATA.map((product: any) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default AppShop;
