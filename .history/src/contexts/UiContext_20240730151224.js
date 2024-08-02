import { createContext, useState } from "react";
export const uiContext = createContext();

const UiContextProvider = ({children}) => {
    const [showLogOut,setShowLogOut] = useState('hidden');
    const hideAllDD = () => {
          const dropChilderen = document.querySelectorAll('.dropdown');
          if (dropChilderen){
              dropChilderen.forEach((dropchild) => {
                  dropchild.classList.add("hidden")
              });
          }
        };
    const showCardDD = (e,containerId) => {
        const dotContainer = document.querySelector(`#${containerId}`);
        hideAllDD();
        dotContainer.classList.remove("hidden");
        e.stopPropagation();
    }
    document.addEventListener('click',() => {
          hideAllDD();
          setShowLogOut('hidden');
    })
    
    const stopChildLinks = () => {
        document.querySelectorAll('.child-link').forEach((child) => {
          child.addEventListener("click",(event) => {
            // console.log(event.target);
            console.log('child link clicked');
            event.stopPropagation();
          })
        })
      }
    u
    return ( 
    <uiContext.Provider value={{
        showCardDD,showLogOut,setShowLogOut,
    }}>
        {children}
    </uiContext.Provider> 
    );
}
 
export default UiContextProvider;