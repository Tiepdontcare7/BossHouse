import ProductCard from '../../shop/_components/ProductCard'

const RelatedSection = () => {
    return (
        <section className='m-4'>
            <div className="relate-product grid">
                <div className="">
                    <div className=" flex items-center border-b text-2xl font-semibold mb-2 leading-7">
                        <h1 className="title p-2">Có thể bạn thích</h1>
                    </div>
                    <div className="grid gap-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-[430px]:grid-cols-2 max-[430px]:gap-x-1">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default RelatedSection