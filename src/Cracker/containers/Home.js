import React from "react";
import AboutBlock from "./AboutBlock";
import FooterContainer from "./FooterContainer";
import TasteBlock from "./TasteBlock";

function Home() {
  return (
    <div>
      <main>
        <TasteBlock />
        <AboutBlock />
      </main>
      <FooterContainer />
    </div>
  );
}

export default Home;
