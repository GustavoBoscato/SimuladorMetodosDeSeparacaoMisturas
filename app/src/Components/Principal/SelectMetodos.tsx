import React from 'react';
import './SelectMetodos.css';
import { metodoSeparacao, metodoSeparacaoArray } from '../../utils/metodos';
interface SelectMetodoProps {
    id: string;
    setMetodoSeparacao : Function;
    metodoSeparacao : metodoSeparacao ;
}


const SelectMetodos: React.FC<SelectMetodoProps> = ({ id, setMetodoSeparacao, metodoSeparacao }) => {
    
    return (
        <select className='selectMetodos' name="selectComponente" value={metodoSeparacao} id={id} onChange={(e) => {
            setMetodoSeparacao(e.target.value)
            console.log(e.target.value)
        }}>
            {metodoSeparacaoArray.map((value, index) => (
                <option key={index} value={value}>{value}</option>
            ))}
        </select>
    );
};

export default SelectMetodos;
