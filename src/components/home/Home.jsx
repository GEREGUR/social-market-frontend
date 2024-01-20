import { Slider } from "./home-components/Slider"
import Hero from "./home-components/Hero"
import Product from "../product/Product"


const Home = () => {
  const products = [
    {
      _id: "100001",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Nike",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "100002",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Nike",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "100003",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Nike",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "100004",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Nike",
      price: "44.00",
      color: "Black",
    },
    {
      _id: "100005",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "Round Table Clock",
      price: "44.00",
      color: "Nike",
    },
  ];
  const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }
  
  return (
    <div>
        <Slider></Slider>
        <Hero></Hero>
        <div className="container">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4" onClick={handleClick('/product')}>
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
        <footer className="w-full bg-black h-48 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 w-2/5 ml-32 mt-16">
            <div className="mt-6 font-bold">Hello</div>
            <div className="mt-6 font-bold">Hello</div>
            <div className="mt-6 font-bold">Hello</div>
          </div>
        </footer>
    </div>
  )
}

export default Home