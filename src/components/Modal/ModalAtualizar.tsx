import {ChangeEvent, useEffect, useState} from "react";
import {Veiculo} from "../../types/veiculo-type";
import Modal from "./Modal";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ButtonOpenModal from "../Button/ButtonOpenModal";

import ButtonCloseModal from "../Button/ButtonCloseModal";
import ButtonModalFooter from "../Button/ButtonFooterModal";
import FormControl from "../Form/FormControl";
import Row from "../Row/Row";
import Col from "../Col/Col";
import {regexLetra, regexNumero} from "../../utils/regex";
import IconEditar from "../Icons/IconEditar";
import InputControl from "../Input/InputControl";
import SelectFormControl from "../Select/SelectFormControl";

interface ModalAtualizarProps {
    onClick: (dadosVeiculo: any) => void;
    dadosVeiculo: Veiculo;
    listaMarcas: string[];
    index: number;
}

function ModalAtualizar({onClick, dadosVeiculo, listaMarcas, index}: ModalAtualizarProps) {
    const [id, setId] = useState<string>();
    const [veiculo, setVeiculo] = useState<string>();
    const [marca, setMarca] = useState<string>();
    const [ano, setAno] = useState<number | string>();
    const [descricao, setDescricao] = useState<string>();
    const [cor, setCor] = useState<string>();
    const [vendido, setVendido] = useState<string>();

    useEffect(() => {
        setId(dadosVeiculo.id);
        setVeiculo(dadosVeiculo.veiculo);
        setMarca(dadosVeiculo.marca);
        setAno(dadosVeiculo.ano);
        setDescricao(dadosVeiculo.descricao);
        setCor(dadosVeiculo.cor);
        setVendido(dadosVeiculo.vendido ? 'Sim' : 'Não');
    }, [dadosVeiculo]);

    const handlerChangeVeiculo = (event: { target: HTMLInputElement }) => {
        if (event.target.value.length <= 50) {
            setVeiculo(event.target.value);
        }
    }

    const handlerChangeMarca = (event: ChangeEvent<HTMLSelectElement>) => {
        setMarca(event.target.value);
    }

    const handlerChangeAno = (event: { target: HTMLInputElement }) => {
        if ((regexNumero.test(event.target.value) || event.target.value === '') && event.target.value.length <= 10) {
            setAno(event.target.value);
        }
    }

    const handlerChangeDescricao = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value.length <= 250) {
            setDescricao(event.target.value);
        }
    }

    const handlerChangeCor = (event: { target: HTMLInputElement }) => {
        if ((regexLetra.test(event.target.value) || event.target.value === '') && event.target.value.length <= 50) {
            setCor(event.target.value);
        }
    }

    const handlerChangeVendido = (event: ChangeEvent<HTMLSelectElement>) => {
        setVendido(event.target.value);
    }

    return (
        <div>
            <ButtonOpenModal nameModal={`modalAtualizar-${index}-${id}`}>
                <IconEditar width={22} height={22} fill={'black'}/>
            </ButtonOpenModal>
            <Modal title={"Atualizar Veículo"} name={`modalAtualizar-${index}-${id}`}>
                <ModalBody>
                    <FormControl>
                        <Row marginBottom={3}>
                            <Col col={1}>
                                <label htmlFor="inputId" className="col-form-label">Id</label>
                            </Col>
                            <Col>
                                <InputControl disabled={true} value={id} id={"inputId"} placeHolder={"Id"} border={2}/>
                            </Col>

                            <Col col={1}>
                                <label htmlFor="inputVeiculo" className="col-form-label">Veículo</label>
                            </Col>
                            <Col>
                                <InputControl required value={veiculo} id={"inputVeiculo"} placeHolder={"Veículo"}
                                              handlerChange={handlerChangeVeiculo} border={2}/>
                            </Col>
                        </Row>

                        <Row marginBottom={3}>
                            <Col col={1}>
                                <label htmlFor="inputAno" className="col-form-label">Ano</label>
                            </Col>
                            <Col>
                                <InputControl required value={ano} id={"inputAno"} placeHolder={"Ano"}
                                              handlerChange={handlerChangeAno} border={2}/>
                            </Col>

                            <Col col={1}>
                                <label htmlFor="inputCor" className="col-form-label">Cor</label>
                            </Col>
                            <Col>
                                <InputControl required value={cor} id={"inputCor"} placeHolder={"Cor"}
                                              handlerChange={handlerChangeCor} border={2}/>
                            </Col>
                        </Row>

                        <Row marginBottom={3}>
                            <Col col={1}>
                                <label htmlFor="inputVendido" className="col-form-label">Vendido</label>
                            </Col>
                            <Col>
                                <SelectFormControl required value={vendido}  border={2} id={"inputVendido"}
                                                   placeHolder={"Selecione Opção Vendido"}
                                                   handlerChange={handlerChangeVendido} listaSelected={['Sim', 'Não']}/>

                            </Col>

                            <Col col={1}>
                                <label htmlFor="inputMarca" className="col-form-label">Marca</label>
                            </Col>
                            <Col>
                                <SelectFormControl required value={marca} border={2} id={"inputMarca"}
                                                   placeHolder={"Selecione Opção Marca"}
                                                   handlerChange={handlerChangeMarca}
                                                   listaSelected={listaMarcas}/>
                            </Col>
                        </Row>

                        <Row marginBottom={3}>
                            <Col col={1}>
                                <label htmlFor="inputDescricao" className="col-form-label">Detalhe</label>
                            </Col>
                            <Col>
                                <textarea required value={descricao} id="inputDescricao"
                                          className={`form-control border-2 ${descricao ? '' : 'is-invalid'}`}
                                          placeholder="Descrição" onChange={handlerChangeDescricao}></textarea>
                            </Col>
                        </Row>

                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <ButtonCloseModal text={"Sair"}/>
                    <ButtonModalFooter text={"Atualizar"} onClick={() => onClick({
                        id: id,
                        veiculo: veiculo,
                        marca: marca,
                        ano: ano,
                        descricao: descricao,
                        cor: cor,
                        vendido: vendido === 'Sim'
                    })} isValid={!(id && veiculo && marca && ano && descricao && cor && vendido)}/>
                </ModalFooter>
            </Modal>
        </div>)
}

export default ModalAtualizar;











