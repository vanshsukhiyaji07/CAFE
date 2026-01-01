// Static Menu Data - No API calls, all hardcoded
export const staticMenu = [
    // Hot Coffee
    {
        id: 1,
        name: "Classic Espresso",
        category: "Hot Coffee",
        price: 3.50,
        description: "Rich, bold espresso shot with a perfect crema",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80",
        popular: true,
        tags: ["Classic", "Strong"]
    },
    {
        id: 2,
        name: "Caramel Macchiato",
        category: "Hot Coffee",
        price: 5.50,
        description: "Espresso with vanilla, steamed milk, and caramel drizzle",
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&q=80",
        popular: true,
        tags: ["Sweet", "Bestseller"]
    },
    {
        id: 3,
        name: "Cappuccino",
        category: "Hot Coffee",
        price: 4.50,
        description: "Equal parts espresso, steamed milk, and velvety foam",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80",
        popular: false,
        tags: ["Classic", "Creamy"]
    },
    {
        id: 4,
        name: "Flat White",
        category: "Hot Coffee",
        price: 4.75,
        description: "Double ristretto with silky microfoam milk",
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&q=80",
        popular: false,
        tags: ["Smooth", "Australian Style"]
    },

    // Cold Coffee
    {
        id: 5,
        name: "Iced Americano",
        category: "Cold Coffee",
        price: 4.00,
        description: "Chilled espresso with cold water over ice",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80",
        popular: true,
        tags: ["Refreshing", "Bold"]
    },
    {
        id: 6,
        name: "Cold Brew",
        category: "Cold Coffee",
        price: 5.00,
        description: "20-hour steeped coffee, smooth and naturally sweet",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
        popular: true,
        tags: ["Smooth", "Strong"]
    },
    {
        id: 7,
        name: "Iced Mocha",
        category: "Cold Coffee",
        price: 5.75,
        description: "Espresso, chocolate sauce, milk, and whipped cream over ice",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80",
        popular: false,
        tags: ["Chocolatey", "Indulgent"]
    },

    // Specialty Drinks
    {
        id: 8,
        name: "Honey Lavender Latte",
        category: "Specialty",
        price: 6.50,
        description: "House-made lavender syrup, local honey, and oat milk",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80",
        popular: true,
        tags: ["Floral", "Unique"]
    },
    {
        id: 9,
        name: "Matcha Oat Latte",
        category: "Specialty",
        price: 6.00,
        description: "Ceremonial grade matcha with creamy oat milk",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80",
        popular: false,
        tags: ["Healthy", "Earthy"]
    },
    {
        id: 10,
        name: "Rose Cardamom Latte",
        category: "Specialty",
        price: 6.75,
        description: "Exotic blend of rose water, cardamom, and espresso",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
        popular: false,
        tags: ["Exotic", "Aromatic"]
    },

    // Pastries
    {
        id: 11,
        name: "Almond Croissant",
        category: "Pastries",
        price: 4.50,
        description: "Buttery croissant filled with almond cream and topped with sliced almonds",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
        popular: true,
        tags: ["Fresh Baked", "Sweet"]
    },
    {
        id: 12,
        name: "Blueberry Muffin",
        category: "Pastries",
        price: 3.75,
        description: "Moist muffin loaded with fresh blueberries and streusel topping",
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80",
        popular: false,
        tags: ["Fresh Baked", "Fruity"]
    },
    {
        id: 13,
        name: "Chocolate Brownie",
        category: "Pastries",
        price: 4.00,
        description: "Dense, fudgy brownie with chunks of dark chocolate",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
        popular: true,
        tags: ["Decadent", "Chocolate"]
    },
    {
        id: 14,
        name: "Avocado Toast",
        category: "Food",
        price: 8.50,
        description: "Smashed avocado on sourdough with cherry tomatoes, feta, and microgreens",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&q=80",
        popular: true,
        tags: ["Healthy", "Savory"]
    },
    {
        id: 15,
        name: "Breakfast Burrito",
        category: "Food",
        price: 9.50,
        description: "Scrambled eggs, black beans, cheese, and salsa in a warm tortilla",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
        popular: false,
        tags: ["Filling", "Savory"]
    }
];

// Categories for filtering
export const menuCategories = [
    "All",
    "Hot Coffee",
    "Cold Coffee",
    "Specialty",
    "Pastries",
    "Food"
];
