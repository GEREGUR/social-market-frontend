function Hero() {
    return (
        <div className="">
            <div className="w-full flex flex-col items-center md:items-center zmt-8 mb-32 sm:mt-6  justify-center md:flex-row  md:justify-around">
                <div className="w-96 h-[35.8em] border-black border-2">
                    <a href="" className="items-center flex flex-col">
                        <img src="https://www.malemodelscene.net/wp-content/uploads/2021/04/Balenciaga-Pre-Fall-2021-05.jpg" alt="menswear" />
                        <p className='font-medium text-4xl'>Men</p>
                    </a>
                </div>
                <div className="w-96 h-[35.8em] border-black border-2">
                    <a href="" className="items-center flex flex-col">
                        <img src="https://www.universityoffashion.com/blog/wp-content/uploads/2023/06/A-look-from-Balenciagas-Resort-2023-Collection.-Photo-Credit-Vogue-683x1024.webp" alt="nonmenswear" />
                        <p className='text-4xl font-medium'>Women</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;