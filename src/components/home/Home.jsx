import { Slider } from "./home-components/Slider"
import Hero from "./home-components/Hero"
import ProductGrid from "./home-components/ProductGrid"
import Footer from "./home-components/Footer"

const Home = () => {
  return (
    <div className="mt-[5.5rem]">
        <Slider></Slider>
        <Hero></Hero>
        <ProductGrid></ProductGrid>
        <div className="mt-24">
          <Footer/>
        </div>
    </div>
  )
}

export default Home