import { useSelector } from 'react-redux';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { getAllFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () =>{
    const favoriteCards = useSelector((state) => getAllFavoriteCards(state));
    return(
        <Container>
        <PageTitle children='Favorite' />
        <article className={styles.column}>
          <ul className={styles.cards}>
            {favoriteCards.map((favoriteCard) => (
              <Card
                key={favoriteCard.id}
                title={favoriteCard.title}
                isFavorite={favoriteCard.isFavorite}
                id={favoriteCard.id}
              />
            ))}
          </ul>
        </article>
      </Container>
    );
}

export default Favorite