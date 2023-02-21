import useNavigation from "../../hooks/useNavigation";

function Route({ path, children }) {
    const { currentPath } = useNavigation();
    if (currentPath === path) {
        return (<div>{ children }</div>)
    }
    return;
}
export default Route