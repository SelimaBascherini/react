

import { useState, useEffect } from "react"


export function Fetch() {
    const [products, setProduct] = useState([])
    useEffect(() => {
        async function fetchProducts(){
            let res = await fetch("https://fakestoreapi.com/products")
            let json = await res.json()
            console.log(json)
            setProduct(json)
        } 
        fetchProducts()
    }, [])

    return(
        <>
        <h1>Fetch</h1>
        
        {products.length}
        </>
    )
}