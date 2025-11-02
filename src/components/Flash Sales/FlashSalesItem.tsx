import type { TOptionProduct } from "../../data/data";

interface FlashSalesProps {
  product: TOptionProduct;
}

const FLashSalesItem: React.FC<FlashSalesProps> = ({ product }) => {
  return (
    <li key={product.id} className="w-[270px] mr-2 block h-[350px] ">
      <div className="relative rounded-sm p-12 flex justify-center items-center bg-gray-100 h-[250px] transition-all ease-in-out duration-300 hover:bg-gray-500 group">
        <img src={product.saleImage} alt="" />
        <button
          type="button"
          className="flex justify-center opacity-0 group-hover:opacity-100 group-hover:z-10 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events -z-10 rounded-br-sm rounded-bl-sm items-center absolute bottom-0 translate-y-15 left-0 right-0 w-full px-12 py-2 bg-black text-white transition-all duration-300 linear"
        >
          Add to Cart
        </button>

        {product.isSale ||
          (product.isNew && (
            <div
              className={`flex justify-center py-1 px-3 rounded-md ${
                product.isSale ? "bg-lightRed" : "bg-BtnColor"
              } items-center absolute top-[12px] left-[12px]`}
            >
              <span
                className={`text-xs font-regular leading-[18px] text-primaryCol ${
                  product.isNew && "uppercase"
                }`}
              >
                {product.isSale ? product.saleText : product.newProduct}
              </span>
            </div>
          ))}
        <div className="absolute top-[12px] right-[12px] flex justify-center items-center flex-col gap-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <button
              type="button"
              className="flex cursor-pointer justify-center items-center rounded-full bg-primaryCol p-1.5 transition-transform ease-in-out hover:scale-110"
            >
              <img
                src={index == 1 ? product.favoriteIcon : product.viewedIcon}
                alt=""
              />
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3.5 text-Header-16px font-medium leading-6 text-left">
        <p>{product.salesName}</p>
        {product.isSale ? (
          <div className="my-2">
            <div>
              <span className="text-lightRed">${product.salePrice}</span>
              <span className="pl-3 text-gray-500 line-through">
                ${product.saleFullPrice}
              </span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img src={product.saleRating} alt="" />
              <span className="text-gray-400">({product.reviews})</span>
            </div>
          </div>
        ) : (
          <div className="my-2">
            <div className="flex justify-start items-center gap-2">
              <span className="text-lightRed">${product.salePrice}</span>
              <img src={product.saleRating} alt="" />
              <span className="text-gray-400">({product.reviews})</span>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default FLashSalesItem;
