import { useEffect, useRef, useState } from "react"

export function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {

        const handleDocumentClick = (event) => {
            if (!dropdownRef)
                return

            if (!dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("click", handleDocumentClick, true);
        return () => {
            console.log('listener removed');
            document.removeEventListener("click", handleDocumentClick, true);
        }
    }, []);



    const renderedOpions = options.map((option) => {
        return <div className="hover:bg-blue-200 p-3 w-full" key={ option.value } onClick={ () => { handleOptionSelecion(option) } }>{ option.label }</div>
    })

    const handleOptionSelecion = (option) => {
        onChange(option);
        setIsOpen(false);
    }

    const triggerOpenState = () => {
        setIsOpen((currVal) => {
            return !currVal;
        })
    }

    return (
        <div ref={ dropdownRef } className="w-48 relative">
            <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
                onClick={ triggerOpenState }>
                { value?.label || 'Select...' }
            </div>
            { isOpen && (<div className=" z-40 absolute cursor-pointer top-full border rounded shadow bg-white w-full">
                { renderedOpions }
            </div>
            ) }
        </div>
    )

}

export default Dropdown;