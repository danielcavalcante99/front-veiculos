import axios from "axios";
import {RequestAtualizarVeiculo, RequestCriarVeiculo, RequestParamVeiculo} from "../types/veiculo-type";
import {ENDPOINT_VEICULOS} from "../environments/environment";

const api = axios.create({
    baseURL: `${ENDPOINT_VEICULOS}/api/veiculos`
});

export function getListarVeiculos(requestParam: RequestParamVeiculo | null) {
    return api({method: "get", params: requestParam})
}

export function deletarPeloId(id: string) {
    return api.delete(id);
}

export function atualizarVeiculo(request: RequestAtualizarVeiculo) {
    return api({method: "put", data: request})
}

export function cadastrarVeiculo(request: RequestCriarVeiculo) {
    return api({method: "post", data: request})
}
