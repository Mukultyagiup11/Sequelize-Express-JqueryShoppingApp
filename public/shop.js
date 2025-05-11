function fetchProducts(done) {
   $.get('/api/products', function(data) {
         done(data);
  })
}

function addProduct(name,manuf,price,done){
    $.post('/api/products',{
      name:name,
      manufacturer:manuf,
      price:price
    },function(data){
        done(data)
    })
}


function createProductCard(product){
    return $(`
        <div class="col-4 card mx-2 p-2">
         <b><i><h4 class="product-name">${product.name}</h4></i></b>
           <div class="product-manufacturer">${product.manufacturer}</div>
            <br>
            <div class="row">
              <div class="col m-3 p-3">
                <b> ${product.price} Only</b> 
                </div>
                <button class="col btn btn-primary m-3 p-3">Buy</button>              
         </div>
        `)
}