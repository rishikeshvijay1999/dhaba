document.addEventListener('DOMContentLoaded', function () {
    const menuItems = [
        { name: 'Palak Paneer', price: '₹135', image: 'images/plainpalak.jpg', description: 'Palak Paneer is a popular Indian Vegetarian Dish consisting of Paneer in a smooth, creamy and delicious spinach gravy.' },
        { name: 'Tomato Curry', price: '₹150', image: 'images/tomato.jpeg', description: 'Tomato Curry is a flavorful Indian dish made with ripe tomatoes, aromatic spices, and a rich curry base, creating a delicious and tangy culinary experience.' },
        { name: 'Rice Plain', price: '₹60', image: 'images/plainrice.jpg', description: 'Plain Rice is a simple and versatile staple, featuring perfectly cooked rice grains that serve as a neutral base to complement a variety of dishes.' },
        { name: 'Chana Masala', price: '₹160', image: 'images/chanamasala.jpeg', description: 'Chana Masala is a flavorful Indian dish made with chickpeas in a spiced tomato-based curry, offering a delightful combination of protein and aromatic spices.' },
        { name: 'Dum Gobi Masala', price: '₹170', image: 'images/aloogobi.jpg', description: 'Dum Gobi Masala is a delectable Indian dish featuring cauliflower cooked to perfection in a rich and flavorful spiced tomato-based gravy, creating a delightful culinary experience.' },
        { name: 'Kadai Veg. Masala', price: '₹180', image: 'images/kadaiveg.jpg', description: 'Kadai Veg Masala is a savory Indian dish made with a medley of fresh vegetables cooked in a kadai (wok) with aromatic spices, creating a flavorful and satisfying vegetarian delight' },
        { name: 'Tandoori Roti', price: '₹10', image: 'images/tandooriroti.jpg', description: 'Tandoori Roti is a traditional Indian unleavened flatbread, cooked in a tandoor (clay oven), known for its soft texture and smoky flavor, making it a popular accompaniment to various Indian dishes.' },
        { name: 'Butter Naan', price: '₹35', image: 'images/butternaan.jpeg', description: 'Butter Naan is a soft and fluffy Indian bread, enriched with butter, often enjoyed as a delicious accompaniment to a variety of Indian dishes.' },
        { name: 'Plain Parata', price: '₹30', image: 'images/plainparata.jpg', description: 'Plain Parata is a thin, flaky, unleavened Indian bread made with whole wheat flour, typically enjoyed as a versatile accompaniment to various curries and dishes. '},
        { name: 'Egg Curry', price: '₹100', image: 'images/eggcurry.jpg', description: 'Egg Curry is a flavorful Indian dish made with boiled eggs cooked in a rich and aromatic curry sauce, blending spices and herbs for a delicious and hearty meal.' },
        { name: 'Malai Kofta', price: '₹160', image: 'images/malaikofta.jpg', description: 'Malai Kofta is a delectable Indian dish consisting of deep-fried vegetable or paneer balls served in a creamy and flavorful tomato-based curry, creating a delightful combination of textures and tastes.' },
    ];

    const menuList = document.getElementById('menu-list');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <p>${item.description}</p>
        `;
        menuList.appendChild(menuItem);
    });

    function makeReservation() {
        const dish = document.getElementById('dish').value;
        const dish1 = document.getElementById('dish1').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const mobile = document.getElementById('mobile').value;

        if (!dish || !date || !time || !mobile) {
            alert('Please fill out all four fields: Dish, Date, Time, and Mobile Number');
            return;
        }

        const selectedDish = menuItems.find(item => item.name === dish);
        const timestamp = new Date().toLocaleString();

        const bookingTime = new Date(`${date}T${time}`);

        if (bookingTime.getHours() >= 12 || bookingTime.getHours() < 4) {
            const confirmationMessage = `Booking done at ${timestamp} for ${dish} and ${dish1}\n Date Reserved is: ${date} and Time Reserved is ${time} \n Mobile Number:${mobile}`;
            alert(confirmationMessage);
        } else {
            alert('Please enter a valid time between 12 pm and 4 am.');
        }
    }

    const reservationButton = document.getElementById('reservation-button');
    reservationButton.addEventListener('click', makeReservation);
});








