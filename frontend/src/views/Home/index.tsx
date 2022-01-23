import Header from "components/Header";
import { GetCurrentYear } from 'utils/Functions';
import GlassManWoman from 'assets/img/glass-quadro-homem-mulher.jpg';
import './styles.css';

function Home() {
    return (
        <div className="interface">
            <Header />
            <section className="corpo">
                <hgroup>
                    <h3>Tecnologia &gt; Inovações</h3>
                    <h1>Saiba tudo sobre o Google Glass</h1>
                    <h2>por Marcus Vinícius</h2>
                    <h3>Atualizado em 23/Janeiro/2022</h3>
                </hgroup>

                <h2>O que é</h2>
                <p>
                    O Google Glass é um acessório em forma de óculos que possibilita a interação
                    dos usuários com diversos conteúdos em realidade aumentada. Também chamado de
                    <i> Project Glass</i>, o eletrônico é capaz de tirar fotos a partir de comandos de voz,
                    enviar mensagens instantâneas e realizar vídeocon&shy;ferên&shy;cias. Seu
                    lançamento está previsto para 2014, e seu preço deve ser de US$ 1,5 mil.
                    Atualmente o <em>Google Glass</em> encontra-se em fase de testes e já possui um vídeo
                    totalmente gravado com o dispositivo. Além disso, a companhia de buscas registrou
                    novas patentes anti-furto e de desbloqueio de tela para o acessório.
                </p>

                <figure className="fotoLegenda">
                    <img src={GlassManWoman} alt="Google Glass-homem-mulher" />
                    <figcaption>
                        <h3>Google Glass</h3>
                        <p>Uma nova maneira de ver o mundo.</p>
                    </figcaption>
                </figure>

                <h2>Data de lançamento</h2>
                <p>
                    Não há uma data específica e oficial para o dispositivo ser lançado, ainda. Pode ser
                    que ele esteja disponível em demonstrações a partir de 2013, mas seu lançamento para
                    as lojas fica para, pelo menos, 2014.
                </p>

                <h1>Especificações Técnicas</h1>

                <table className="tabelaEspecificacoes">
                    <caption>Tabela Técnica do Google Glass <span>Mar/2013</span></caption>

                    <tr>
                        <td className="colunaEsquerda">Tela</td>
                        <td className="colunaDireita">Resolução equivalente a tela de 25"</td>
                    </tr>
                    <tr>
                        <td className="colunaEsquerda" rowSpan={2}>Camera</td>
                        <td className="colunaDireita">5MP para fotos</td>
                    </tr>
                    <tr>
                        <td className="colunaDireita">720p para vídeos</td>
                    </tr>
                    <tr>
                        <td className="colunaEsquerda" rowSpan={2}>Conectividade</td>
                        <td className="colunaDireita">Wi-Fi</td>
                    </tr>
                    <tr>
                        <td className="colunaDireita">Bluetooth</td>
                    </tr>
                    <tr>
                        <td className="colunaEsquerda">Memória Interna</td>
                        <td className="colunaDireita">12GB</td>
                    </tr>
                </table>

                <h1>Como funciona</h1>
                <p>
                    De acordo com fontes próximas do Google, os óculos vão contar com uma pequena tela de
                    LCD ou AMOLED na parte superior e em frente aos olhos do usuário. Com o uso de uma
                    câmera e GPS, você pode se situar, assim como selecionar opções com o movimento da cabeça
                </p>

                <h1>O que você pode fazer com o Google Glasses</h1>
                <p>
                    O vídeo de divulgação do Google mostra que você pode se transformar em uma espécie de
                    “super-<wbr />humano”, já que o aparelho pode indicar a quantos metros você está de seu
                    destino, se o metrô está aberto ou fechado, mostrar o clima, agenda e até mesmo permitir
                    que você marque encontros apenas com comandos de voz.
                </p>

                [AQUI ENTRA UM VÍDEO]
            </section>

            <aside className="lateral">
                <h1>Outras Notícias</h1>
                <h2>Vídeo mais recente</h2>

                [AQUI ENTRA UM VÍDEO]

                <h2>Novidades no Glass</h2>
                <p>
                    O Google enfim revelou as especificações completas do Google Glass, e com ele uma surpresa
                    ainda inédita no mercado: a gigante das buscas usará um sistema de áudio baseado na transdução
                    por condução. Através das hastes dos óculos, o som será transmitido para o ouvido do usuário
                    por meio de microvibrações em determinados ossos de sua cabeça, sem usar nenhum tipo de
                    alto-falante.
                </p>

                <p>
                    Além da surpresa do áudio, a tela montada a frente do olho do usuário também chamou atenção.
                    Serão 640 x 360 pixels de resolução que, em proporção, equivaleria a um monitor de 25
                    polegadas de alta definição colocado a 2,5 metros de distância do espectador.
                </p>
            </aside>

            <footer className="rodape">
                <p>
                    Copyright &copy; {GetCurrentYear()} - by Marcus Vinícius <br />
                    <a href="https://github.com/marcusviniciusmo"
                        target={'_blank'} rel="noreferrer">Github</a> | &nbsp;
                    <a href="https://www.linkedin.com/in/marcus-viniciusmo/"
                        target={'_blank'} rel="noreferrer">Linkedin</a> | &nbsp;
                    <a href="https://www.facebook.com/marcus.viniciusmo/"
                        target={'_blank'} rel="noreferrer">Facebook</a> | &nbsp;
                    <a href="https://www.instagram.com/marcus.viniciusmo"
                        target={'_blank'} rel="noreferrer">Instagram</a>
                </p>
            </footer>
        </div >
    );
};

export default Home;