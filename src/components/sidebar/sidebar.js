import Link from "../link/link";
import classNames from "classnames";
import useNavigation from "../../hooks/useNavigation";

function Sidebar({ className }) {
    const { currentPath } = useNavigation();
    const links = [
        {
            path: '/button',
            label: 'Button page'
        },
        {
            path: '/accordion',
            label: 'Accordion page'
        },
        {
            path: '/',
            label: 'Dropdown page'
        },
        {
            path: '/modal',
            label: 'Modal page'
        }
    ]

    const style = classNames(
        'sticky top-0 overlow-y-scroll flex flex-col items-start',
        className
    )

    const linkStyle = (path) => {
        const isActive = currentPath === path;
        return classNames(
            'mb-2 pl-2',
            {
                'text-lg font-bold  border-l-2 border-blue-500': isActive
            }
        );
    }


    const renderedLinks = links.map(link => {
        return <Link className={ linkStyle(link.path) } key={ link.path } to={ link.path }>{ link.label }</Link>
    })

    return <div className={ style }>
        { renderedLinks }
    </div>
}

export default Sidebar;