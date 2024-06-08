let ProductCard = ({ obj }) => {
  let { title, thumbnail, rating, price, category } = obj;
  return (
    <div className="card w-96 bg-base-300 shadow-xl m-3 ">
      <figure >
        <img className="bg-zinc-400 h-[90%] rounded-2xl" src={thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between items-center ">
          <div className="badge badge-secondary bg-green-300">{category}</div>
          <div className="badge badge-secondary bg-green-300">{rating}</div>

          <p className=" p-1"> {price} $</p>
          <button className="bg-black text-white p-4 rounded-2xl"> Add </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
