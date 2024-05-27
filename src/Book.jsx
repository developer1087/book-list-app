const Book = ({ img, title, author, id }) => {
  return (
    <section className="book">
      <p>{`#${id}`}</p>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button>Click Me</button>
      <h4>{author}</h4>
    </section>
  );
};

export default Book;
