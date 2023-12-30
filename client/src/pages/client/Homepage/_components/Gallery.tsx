const Gallery = () => {
    return (
        <section className="section-gallery bg-[url('/images/bg-img.jpg')]">
            <div className="bg-[#00000040] h-auto py-12">
                <div className="row">
                    <div className="title mx-auto text-center">
                        <h3 className="font-bold text-4xl mb-4 text-[#f2b10b]">HÌNH ẢNH BOSSHOUSE</h3>
                        <img className="mx-auto text-center" src="/images/ngoi-sao.jpg" alt="" />
                    </div>
                </div>
                <div className="row mt-[20px] mb-[20px]">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 place-items-center xl:mx-auto lg:mx-[40px] md:mx-[80px] mx-[40px]">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                            <div key={index} className="col-item sm:h-[180px] md:h-[240px] lg:h-[300px] xl:h-[300px] w-full items-center justify-center rounded-2xl overflow-hidden">
                                <img
                                    className="object-cover w-full h-full hover:scale-[1.1] transition-transform ease-in-out duration-500"
                                    src={`/images/img_v${index}.png`}
                                    alt={`Image ${index}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
