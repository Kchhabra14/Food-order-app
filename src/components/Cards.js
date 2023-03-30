import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import CardsData from "./CardsData";
import "./style.css"
import {ADD} from "../redux/actions";

export default function Cards() {

  const [ data, setData] = useState(CardsData);
  console.log(CardsData)

  const dispatch  = useDispatch()

  const sendData = (e) =>{
    // console.log(e)
    dispatch(ADD(e));

  }
  return (
    <div className='container mt-4'>
      <h2 className='text-center'>Healthy meals, Hassle-free!!</h2>
      <div className='row d-flex justify-content-center align-items-center'>{
        data.map((element, id)=> {
          return (
            <>
            <Card style={{width:"22rem", border:"none"}} className='mx-2 mt-4 card_style'>
            <Card.Img variant="top" src={element.imgdata} className="mt-3 food_image" />
            <Card.Body>
            <Card.Title>{element.rname}</Card.Title>
            <Card.Text>
              Price: ₹ {element.price}

            </Card.Text>
            <div className='button_div d-flex justify-content-center'>
            <Button 
             onClick={() => sendData(element)}
             variant="primary" className='col-lg-12'>
             Add to cart
            </Button>
            </div>
            
            </Card.Body>
            </Card>
            </>
          )
        })
      }
      
      </div>
    </div>
  )
}
