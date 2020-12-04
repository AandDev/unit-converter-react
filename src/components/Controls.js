import React from 'react';

const Controls = (props) => {

    const {
        units,
        setUnit,
        name,
        options,
        selectedOption,
        setSelectedOption
    } = props;

    const changeHandler = (e) => {
        // Seleccionamos las unidades y el valor de entrada
        let itemUnit = e.target.options.selectedIndex;

        setSelectedOption(e.target.value)
        setUnit(units[itemUnit]);
    }
    
    return (
        <label htmlFor="units-1">{name}

            <select onChange={changeHandler} name="units-1" className="units" id="units-1" value={selectedOption}>

                {options.map(option => {
                    return <option value={option} data-unit={option} key={option}>
                        {option}
                    </option>
                })}

            </select>

        </label>
    )
}

export default Controls;