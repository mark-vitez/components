import { useState } from "react";
import Dropdown from "../components/dropdown/dropdown";

function DropdownPage() {
    const [dropdownSelection, setDropdownSelection] = useState(null);
    const options = [
        {
            label: "Magyar",
            value: "HU"
        },
        {
            label: "Romana",
            value: "RO"
        }, {
            label: "English",
            value: "EN"
        }
    ]

    const onOptionSelected = (value) => {
        setDropdownSelection(value);
    }


    return <div className="">
        <Dropdown options={ options } value={ dropdownSelection } onChange={ onOptionSelected } />
        <Dropdown options={ options } value={ dropdownSelection } onChange={ onOptionSelected } />
    </div>
}

export default DropdownPage