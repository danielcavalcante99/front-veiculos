import {useEffect, useState} from "react";
import {atualizarVeiculo, deletarPeloId, getListarVeiculos} from "../../services/veiculo-service";
import Accordion from "./Accordion";
import AccordionMarcaVeiculo from "./AccordionMarcaVeiculo";
import {DecadaVeiculo, RequestAtualizarVeiculo} from "../../types/veiculo-type";
import {getListarDominioMarcas} from "../../services/dominio-service";
import { toast } from 'react-toastify';

interface AccordionDecadaVeiculoProps {
    dadosDecadaVeiculo: DecadaVeiculo[];
}

function AccordionDecadaVeiculo({dadosDecadaVeiculo}: AccordionDecadaVeiculoProps) {
    const [dados, setDados] = useState(dadosDecadaVeiculo);
    const [listaMarcas, setListaMarcas] = useState([]);

    useEffect(() => {
        setDados(dadosDecadaVeiculo);
        getListarMarcas();
    }, [dadosDecadaVeiculo]);

    const getListarMarcas = async () => {
        let response = await getListarDominioMarcas();
        setListaMarcas(response.data);
    }

    const handlerClickDeletar = async (id: string) => {
        try {
            await deletarPeloId(id);
            let response = await getListarVeiculos(null);
            setDados(response.data);
            toast.success('Veículo deletado com sucesso!');
        } catch (error) {
            toast.error('Erro ao deletar veículo!');
        }
    }

    const handlerClickAtualizar = async (request: RequestAtualizarVeiculo) => {
       try {
           await atualizarVeiculo(request)
           let response = await getListarVeiculos(null);
           setDados(response.data);
           toast.success('Veículo atualizado com sucesso!');
       } catch (error) {
           toast.error('Erro ao atualizar veículo!');
       }
    }

    return (
        <div>
            {Array.from(dados).map((decadaVeiculo, i) =>
                <Accordion key={i} id={decadaVeiculo.decada} title={"Década " + decadaVeiculo.decada + ' - ' + decadaVeiculo.totalVeiculos + ' veículos'}>
                    <AccordionMarcaVeiculo dadosMarcasVeiculo={decadaVeiculo.marcas} listaMarcas={listaMarcas}
                                           onClickAtualizar={handlerClickAtualizar}
                                           onClickDeletar={handlerClickDeletar}/>
                </Accordion>
            )}
        </div>
    );
}

export default AccordionDecadaVeiculo;
