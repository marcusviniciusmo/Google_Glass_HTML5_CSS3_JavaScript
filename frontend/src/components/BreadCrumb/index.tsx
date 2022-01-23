import './styles.css';

type Props = {
    text: string;
};

function BreadCrumb({ text }: Props) {
    return (
        <h3>{text}</h3>
    );
};

export default BreadCrumb;