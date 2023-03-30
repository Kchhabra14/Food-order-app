import React from 'react'
import Table from 'react-bootstrap/Table';
import "./style.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartreducer } from '../redux/reducer';

export default function CardsDetails() {

  const{id} = useParams();
  console.log(id);

  const getdata = useSelector((state) => state.cartreducer.carts)
  console.log(getdata);

  return (
    <>
    <div className='container mt-4'>
      <h2 className='text-center'>Item Details</h2>
      <section className='container mt-3'>
        <div className='items_details'>

          <div className='items_img'>
            <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"/>
          </div>

          <div className='details'>
            <Table/>
            <tr>
              <td>
                <p><strong>Restaurant</strong> : masala</p>
                <p><strong>Price </strong> :₹ 300</p>
                <p><strong>Dishes</strong> : biryani</p>
                <p><strong>Total</strong> : ₹ 300</p>
              </td>
              <td>
                <p><strong>Rating</strong><span className='spantag'> 3.5 ★ </span></p>
                <p><strong>Order Review</strong><span className='review'> some data </span></p>
                <p><strong>Remove </strong><span className='remove'><DeleteIcon/></span></p>
              </td>
              <td></td>
            </tr>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
