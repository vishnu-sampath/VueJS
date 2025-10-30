var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Fries",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salad",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coke",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Water",
        "price": 1.49,
        "active": false,
        "quantity": 1
    }
];
 

// Object that will hold the logic of the application

const SelfServiceMachine = {
    
    // All the data in a VueJS app will be in the "data" property - a function
    data() {
        return {
            // creating a new data property
            products: window.products    // accessing the var products above
        }
    },

    // Methods property for writing manual functions
    methods: {
        total: function() {
            var total = 0;

            // 'this' to use the data property
            this.products.forEach(function(item) {
                if (item.active) {
                    total += item.price * item.quantity;
                }
            });

            return total.toFixed(2)
        }
    } 
};

// VueJS to mount the application
Vue.createApp(SelfServiceMachine).mount('#app');   // #app is the id of the parent HTML element that holds the application
