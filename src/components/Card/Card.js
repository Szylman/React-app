import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';


const Card = props => {
    const dispatch = useDispatch();

    const handleCLick = (e) => {
      e.preventDefault();
      dispatch(toggleCardFavorite(props.id));
    };

    
    return (
        <div>
          <li className={styles.card}>
            {props.title}
            <button onClick={handleCLick}>
              <span
                className={clsx(
                  'fa fa-star-o',
                  props.isFavorite && styles.isFavorite
                )}
              ></span>
            </button>
          </li>
        </div>
      );
}

export default Card;