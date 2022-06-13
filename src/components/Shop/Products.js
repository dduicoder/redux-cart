import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  { id: "p1", price: 6, title: "1984", description: "George Orwell" },
  { id: "p2", price: 14.99, title: "pg 5", description: "Pg series" },
  {
    id: "p3",
    price: 499,
    title: "WH-1000XM4",
    description: "Sony's new noise-cancelling headphones",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
