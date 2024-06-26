
import React from 'react'

const ProductCategoryRow = ({category}) => {
  return (
    <>
    <tr className='text1'>
       <th colSpan='2'>
         {category}
       </th>
    </tr>
    </>
  );
}

export default ProductCategoryRow
