import React from 'react';
import './SelectComponente.css';
import { ComponenteMistura } from '../../data/ComponenteMistura';

interface SelectComponenteProps {
    id: string;
    width: string;
    setSelect : Function;
    Select: string
    listaComponentes : Array<ComponenteMistura>;
}

const SelectComponente: React.FC<SelectComponenteProps> = ({ id, width, setSelect, listaComponentes, Select }) => {
    return (
        <select value={Select} onChange={(e) => {
            setSelect(e.target.value);
        }} style={{width: width}} className='selectComponentes' name="selectComponente" id={id}>
            
             { listaComponentes && listaComponentes.map((value, index) => (
                <option key={index} value={value.nome}>{value.nome}</option>

            ))}
        </select>
    );
};

export default SelectComponente;
