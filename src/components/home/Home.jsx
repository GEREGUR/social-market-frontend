import { Slider } from "./home-components/Slider"
import Hero from "./home-components/Hero"
import ProductGrid from "./home-components/ProductGrid"
import Footer from "./home-components/Footer"

const Home = () => {
  return (
    <div className="mt-24">
        <Slider></Slider>
        <Hero></Hero>
        <ProductGrid></ProductGrid>
        <Footer/>
    </div>
  )
}

export default Home