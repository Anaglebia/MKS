import React,{useState, useEffect} from "react";
import './products.css';
import produtos from "../../api/produtos";
import ProductCard from "../ProductCard/ProductCard";


function Products(){
    // const [products, setProducts] = useState([]);

    // useEffect(()=>{
    //     produtos('iphone').then((response)=>{
    //         setProducts(response);
    //         console.log(products)
    //     });
    // },[]);

   


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadProducts(){
            const response = await produtos.get('/Product/get_products',{
                params:{
                    language:'pt-BR',
                    page:1,
                }
            })

            // console.log(response.data.results.slice(0,10));
            // setProducts(response.data.results.slice(0,10));
            setLoading(false);
        }

        loadProducts();
    },[])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando produtos...</h2>
            </div>
        )
    }
    
    console.log(products);
    return(
        <section className="products">{
            // <ProductCard/>

            <div >
            {products.map((p)=>{
                return(
                    <article key={p.id}>
                        <strong>{p.title}</strong>
                        <img src={`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api-docs/#/Product/${p.poster_path}`}/>
                        
                    </article>
                )
            })}

        </div>
            
        }
        </section>
    )
}

export default Products;





