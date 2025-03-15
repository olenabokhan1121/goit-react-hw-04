import css from './ImageCard.module.css';
export default function ImageCard({ data }) {
  return (
    <div>
      <img
        className={css.link}
        src={data.imageCardUrl}
        alt={data.description || 'No description available'}
      />
      <div className={css.info}>
        <p className={css.item}>
          <b>Likes</b> {data.likes}
        </p>

        <p className={css.item}>
          <b>Author</b>
          {data.author}
        </p>
      </div>
    </div>
  );
}
