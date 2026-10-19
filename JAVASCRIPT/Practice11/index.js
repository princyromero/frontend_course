const fetchproduct = async ()=>{
    const getproduct =await fetch("https://dummyjson.com/products")
    const change = await getproduct.json()
    console.log(change.products);
    const showproduct_tbody =document.getElementById("showproduct")
    let getshow =""
    product.foreach((e)){
        getshow +=<tr>
            <td>{$(e.no)}</td>
            <td>{$(e.products)}</td>
        </tr>
    });
    showproduct_tbody.innerHTML=getshow
   
}
fetchproduct()