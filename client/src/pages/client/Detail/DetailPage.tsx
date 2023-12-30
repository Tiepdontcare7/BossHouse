import CheckinSection from "./_components/CheckinSection";
import DetailSection from "./_components/DetailSection";
import RelatedSection from "./_components/RelatedSection";

const DetailPage = () => {

  return <div className="m-auto text-sm ">
    <DetailSection />
    <RelatedSection />
    <CheckinSection />
  </div>;
};

export default DetailPage;