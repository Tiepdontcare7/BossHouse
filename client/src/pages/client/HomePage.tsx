import Banner from './Homepage/Banner';
import Introduce from './Homepage/Introduce';
import MenuToday from './Homepage/MenuToday';
// import Review from './Homepage/review';
import News from './Homepage/News';
import Gallery from './Homepage/Gallery';
import Chains from './Homepage/Chains';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Introduce />
            <MenuToday />
            <Gallery />
            <Chains />
            {/* <Review /> */}
            <News />
        </div>
    );

};
export default HomePage;
