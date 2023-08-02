import React from "react";
import Image from "next/image";
import Twitter from "/public/assets/social_twitter.png";
import Facebook from "/public/assets/social_facebook.png";
import Instagram from "/public/assets/social_instagram.png";
import Google from "/public/assets/social_google.png";
import Discord from "/public/assets/social_discord.png";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="twitter.com" target="_blank" rel="noreferrer">
        <Image
          src={Twitter}
          className={`hover:opacity-50 ${isDark ? "brightness-0" : ""}`}
          alt="twitter"
          width={20}
          height={20}
        />
      </a>
      <a href="facebook.com" target="_blank" rel="noreferrer">
        <Image
          src={Facebook}
          className={`hover:opacity-50 ${isDark ? "brightness-0" : ""}`}
          alt="facebook"
          width={20}
          height={20}
        />
      </a>
      <a href="instagram.com" target="_blank" rel="noreferrer">
        <Image
          src={Instagram}
          className={`hover:opacity-50 ${isDark ? "brightness-0" : ""}`}
          alt="instagram"
          width={20}
          height={20}
        />
      </a>
      <a href="google.com" target="_blank" rel="noreferrer">
        <Image
          src={Google}
          className={`hover:opacity-50 ${isDark ? "brightness-0" : ""}`}
          alt="google"
          width={20}
          height={20}
        />
      </a>
      <a href="discord.com" target="_blank" rel="noreferrer">
        <Image
          src={Discord}
          className={`hover:opacity-50 ${isDark ? "brightness-0" : ""}`}
          alt="discord"
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
