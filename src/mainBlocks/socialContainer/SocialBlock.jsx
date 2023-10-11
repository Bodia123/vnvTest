import React from "react";
import css from "./Social.module.css";
import TitleComponent from "../../dumbComponents/titleComponent/TitleComponent";
import SocialItem from "../../dumbComponents/SocialItem/SocialItem";
//
import { BsInstagram, BsTiktok } from "react-icons/bs";
import { BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";
//
function SocialBlock() {
  return (
    <div>
      <TitleComponent text={"Наші соціальні мережі"} />
      <h3 className={css.title}>
        Можливо, дане повідомлення буде початком новго етапу...
      </h3>
      <ul className={css.list}>
        <li>
          <a
            href="https://www.instagram.com/bodianchik_"
            rel="noreferrer"
            target="_blank"
          >
            <SocialItem
              icon={<BsInstagram size={30} />}
              color="#FEBE10"
              title={"Instagram"}
              target="_blank"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <SocialItem
              icon={<BsTiktok size={30} />}
              title="TikTok"
              color="white"
            />
          </a>
        </li>
        <li>
          <a href="https://t.me/@zinovkinB" rel="noreferrer" target="_blank">
            <SocialItem
              icon={<BiLogoTelegram size={30} />}
              title="Telegram"
              color="#0CAFFF"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <SocialItem
              icon={<BiLogoFacebook size={30} />}
              color="#2a52be"
              title="Facebook"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialBlock;
