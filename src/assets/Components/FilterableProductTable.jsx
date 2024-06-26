import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = ({products}) => {
    const [filterText, setfilterText] = useState('');
    const [inStockOnly, setinStockOnly] = useState(false);
  return (
    <div class='productTable'>
          <SearchBar 
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setfilterText}
                onInStockOnlyChange={setinStockOnly}/>
          <ProductTable 
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly} />
    </div>
  );
}

export default FilterableProductTable