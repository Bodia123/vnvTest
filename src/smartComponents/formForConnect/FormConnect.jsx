import PropTypes from "prop-types";
import css from "./Form.module.css";
import sendTelegram from "../../api/telegram";

const InputBox = ({ type, inputType, placeholderInput = "" }) => {
  return (
    <div className={css.inputBox}>
      <input
        type={inputType}
        required
        name={type}
        id={type}
        className={css.input}
        placeholder={placeholderInput}
      />
    </div>
  );
};
function FormConnect({ type, cleanType, briefMessage, setMessage }) {
  const submitForm = async (event) => {
    event.preventDefault();
    const value = {
      name: event.target.name.value,
      addresInfo: event.target[1].value,
      comment: event.target.comment.value,
    };
    let message = `<b>   Заявка з сайту</b>\n <b>Ім'я клієнта: ${value.name}</b>\n <b>Тип з'єднання: ${value.addresInfo}</b>\n <b>Коментарій: ${value.comment}</b>\n`;
    if (briefMessage) {
      message += briefMessage;
    }
    await sendTelegram(message);
    setMessage(null);
    cleanType("number");
    event.target.reset();
  };
  return (
    <>
      <h3 className={css.title}>Заповніть форму</h3>
      <form action="" className={css.form} onSubmit={submitForm}>
        <div className={css.inputBox}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ваше ім'я"
            min={3}
            pattern="[A-Za-zА-Яа-яЁёІіЇїЄє]{2,20}"
            required
            className={css.input}
          />
        </div>
        {type === "number" && (
          <InputBox
            type={type}
            inputType={"tel"}
            pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
            placeholderInput={"Номер телефону"}
          />
        )}
        {type === "viber" && (
          <InputBox
            type={type}
            inputType={"tel"}
            placeholderInput={"Номер телефону Viber"}
          />
        )}
        {type === "whatsApp" && (
          <InputBox
            type={type}
            inputType={"tel"}
            placeholderInput={"Ваш WhatsApp аккаунт"}
          />
        )}
        {type === "email" && (
          <InputBox
            type={type}
            inputType={"email"}
            placeholderInput={"Ваша пошта"}
          />
        )}
        {type === "telegram" && (
          <InputBox
            type={type}
            inputType={"text"}
            placeholderInput={"Ваш телеграм аккаунт"}
          />
        )}
        <textarea
          name="comment"
          id="comment"
          placeholder="Ваш коментарій до заявки"
          className={css.textArea}
        />
        <div className={css.submitBox}>
          <button disabled={!type}>
            {!type ? `Оберіть тип зв'язку` : `Відправити запит`}
          </button>
        </div>
      </form>
    </>
  );
}
FormConnect.propTypes = {
  type: PropTypes.string,
  cleanType: PropTypes.func,
};
InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholderInput: PropTypes.string.isRequired,
  setMessage: PropTypes.func,
};
export default FormConnect;
