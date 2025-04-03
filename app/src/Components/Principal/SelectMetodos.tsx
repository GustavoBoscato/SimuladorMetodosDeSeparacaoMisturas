import React from 'react';
import './SelectMetodos.css';
import { metodoSeparacaoArray } from '../../utils/metodos';
interface SelectMetodoProps {
    id: string;
}

const SelectMetodos: React.FC<SelectMetodoProps> = ({ id }) => {
    return (
        <select className='selectMetodos' name="selectComponente" id={id}>
            {metodoSeparacaoArray.map((value, index) => (
                <option key={index} value={value}>{value}</option>
            ))}
        </select>
    );
};

export default SelectMetodos;
