import React, { useState, useEffect, useRef } from 'react';

const AutoCompleteCustom = props => {
    const { items, value, setValue, setSearchKey, setCity, setCode } = props;
    const [ showPanel, setShowPanel ] = useState(true);
    const inputRef = useRef(null);
    
    useEffect(() => {
        if (inputRef?.current === window.document.activeElement) {
            setShowPanel(true);
        }
    }, [ value ]);
    
    const handleSelect = item => {
        setValue(item.label); 
        if (setCity) setCity(item.city);
        if (setCode) setCode(item.code);
        setShowPanel(false);
    }

    return (
        <div className='auto-complete-rt'>
            <input
                type="text"
                name="pickup"
                autoComplete="new-password"
                placeholder="Enter a city or airport"
                className='form-control'
                onChange={e => {setValue(e.target.value); setSearchKey && setSearchKey(e.target.value)}}
                value={value}
                ref={inputRef}
            />
            { items && items.length && showPanel ?
                <div>
                    <ul>
                        { items.map((item, index) => 
                            <li key={index} onClick={() => {handleSelect(item)}}>
                                <img src={item.icon} alt="ico" height="20px" className='mr-2' />
                                {item.label}
                            </li>
                        )}
                        
                    </ul>
                </div> :
                <></>
            }
        </div>
    )
}

export default AutoCompleteCustom;