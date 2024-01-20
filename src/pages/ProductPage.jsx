import Product from "../components/product/Product";

const ProductPage = () => {
    const products = [
        {
          _id: "100001",
          img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          productName: "Nike",
          price: "44.00",
          color: "Black",
          description:"Air Force 1 motherfucker"
        }
      ];
      const handleClick = (myLink) => () => {
        window.location.href=myLink;
      }
  return (
    <div>
        <div onClick={handleClick('/product')}>
            {products.map((product, index) => (
              <Product
                key={index}
               _id={product._id}
                img={product.img}
                productName={product.productName}
                price={product.price}
                color={product.color}
              />
            ))}
          </div>
    </div>
  )
}

export default ProductPage