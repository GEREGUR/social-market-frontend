import { junky, stain, mansion, ayne, kritika, bando, mustico } from "../../../assets"

export function Slider(){
    return(
        <div className="w-full inline-flex flex-nowrap  border-t-2 border-b-2 border-black overflow-hidden ">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none w-full animate-infinite-scroll py-2">
                <li><img className="cursor-pointer" src={junky} alt="junky" /></li>
                <li><img className="cursor-pointer" src={stain} alt="stain" /></li>
                <li><img className="cursor-pointer" src={mansion} alt="mansion" /></li>
                <li><img className="cursor-pointer" src={ayne} alt="ayne" /></li>
                <li><img className="cursor-pointer" src={kritika} alt="kritika" /></li>
                <li><img className="cursor-pointer" src={bando} alt="bando" /></li>
                <li><img className="cursor-pointer" src={mustico} alt="mustico" /></li>
                <li><img className="cursor-pointer" src={junky} alt="junky" /></li>
                <li><img className="cursor-pointer" src={stain} alt="stain" /></li>
                <li><img className="cursor-pointer" src={mansion} alt="mansion" /></li>
                <li><img className="cursor-pointer" src={ayne} alt="ayne" /></li>
                <li><img className="cursor-pointer" src={kritika} alt="kritika" /></li>
                <li><img className="cursor-pointer" src={bando} alt="bando" /></li>
                <li><img className="cursor-pointer" src={mustico} alt="mustico" /></li>
            </ul>
        </div>
    )
}