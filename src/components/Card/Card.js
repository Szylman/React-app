import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';
import { useState } from 'react';

const Card = props => {
    const dispatch = useDispatch();
    const [ isFavorite, setIsFavorite ]  = useState(props.isFavorite);

    const handleCLick = (e) => {
      e.preventDefault();
      setIsFavorite(!isFavorite);
      dispatch(toggleCardFavorite(props.id));
    };

    const handleRemove = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    };
    

    
    return (
        <div>
          <li className={styles.card}>
            {props.title}
            <div>
        <button 
          className={clsx(styles.button, isFavorite && styles.isFavorite)}
          onClick={handleCLick}>
            <i className="fa fa-star-o"></i>         
        </button>
        <button className={clsx(styles.button, styles.removeCard)} onClick={handleRemove}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
          </li>
        </div>
      );
}

export default Card;