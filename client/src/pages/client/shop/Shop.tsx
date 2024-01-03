// import Address from "./_components/Address"
import Categories from "./_components/Categories"
import ProductList from "./_components/ProductList"

const Shop = () => {
    return (
        <div className="m-auto flex flex-wrap justify-center ">
            <ProductList />
            <Categories />
            {/* <Address /> */}
        </div>

    )
}

export default Shop