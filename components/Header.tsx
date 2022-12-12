import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header>
      <h1>Build The Community Your Fans Will Love</h1>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="header-btn">Get Started For Free</button>
      <Image
        src="/screen-mockups.svg"
        alt="mockups"
        width={1035}
        height={739}
      />
      <div className="header-blocks">
        <div className="header-block">
          <Image
            src="/icon-communities.svg"
            alt="music"
            width={47}
            height={41}
          />
          <h1>1.4k+</h1>
          <span>Communities Formed</span>
        </div>
        <div className="header-block">
          <Image src="/icon-messages.svg" alt="music" width={48} height={40} />
          <h1>2.7m+</h1>
          <span>Messages Sent</span>
        </div>
      </div>
    </header>
  );
}
