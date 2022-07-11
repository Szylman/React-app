import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CartForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {
    
    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));


    return (<article className={styles.column}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        <h2 className={styles.title}>{props.title}</h2>
        <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} title={card.title} />)}
        </ul>
        <CardForm columnId={props.id} action={props.addCard}/>
        </article>);
};

export default Column;