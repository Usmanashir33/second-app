import { createContext } from "react";
export const uiContext = createContext();

const UiContextProvider = ({children}) => {
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
        const dropChilderen = document.querySelectorAll('.dropdown');
        if (dropChilderen){
            dropChilderen.forEach((dropchild) => {
                dropchild.classList.add("hidden")
            });
        }
        dotContainer.classList.remove("hidden");
        e.stopPropagation();
    }
    
    const stopChildLinks = () => {
        document.querySelectorAll('.child-link').forEach((child) => {
          child.addEventListener("click",(event) => {
            // console.log(event.target);
            console.log('child link clicked');
            event.stopPropagation();
          })
        })
      }
    return ( 
    <uiContext.Provider value={{
        showCardDD,
    }}>
        {children}
    </uiContext.Provider> 
    );
}
 
export default UiContextProvider;