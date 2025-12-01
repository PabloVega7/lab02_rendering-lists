export default function BookCard({ book }) {
  const { title, image, price, url, isbn13 } = book;
  const detailsUrl =
    url ?? (isbn13 ? `https://itbook.store/books/${isbn13}` : "#");

  return (
    // force the "loaded" state so the body is visible
    <article className="card is-loaded">
      <div className="card__media">
        <img src={image} alt={title} />
      </div>

      <div className="card__body">
        <h2 className="card__title" title={title}>
          {title}
        </h2>
        {/* price instead of author */}
        <p className="card__meta">{price}</p>
      </div>

      <a
        className="card__link"
        href={detailsUrl}
        target="_blank"
        rel="noopener noreferrer">
        View details
      </a>
    </article>
  );
}
