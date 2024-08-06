import { useParams } from "react-router-dom";
import productsData from "../../data";
import CardMUI from "../CardMUI/CardMUI";

const ProductInfo = () => {
  const { id } = useParams();
  //   console.log(id);

  const filteredProduct = productsData.filter((product) => {
    return product.id == id;
  });

  return (
    <div>
      {filteredProduct.map((e, i) => {
        return (
          <CardMUI
            key={i}
            title={e.title}
            desc={e.description}
            image={e.image}
            id={e.id}
          />
        );
      })}
    </div>
  );
};

export default ProductInfo;
