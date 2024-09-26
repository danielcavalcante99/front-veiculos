import {ChangeEvent, useEffect, useState} from "react";
import {RequestCriarVeiculo} from "../../types/veiculo-type";
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
import IconAdicionar from "../Icons/IconAdicionar";
import InputControl from "../Input/InputControl";
import SelectFormControl from "../Select/SelectFormControl";
import {cadastrarVeiculo} from "../../services/veiculo-service";
import {getListarDominioMarcas} from "../../services/dominio-service";
import {toast} from "react-toastify";

function ModalCadastro() {
    const [veiculo, setVeiculo] = useState<string>('');
    const [marca, setMarca] = useState<string>('');
    const [ano, setAno] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [cor, setCor] = useState<string>('');
    const [listaMarcas, setListaMarcas] = useState<string[]>([]);

    useEffect(() => {
        getListarMarcas();
    }, [marca]);

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

    const handlerClickCadastrar = async (request: RequestCriarVeiculo) => {
        try {
            await cadastrarVeiculo(request);
            toast.success('Veículo cadastrado com sucesso!');
        } catch (error: any) {
            toast.error(error.response.data.message);
        }
    }

    const getListarMarcas = async () => {
        let response = await getListarDominioMarcas();
        setListaMarcas(response.data);
    }

    return (
        <div>
            <ButtonOpenModal nameModal="modalCadastro">
                <IconAdicionar width={30} height={30} fill={'black'}/>
            </ButtonOpenModal>
            <Modal title={"Cadastro Veículo"} name="modalCadastro">
                <ModalBody>
                    <FormControl>
                        <Row marginBottom={3}>
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
                                <textarea value={descricao} id="inputDescricao"
                                          className={`form-control border-2 ${descricao ? '' : 'is-invalid'}`}
                                          placeholder="Descrição" onChange={handlerChangeDescricao}></textarea>
                            </Col>
                        </Row>

                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <ButtonCloseModal text={"Sair"}/>
                    <ButtonModalFooter text={"Cadastrar"} onClick={() => handlerClickCadastrar({
                        veiculo: veiculo,
                        marca: marca,
                        ano: Number(ano),
                        descricao: descricao,
                        cor: cor,
                    })} isValid={!(veiculo && marca && ano && descricao && cor)}/>
                </ModalFooter>
            </Modal>
        </div>)
}

export default ModalCadastro;











