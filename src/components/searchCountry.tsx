import React, { useEffect, useState } from 'react'
import { setSearchCountry } from '../redux/slice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux'

function SearchCountry() {
    const searchValue = useSelector((state: RootState) => state.countries.searchCountry)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        setValue(searchValue)
    }, [searchValue])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValue(newValue)
        dispatch(setSearchCountry(newValue))
    }
    return (
        <input 
            value={value}
            onChange={handleChange}
            style={{
                background: 'var(--bg-card-color)',
                width: '400px',
                color:'var(--text-color)',
                border: 'none',
                padding: '20px 30px',
                boxShadow: '0 0 3px  1.5px  rgba(0,0,0,0.12)',
            }}
        />
    )
}

export default SearchCountry
