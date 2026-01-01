import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Coffee, Award, Leaf, Heart, Star, Clock, Users, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
    const features = [
        { icon: <Coffee size={32} />, title: 'Artisan Coffee', desc: 'Carefully sourced beans roasted to perfection' },
        { icon: <Leaf size={32} />, title: 'Fresh Ingredients', desc: 'Farm-to-table produce in every dish' },
        { icon: <Heart size={32} />, title: 'Made with Love', desc: 'Every item crafted with passion' },
        { icon: <Award size={32} />, title: 'Award Winning', desc: 'Recognized for excellence in taste' }
    ];

    const dishes = [
        { name: 'Signature Latte', price: '$5.00', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400', popular: true },
        { name: 'Avocado Toast', price: '$12.00', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400', popular: true },
        { name: 'Berry Pancakes', price: '$14.00', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400', popular: false },
        { name: 'Croissant', price: '$4.50', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', popular: true }
    ];

    const testimonials = [
        { name: 'Sarah Mitchell', text: 'The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
        { name: 'James Wilson', text: 'Amazing pastries and the perfect spot for remote work. Fast WiFi and great service!', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
        { name: 'Emily Chen', text: 'Their avocado toast is legendary! I come here every weekend with friends.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background"></div>
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="hero-badge">
                            <Coffee size={18} /> Est. 2020
                        </span>
                        <h1>Where Every Cup Tells a <span className="text-gradient">Story</span></h1>
                        <p>Experience the perfect blend of artisan coffee, delicious food, and warm hospitality in the heart of the city.</p>
                        <div className="hero-buttons">
                            <Link to="/menu" className="btn btn-primary btn-lg">
                                Explore Menu <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Reserve a Table
                            </Link>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <Star size={20} className="text-gold" />
                                <span><strong>4.9</strong> Rating</span>
                            </div>
                            <div className="hero-stat">
                                <Users size={20} />
                                <span><strong>10K+</strong> Happy Guests</span>
                            </div>
                            <div className="hero-stat">
                                <Clock size={20} />
                                <span><strong>5</strong> Years</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600" alt="Coffee and pastries" />
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section section">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-images"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500" alt="Cafe interior" className="about-img-main" />
                            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300" alt="Coffee" className="about-img-secondary" />
                        </motion.div>

                        <motion.div
                            className="about-content"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-badge">Our Story</span>
                            <h2>A Place for <span className="text-gradient">Coffee Lovers</span></h2>
                            <p>Founded in 2020, Brew & Bites started as a small corner cafe with big dreams. Today, we're a beloved community gathering spot, known for our exceptional coffee and homemade treats.</p>
                            <p>Every cup we serve is made with beans sourced from sustainable farms, roasted locally, and prepared by our skilled baristas with love and expertise.</p>
                            <Link to="/about" className="btn btn-primary">
                                Learn More <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section section" style={{ background: 'var(--bg-cream)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Why Choose Us</span>
                        <h2>The <span className="text-gradient">Brew & Bites</span> Experience</h2>
                        <p>Discover what makes us a beloved destination for coffee lovers</p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Dishes Section */}
            <section className="dishes-section section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Menu</span>
                        <h2>Signature <span className="text-gradient">Favorites</span></h2>
                        <p>A taste of our most loved coffee and food creations</p>
                    </div>

                    <div className="dishes-grid">
                        {dishes.map((dish, index) => (
                            <motion.div
                                key={index}
                                className="dish-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {dish.popular && <span className="popular-badge">Popular</span>}
                                <div className="dish-image">
                                    <img src={dish.image} alt={dish.name} />
                                </div>
                                <div className="dish-content">
                                    <h3>{dish.name}</h3>
                                    <span className="dish-price">{dish.price}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="dishes-cta">
                        <Link to="/menu" className="btn btn-primary btn-lg">
                            View Full Menu <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section section" style={{ background: 'var(--bg-cream)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Testimonials</span>
                        <h2>What Our <span className="text-gradient">Guests Say</span></h2>
                        <p>Real stories from our valued customers</p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="#D4A574" color="#D4A574" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <span>{testimonial.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to Experience <span className="text-gradient">Brew & Bites</span>?</h2>
                        <p>Join us for exceptional coffee, delicious food, and a warm atmosphere</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Book a Table <ArrowRight size={20} />
                            </Link>
                            <Link to="/menu" className="btn btn-outline-white btn-lg">
                                View Menu
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
