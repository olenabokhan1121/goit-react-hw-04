import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
export default function ImageGallery({ items }) {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard data={item} />
        </li>
      ))}
    </ul>
  );
}
