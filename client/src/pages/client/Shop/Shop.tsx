import Categories from "./_components/Categories"
import ProductList from "./_components/ProductList"

const Shop = () => {
    return (
        <div className="m-auto flex flex-wrap justify-center ">
            <ProductList />
            <Categories />
        </div>

    )
}

export default Shop