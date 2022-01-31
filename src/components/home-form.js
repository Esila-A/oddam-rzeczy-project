import decoration from "../assets/Decoration.svg"


const HomeForm = () => {

  return (
    <div className="form" id="#home-form">
      <div className="form_content">
        <h1 className="form_content--heading">Skontaktuj się z nami</h1>
        <img src={decoration} alt="decoration" className="form_content--decoration"/>
        <form className="form_fields">
          <div className="form_fields--inputs">
            <label className="requests">
              <p className="text">Wpisz swoje imię</p>
              <input type="text" name="name" placeholder="imię" className="input input_name"/>
            </label>
            <label className="requests">
              <p className="text">Wpisz swój email</p>
              <input type="email" name="email" placeholder="email" className="input input_email"/>
            </label>
          </div>
          <label className="requests">
            <p className="text">Wpisz swoją wiadomość</p>
            <textarea name="message" placeholder="wiadomość" className="input input_message"/>
          </label>
        </form>
        <button type="submit" className="form_button">Wyślij</button>
      </div>
    </div>
  )
}

export default HomeForm;
