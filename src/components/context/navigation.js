import { createContext, useEffect, useState } from "react"

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const navigationListener = () => {
            console.log('Navigation happened');
            setCurrentPath(window.location.pathname);
        };
        console.log('listener added');
        window.addEventListener('popstate', navigationListener);

        return () => { console.log('Listener removed'); window.removeEventListener('popstate', navigationListener) };
    }, []);

    const goTo = (address) => {
        console.log('programatc nav', address);
        window.history.pushState({}, '', address)
        setCurrentPath(window.location.pathname);
    }

    return <NavigationContext.Provider value={ { currentPath, goTo } } >
        { children }
    </NavigationContext.Provider>
}

export { NavigationContext }
export default NavigationProvider