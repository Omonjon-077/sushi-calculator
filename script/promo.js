const promos = {
    first: { name: "GetFree20", price: 20000 },
    second: { name: "GetFree25", price: 25000 },
    third: { name: "GetFree30", price: 30000 },
    fourth: { name: "GetFree35", price: 35000 },
    fifth: { name: "GetFree40", price: 40000 }
};

// Obyekt kalitlarini olish
const keys = Object.keys(promos);

// Tasodifiy kalit tanlash
const randomKey = keys[Math.floor(Math.random() * keys.length)];

// Tanlangan elementni olish
const randomElement = promos[randomKey];
