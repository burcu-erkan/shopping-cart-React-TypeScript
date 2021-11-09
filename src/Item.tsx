
import styled from 'styled-components';
import {  CartItemType } from './App';
import Button from '@mui/material/Button';


const Container=styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
width:100%;
border:1px solid lightblue;
height:100%;
border-radius:20px;
padding:5px;

button{ 
    border-radius:0 0 20px 20px;
}

img{
    max-height:250px;
    object-fit:cover;
    border-radius:20px 20px 0 0;

}
`;


type Props={
    item:CartItemType;
    handleAddToCart:(clickedItem:CartItemType)=>void;
}

const Item:React.FC<Props>=({item, handleAddToCart})=>{
    return(
        <Container>
            <img src={item.image} alt={item.title}/>
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
                </div>
                <Button onClick={() => handleAddToCart(item)}
>
 Add to Cart
</Button>
        </Container>
    )
}
export default Item;