import React, { useState, useEffect, useRef } from 'react';

const AutoCompleteCustom = props => {
    const { items, value, setValue, setSearchKey, setCity, setCode } = props;
    const [ showPanel, setShowPanel ] = useState(false);
    const inputRef = useRef(null);
    
    const handleSelect = item => {
        setValue(item.label); 
        if (setCity) setCity(item.city);
        if (setCode) setCode(item.code);
        setShowPanel(false);
    }

    useEffect(() => {
        window.document.addEventListener('click', e => {
            if (e.target !== inputRef.current)
                setShowPanel(false);
        });
    }, []);

    return (
        <div className='auto-complete-rt'>
            <input
                type="text"
                name="pickup"
                autoComplete="new-password"
                placeholder="Enter a city or airport"
                className='form-control'
                onChange={e => {setValue(e.target.value); setSearchKey && setSearchKey(e.target.value)}}
                onClick={e => {e.preventDefault(); setShowPanel(true)}}
                value={value}
                ref={inputRef}
            />
            { items && items.length && showPanel ?
                <div>
                    <ul>
                        { items.map((item, index) => 
                            <li key={index} onClick={() => {handleSelect(item)}}>
                                { item.icon &&
                                    <img src={item.icon} alt="ico" height="20px" className='mr-2' />
                                }
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