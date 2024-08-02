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
  // 
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

            <ProtectedRoute>
              <Loading/>
              <Sidebar/>
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
