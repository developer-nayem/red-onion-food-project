import React from 'react';


const itemData = () => {
    const itemsData = [
        {
            key: 'B1',
            category: 'Breakfast',
            name: 'Bagel and cream cheese',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye' ,
            sortDescription:'How we dream about our future',
            img:'../images/Breakfast/Breakfast1.png',
            price: 6.99,
            shipping: 1.99
        },
        {
            key: 'B2',
            category: 'Breakfast',
            name: 'Breakfast sandwich',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Breakfast/Breakfast2.png',
            price: 9.99,
        shipping: 1.99
        },
        {
            key: 'B3',
            category: 'Breakfast',
            name: 'Baked Chiken',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Breakfast/Breakfast3.png',
            price: 10.99,
            shipping: 2.99
        },
        {
            key: 'B4',
            category: 'Breakfast',
            name: 'Eggs Benedict',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Breakfast/Breakfast4.png',
            price: 8.99,
            shipping: 1.99
        },
        {
            key: 'B5',
            category: 'Breakfast',
            name: 'Toast Croissant Fried egg',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Breakfast/Breakfast5.png',
            price: 19.99,
            shipping: 2.99
        },
        {
            key: 'B6',
            category: 'Breakfast',
            name: 'Full Breakfast Fried Egg Toast Brunch',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Breakfast/Breakfast6.png',
            price: 3.99,
            shipping: 1.99
        },
        
    
    
        {
            key: 'L1',
            category: 'Lunch',
            name: 'Healthy Meal Plan',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Lunch/Lunch1.png',
            price: 23.99,
            shipping: 2.99
        },
        {
            key: 'L2',
            category: 'Lunch',
            name: 'Fried Chicken Bento',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Lunch/Lunch2.png',
            price: 9.99,
            shipping: 1.99
        },
        {
            key: 'L3',
            category: 'Lunch',
            name: 'Tarragon Rubbed Salmon',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Lunch/Lunch3.png',
            price: 6.99,
            shipping: 1.99
        },
        {
            key: 'L4',
            category: 'Lunch',
            name: 'Indian Lunch',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Lunch/Lunch4.png',
            price: 8.99,
            shipping: 1.99
        },
        {
            key: 'L5',
            category: 'Lunch',
            name: 'Beef Steak',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Lunch/Lunch5.png',
            price: 15.99,
            shipping: 2.99
        },
        {
            key: 'L6',
            category: 'Lunch',
            name: 'Honey Soy Glazed Salmon with Peppers',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription: 'How we dream about our future',
            img: 'hghgh',
            price: 7.99,
            shipping: 1.99
        },
        
        
        
        
        {
            key: 'D1',
            category: 'Dinner',
            name: 'Salmon with Grapefruit and lentil Salad',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Dinner/Dinner1.png',
            price: 9.99,
            shipping: 1.99
        },
        {
            key: 'D2',
            category: 'Dinner',
            name: 'Lemony Salmon Piccata',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Dinner/Dinner2.png',
            price: 10.99,
            shipping: 2.99
        },
        {
            key: 'D3',
            category: 'Dinner',
            name: 'Pork Tenderloin with Quinoa Pilaf',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Dinner/Dinner3.png',
            price: 12.99,
            shipping: 2.99
        },
        {
            key: 'D4',
            category: 'Dinner',
            name: 'French fries with cheese',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Dinner/Dinner4.png',
            price: 8.99,
            shipping: 1.99
        },
        {
            key: 'D5',
            category: 'Dinner',
            name: 'Garlic Butter Baked Salmon',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Dinner/Dinner5.png',
            price: 6.99,
            shipping: 1.99
        },
        {
            key: 'D6',
            category: 'Dinner',
            name: 'Baked Chiken',
            seller: '3M',
            priceFraction: 36,
            stock: 36,
            star: 3,
            starCount: 3245,
            description:'Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye ',
            sortDescription:'How we dream about our future',
            img: '../images/Dinner/Dinner6.png',
            price: 9.99,
            shipping: 1.99
        }
    
    ];
    return (
        <div>
           
        </div>
    );
};

export default itemData;




