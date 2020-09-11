let items = [
    {
        "title": "Hammer",
        "quantity": 25,
        "categories": [
            "tool"
        ],
        "price": 20
    }, {
    "title": "Drill",
    "quantity": 5,
    "categories": [
        "tool",
        "powered"
    ],
    "price": 100
}, {
    "title": "Mower",
    "quantity": 5,
    "categories": [
        "tool",
        "gas",
        "outdoor"
    ],
    "price": 200
}, {
    "title": "Screwdriver",
    "quantity": 25,
    "categories": [
        "tool"
    ],
    "price": 10
},    {
    "title": "Computer",
    "quantity": 2,
    "categories": [
        "tool"
    ],
    "price": 699
}, {
    "title": "Pencil",
    "quantity": 500,
    "categories": [
        "tool"
    ],
    "price": 1
}, {
    "title": "Tesla",
    "quantity": 5,
    "categories": [
        "electric",
        "car",
        "outdoor"
    ],
    "price": 50000
}, {
    "title": "Blue Jeans",
    "quantity": 27,
    "categories": [
        "clothing"
    ],
    "price": 27
}
]
let findtheGreatestPrice = function(items) {
    let greatest = {price: 0};
    for (let i = 0; i < items.length; i++) {
        if (items[i].price > greatest.price) {
            greatest = items[i];
        }
    }
    return greatest;
}
console.log (findtheGreatestPrice(items));

let findtheLowestPrice = function(items){
    let least = {price: Infinity};
    for (let i = 0; i < items.length; i++) {
        if (items[i].price < least.price) {
            least = items[i];
        }
    }
    return least;
}

console.log (findtheLowestPrice(items));

function findtheGreatestAndLeast(items) {
    return {greatest:findtheGreatestPrice(items), least:findtheLowestPrice(items)};
}

findtheGreatestAndLeast(items);