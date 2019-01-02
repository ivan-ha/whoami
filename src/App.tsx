import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";

import FindMeOn from "./Components/FindMeOn";
import Introduction from "./Components/Introduction";
import Menu from "./Components/Menu";
import WhoAmI from "./Components/WhoAmI";

type ReactFullPageRenderProp = {
  state: any;
  fullpageApi: any;
};

const fullpageOptions = {
  anchors: ["whoAmI", "introduction", "findMeOn"],
  sectionsColor: ["#ff5f45", "#02ceba", "#0798ec"],
  navigation: true,
  menu: "#menu",
};

const menuItems = [
  {
    anchor: "whoAmI",
    text: "Who Am I",
  },
  {
    anchor: "introduction",
    text: "What I Do",
  },
  {
    anchor: "findMeOn",
    text: "Find Me On",
  },
];

const App = () => (
  <>
    <Menu menuId="menu" items={menuItems} />
    <ReactFullpage
      {...fullpageOptions}
      render={({ fullpageApi }: ReactFullPageRenderProp) => {
        return (
          <div id="fullpage-wrapper">
            <WhoAmI onButtonClick={() => fullpageApi.moveSectionDown()} />
            <Introduction />
            <FindMeOn />
          </div>
        );
      }}
    />
  </>
);

export default App;
