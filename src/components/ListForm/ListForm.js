import styles from './ListForm.module.scss';
import { useState } from "react";
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addList } from '../../redux/listsRedux';

const ListForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const id = shortid();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({id, title, description}));
        setTitle('');
        setDescription('');
    }
	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            Title: <TextInput input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Description: <TextInput input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
	);
};

export default ListForm;