import { Link } from 'react-router-dom';
import Product from '../../product/Product';

const ProductGrid = () => {
    const products = [
      {
        _id: "100001",
        img: "https://www.thenextsole.com/storage/images/617535W2TA11000.png",
        productName: "Balenciaga Tyrex",
        price: "44.00",
        color: "Black",
      },
      {
        _id: "100002",
        img: "https://www.thenextsole.com/storage/images/617535W2TA11000.png",
        productName: "Balenciaga Tyrex",
        price: "580.00",
        color: "Black",
      },
      {
        _id: "100003",
        img: "https://www.thenextsole.com/storage/images/617535W2TA11000.png",
        productName: "Balenciaga Tyrex",
        price: "44.00",
        color: "Black",
      },
      {
        _id: "100004",
        img: "https://www.thenextsole.com/storage/images/617535W2TA11000.png",
        productName: "Balenciaga Tyrex",
        price: "44.00",
        color: "Black",
      },
      {
        _id: "100005",
        img: "https://www.thenextsole.com/storage/images/617535W2TA11000.png",
        productName: "Round Table Clock",
        price: "44.00",
        color: "Balenciaga Tyrex",
      },
];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 font-ralewayFont">
        {products.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <Product
              _id={product._id}
              img={product.img}
              productName={product.productName}
              price={product.price}
              color={product.color}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
