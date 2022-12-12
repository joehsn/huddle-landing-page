import Image from "next/image";
import React from "react";

export default function GrowSec() {
  return (
    <section className="GrowSec">
      <div className="Grow_Container">
        <div className="GrowSec-content">
          <h1>Grow Together</h1>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <Image
          src="/illustration-grow-together.svg"
          alt="grow"
          width={1023}
          height={838}
        />
      </div>
    </section>
  );
}
