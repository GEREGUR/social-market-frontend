/* eslint-disable react/jsx-key */
import Product from "../components/product/Product";


const CartPage = () => {
    const products = [
        {
          _id: "100001",
          img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          productName: "Round Table Clock",
          price: "44.00",
          color: "Black",
          description: "Модель Nike Air Force 1 Shadow — дополненный вариант классических «форсов». Многослойный силуэт в виде увеличенной подошвы, двойной накладки на пятке и задвоенного свуша, придает паре современный вид, сохраняя при этом неизменный стиль и ДНК AF-1. Верх кроссовок изготовлен из натуральной мягкой кожи. Дополнен перфорацией для циркуляции воздуха и прямой шнуровкой для комфортной посадки. Амортизация Nike Air делает каждый шаг более легким, а цепкие протекторы позволяют чувствовать себя более уверенно на баскетбольной площадке и улицах города."
        }
      ];
    return (
        <div className="flex flex-col justify-between">
            {/* <div className="flex flex-row justify-between h-16">
                <img src={props.img} alt="product-img" />
            </div> */}
            {products.map((product, index)=>(
                <Product
                key={index}
               _id={product._id}
                img={product.img}
                productName={product.productName}
                price={product.price}
                color={product.color}
              />
            ))}
            {/* {products.map((description)=>(
                // <div>{description}</div>
            ))} */}
        </div>
    );
}

export default CartPage;