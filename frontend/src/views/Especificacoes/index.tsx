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
                        <img src={GlassEsquemaMarcado} alt="Google Glass marcado" useMap="#mapaGlassMarcado" />
                        <map name="mapaGlassMarcado">
                            <area shape="poly" coords="182,222,264,209,266,242,185,256"
                                href="./iframe#tela" target="janela"
                                alt="Tela do Google Glass" />
                            <area shape="circle" coords="157,244,12"
                                href="./iframe#camera" target="janela"
                                alt="Câmera do Google Glass" />
                            <area shape="circle" coords="76,50,12"
                                href="./iframe#gadgets" target="janela"
                                alt="Bateria e Gadgets do Google Glass" />
                            <area shape="poly" coords="28,144,82,214,82,250,26,168"
                                href="./iframe#sensores" target="janela"
                                alt="Sensores do Google Glass" />
                        </map>
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