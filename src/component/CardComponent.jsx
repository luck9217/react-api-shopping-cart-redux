const CardComponent = ({ product, operationCard, button }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">
          {product.title} - <b>$ {product.price}</b>
        </h5>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            operationCard(event, product);
          }}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
