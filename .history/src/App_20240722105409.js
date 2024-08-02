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
  document.addEventListener('DOMContentLoaded', function() {
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');
  
    column1.addEventListener('scroll', syncScroll);
    column2.addEventListener('scroll', syncScroll);
  
    function syncScroll() {
      const newScrollTop = Math.min(column1.scrollTop, column2.scrollTop);
  
      // Check if column1 has reached its end
      if (column1.scrollTop + column1.clientHeight >= column1.scrollHeight) {
        column1.scrollTop = column1.scrollHeight - column1.clientHeight; // Stop column1 at the bottom
      } else {
        column1.scrollTop = newScrollTop; // Sync column1 scroll position
      }
  
      // Check if column2 has reached its end
      if (column2.scrollTop + column2.clientHeight >= column2.scrollHeight) {
        column2.scrollTop = column2.scrollHeight - column2.clientHeight; // Stop column2 at the bottom
      } else {
        column2.scrollTop = newScrollTop; // Sync column2 scroll position
      }
    }
  });
  
  return (
    <div className="App main-container">
     <Sidebar /> 
     {/* <Container /> */}
     <Col1/>
     <Col2/>
    </div>
  );
}

export default App;
