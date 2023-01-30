import React from "react";
import Page from "./Page"
function AppRouter() {
  
  return(

    <div className="App">

      <Page name="bruce" heroName="batman" >
          <p>this is children props</p>
      </Page>

      <Page name="geralt" heroName="witcher" >
          <button>action</button>
      </Page>

      <Page name="ciri" heroName="Elder blood">

      </Page>

    </div>

  );
 


}

export default AppRouter;
