import Address from "./_components/Address"
import Categories from "./_components/Categories"
import Introduce from "./_components/Introduce"
import ProductList from "./_components/ProductList"

const Shop = () => {
    return (
        <div className="m-auto w-[90%] flex flex-wrap justify-center ">
            <ProductList />
            <Categories />
            <Address />
            <Introduce />
        </div>

    )
}

export default Shop