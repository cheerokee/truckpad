import {Observable} from "rxjs";

/** DATABASE MODEL START **/
export interface Usuario {
    id?: number;
    nome: string;
    senha?: string;
    email: string;
    telefone: string;
    image?: string;
    slug?: string;
    activition_key?: string;
    ativo?: boolean;
    readonly criado_em      ?: Date;
    readonly atualizado_em  ?: Date;
}

export interface Perfil {
    id?: number;
    nome: string;
    readonly criado_em      ?: Date;
    readonly atualizado_em  ?: Date;
}

export interface UsuarioPerfil {
    id?: number;
    usuario ?: number;
    perfil  ?: number;
    _embedded?: {
        usuario: Usuario;
        perfil: Perfil;
    };
    readonly criado_em?: Date;
    readonly atualizado_em?: Date;
}

export interface Recurso {
    id?: number;
    nome: string;
    readonly criado_em      ?: Date;
    readonly atualizado_em  ?: Date;
}

export interface Acao {
    id?: number;
    nome: string;
    readonly criado_em      ?: Date;
    readonly atualizado_em  ?: Date;
}

export interface Possibilidade {
    id?: number;
    acao?: number;
    recurso?: number;
    acoes ?: Acao[]; // Atributo utilizado apenas em app\features\admin\acl\panel-autorizacao\panel-privilegio\panel-privilegio.component.ts
    _embedded?: {
        acao?: Acao;
        recurso?: Recurso;
    };
}

export interface Privilegio {
    id?: number;
    acao?: number;
    recurso?: number;
    perfil?: number;
    readonly criado_em      ?: Date;
    readonly atualizado_em  ?: Date;
    _embedded?: {
        acao?: Acao;
        recurso?: Recurso;
        perfil?: Perfil;
    };
}

export interface Configuracao {
    id?: number;
    readonly criado_em      ?: Date;
    readonly atualizado_em  ?: Date;
    cabecalho_fixo?: boolean;
    navegacao_fixa?: boolean;
    navegacao_minificada?: boolean;
    esconder_navegacao?: boolean;
    navegacao_topo?: boolean;
    layout_caixa?: boolean;
    conteudo_envio?: boolean;
    sem_sobreposicao?: boolean;
    off_canvas?: boolean;
    fonte_conteudo_maior?: boolean;
    texto_contraste?: boolean;
    daltonimsmo?: boolean;
    pre_carregamento_dentro?: boolean;
    limpar_fundo_pagina?: boolean;
    ocultar_icone_navegacao?: boolean;
    desabilitar_animacao?: boolean;
    ocultar_cartao_informacao?: boolean;
    subtitulo_lean?: boolean;
    navegacao_hierarquica?: boolean;
    tamanho_fonte?: string;
}

export interface Motorista {
    id?: number;
    readonly criado_em      ?: Date;
    readonly atualizado_em  ?: Date;
    nome: string;
    telefone: string;
    data_nascimento: string;
    cnh: string;
    tipo_cnh: string;
    cpf: string;
    ativo: boolean;
}

export interface Ddd {
    id?: number;
    ddd: string;
}

export interface Cidade {
    id?: number;
    nome: string;
    estado: string;
    _embedded?: {
        ddd?: Ddd;
    };
}

export interface Endereco {
    id?: number;
    readonly criado_em      ?: Date;
    readonly atualizado_em  ?: Date;
    logradouro: string;
    numero: string;
    bairro: string;
    cep: string;
    telefone: string;
    contato: string;
    latitude: boolean;
    longitude: boolean;
    cidade?: number;
    motorista?: number;
    _embedded?: {
        cidade?: Cidade;
        motorista?: Motorista;
    };
}

export interface Categoria {
    id?: number;
    nome: string;
    codigo: number;
}

export interface Marca {
    id?: number;
    nome: string;
}

export interface Veiculo {
    id?: number;
    readonly criado_em      ?: Date;
    readonly atualizado_em  ?: Date;
    placa: string;
    modelo?: string;
    cor?: string;
    marca?: number;
    categoria?: number;
    _embedded?: {
        marca?: Marca;
        categoria?: Categoria;
    };
}

export interface MotoristaVeiculo {
    id?: number;
    readonly criado_em      ?: Date;
    readonly atualizado_em  ?: Date;
    ativo?: boolean;
    carregado?: boolean;
    proprio?: boolean;
    motorista?: number;
    veiculo?: number;
    _embedded?: {
        veiculo?: Veiculo;
        motorista?: Motorista;
    };
}

export interface Viagem {
    id?: number;
    readonly criado_em      ?: Date;
    readonly atualizado_em  ?: Date;
    status?: number;
    origem?: number;
    destino?: number;
    motorista_veiculo?: number;
    _embedded?: {
        origem?: Endereco;
        destino?: Endereco;
        motorista_veiculo?: MotoristaVeiculo;
    };
}
/** DATABASE MODEL FINISH **/
/** CRUD MODEL START **/
export interface ListView {
    title: string,
    icon: string,
    controller: string,
    novo: {
        show : boolean,
        url: string
    },
    visualizar: {
        show : boolean,
        url: string
    },
    editar: {
        show : boolean,
        url: string
    },
    deletar: boolean;
}

export interface CollumnTable {
    titulo : string,
    campo: string,
    tipo?: string, // join,select
    attr?: string, // Campo identificador Ex. nome, titulo
    labels?: any
}

export interface FilterListItemOption {
    label: string;
    value: number | string;
}

export interface FilterListItem {
    titulo: string;
    name: string;
    component: string;
    col: string;
    strategy: string; // eq,like,lt,rt,lte,rte
    value: string;
    options?: FilterListItemOption[];
    joinField?: string; // Utilizado em caso de join-autocomplete
}

export interface OptionForm {
    text: string,
    id: number | string
}

export interface ElementForm {
    name: string,
    label?: string,
    type?: string, // text, number, email, text-area, select, date, hidden, join-autocomplete, join-select
    required?: boolean, // Se true, automaticamente será aplicado um Validator.required do formulário reativo
    propriedade?: string, //  É propriedade que vai buscar na tabela join o nome do registro: Ex. nome, titulo, descrição, etc.
    value?: any,
    options?: OptionForm[],
    validators?: any[]
}

export interface ConditionParams {
    alias ?: string;
    field ?: string;
    from ?: string;
    parentAlias ?: string;
    to ?: string;
    type : string;
    value ?: string | number;
    values ?: Array< string | number >;
    conditions ?: ConditionParams[];
    where ?: string;
}

export interface FilterParams {
    field ?: string;
    from ?: string | number;
    type : string;
    conditions ?: ConditionParams[];
    where  ?:  string
    to ?: string;
    value ?: any;
    alias ?: string;
}

export interface OrderByParams {
    'type' : string; // ex: field
    'field' : string; // ex: id
    'direction' : string; // ex: ASC ou DESC
}

export interface SearchParams {
    filter?: FilterParams[];
    "order-by"?: OrderByParams[];
}
/** CRUD MODEL FINISH **/

export interface ElementSearch {
    element: string,
    value: string
}

export interface Date {
    date: string,
    timezone: string,
    timezone_type: number
}

export interface ViewSimple {
    recurso: string;
    title: string,
    icon: string
}

export interface HttpResource<T> { //Generics
    list(searchParams: SearchParams): Observable<any>;

    get(id: number): Observable<T>;

    create(data: T): Observable<T>;

    update(id: number, data: T): Observable<T>;

    destroy(id: number): Observable<any>;
}
