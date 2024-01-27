import Product from "../../product/Product";

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
const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }
    
  return (
    <div>
        <div className="container">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-ralewayFont" onClick={handleClick('/product')}>
            {products.map((product) => (
              <Product
                key={product._id}
               _id={product._id}
                img={product.img}
                productName={product.productName}
                price={product.price}
                color={product.color}
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default ProductGrid