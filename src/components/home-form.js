import { useState } from "react";
import decoration from "../assets/Decoration.svg";

const HomeForm = () => {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    const data = {
      name: formValues.name,
      email: formValues.email,
      message: formValues.message,
    };

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.status === "success") {
          setResponseMessage(
            <p className="responsePositive">
              Wiadomość została wysłana!
              <br />
              Wkrótce się skontaktujemy.
            </p>
          );
        } else if (result.status === "error") {
          setResponseMessage(
            <p className="responseNegative">
              Coś poszło nie tak...
              <br />
              Spróbuj jeszcze raz.
            </p>
          );
        } else {
          setResponseMessage(
            <p className="responseNegative">
              Nieznany błąd<br />
              Spróbuje jeszcze raz.
            </p>
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setResponseMessage(
          <p className="responseNegative">
            Coś poszło nie tak...
            <br />
            Spróbuje jeszcze raz.
          </p>
        );
      });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameReg = /^[A-Za-z]+$/;

    if (values.name === "") {
      errors.name = "Podane imię jest nieprawidłowe!";
    } else if (!nameReg.test(values.name)) {
      errors.name = "Podane imię jest nieprawidłowe!";
    }
    if (!regex.test(values.email)) {
      errors.email = "Podany email jest nieprawidłowy!";
    } else if (values.email === "") {
      errors.email = "Podany email jest nieprawidłowy!";
    }
    if (values.message.length < 120) {
      errors.message = "Wiadomóść musi mieć co najmniej 120 znaków!";
    } else if (values.message === "") {
      errors.message = "Wiadomóść musi mieć co najmniej 120 znaków!";
    }
    return errors;
  };

  return (
    <div className="form" id="#home-form">
      <div className="form_content">
        <h1 className="form_content--heading">Skontaktuj się z nami</h1>
        <img
          src={decoration}
          alt="decoration"
          className="form_content--decoration"
        />
        <form className="form_fields" onSubmit={handleSubmit}>
          <div>
            {responseMessage}
            <div className="form_fields--inputs">
              <label className="requests">
                <p className="text">Wpisz swoje imię</p>
                <input
                  type="text"
                  name="name"
                  placeholder="imię"
                  className={`input input_name ${formErrors.name && "error"}`}
                  values={formValues.name}
                  onChange={handleChange}
                />
                <p className="error-message">{formErrors.name}</p>
              </label>
              <label className="requests">
                <p className="text">Wpisz swój email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className={`input input_email ${formErrors.email && "error"}`}
                  values={formValues.email}
                  onChange={handleChange}
                />
                <p className="error-message">{formErrors.email}</p>
              </label>
            </div>
            <label className="requests">
              <p className="text">Wpisz swoją wiadomość</p>
              <textarea
                name="message"
                placeholder="wiadomość min. 120 znaków"
                className={`input input_message ${
                  formErrors.message && "error"
                }`}
                values={formValues.message}
                onChange={handleChange}
              />
              <p className="error-message">{formErrors.message}</p>
            </label>
          </div>
          <button type="submit" className="form_button">
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeForm;
