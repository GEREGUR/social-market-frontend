
export function Slider(){
    return(
        <div className="mt-2 w-full inline-flex sticky z-0 flex-nowrap  border-t-2 border-b-2 border-black overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none w-full animate-infinite-scroll py-2">
                <li></li>
                {/* <li><ReactLogo/></li> */}
                <li><img className="cursor-pointer" src="/src/images/#2Bando 1.svg" alt="junky" /></li>
                <li><img className="cursor-pointer" src="/src/images/sm logo.svg" alt="stain" /></li>
                <li><img className="cursor-pointer" src="/src/images/#2mansion.svg" alt="mansion" /></li>
                {/* <li><ReactLogo/></li> */}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none w-full animate-infinite-scroll py-2">
                <li><img className="cursor-pointer" src="./images/#3kritika.svg" alt="kritika"/></li>
                <li><img className="cursor-pointer" src="./images/#10undermind.svg" alt="undermid" /></li>
                <li><img className="cursor-pointer" src="./images/#8junky-snax.svg" alt="junky" /></li>
                <li><img className="cursor-pointer" src="./images/#8stain.svg" alt="stain" /></li>
                <li><img className="cursor-pointer" src="./images/#2mansion.svg" alt="mansion" /></li>
                <li><img className="cursor-pointer" src="./images/#3kritika.svg" alt="kritika" /></li>
            </ul>
        </div>
    )
}