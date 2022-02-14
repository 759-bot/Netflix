let products = [
    {
        id:1,
        imgUrl:"img/product/product-1.jpg",
        title: "sporty",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
    {
        id:2,
        imgUrl:"img/product/product-2.jpg",
        title: "adel",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
    {
        id:3,
        imgUrl:"img/product/product-3.jpg",
        title: "sporty",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
    {
        id:4,
        imgUrl:"img/product/product-4.jpg",
        title: "sporty",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
    {
        id:5,
        imgUrl:"img/product/product-5.jpg",
        title: "sporty",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
    {
        id:6,
        imgUrl:"img/product/product-6.jpg",
        title: "sporty",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
    {
        id:7,
        imgUrl:"img/product/product-7.jpg",
        title: "sporty",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
    {
        id:8,
        imgUrl:"img/product/product-8.jpg",
        title: "sporty",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
    {
        id:9,
        imgUrl:"img/product/product-9.jpg",
        title: "sporty",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
    {
        id:10,
        imgUrl:"img/product/product-10.jpg",
        title: "sporty",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
    {
        id:11,
        imgUrl:"img/product/product-11.jpg",
        title: "sporty",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
    {
        id:12,
        imgUrl:"img/product/product-12.jpg",
        title: "sporty",
        price: 59.0,
        starImgUrl:"img/5stars.jpg",
    },
]

let productDom = document.querySelector(".products-holder");
function drawProducts () {
    let productsUI = products.map((item) => {
        return `
        <div class="col-lg-3 col-md-4 col-sm-6 d-none d-sm-block">
            <div class="card" style="width: 100%;">
                <img src="${item.imgUrl}" class="card-img-top" alt="sporty" height="350px">
                <div class="card-body">
                    <h5 class="card-title text-center small">${item.title}</h5>
                    <p class="card-text text-center small"><img src="${item.starImgUrl}" width="100rem"></p>
                    <h2 class="card-text text-center small">$${item.price}</h2>
                    <button class="add-cart btn btn-danger"><i class="fas fa-plus mr-2"></i>add to cart</button>
                </div>
            </div>
        </div>
        `;
    });
    productDom.innerHTML = productsUI.toString().replaceAll(',', '');
}

drawProducts();