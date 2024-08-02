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
    const col1 = document.getElementById('col1');
    const column2 = document.getElementById('column2');
  
    col1.addEventListener('scroll', syncScroll);
    column2.addEventListener('scroll', syncScroll);
  
    function syncScroll() {
      const newScrollTop = Math.min(col1.scrollTop, column2.scrollTop);
  
      // Check if col1 has reached its end
      if (col1.scrollTop + col1.clientHeight >= col1.scrollHeight) {
        col1.scrollTop = col1.scrollHeight - col1.clientHeight; // Stop col1 at the bottom
      } else {
        col1.scrollTop = newScrollTop; // Sync col1 scroll position
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
