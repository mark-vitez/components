import classnames from "classnames";

function Button({
    children,
    rounded,
    outline,
    primary,
    secodary,
    success,
    warning,
    danger,
    ...rest
}) {

    const buttonStyle = classnames(rest.className,
        'px-3',
        'py-1.5',
        'm-2',
        'border',
        {
            'bg-blue-600 border-blue-700 text-white': primary,
            'bg-blue-300 border-blue-400': secodary,
            'bg-green-600 border-green-700 text-white': success,
            'bg-yellow-600 border-yellow-700': warning,
            'bg-red-600 border-red-700 text-white': danger,
            'rounded-full': rounded,
            'border-2 bg-white': outline,
            'text-blue-700': outline && primary,
            'text-blue-400': outline && secodary,
            'text-green-700': outline && success,
            'text-yellow-700': outline && warning,
            'text-red-700': outline && danger
        }
    )

    //"text-white bg-blue-600 border-2 border-blue-800"

    return <button { ...rest } className={ buttonStyle } > { children }</button >
}

export default Button;