export type Regioes = [{
    "id": 0,
    "sigla": "",
    "nome": ""
}];

export type Estados = [{
    "id": 0,
    "sigla": "",
    "nome": "",
    "regiao": {
        "id": 0,
        "sigla": "",
        "nome": ""
    }
}];

export type Municipios = [{
    "id": "",
    "nome": "",
    "microrregiao": {
        "id": 0,
        "nome": "",
        "mesorregiao": {
            "id": 0,
            "nome": "",
            "UF": {
                "id": 0,
                "sigla": "",
                "nome": "",
                "regiao": {
                    "id": 0,
                    "sigla": "",
                    "nome": ""
                }
            }
        }
    },
    "regiao-imediata": {
        "id": 0,
        "nome": "",
        "regiao-intermediaria": {
            "id": 0,
            "nome": "",
            "UF": {
                "id": 0,
                "sigla": "",
                "nome": "",
                "regiao": {
                    "id": 0,
                    "sigla": "",
                    "nome": ""
                }
            }
        }
    }
}];