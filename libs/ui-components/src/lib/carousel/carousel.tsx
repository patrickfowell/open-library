import { Paper } from '@mui/material';
import styles from './carousel.module.css';

/* eslint-disable-next-line */
export interface CarouselProps {
  children: React.ReactElement;
}

export function Carousel(props: CarouselProps) {
  return (
    <div className={styles['container']}>
      <Paper >
        {props.children}
      </Paper>
    </div>
  );
}

export default Carousel;
