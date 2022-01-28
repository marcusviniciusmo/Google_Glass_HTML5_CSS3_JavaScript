import { useEffect, useState } from "react";
import { Regioes, Estados, Municipios } from "utils/Types";
import axios from "utils/Axios";
import { Toast } from "utils/Alert";
import Header from "components/Header";
import ContactIcon from 'assets/img/contato.png';
import ArticleHeader from "components/ArticleHeader";
import { BeatLoader } from 'react-spinners';
import BotaoEnviar from 'assets/img/botao-enviar.png';
import Footer from "components/Footer";
import './styles.css';

function FaleConosco() {

    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [sexo, setSexo] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState(0);
    const [regioes, setRegioes] = useState<Regioes>();
    const [estados, setEstados] = useState<Estados>();
    const [estado, setEstado] = useState('');
    const [municipios, setMunicipios] = useState<Municipios>();
    const [municipio, setMunicipio] = useState('');
    const [grauDeUrgencia, setGrauDeUrgencia] = useState(0);
    const [cor, setCor] = useState('#0000FF');
    const [quantidade, setQuantidade] = useState(0);
    const [total, setTotal] = useState(0);
    const [formularioValidado, setFormularioValidado] = useState(false);

    const handleNome = (event: any) => {
        setNome(event.target.value);
    };

    const handleSenha = (event: any) => {
        setSenha(event.target.value);
    };

    const handleEmail = (event: any) => {
        setEmail(event.target.value);
    };

    const handleSexo = (event: any) => {
        setSexo(event.target.value);
    };

    const handleDataNascimento = (event: any) => {
        setDataNascimento(event.target.value);
    };

    const handleLogradouro = (event: any) => {
        setLogradouro(event.target.value);
    };

    const handleNumero = (event: any) => {
        setNumero(event.target.value);
    };

    const handleEstado = async (event: any) => {
        setEstado(event.target.value);

        await getMunicipios(event.target.value);
    };

    const handleMunicipio = (event: any) => {
        setMunicipio(event.target.value);
    };

    const handleGrauDeUrgencia = (event: any) => {
        setGrauDeUrgencia(event.target.value);
    };

    const handleCor = (event: any) => {
        setCor(event.target.value);
    };

    const handleQuantidade = (event: any) => {
        const calcTotal = event.target.value * 1500;

        setQuantidade(event.target.value);
        setTotal(calcTotal);
    };

    const getMunicipios = async (estado: string) => {
        setIsLoading(true);

        await axios.get(`api/v1/localidades/estados/${estado}/municipios?orderBy=nome`)
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

    const validaFormulario = () => {
        if (nome.length > 0 && senha.length > 0 && email.length > 0
            && sexo.length === 1 && dataNascimento.length > 0
            && logradouro.length > 0 && numero > 0 && estado.length > 0
            && municipio.length > 0 && grauDeUrgencia > 0 && cor.length > 0
            && quantidade > 0) {
            setFormularioValidado(true)
        }
        else {
            setFormularioValidado(false)
        };
    };

    useEffect(() => {
        validaFormulario();
    })

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
                            Nome<span className="vermelho">*</span>:
                        </label>
                        <input type="text" name="tNome" id="cNome" size={20} maxLength={30}
                            placeholder="Nome Completo" value={nome} onChange={handleNome} />
                    </p>
                    <p>
                        <label htmlFor="cSenha">
                            Senha<span className="vermelho">*</span>:
                        </label>
                        <input type="password" name="tSenha" id="cSenha" size={8} maxLength={8}
                            placeholder="8 dígitos" value={senha} onChange={handleSenha} />
                    </p>
                    <p>
                        <label htmlFor="cMail">
                            E-mail<span className="vermelho">*</span>:
                        </label>
                        <input type="email" name="tMail" id="cMail" size={20} maxLength={40}
                            placeholder="joao@gmail.com" value={email} onChange={handleEmail} />
                    </p>
                    <fieldset id="sexo">
                        <legend>
                            <label>
                                Sexo<span className="vermelho">*</span>:
                            </label>
                        </legend>
                        <input type="radio" name="tSexo" id="cMasc" value="M" onChange={handleSexo} />
                        <label htmlFor="cMasc">Masculino</label> <br />
                        <input type="radio" name="tSexo" id="cFem" value="F" onChange={handleSexo} />
                        <label htmlFor="cFem">Feminino</label>
                    </fieldset>
                    <p>
                        <label htmlFor="cNasc">
                            Data de Nascimento<span className="vermelho">*</span>:
                        </label>
                        <input type="date" name="tNasc" id="cNasc"
                            value={dataNascimento} onChange={handleDataNascimento} />
                    </p>
                </fieldset>

                <fieldset id="endereco">
                    <legend>Endereço do Usuário</legend>
                    <p>
                        <label htmlFor="cRua">
                            Logradouro<span className="vermelho">*</span>:
                        </label>
                        <input type="text" name="tRua" id="cRua" size={13} maxLength={80}
                            placeholder="Rua, Avenia, Travessa..." value={logradouro}
                            onChange={handleLogradouro} />
                    </p>
                    <p>
                        <label htmlFor="cNum">
                            Número<span className="vermelho">*</span>:
                        </label>
                        <input type="number" name="tNum" id="cNum" min={0} max={99999}
                            value={numero} onChange={handleNumero} />
                    </p>
                    <p>
                        <label htmlFor="cEst">
                            Estado<span className="vermelho">*</span>:
                        </label>
                        <select name="tEst" id="cEst" onClick={handleEstado}>
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
                            Cidade<span className="vermelho">*</span>:
                        </label>
                        {!isLoading ?
                            <select name="tCid" id="cCid" onClick={handleMunicipio}>
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
                            Grau de Urgência<span className="vermelho">*</span>:
                        </label>
                        Min<input type="range" name="tUrg" id="cUrg" min={0} max={10}
                            step={1} defaultValue={0} value={grauDeUrgencia}
                            onChange={handleGrauDeUrgencia}/>Máx
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
                    <p id="check">
                        <input type="checkbox" name="tPed" id="cPed" checked />
                        <label htmlFor="cPed">
                            Gostaria de adquirir um Google Glass quando disponível
                        </label>
                    </p>
                    <p>
                        <label htmlFor="cCor">
                            Cor<span className="vermelho">*</span>:
                        </label>
                        <input type="color" name="tCor" id="cCor" value={cor}
                            onChange={handleCor} />
                    </p>
                    <p>
                        <label htmlFor="cQtd">
                            Quantidade<span className="vermelho">*</span>:
                        </label>
                        <input type="number" name="tQtd" id="cQtd" min={0}
                            max={10} value={quantidade} onChange={handleQuantidade} />
                    </p>
                    <p>
                        <label htmlFor="cTot">
                            Preço Total: R$
                        </label>
                        <input type="text" name="tTot" id="cTot"
                            value={total > 0 ? total.toString() : "Total a pagar"}
                            placeholder={total > 0 ? total.toString() : "Total a pagar"} readOnly />
                    </p>
                </fieldset>

                <input type="image" name="tEnviar" id="botaoEnviar" src={BotaoEnviar} alt="Botão Enviar"
                    disabled={!formularioValidado} />
            </form>

            <Footer />
        </div>
    );
};

export default FaleConosco;