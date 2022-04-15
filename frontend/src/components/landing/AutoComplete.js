import React from 'react';
import Autocomplete from 'react-autocomplete';

const AutoComplete = props => {
    const { items, searchKey, setSearchKey } = props;

    return (
        <Autocomplete
            getItemValue={(item) => item.label}
            items={items}
            renderInput={props => {
                return <input {...props} placeholder="Enter a city or airport" type="text" className='form-control' />
            }}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white', padding: '5px 10px' }} key={item.label}>
                    {item.label}
                </div>
            }
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            onSelect={(val) => setSearchKey(val)}
            wrapperStyle = {{
                width: '1%',
                flex: '1 1 auto',
            }}
            menuStyle = {{
                borderRadius: '3px',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                background: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1rem',
                position: 'fixed',
                overflow: 'auto',
                maxHeight: '50%',
                padding: '0',
                zIndex: '999',
                cursor: 'pointer',
            }}
        />
    )
}

export default AutoComplete;