import styles from './CardForm.module.scss';
import { useState } from "react";
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const CardForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const id = shortid();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: { id, title } });
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