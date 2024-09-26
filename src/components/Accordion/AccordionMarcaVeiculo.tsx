import TableVeiculo from "../Table/TableVeiculo";
import Accordion from "./Accordion";
import {MarcaVeiculo, RequestAtualizarVeiculo} from "../../types/veiculo-type";

interface AccordionMarcaVeiculoProps {
    dadosMarcasVeiculo: MarcaVeiculo[];
    onClickAtualizar: (request: RequestAtualizarVeiculo) => void;
    onClickDeletar: (id: string) => void;
    listaMarcas: string[];
}

export function AccordionMarcaVeiculo({onClickAtualizar, onClickDeletar, dadosMarcasVeiculo, listaMarcas}: AccordionMarcaVeiculoProps) {
    return(
        <div>
            {Array.from(dadosMarcasVeiculo).map((marca, i) =>
                <Accordion key={i} id={marca.marca+'-'+marca.veiculos[0].decada} title={marca.marca + ' - ' + marca.totalVeiculos + ' veículos'}>
                    <TableVeiculo listaMarcas={listaMarcas} dadosVeiculos={marca.veiculos} onClickAtualizar={onClickAtualizar} onClickDeletar={onClickDeletar} />
                </Accordion>
            )}
        </div>
    );
}

export default AccordionMarcaVeiculo;
