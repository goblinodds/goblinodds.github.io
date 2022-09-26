import { useState } from 'react';

function FilterableProductTable({ products }) {
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar
                inStockOnly={inStockOnly}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable
                products={products}
                inStockOnly={inStockOnly} />
        </div>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
        </tr>
    );
}

function ProductTable({ products, inStockOnly }) {
    const rows = [];

    products.forEach((product) => {
        if (inStockOnly && !product.stocked) {
            return;
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
    });

    return (
            <table>
                <tbody>{rows}</tbody>
            </table>
    );
}

function SearchBar({ inStockOnly, onInStockOnlyChange }) {
    return (
            <h1 onClick={() => onInStockOnlyChange(!inStockOnly)}>Only show products in stock</h1>
    );
}

const PRODUCTS = [
    { stocked: true, name: "Apple" },
    { stocked: true, name: "Dragonfruit" },
    { stocked: false, name: "Passionfruit" },
    { stocked: true, name: "Spinach" },
    { stocked: false, name: "Pumpkin" },
    { stocked: true, name: "Peas" }
];

export default function Temp() {
    return <FilterableProductTable products={PRODUCTS} />;
}
