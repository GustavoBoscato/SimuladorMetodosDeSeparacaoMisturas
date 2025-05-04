import React from 'react';
import './SelectMetodos.css';
import { metodoSeparacaoArray } from '../../utils/metodos';
interface SelectMetodoProps {
    id: string;
    setMetodoSeparacao : Function;
}


const SelectMetodos: React.FC<SelectMetodoProps> = ({ id, setMetodoSeparacao }) => {
    const alterarMetodoSeparacao = () =>{
       let select = document.getElementById(id);
       setMetodoSeparacao(select)

    }
    return (
        <select className='selectMetodos' name="selectComponente" id={id} onChange={(e) => {
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
