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
    const col2 = document.getElementById('col2');
  
    col1.addEventListener('scroll', syncScroll);
    col2.addEventListener('scroll', syncScroll);
  
    function syncScroll() {
      const newScrollTop = Math.min(col1.scrollTop, col2.scrollTop);
  
      // Check if col1 has reached its end
      if (col1.scrollTop + col1.clientHeight >= col1.scrollHeight) {
        col1.scrollTop = col1.scrollHeight - col1.clientHeight; // Stop col1 at the bottom
      } else {
        col1.scrollTop = newScrollTop; // Sync col1 scroll position
      }
  
      // Check if col2 has reached its end
      if (col2.scrollTop + col2.clientHeight >= col2.scrollHeight) {
        col2.scrollTop = col2.scrollHeight - col2.clientHeight; // Stop col2 at the bottom
      } else {
        col2.scrollTop = newScrollTop; // Sync col2 scroll position
      }
    }
  });
  
  return (
    <div className="App main-container">
     <Sidebar /> 
     {/* <Container /> */}
    div.cols-container
    </div>
  );
}

export default App;
