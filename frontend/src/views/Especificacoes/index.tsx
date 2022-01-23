import Header from "components/Header";
import SpecificationsIcon from 'assets/img/especificacoes.png';
import ArticleHeader from "components/ArticleHeader";
import GlassEsquemaMarcado from 'assets/img/glass-esquema-marcado.jpg';
import Footer from "components/Footer";
import './styles.css';

function Especificacoes() {
    return (
        <div className="interface">
            <Header defaultIconMenu={SpecificationsIcon} />

            <section className="corpoFull">
                <article>
                    <ArticleHeader
                        text="Glass &gt; Especificações"
                        title={"Raio-X no Google Glass"} />

                    <p>
                        Clique em qualquer área destacada da imagem para ter mais informações sobre os 
                        recursos do Google Glass. Qualquer ponto vermelho vai te levar a um lugar cheio 
                        de novas informações.
                    </p>

                    <section className="conteudo">
                        <img src={GlassEsquemaMarcado} alt="Google Glass marcado" />
                        <iframe src="./iframe" title="janela" name="janela" 
                            className="frameSpec" scrolling="no" ></iframe>
                    </section>
                </article>
            </section>

            <Footer />
        </div>
    );
};

export default Especificacoes;