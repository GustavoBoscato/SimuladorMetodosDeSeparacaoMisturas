import React from 'react';
import './SelectComponente.css';
import { listaComponentes } from '../../data/dataComponentes';

interface SelectComponenteProps {
    id: string;
}

const SelectComponente: React.FC<SelectComponenteProps> = ({ id }) => {
    return (
        <select className='selectComponentes' name="selectComponente" id={id}>
            {listaComponentes.map((value, index) => (
                <option key={index} value={value.nome}>{value.nome}</option>
            ))}
        </select>
    );
};

export default SelectComponente;
