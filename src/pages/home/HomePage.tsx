import IconPesquisar from "../../components/Icons/IconPesquisar";
import {ChangeEvent, useEffect, useState} from "react";
import {DecadaVeiculo, RequestParamVeiculo} from "../../types/veiculo-type";
import {getListarVeiculos} from "../../services/veiculo-service";
import {getListarDominioMarcas} from "../../services/dominio-service";
import FormControl from "../../components/Form/FormControl";
import Row from "../../components/Row/Row";
import Col from "../../components/Col/Col";
import InputControl from "../../components/Input/InputControl";
import SelectFormControl from "../../components/Select/SelectFormControl";
import ButtonPesquisar from "../../components/Button/ButtonPesquisar";
import {regexLetra, regexNumero} from "../../utils/regex";
import AccordionDecadaVeiculo from "../../components/Accordion/AccordionDecadaVeiculo";
import ModalCadastro from "../../components/Modal/ModalCadastro";

function HomePage() {
    const [id, setId] = useState<string>();
    const [veiculo, setVeiculo] = useState<string>();
    const [marca, setMarca] = useState<string>();
    const [ano, setAno] = useState<string | null>();
    const [decada, setDecada] = useState<string>();
    const [descricao, setDescricao] = useState<string>();
    const [cor, setCor] = useState<string>();
    const [vendido, setVendido] = useState<boolean>();
    const [dados, setDados] = useState<DecadaVeiculo[]>([]);
    const [requestParam, setRequestParam] = useState<RequestParamVeiculo>({});
    const [listaMarcas, setListaMarcas] = useState<string[]>([]);

    useEffect(() => {
        setRequestParam({
            id: id,
            veiculo: veiculo,
            marca: marca,
            ano: ano ? Number(ano) : null,
            decada: decada ? Number(decada) : null,
            descricao: descricao,
            cor: cor,
            vendido: vendido
        });

    }, [id, veiculo, marca, ano, decada, descricao, cor, vendido]);

    const getPequisarVeiculos = async () => {
        let response = await getListarVeiculos(requestParam);
        setDados(response.data);
    }

    const getListarMarcas = async ()  => {
        let response = await getListarDominioMarcas();
        setListaMarcas(response.data);
    }

    const handlerChangeId = (event: {target: HTMLInputElement}) => {
        setId(event.target.value);
    }

    const handlerChangeVeiculo = (event: {target: HTMLInputElement}) => {
        if(event.target.value.length <= 50) {
            setVeiculo(event.target.value);
        }
    }

    const handlerChangeMarca = (event: ChangeEvent<HTMLSelectElement>) => {
        setMarca(event.target.value);
    }

    const handlerChangeAno = (event: {target: HTMLInputElement}) => {
            if((regexNumero.test(event.target.value) || event.target.value === '') && event.target.value.length <= 10){
                setAno(event.target.value);
            }
    }

    const handlerChangeDecada = (event: {target: HTMLInputElement}) => {
        if((regexNumero.test(event.target.value) || event.target.value === '') && event.target.value.length <= 10) {
            setDecada(event.target.value);
        }
    }

    const handlerChangeDescricao = (event: {target: HTMLInputElement}) =>{
        if(event.target.value.length <= 250) {
            setDescricao(event.target.value);
        }
    }

    const handlerChangeCor = (event: {target: HTMLInputElement}) => {
        if((regexLetra.test(event.target.value) || event.target.value === '') && event.target.value.length <= 50) {
            setCor(event.target.value);
        }
    }

    const handlerChangeVendido = (event: ChangeEvent<HTMLSelectElement>) => {
         setVendido(Boolean(event.target.value));
    }

  return (
      <div className="container">
          <FormControl>
              <Row marginBottom={3} marginTop={5}>
                  <Col>
                      <InputControl value={id} id={"id"} placeHolder={"Id"} handlerChange={handlerChangeId} border={4} />
                  </Col>
                  <Col>
                      <InputControl value={veiculo} id={"veiculo"} placeHolder={"Veículo"} handlerChange={handlerChangeVeiculo} border={4} />
                  </Col>
              </Row>

              <Row marginBottom={3}>
                  <Col>
                      <SelectFormControl id={"id"} placeHolder={"Selecione a Marca"} border={4} listaSelected={listaMarcas} handlerChange={handlerChangeMarca}  handlerFocus={getListarMarcas}  />
                  </Col>
                  <Col>
                      <InputControl value={ano} id={"ano"} placeHolder={"Ano"} handlerChange={handlerChangeAno} border={4} />
                  </Col>
              </Row>

              <Row marginBottom={3}>
                  <Col>
                      <InputControl value={decada} id={"decada"} placeHolder={"Década"} handlerChange={handlerChangeDecada} border={4} />
                  </Col>
                  <Col>
                      <InputControl value={descricao} id={"descricao"} placeHolder={"Descrição"} handlerChange={handlerChangeDescricao} border={4} />
                  </Col>
              </Row>

              <Row marginBottom={3}>
                  <Col>
                      <SelectFormControl id={"vendido"} placeHolder={"Selecione Opção Vendido"} border={4} listaSelected={['Sim','Não']} handlerChange={handlerChangeVendido}/>
                  </Col>
                  <Col>
                      <InputControl value={cor} id={"cor"} placeHolder={"Cor"} handlerChange={handlerChangeCor} border={4} />
                  </Col>
              </Row>

              <ButtonPesquisar handlerClick={getPequisarVeiculos}>
                  <IconPesquisar width={30} height={30} fill={'black'}/>
              </ButtonPesquisar>
          </FormControl>

          <div className="d-flex justify-content-end mb-3">
              <ModalCadastro />
          </div>

          <AccordionDecadaVeiculo dadosDecadaVeiculo={dados}/>
      </div>
  );
}

export default HomePage;










