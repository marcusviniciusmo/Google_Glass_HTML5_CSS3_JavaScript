import './styles.css';

type Props = {
    text: string;
};

function Breadcrumb({ text }: Props) {
    return (
        <h3>{text}</h3>
    );
};

export default Breadcrumb;