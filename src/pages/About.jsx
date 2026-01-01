import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Coffee, Award, Heart, Clock, Users, Target, ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
    const team = [
        { name: 'Maria Santos', role: 'Head Barista', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400', desc: 'Master of latte art' },
        { name: 'David Kim', role: 'Pastry Chef', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', desc: 'Creator of sweet perfection' },
        { name: 'Sophie Laurent', role: 'Coffee Roaster', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', desc: 'Bean selection expert' },
        { name: 'James Chen', role: 'Cafe Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', desc: 'Ensuring perfect experiences' }
    ];

    const values = [
        { icon: <Heart size={28} />, title: 'Passion', desc: 'Every cup is crafted with love and dedication' },
        { icon: <Award size={28} />, title: 'Quality', desc: 'We source only the finest beans and ingredients' },
        { icon: <Target size={28} />, title: 'Sustainability', desc: 'Committed to eco-friendly practices' },
        { icon: <Users size={28} />, title: 'Community', desc: 'Building connections one cup at a time' }
    ];

    return (
        <div className="about-page">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>About <span className="text-gradient">Us</span></h1>
                        <p>Discover our story, our passion, and the people behind your favorite coffee</p>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <span>About Us</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section section">
                <div className="container">
                    <div className="story-grid">
                        <motion.div
                            className="story-images"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600" alt="Cafe" className="story-img-main" />
                            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" alt="Coffee" className="story-img-secondary" />
                        </motion.div>

                        <motion.div
                            className="story-content"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-badge">Our Story</span>
                            <h2>A Journey of <span className="text-gradient">Coffee & Community</span></h2>
                            <p>Founded in 2020, Brew & Bites began as a small corner cafe with a big dream: to create a space where exceptional coffee meets genuine hospitality.</p>
                            <p>What started as a passion project has grown into a beloved community gathering spot, known for our artisan coffee, homemade pastries, and warm atmosphere that feels like home.</p>
                            <p>Today, we continue to honor our founding principles: sourcing sustainable beans, supporting local suppliers, and treating every guest like family.</p>

                            <div className="story-features">
                                <div className="story-feature">
                                    <Coffee size={24} />
                                    <span>Specialty Coffee</span>
                                </div>
                                <div className="story-feature">
                                    <Clock size={24} />
                                    <span>5+ Years of Excellence</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section section" style={{ background: 'var(--bg-cream)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Values</span>
                        <h2>What <span className="text-gradient">Drives Us</span></h2>
                        <p>The principles that guide everything we do at Brew & Bites</p>
                    </div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Team</span>
                        <h2>Meet the <span className="text-gradient">Coffee Artists</span></h2>
                        <p>The talented individuals who bring Brew & Bites to life</p>
                    </div>

                    <div className="team-grid">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                className="team-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <p>{member.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta section" style={{ background: 'var(--bg-dark)' }}>
                <div className="container">
                    <motion.div
                        className="cta-inner"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Experience the Brew & Bites <span className="text-gradient">Difference</span></h2>
                        <p>Join us for an unforgettable coffee experience</p>
                        <div className="cta-buttons">
                            <Link to="/menu" className="btn btn-primary btn-lg">
                                Explore Our Menu <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline-white btn-lg">
                                Visit Us Today
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
