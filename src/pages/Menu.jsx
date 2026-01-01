import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Coffee, ArrowRight } from 'lucide-react';
import './Menu.css';

const Menu = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Items' },
        { id: 'coffee', name: 'Coffee' },
        { id: 'tea', name: 'Tea' },
        { id: 'breakfast', name: 'Breakfast' },
        { id: 'pastries', name: 'Pastries' },
        { id: 'smoothies', name: 'Smoothies' }
    ];

    const menuItems = [
        // Coffee
        { id: 1, name: 'Espresso', price: 3.50, category: 'coffee', description: 'Rich and bold single shot', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400', popular: false },
        { id: 2, name: 'Cappuccino', price: 4.50, category: 'coffee', description: 'Espresso with steamed milk foam', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400', popular: true },
        { id: 3, name: 'Latte', price: 5.00, category: 'coffee', description: 'Smooth espresso with silky milk', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400', popular: true },
        { id: 4, name: 'Mocha', price: 5.50, category: 'coffee', description: 'Espresso with chocolate and milk', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400', popular: false },
        { id: 5, name: 'Cold Brew', price: 4.50, category: 'coffee', description: 'Smooth cold-steeped coffee', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400', popular: true },

        // Tea
        { id: 6, name: 'Matcha Latte', price: 5.50, category: 'tea', description: 'Premium matcha with oat milk', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400', popular: true },
        { id: 7, name: 'Chai Latte', price: 4.50, category: 'tea', description: 'Spiced chai with steamed milk', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400', popular: false },
        { id: 8, name: 'Earl Grey', price: 3.50, category: 'tea', description: 'Classic bergamot-infused tea', image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400', popular: false },

        // Breakfast
        { id: 9, name: 'Avocado Toast', price: 12.00, category: 'breakfast', description: 'Sourdough with avocado & eggs', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400', popular: true },
        { id: 10, name: 'Eggs Benedict', price: 14.00, category: 'breakfast', description: 'Poached eggs with hollandaise', image: 'https://images.unsplash.com/photo-1608039829572-9b5e42a87da6?w=400', popular: true },
        { id: 11, name: 'Pancake Stack', price: 11.00, category: 'breakfast', description: 'Fluffy pancakes with maple syrup', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400', popular: false },
        { id: 12, name: 'Breakfast Burrito', price: 13.00, category: 'breakfast', description: 'Eggs, cheese, beans & salsa', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400', popular: false },

        // Pastries
        { id: 13, name: 'Croissant', price: 4.00, category: 'pastries', description: 'Buttery, flaky French pastry', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', popular: true },
        { id: 14, name: 'Blueberry Muffin', price: 4.00, category: 'pastries', description: 'Fresh-baked with wild berries', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400', popular: false },
        { id: 15, name: 'Cinnamon Roll', price: 5.00, category: 'pastries', description: 'Warm with cream cheese icing', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400', popular: true },
        { id: 16, name: 'Chocolate Cake', price: 6.00, category: 'pastries', description: 'Rich, decadent chocolate layers', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400', popular: false },

        // Smoothies
        { id: 17, name: 'Berry Blast', price: 7.00, category: 'smoothies', description: 'Mixed berries with yogurt', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400', popular: true },
        { id: 18, name: 'Green Machine', price: 7.50, category: 'smoothies', description: 'Spinach, banana & almond milk', image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400', popular: false },
        { id: 19, name: 'Tropical Mango', price: 7.00, category: 'smoothies', description: 'Mango, pineapple & coconut', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400', popular: false }
    ];

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="menu-page">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Our <span className="text-gradient">Menu</span></h1>
                        <p>Discover our selection of artisan coffee, fresh food, and delicious treats</p>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <span>Menu</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="menu-section section">
                <div className="container">
                    {/* Search & Filter */}
                    <div className="menu-controls">
                        <div className="search-box">
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search menu..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="category-tabs">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Menu Grid */}
                    <div className="menu-grid">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="menu-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {item.popular && <span className="popular-badge">Popular</span>}
                                <div className="menu-card-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="menu-card-content">
                                    <div className="menu-card-header">
                                        <h3>{item.name}</h3>
                                        <span className="menu-price">${item.price.toFixed(2)}</span>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="no-results">
                            <Coffee size={48} />
                            <h3>No items found</h3>
                            <p>Try adjusting your search or filter</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Special Offer */}
            <section className="special-offer section" style={{ background: 'var(--bg-cream)' }}>
                <div className="container">
                    <div className="offer-content">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-badge">Special Offer</span>
                            <h2>Happy Hour: <span className="text-gradient">20% Off</span></h2>
                            <p>Enjoy 20% off all drinks every weekday from 3PM - 5PM. Perfect for your afternoon pick-me-up!</p>
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Visit Us <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                        <motion.div
                            className="offer-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500" alt="Coffee" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Menu;
