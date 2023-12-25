const Gallery = () => {
    return <>
        <section className="section-gallery bg-[url('/images/bg-img.jpg')] " >
            <div className="bg-[#00000040]  h-auto py-12">
                <div className="row ">
                    <div className="title mx-auto text-center">
                        <h3 className="font-bold text-4xl mb-4 text-[#f2b10b]">HÌNH ẢNH BOSSHOUSE</h3>
                        <img className="mx-auto text-center" src="/images/ngoi-sao.jpg" alt="" />
                    </div>
                </div>
                <div className="row  mt-[20px] mb-[20px]">
                    <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5 place-items-center xl:mx-[80px] md:mx-[15px] mx-[15px]">
                         <div className="col-item xl:h-[300px] md:h-[180px] w-full items-center justify-center rounded-2xl  overflow-hidden">
                            <img className="object-cover w-full xl:h-full h-[180px]  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img_v1.png" alt="" />
                        </div>
                        <div className="col-item xl:h-[300px] md:h-[180px] w-full items-center justify-center rounded-2xl  overflow-hidden">
                            <img className="object-cover w-full xl:h-full h-[180px]  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img_v2.png" alt="" />
                        </div>
                        <div className="col-item xl:h-[300px] md:h-[180px] w-full items-center justify-center rounded-2xl  overflow-hidden">
                            <img className="object-cover w-full xl:h-full h-[180px]  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img_v3.png" alt="" />
                        </div>
                        <div className="col-item xl:h-[300px] md:h-[180px] w-full items-center justify-center rounded-2xl  overflow-hidden">
                            <img className="object-cover w-full xl:h-full h-[180px]  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img_v4.png" alt="" />
                        </div>
                        <div className="col-item xl:h-[300px] md:h-[180px] w-full items-center justify-center rounded-2xl  overflow-hidden">
                            <img className="object-cover w-full xl:h-full h-[180px]  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img_v5.png" alt="" />
                        </div>
                        <div className="col-item xl:h-[300px] md:h-[180px] w-full items-center justify-center rounded-2xl  overflow-hidden">
                            <img className="object-cover w-full xl:h-full h-[180px]  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img_v6.png" alt="" />
                        </div>
                        <div className="col-item xl:h-[300px] md:h-[180px] w-full items-center justify-center rounded-2xl  overflow-hidden">
                            <img className="object-cover w-full xl:h-full h-[180px]  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img_v7.png" alt="" />
                        </div>
                        <div className="col-item xl:h-[300px] md:h-[180px] w-full items-center justify-center rounded-2xl  overflow-hidden">
                            <img className="object-cover w-full xl:h-full h-[180px]  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img_v8.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Gallery;