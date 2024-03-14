const menuBar = document.querySelector('#bar');
const navBar = document.querySelector('#navbar');
const navClose = document.querySelector('#close')

const proObj = [
    {
        comp: 'Mast & Harbour',
        proname: 'Lymio Casual Shirt for Men',
        price: '₹399',
        img1: 'img/product/p1/p1.jpg',
        img2: 'img/product/p1/p2.jpg',
        img3: 'img/product/p1/p3.jpg',
        img4: 'img/product/p1/p4.jpg',
    },
    {
        comp: 'GRECIILOOKS',
        proname: 'GRECIILOOKS Shirt for Men',
        price: '₹399',
        img1: 'img/product/p2/p1.jpg',
        img2: 'img/product/p2/p2.jpg',
        img3: 'img/product/p2/p3.jpg',
        img4: 'img/product/p2/p4.jpg',
    },
    {
        comp: 'GLORYBOYZ',
        proname: 'GLORYBOYZ Mens Half Sleeve',
        price: '₹899',
        img1: 'img/product/p3/p1.jpg',
        img2: 'img/product/p3/p2.jpg',
        img3: 'img/product/p3/p3.jpg',
        img4: 'img/product/p3/p4.jpg',
    },
    {
        comp: 'Mentific®',
        proname: 'Mentific® Digital Print Lycra Half Sleeve',
        price: '₹499',
        img1: 'img/product/p4/p1.jpg',
        img2: 'img/product/p4/p2.jpg',
        img3: 'img/product/p4/p3.jpg',
        img4: 'img/product/p4/p4.jpg',
    },
    {
        comp: 'GLORYBOYZ',
        proname: "Half Sleeve Relaxed Fit Tropical Hawaiian Men's Casual Shirt",
        price: '₹679',
        img1: 'img/product/p5/p1.jpg',
        img2: 'img/product/p5/p2.jpg',
        img3: 'img/product/p5/p3.jpg',
        img4: 'img/product/p5/p4.jpg',
    },
    {
        comp: "KARNAM Men's",
        proname: "KARNAM Men's Printed Cotton Shirt",
        price: '₹799',
        img1: 'img/product/p6/p1.jpg',
        img2: 'img/product/p6/p2.jpg',
        img3: 'img/product/p6/p3.jpg',
        img4: 'img/product/p6/p4.jpg',
    },
    {
        comp: 'Amazon Brand',
        proname: "Symbol Men's Regular Fit Casual Trouser",
        price: '₹749',
        img1: 'img/product/p7/p1.jpg',
        img2: 'img/product/p7/p2.jpg',
        img3: 'img/product/p7/p3.jpg',
        img4: 'img/product/p7/p4.jpg',
    },
    {
        comp: 'Dennis Lingo',
        proname: "Dennis Lingo Solid Cotton Men's Casual Cargo Pant",
        price: '₹599',
        img1: 'img/product/p8/p1.jpg',
        img2: 'img/product/p8/p2.jpg',
        img3: 'img/product/p8/p3.jpg',
        img4: 'img/product/p8/p4.jpg',
    },
    {
        comp: 'U.S. POLO ASSN.',
        proname: 'U.S. POLO ASSN. Men Jeans',
        price: '₹1,649',
        img1: 'img/product/p9/p1.jpg',
        img2: 'img/product/p9/p2.jpg',
        img3: 'img/product/p9/p3.jpg',
        img4: 'img/product/p9/p4.jpg',
    },
    {
        comp: 'High Star',
        proname: 'High Star Men Straight Fit Mildly Distressed Pure Cotton Jeans',
        price: '₹899',
        img1: 'img/product/p10/p1.jpg',
        img2: 'img/product/p10/p2.jpg',
        img3: 'img/product/p10/p3.jpg',
        img4: 'img/product/p10/p4.jpg',
    },
    {
        comp: "Hubberholme Men's",
        proname: "Hubberholme Men's Loose Fit Jeans",
        price: '₹1319',
        img1: 'img/product/p11/p1.jpg',
        img2: 'img/product/p11/p2.jpg',
        img3: 'img/product/p11/p3.jpg',
        img4: 'img/product/p11/p4.jpg',
    },
    {
        comp: 'PARIS HAMILTON Men',
        proname: "PARIS HAMILTON Men Relaxed Fit Colorblocked",
        price: '₹1199',
        img1: 'img/product/p12/p1.jpg',
        img2: 'img/product/p12/p2.jpg',
        img3: 'img/product/p12/p3.jpg',
        img4: 'img/product/p12/p4.jpg',
    },
    {
        comp: "ADRO Men's",
        proname: "ADRO Men's Fleece Hooded Hoodie",
        price: '₹949',
        img1: 'img/product/p13/p1.jpg',
        img2: 'img/product/p13/p2.jpg',
        img3: 'img/product/p13/p3.jpg',
        img4: 'img/product/p13/p4.jpg',
    },
    {
        comp: "ADRO Men's",
        proname: "ADRO Men's Cotton Hooded Neck Hoodies",
        price: '₹949',
        img1: 'img/product/p14/p1.jpg',
        img2: 'img/product/p14/p2.jpg',
        img3: 'img/product/p14/p3.jpg',
        img4: 'img/product/p14/p4.jpg',
    },
    {
        comp: 'NIKE',
        proname: 'Nike Mens Jordan 1 Retro HighSneaker',
        price: '₹80000',
        img1: 'img/product/p15/p1.jpg',
        img2: 'img/product/p15/p2.jpg',
        img3: 'img/product/p15/p3.jpg',
        img4: 'img/product/p15/p4.jpg',
    },
    {
        comp: 'NIKE',
        proname: "NIKE Air Winflo 10 Men's Running Shoes",
        price: '₹5999',
        img1: 'img/product/p16/p1.jpg',
        img2: 'img/product/p16/p2.jpg',
        img3: 'img/product/p16/p3.jpg',
        img4: 'img/product/p16/p4.jpg',
    },
]

function cartNumm(){
    const cartNum = document.querySelector('.cart-num');
    const mcartNum = document.querySelector('.m-cart-h4');
    let data = JSON.parse(localStorage.getItem('cart'));
    if(data === null){
        return
    }else{
        cartNum.innerHTML = data.length;
        mcartNum.innerHTML = data.length;
    }
}

function openClose() {
    return navBar.style.right = (navBar.style.right) === ('0px') ? '-350px' : '0px';
}

menuBar.addEventListener('click', (event) => {
    openClose();
});

navClose.addEventListener('click', function () {
    openClose();
})


// OPENING THE PRODUCT;
const product = document.querySelectorAll('.pro');

function productOpen() {
    window.location.href = 'sproduct.html'
}



product.forEach((value) => {
    value.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG' || event.target.tagName === 'H5') {
            let name = value.querySelector('.des');
            let proname = name.querySelector('h5');
            let price = name.querySelector('h4');
            let img = value.firstElementChild;
            console.log(img)
            let proName = name.firstElementChild.nextElementSibling.innerHTML;
            productOpen();
            let arr;
            proObj.forEach((value) => {
                if (value.proname === proName) {
                    arr = value;
                }
            })
            if (arr) {
                localStorage.setItem('data', JSON.stringify(arr))
            }
        }
        if (event.target.tagName === 'I') {
            const cartNum = document.querySelector('.cart-num');
            let cart = document.querySelector('.cart-bag');
            let name = value.querySelector('.des');
            let proname = name.querySelector('h5');
            let price = name.querySelector('h4');
            let img = value.firstElementChild;
            let localData = JSON.parse(localStorage.getItem('cart'));
            let arry = [
                `
                <td><a href="#"><i class="fa-regular fa-circle-xmark"></i></a></td>
                <td><img src="${img.src}" alt="products"></td>
                <td>${proname.innerHTML}</td>
                <td class="pro-price">${price.innerHTML}</td>
                <td><input type="number" value="1" class="input-number"></td>
                <td class="sub-total">${price.innerHTML}</td>`
            ]
            if(localData === null){
                localStorage.setItem('cart' , JSON.stringify(arry));
            }else{
                localData.map((value , index)=>{
                    arry.push(value);
                })
                localStorage.setItem('cart' , JSON.stringify(arry));
                cartNumm();
            }
        }
    })
})

window.addEventListener('DOMContentLoaded' , ()=>{
    cartNumm();
})