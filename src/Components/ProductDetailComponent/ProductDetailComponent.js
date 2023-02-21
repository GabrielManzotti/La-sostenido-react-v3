import React from 'react'
import { useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./styles.css"
import { NavLink } from 'react-router-dom';
import ProductQuantity from '../ProductQuantity/ProductQuantity';
import GraduationDescription from '../graduationDescription/graduationDescription';

function ProductDetailComponent({ data }) {

  console.log("productDetailComponent", data)

  return (
    <div className='section-detail-component'>
      <div >
        <p className='titulo-brand'>{data.brand}</p>
      </div>
      <div className='precio-div'>
        <p className='precio-p'>${data.price}.00</p>
      </div>
      <div className='description-div'>
        <p className='description-p'>{data.description}</p>
      </div>
      <div className='button-cart'>
        <NavLink>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Agregar al carrito</Button>
          </Stack>
        </NavLink>
      </div>
      <div className='product-quantity'>
        <ProductQuantity />
      </div>
    </div>
  )
}

export default ProductDetailComponent