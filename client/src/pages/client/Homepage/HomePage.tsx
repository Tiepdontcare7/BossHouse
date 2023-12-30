import Banner from './_components/Banner';
import Introduce from './_components/Introduce';
import MenuToday from './_components/MenuToday';
import News from './_components/News';
import Gallery from './_components/Gallery';
import Chains from './_components/Chains';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Introduce />
            <MenuToday />
            <Gallery />
            <Chains />
            <News />
        </div>
    );

};
export default HomePage;
