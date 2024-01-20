function Hero() {
    return (
        <div>
            <div className="w-full flex flex-col items-center justify-center md:flex-row md:h-[550px] md:justify-around my-10">
                <div className="w-[90%] mb-5 border-2 border-black cursor-pointer h-[400px] md:w-1/3 md:h-[550px] md:mb-0 align-text-bottom text-center">Женское</div>
                <div className="w-[90%] border-2 border-black cursor-pointer h-[400px] md:w-1/3 md:h-[550px] text-center">Мужское</div>
            </div>
        </div>
    );
}

export default Hero;