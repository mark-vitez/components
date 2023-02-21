import { useContext } from "react";
import { NavigationContext } from "../components/context/navigation";

function useNavigation() {
    return useContext(NavigationContext);
}

export default useNavigation;