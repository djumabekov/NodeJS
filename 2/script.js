let allProductsBlock = $("#all_products");
let addProductBtn = $("#addProductBtn");

function makeRequest(url, method, successCallback){
    let settings = {
        "url"    : url,
        "method" : method,
        "success": successCallback,
        "error": ()=>alert("Что-то пошло не так"),
    }
    $.ajax(settings);
}

function showProducts(){
    allProductsBlock.empty();
    makeRequest("http://localhost:8080/products/", "GET", (result)=>{
        console.log(result);
        allProductsBlock.append(`<table>
        <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Price </th>
            <th> Category </th>
            <th> Delete </th>
        </tr>
        `);
        for(let i=0; i<result.length; i++){
            allProductsBlock.append(
            `   <tr>
                <td>ID:       ${result[i].id}       </td> <br>
                <td>Name:     ${result[i].name}     </td> <br>
                <td>Price:    ${result[i].price}    </td> <br>
                <td>Category: ${result[i].category} </td> <br> 
                <td><button onclick="deleteProduct(${result[i].id})">Delete</button></td> <br> 
                </tr>
            `)
        }
        allProductsBlock.append(`</table>`);
    })
   
}
document.onload = showProducts();

function deleteProduct(productId){
    makeRequest(`http://localhost:8080/products/remove/${productId}`, "GET", (result)=>
    {
        alert(result);
        location.reload();
    });
}

addProductBtn.click(()=>{
    let productId = $("#productId").val();
    let productName = $("#productName").val();
    let productCategory = $("#productCategory").val();
    let productPrice = $("#productPrice").val();
    makeRequest(`http://localhost:8080/products/add?id=${productId}&name=${productName}&category=${productCategory}&price=${productPrice}`, 
                "GET", 
                (result)=>{alert(result);location.reload();})
});