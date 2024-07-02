import { Helmet } from "react-helmet";
import Amenities from "../Amenities/Amenities.jsx";
import Header from "../Header/Header";
import PhotoGallery from "../PhotoGallery/PhotoGallery.jsx";
import Recidencies from "../Recidencies/Recidencies.jsx";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Home || Castle of houses</title>
        </Helmet>
        <Navbar></Navbar>
        <Header></Header>
        <Recidencies></Recidencies>
        <Amenities></Amenities>
        <PhotoGallery></PhotoGallery>
        <Footer></Footer>
      </div>
    );
};

export default Home;