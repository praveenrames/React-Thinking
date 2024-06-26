
import React from 'react'
import FilterableProductTable from './assets/Components/FilterableProductTable'
import SearchBar from './assets/Components/SearchBar'
import ProductTable from './assets/Components/ProductTable'
import ProductCategoryRow from './assets/Components/ProductCategoryRow'
import ProductRow from './assets/Components/ProductRow'
import './App.css'

const App = () => {

   return (
     <div className='App'>
       <FilterableProductTable>
           <SearchBar />
              <ProductTable>
                  <ProductCategoryRow />
                  <ProductRow />
              </ProductTable>
       </FilterableProductTable>
     </div>
    
  )
}
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
export default function () {
  return <FilterableProductTable 
  products={PRODUCTS} />;
}
