import Header from "components/Header";
import ContactIcon from 'assets/img/contato.png';
import Footer from "components/Footer";
import ArticleHeader from "components/ArticleHeader";

function FaleConosco() {
    return (
        <div className="interface">
            <Header defaultIconMenu={ContactIcon} />

            <ArticleHeader
                text="Fale Conosco &gt; Contato"
                title={"Formulário de Contato"} />

            <form>
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
                        <label>
                            Número:
                            <input type="number" name="tNum" id="cNum" min={0} max={99999} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Estado:
                        </label>
                    </p>
                    <p>
                        <label>
                            Cidade:
                        </label>
                    </p>
                </fieldset>

                <fieldset id="mensagem">
                    <legend>Mensagem do Usuário</legend>
                    Grau de Urgência:
                    Mensagem:
                </fieldset>

                <fieldset id="pedido">
                    <legend>Quero um Google Glass</legend>
                    Gostaria de adquirir um Google Glass quando disponível
                    Cor:
                    Quantidade:
                    Preço Total: R$
                </fieldset>

                [BOTÃO ENVIAR]
            </form>

            <Footer />
        </div>
    );
};

export default FaleConosco;