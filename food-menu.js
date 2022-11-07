window.onload = function () {
let Menu = {'Drinks':'Entrees', 'Desserts'}
    Drinks: ['Water', 'Tea', 'Sweet Tea', 
    'Coke', 'Dr. Pepper', 'Sprite'],
    let Entrees : [
    'Hamburger w/ Fries', 
    'Grilled Cheese w/ Tater Tots',
   'Grilled Chicken w/ Veggies', 
    'Chicken Fried Steak w/ Mashed Potatoes',
   'Fried Shrimp w/ Coleslaw', 
    'Veggie Plate'
    ],
let Desserts: [
    'Cheesecake', 'Chocolate Cake', 'Snickerdoodle Cookie']
};


let selectMenu = document.getElementById('menuItems');
selectMenu.onclick = changeMenuList;



// let menu = {
// drinks : [
//     "Water", "Tea", "Sweet Tea", 
//     "Coke", "Dr. Pepper", "Sprite"
//     ],
//    entrees : [
//    "Hamburger w/ Fries", 
//     "Grilled Cheese w/ Tater Tots",
//    "Grilled Chicken w/ Veggies", 
//     "Chicken Fried Steak w/ Mashed Potatoes",
//    "Fried Shrimp w/ Coleslaw", 
//     "Veggie Plate"
//    ],
//    desserts: [
//     "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"