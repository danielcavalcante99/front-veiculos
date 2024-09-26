import axios from "axios";
import {ENDPOINT_VEICULOS} from "../environments/environment";

const api = axios.create({
    baseURL: `${ENDPOINT_VEICULOS}/api/dominios`
});

export function getListarDominioMarcas() {
    return api.get('/marcas');
}
