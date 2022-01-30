import photo from "../assets/People.jpg"
import decoration from "../assets/Decoration.svg"
import signature from "../assets/Signature.svg"

const HomeAbout = () => {

  return (
    <div className="about" id="#home-about">
      <div className="about_content">
        <h1 className="about_content--heading">O nas</h1>
        <img src={decoration} alt="decoration" className="about_content--decoration"/>
        <p className="about_content--paragraph">Nori grape silver beet broccoli kombu beet<br/>greens fava bean potato quandong celery. Bunya<br/>nuts black-eyed pea prairie turnip leek lentil<br/>turnip greens parsnip.</p>
        <img src={signature} className="about_content--signature" />
      </div>
      <img src={photo} className="about_img" />
    </div>
  )
}

export default HomeAbout;
