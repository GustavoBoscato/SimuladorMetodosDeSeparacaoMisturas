import React from 'react';
import './SelectComponente.css';
import { listaComponentes } from '../../data/dataComponentes';

interface SelectComponenteProps {
    id: string;
    width: string;
    setSelect : Function;
}

const SelectComponente: React.FC<SelectComponenteProps> = ({ id, width, setSelect }) => {
    return (
        <select onChange={(e) => {
            setSelect(e.target.value);
        }} style={{width: width}} className='selectComponentes' name="selectComponente" id={id}>
            {listaComponentes.map((value, index) => (
                <option key={index} value={value.nome}>{value.nome}</option>
            ))}
        </select>
    );
};

export default SelectComponente;
