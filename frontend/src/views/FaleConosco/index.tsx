import { useEffect, useState } from "react";
import { Regioes, Estados, Municipios } from "utils/Types";
import axios from "utils/Axios";
import { Toast } from "utils/Alert";
import Header from "components/Header";
import ContactIcon from 'assets/img/contato.png';
import ArticleHeader from "components/ArticleHeader";
import { BeatLoader } from 'react-spinners';
import Footer from "components/Footer";

function FaleConosco() {

    const [isLoading, setIsLoading] = useState(false);
    const [regioes, setRegioes] = useState<Regioes>();
    const [estados, setEstados] = useState<Estados>();
    const [municipios, setMunicipios] = useState<Municipios>();

    const handleMunicipios = async (event: any) => {
        setIsLoading(true);
        await axios.get(`api/v1/localidades/estados/${event.target.value}/municipios?orderBy=nome`)
            .then(response => {
                setMunicipios(response.data);
                setIsLoading(false);
            })
            .catch(() => {
                Toast.fire({
                    icon: 'error',
                    title: 'An error occurred!'
                });
            });
    };

    useEffect(() => {
        axios.get(`api/v1/localidades/regioes?orderBy=nome`)
            .then(response => {
                setRegioes(response.data);
            })
            .catch(() => {
                Toast.fire({
                    icon: 'error',
                    title: 'An error occurred!'
                });
            });
    }, []);

    useEffect(() => {
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)
            .then(response => {
                setEstados(response.data);
            })
            .catch(() => {
                Toast.fire({
                    icon: 'error',
                    title: 'An error occurred!'
                });
            });
    }, []);

    return (
        <div className="interface">
            <Header defaultIconMenu={ContactIcon} />

            <ArticleHeader
                text="Fale Conosco &gt; Contato"
                title={"Formulário de Contato"} />

            <form method="post" id="fContato" action="mailto:marcus.viniciusmo@hotmail.com">
                <fieldset id="usuario">
                    <legend>Identificação do Usuário</legend>
                    <p>
                        <label htmlFor="cNome">
                            Nome:
                        </label>
                        <input type="text" name="tNome" id="cNome" size={20}
                            maxLength={30} placeholder="Nome Completo" />
                    </p>
                    <p>
                        <label htmlFor="cSenha">
                            Senha:
                        </label>
                        <input type="password" name="tSenha" id="cSenha"
                            size={8} maxLength={8} placeholder="8 dígitos" />
                    </p>
                    <p>
                        <label htmlFor="cMail">
                            E-mail:
                        </label>
                        <input type="email" name="tMail" id="cMail" size={20}
                            maxLength={40} placeholder="joao@gmail.com" />
                    </p>
                    <fieldset>
                        <legend>
                            <label>
                                Sexo:
                            </label>
                        </legend>
                        <input type="radio" name="tSexo" id="cMasc" />
                        <label htmlFor="cMasc">Masculino</label> <br />
                        <input type="radio" name="tSexo" id="cFem" />
                        <label htmlFor="cFem">Feminino</label>
                    </fieldset>
                    <p>
                        <label htmlFor="cNasc">
                            Data de Nascimento:
                        </label>
                        <input type="date" name="tNasc" id="cNasc" />
                    </p>
                </fieldset>

                <fieldset id="endereco">
                    <legend>Endereço do Usuário</legend>
                    <p>
                        <label htmlFor="cRua">
                            Logradouro:
                            <input type="text" name="tRua" id="cRua" size={13}
                                maxLength={80} placeholder="Rua, Avenia, Travessa..." />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="cNum">
                            Número:
                            <input type="number" name="tNum" id="cNum" min={0} max={99999} />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="cEst">
                            Estado:
                        </label>
                        <select name="tEst" id="cEst" onClick={handleMunicipios}>
                            {regioes &&
                                regioes.map((r) => {
                                    return (
                                        <optgroup label={`${r.nome}`}>
                                            {estados &&
                                                estados.filter(e => e.regiao.nome === r.nome).map((estado) => {
                                                    return (
                                                        <option value={estado.sigla}>{estado.nome}</option>
                                                    )
                                                })
                                            }
                                        </optgroup>
                                    )
                                })
                            }
                        </select>
                    </p>
                    <p>
                        <label htmlFor="cCid">
                            Cidade:
                        </label>
                        {!isLoading ?
                            <select name="tCid" id="cCid">
                                {municipios &&
                                    municipios.map((m) => {
                                        return (
                                            <option value={m.nome}>{m.nome}</option>
                                        )
                                    })
                                }
                            </select> : <BeatLoader size={10} margin={2} color="#606060" />}
                    </p>
                </fieldset>

                <fieldset id="mensagem">
                    <legend>Mensagem do Usuário</legend>
                    <p>
                        <label htmlFor="cUrg">
                            Grau de Urgência:
                        </label>
                        Min<input type="range" name="tUrg" id="cUrg" min={0} max={10} 
                            step={1} defaultValue={0}/>Máx
                    </p>
                    <p>
                        <label htmlFor="cMsg">
                            Mensagem:
                        </label>
                        <textarea name="tMsg" id="cMsg" cols={45} rows={5}
                            placeholder="Deixe aqui sua mensagem"></textarea>
                    </p>
                </fieldset>

                <fieldset id="pedido">
                    <legend>Quero um Google Glass</legend>
                    <label htmlFor="cPed">
                        Gostaria de adquirir um Google Glass quando disponível
                    </label>
                    <label htmlFor="cCor">
                        Cor:
                    </label>
                    <label htmlFor="cQtd">
                        Quantidade:
                    </label>
                    <label htmlFor="cTot">
                        Preço Total: R$
                    </label>
                </fieldset>

                [BOTÃO ENVIAR]
            </form>

            <Footer />
        </div>
    );
};

export default FaleConosco;