import axios from 'axios';

// const produtos = async()=>{
//     const response = await fetch( `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api-docs/#/Product/get_products}` );
//     const data = await response.json();
    
//     return data.products;
// }

const produtos =  axios.create({ 
    baseURL : 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api-docs/#/Product/get_products/produtos.json' , 
     
  } ) ;

export default produtos;

