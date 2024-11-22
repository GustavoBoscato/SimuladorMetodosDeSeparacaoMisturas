import { Mistura } from "../../data/Mistura";

import { metodoSeparacaoArray, metodoSeparacao } from "../../utils/metodos";

import "./style.css";

import { useState } from "react";
export default function MisturaPainel({ mistura, ind, separador }: { mistura: Mistura, ind: number, separador: (idMistura: number, metodo: metodoSeparacao) => void }) {
  const [metodo, setMetodo] = useState<metodoSeparacao>(metodoSeparacaoArray[0]);
  return (
    <div className="container">
      <table className="mixture-table">
        <tr>
          <th colSpan={7} className="section-header">
            Informações da mistura
          </th>
        </tr>
        <tr>
          <td colSpan={4} className="info-label">
            Classificação
          </td>
          <td colSpan={3}>{mistura.classificacao}</td>
        </tr>
        <tr>
          <td colSpan={4} className="info-label">
            Tipo
          </td>
          <td colSpan={3}>{mistura.tipo}</td>
        </tr>
        <tr>
          <td colSpan={4} className="info-label">
            Elementos
          </td>
          <td colSpan={3}>{mistura.itens.map(m => m.nome).join(', ')}</td>
        </tr>
      </table>
      <div>
        {mistura.itens.length > 1 &&
          <>
            <h2>Separar Mistura</h2>
            <select onChange={(e) => setMetodo(e.target.value as metodoSeparacao)}>
              {metodoSeparacaoArray.map(m => <option value={m}>{m}</option>)}
            </select>
            <button onClick={() => separador(ind, metodo)}>Aplicar Método</button>
          </>
        }

      </div>
    </div>

  );
}
