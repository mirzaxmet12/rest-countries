import { useDispatch } from "react-redux";
import { setRegionFilter } from '../redux/slice';

function FilterRegion() {
    const dispatch = useDispatch()
    return (
        <select onChange={(e) => dispatch(setRegionFilter(e.target.value))} style={{
            background: 'var(--bg-card-color)',
            color: 'var(--text-color)',
            height: '100%',
            padding: '20px',
            boxShadow: '0 0 3px  1.5px  rgba(0,0,0,0.12)',
            border: 'none',
        }} >
            <option value=''>All</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
            <option value='Antarctic'>Polar</option>
        </select>
    )
}

export default FilterRegion
