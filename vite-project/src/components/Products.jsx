// import React, { useState, useEffect } from "react";
// import "./Products.css"; // Import the CSS for styling

// function Products() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         // Fetch products from the backend
//         fetch("http://localhost:3000/products") // Replace with your actual API endpoint
//             .then(response => response.json())
//             .then(data => setProducts(data))
//             .catch(error => console.error("Error fetching products:", error));
//     }, []);

//     console.log(products);

//     return (
//         <div className="products-container">
//             <h1>Products</h1>
//             <div className="products-grid">
//                 {products.map((product) => (
//                     <div className="product-card" key={product.id}>
//                         <img src={product.image} alt={product.name} className="product-image" />
//                         <h2 className="product-name">{product.name}</h2>
//                         <p className="product-price">${product.price.toFixed(2)}</p>
//                         <p className="product-rating">Rating: {product.rating} ★</p>
//                         <button className="add-to-cart">Add to Cart</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Products;

import React, { useState, useEffect } from "react";
import "./Products.css";

function Products() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product

    useEffect(() => {
        fetch("http://localhost:3000/products") // Update with actual API endpoint
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    // Function to view/edit a product
    const handleViewEdit = (product) => {
        setSelectedProduct(product);
    };

    // Function to go back to the product list
    const handleBack = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="products-container">
            {selectedProduct ? (
                // Detail View
                <div className="product-detail">
                    <button onClick={handleBack} className="back-button">Back to Listings</button>
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image-detail" />
                    <h2 className="product-name">{selectedProduct.name}</h2>
                    <p className="product-price">${selectedProduct.price.toFixed(2)}</p>
                    <p className="product-description">{selectedProduct.description}</p>
                    <p className="product-rating">Rating: {selectedProduct.rating} ★</p>
                    {/* Additional fields for editing can be added here */}
                </div>
            ) : (
                // Product Listings
                <div>
                    <h1>Products</h1>
                    <div className="products-grid">
                        {products.map((product) => (
                            <div className="product-card" key={product.id}>
                                <img src={product.image} alt={product.name} className="product-image" />
                                <h2 className="product-name">{product.name}</h2>
                                <p className="product-price">${product.price.toFixed(2)}</p>
                                <p className="product-rating">Rating: {product.rating} ★</p>
                                <button onClick={() => handleViewEdit(product)} className="view-edit-button">View or Edit</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;

