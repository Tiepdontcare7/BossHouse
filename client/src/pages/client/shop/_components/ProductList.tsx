import ProductCard from "./ProductCard"

const ProductList = () => {
    return (
        <>
            <section>
                <div className=' flex justify-center'>
                    <div className="m-3">
                        <div className="product-list">
                            <div className="filter h-[50px] w-full bg-slate-200 mb-2"></div>
                            <div className="block-content">
                                <div className="grid gap-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-[430px]:grid-cols-2 max-[430px]:gap-x-1">
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProductList