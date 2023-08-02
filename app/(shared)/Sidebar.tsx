import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import ad2 from "public/assets/ad-2.png";
import Profile from "public/assets/about-profile.jpg";
import Image from "next/image";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 px-5 text-wh-50 text-xs font-bold text-center py-3">
        Subscribe and Follow
      </h4>
      <div className="mx-5 my-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">
        <Image
          src={ad2}
          alt="advert"
          placeholder="blur"
          width={500}
          height={800}
          className="hidden md:block my-8 w-full"
        />
      </div>
      <h4 className="bg-wh-900 px-5 text-wh-50 text-xs font-bold text-center py-3">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          src={Profile}
          alt="profile"
          placeholder="blur"
          // fill
          style={{ width: "500px", height: "250px" }}
          className="object-cover"
        />
      </div>
      <h4 className="px-5 text-wh-500 text-xs font-bold text-center py-3">
        Geoffrey Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Sit diam vel lacus tortor molestie amet tincidunt. Amet amet arcu sed
        facilisi
      </p>
    </section>
  );
};

export default Sidebar;
