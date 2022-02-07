import HomeHeader from "./home-header";
import HomeThreeColumns from "./home-three-columns";
import HomeFourSteps from "./home-four-steps";
import HomeAbout from "./home-about";
import HomeOrganizations from "./home-organizations";
import HomeForm from "./home-form";
import HomeFooter from "./home-footer";

const Home = () => {
    return (
      <div className="home" id="#home">
        <HomeHeader />
        <HomeThreeColumns />
        <HomeFourSteps />
        <HomeAbout />
        <HomeOrganizations />
        <HomeForm />
        <HomeFooter />
      </div>
    )
}

export default Home;
