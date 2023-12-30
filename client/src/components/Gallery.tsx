const Gallery = () => {
    return <>
        <section className="section-gallery bg-[url('/images/bg-img.jpg')]  " >
            <div className="bg-[#00000080]  h-auto py-12">
                <div className="row ">
                    <div className="title mx-auto text-center">
                        <h3 className="font-bold text-4xl mb-4 text-[#f2b10b]">HÌNH ẢNH QUÁN BEE</h3>
                        <img className="mx-auto text-center" src="/images/ngoi-sao.jpg" alt="" />
                    </div>
                </div>
                <div className="row  mt-[10px] mb-[20px]">
                    <div className="col grid grid-cols-4 gap-5 place-items-center mx-[80px]">
                        <div className="col-item h-[300px] w-full items-center justify-center rounded-2xl my-4 overflow-hidden">
                            <img className=" object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img-bee-v1.1.jpg" alt="" />
                        </div>
                        <div className="col-item h-[300px] w-full items-center justify-center rounded-2xl my-4 overflow-hidden">
                            <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img-bee-v1.4.jpg" alt="" />
                        </div>
                        <div className="col-item h-[300px] w-full items-center justify-center rounded-2xl my-4 overflow-hidden">
                            <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img-bee-v1.5.jpg" alt="" />
                        </div>
                        <div className="col-item h-[300px] w-full items-center justify-center rounded-2xl my-4 overflow-hidden">
                            <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img-bee-v1.6.jpg" alt="" />
                        </div>
                        <div className="col-item h-[300px] w-full items-center justify-center rounded-2xl my-4 overflow-hidden">
                            <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img-bee-v1.7.jpg" alt="" />
                        </div>
                        <div className="col-item h-[300px] w-full items-center justify-center rounded-2xl my-4 overflow-hidden">
                            <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img-bee-v1.8.jpg" alt="" />
                        </div>
                        <div className="col-item h-[300px] w-full items-center justify-center rounded-2xl my-4 overflow-hidden">
                            <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img-bee-v1.9.jpg" alt="" />
                        </div>
                        <div className="col-item h-[300px] w-full items-center justify-center rounded-2xl my-4 overflow-hidden">
                            <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                src="/images/img-bee-v1.10.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Gallery;