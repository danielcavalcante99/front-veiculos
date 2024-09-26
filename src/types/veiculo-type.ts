export type RequestParamVeiculo = {
    id?: string,
    veiculo?: string,
    marca?: string,
    ano?: number | null,
    decada?: number | null,
    descricao?: string,
    cor?: string,
    vendido?: boolean
}

export type RequestCriarVeiculo = {
    veiculo: string,
    marca: string,
    ano: number,
    descricao: string,
    cor: string
}

export type RequestAtualizarVeiculo = {
    id: string,
    veiculo: string,
    marca: string,
    ano: number,
    descricao: string,
    cor: string,
    vendido: boolean
}

export type Veiculo = {
    id: string,
    veiculo: string,
    marca: string,
    ano: number,
    decada: number,
    descricao: string,
    cor: string,
    vendido: boolean
}

export type MarcaVeiculo = {
    marca: string,
    totalVeiculos: number,
    veiculos: Veiculo[]
}

export type DecadaVeiculo = {
    decada: number,
    totalVeiculos: number,
    marcas: MarcaVeiculo[]
}

