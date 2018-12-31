import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";

import FindMeOn from "./Components/FindMeOn";
import Introduction from "./Components/Introduction";
import WhoAmI from "./Components/WhoAmI";

type ReactFullPageRenderProp = {
  state: any;
  fullpageApi: any;
};

const fullpageOptions = {
  anchors: ["whoAmI", "introduction", "findMeOn"],
  sectionsColor: ["#ff5f45", "#02ceba", "#0798ec"],
  callbacks: ["onLeave", "afterLoad"],
  scrollOverflow: true,
};

const App = () => (
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
);

export default App;
