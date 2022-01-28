import Breadcrumb from 'components/Breadcrumb';
import './styles.css';

type Props = {
    text: string;
    title: string;
};

function ArticleHeader({ text, title }: Props) {
    return (
        <header className="cabecalhoArtigo">
            <hgroup>
                <Breadcrumb text={text} />
                <h1>{title}</h1>
                <h2>por Marcus Vinícius</h2>
                <h3 className="direita">Atualizado em 23/Janeiro/2022</h3>
            </hgroup>
        </header>
    );
};

export default ArticleHeader;