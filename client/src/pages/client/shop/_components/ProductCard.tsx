

const ProductCard = () => {
    return (

        <div className=" lg:w-54 ">
            <div className="rounded-2xl my-4 overflow-hidden">
                <img className="hover:scale-[1.1] transition-transform ease-in-out duration-500"
                    src="https://dogily.vn/wp-content/uploads/2023/11/Vay-cho-meo-1-400x400.jpg" alt="" />
            </div>
            <div className=" text-center">
                <div className="title-wrapper">
                    <p className="name product-title mt-3 font-semibold">
                        <a href="">Váy phối màu classic</a>
                    </p>
                </div>
                <div className=" text-xl  h-5">
                    <span className="price flex flex-wrap justify-center">

                        <span className="text-gray-400 font-normal opacity-60 me-2 line-through">
                            <bdi> 250,000<span>₫</span></bdi>
                        </span>
                        <span className="text-red-500 font-semibold">
                            <bdi>129,000<span>₫</span></bdi>
                        </span>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default ProductCard