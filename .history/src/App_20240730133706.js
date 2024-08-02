import { BrowserRouter as Router,Route,Switch} from "react-router-dom/cjs/react-router-dom.min";
import Register from "./account/Register";
import Col1 from "./Col1";
import Col2 from "./Col2";
import Container from "./Container";
import AuthContextProvider from "./contexts/AuthContext";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import PreProtectedRoute from "./contexts/PreProtectedRoute";
import ProtectedRoute from "./contexts/ProtectedRoute";
import Loading from "./contexts/LoadingIcon";
import Profile from "./Profile";
import DataRendingContextProvider from "./contexts/DataRending";
import UiContextProvider from "./contexts/UiContext";


function App() {
  // const hideAllDD = () => {
  //   const dropChilderen = document.querySelectorAll('.dropdown');
  //   if (dropChilderen){
  //       dropChilderen.forEach((dropchild) => {
  //           dropchild.classList.add("hidden")
  //       });
  //   }
  // };
  // const logoutCont = (e) => {
  //   hideAllDD();
  //   const LogoutContainer = document.querySelector(".tri-content");
  //   LogoutContainer.classList.remove('hidden');
  //   e.stopPropagation();
  // };
  // const stopChildLinks = () => {
  //   document.querySelectorAll('.child-link').forEach((child) => {
  //     child.addEventListener("click",(event) => {
  //       console.log(event.target);
  //       console.log('child link clicked');
  //         event.stopPropagation();
  //     })
  //   })
  // }
  // document.addEventListener('click',() => {
  //   hideAllDD();
  // })
  // useEffect(() => {
  //   // stopChildLinks();
  // })
  
  return (
  <div className="App main-container">
    <UiContextProvider>
    <AuthContextProvider>
      <DataRendingContextProvider>

      <Router>
        <Loading/>
        <Switch>
          <Route path='/register'> 
            <PreProtectedRoute>
              <Register/>
            </PreProtectedRoute>
          </Route>

          {/* <Route path='/'> */}
            <ProtectedRoute>
              <Loading/>
              <Sidebar/>
              {/* <Container /> */}
              <div className="cols-container">
                <Col1/>
                <Col2/>
              </div>
            </ProtectedRoute>
        </Switch>
      </Router>

      </DataRendingContextProvider>
    </AuthContextProvider>
    </UiContextProvider>
  </div>
  );
}

export default App;
