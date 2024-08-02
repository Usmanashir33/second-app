import { createContext } from "react";
export const uiContext = createContext();

const UiContextProvider = ({children}) => {
    const showDotDD = (e,containerId) => {
        const dropChilderen = document.querySelectorAll('.dropdown');
        const dotContainer = document.querySelector(`#${containerId}`);
        if (dropChilderen){
            dropChilderen.forEach((dropchild) => {
                dropchild.classList.add("hidden")
            });
        }
        dotContainer.classList.remove("hidden");
        e.stopPropagation();
    }
    return ( 
    <uiContext.Provider value={showDotDD}>
        {children}
    </uiContext.Provider> 
    );
}
 
export default UiContextProvider;