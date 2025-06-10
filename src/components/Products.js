import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/ProductSlice';
function Products() {
  const { products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  return (
    <>
      <div className="content-wrapper container mt-4">
        <h2>Products</h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '15px',
            alignContent: 'center',
          }}
        >
          <button
            style={{
              color: 'blue',
              backgroundColor: 'white',
              border: 'solid 1px blue',
              borderRadius: '10px',
              width: '130px',
              height: '40px',
              fontWeight: '500',
            }}
            onClick={() => dispatch(fetchProducts())}
          >
            Show Products
          </button>
          {loading && (
            <h5
              style={{
                color: 'blue',
                width: '130px',
                height: '40px',
                fontWeight: '500',
              }}
            >
              Loading...
            </h5>
          )}
        </div>

        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price (EGP)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
