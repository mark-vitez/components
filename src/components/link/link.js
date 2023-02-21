import classNames from "classnames";
import useNavigation from "../../hooks/useNavigation";

function Link({ to, className, children, active }) {
    const { goTo } = useNavigation();

    const classes = classNames('text-blue-500' , className);

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        goTo(to);
    }


    return <a className={ classes } href={ to } onClick={ handleClick }>
        { children }
    </a>
}

export default Link