import Col1 from "./Col1";
import Col2 from "./Col2";
import Container from "./Container";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

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
 document.querySelector(".col1").addEventListener("scroll",check)
  
  return (
    <div className="App main-container">
     <Sidebar /> 
     {/* <Container /> */}
    <div className="cols-container">
      <Col1/>
      <Col2/>
    </div>
    </div>
  );
}

export default App;
