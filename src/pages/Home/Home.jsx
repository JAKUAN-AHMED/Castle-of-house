import Header from "../Header/Header";
import Recidencies from "../Recidencies/Recidencies.jsx";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Recidencies></Recidencies>
            <Footer></Footer>
        </div>
    );
};

export default Home;