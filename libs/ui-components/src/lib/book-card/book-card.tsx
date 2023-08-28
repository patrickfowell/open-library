import styles from './book-card.module.css';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export interface Authors {
  "name": string,
  "birth_year": number,
  "death_year": number
}

export interface BookData {
  "id": number,
  "title": string,
  "authors": Authors[],
  "translators": [],
  "subjects": string[],
  "bookshelves": [],
  "languages": string[],
  "copyright": false,
  "media_type": string,
  "formats": {[index: string]: string},
  "download_count": number,
}

/* eslint-disable-next-line */
export interface CardProps {
  data: BookData;
}

const authorNames = (list: Authors[]): string => {
  const authorList = list.map(({ name }) => name)
  switch (authorList.length) {
    case 1:
      return authorList[0];
    case 2:
      return authorList.join(" and ");
    default:
      const last = authorList.pop();
      return authorList.join(", ") + " and " + last;
  }
}

export function BookCard(props: CardProps) {
  const authorString = authorNames(props.data.authors);
  const coverImage = props.data.formats['image/jpeg'] ? props.data.formats['image/jpeg'] : "/static/images/cards/contemplative-reptile.jpg";

  return (
    <div className={styles['container']}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.data.title}
        height="140"
        image={coverImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.data.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {authorString}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default BookCard;
