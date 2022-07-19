import styles from './CardForm.module.scss';
import { useState } from "react";
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addCard } from '../../redux/store';

const CardForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const columnId = props.columnId;
    const id = shortid();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({id, columnId, title}));
        setTitle('');
    }
	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;