import {RequestAtualizarVeiculo, Veiculo} from "../../types/veiculo-type";
import IconLixeira from "../Icons/IconLixeira";
import ModalAtualizar from "../Modal/ModalAtualizar";

interface TableVeiculoProps {
    dadosVeiculos: Veiculo[];
    onClickAtualizar: (request: RequestAtualizarVeiculo) => void;
    onClickDeletar: (id: string) => void;
    listaMarcas: string[];
}

function TableVeiculo({onClickAtualizar, onClickDeletar, dadosVeiculos, listaMarcas} : TableVeiculoProps) {
    return (
        <div>
            <table className="table table-active">
                <thead>
                <tr>
                    <th className="col-2" scope="col">Veículo</th>
                    <th className="col-2" scope="col">Marca</th>
                    <th className="col-2" scope="col">Cor</th>
                    <th className="col-2" scope="col">Ano</th>
                    <th className="col-2" scope="col">Década</th>
                    <th className="col-2" scope="col">Vendido</th>
                    <th className="col-1" scope="col"></th>
                    <th className="col-1" scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {Array.from(dadosVeiculos).map((veiculo, i) =>
                    <tr key={i}>
                        <td>{veiculo.veiculo}</td>
                        <td>{veiculo.marca}</td>
                        <td>{veiculo.cor}</td>
                        <td>{veiculo.ano}</td>
                        <td>{veiculo.decada}</td>
                        <td>{veiculo.vendido ? 'Sim' : 'Não'}</td>
                        <td>
                           <span role="button" onClick={() => onClickDeletar(veiculo.id)}>
                               <IconLixeira fill='red' width={22} height={22} />
                           </span>
                        </td>
                        <td>
                            <ModalAtualizar index={i} listaMarcas={listaMarcas} onClick={onClickAtualizar} dadosVeiculo={veiculo}/>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default TableVeiculo;
