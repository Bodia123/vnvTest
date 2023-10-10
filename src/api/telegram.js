import axios from "axios";
const token = import.meta.env.VITE_BOT_TELEGRAM_TOKEN;
const id = import.meta.env.VITE_CHAT_ID;
const API_URL_BOT = `https://api.telegram.org/bot${token}/sendMessage`;

const sendTelegram = (message) => {
  return axios.post(`${API_URL_BOT}`, {
    chat_id: id,
    parse_mode: "html",
    text: message,
  });
};
export default sendTelegram;
