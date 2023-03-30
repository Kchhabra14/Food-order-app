import React , {useState}from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import "./style.css"
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import cartgif from "../cartimage.gif";
import { useSelector, useDispatch } from 'react-redux';
import {DEL} from "../redux/actions"
import { cartreducer } from '../redux/reducer';
import { Table } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Header() {

  const getdata = useSelector((state) => state.carts) ;
  console.log(getdata)

  const dispatch = useDispatch()
   
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const dlt = (id) =>{
      dispatch(DEL(id))
    }
  return (
    <>
     <Navbar bg="dark" variant="dark" style={{height: "60px"}}>
        <Container>
          <NavLink to='/' className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
          </Nav>

          <Badge badgeContent={getdata?.length} color="primary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >
          <ShoppingCartIcon className='cart_icon'/>
          </Badge>
          
        
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        >

          {
            getdata?.length ? 
            <div className='card_details' style={{width:"24rem", padding:10}}>
              <Table>
                <thead>
                  <th>Item</th>
                  <th>Restaurant Name</th>
                </thead>
                <tbody>
                  {
                    getdata?.map((e)=> {
                      return(
                        <>
                        <tr>
                          <td>
                            <NavLink to = {`/cart/${e.id}`}>
                            <img src={e.imgdata} alt= "image"
                            style={{width : "5rem", height: "5rem"}} />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p> Price : ₹{e.price}</p>
                            <p> Quantity : {e.qnty}</p>
                            <p style={{color:"red", fontSize:20, cursor:"pointer"}}>
                              <DeleteIcon className='trashSmall'/>
                            </p>
                          </td>
                          <td className='mt-5'
                          style={{color:"red", fontSize:20, cursor:"pointer"}}>
                            <DeleteIcon className='trashLarge'/>
                          </td>
                        </tr>
                        </>
                      )
                    })
                  }
                  <p className='text center'> total : </p>
                </tbody>
              </Table>

            </div> : 

            <div className='card_details d-flex justify-content-center align-items center'  
            style={{width: "24rem", padding: 10,position:"relative"}}> 
                <CloseIcon className='close' onClick={handleClose}/> 
                <p style={{fontSize:22}}>Your cart is empty </p> 
                <br/> 
                <img src={cartgif} alt='emptycart_img' style={{width:"6rem", padding:10}}/> 
            </div> 
          }
        
        </Menu>
      </Navbar>
    </>
  )
}
