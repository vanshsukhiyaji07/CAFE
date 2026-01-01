import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, Check, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [reservationData, setReservationData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
        notes: ''
    });
    const [activeTab, setActiveTab] = useState('contact');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleReservationSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setReservationData({ name: '', phone: '', email: '', date: '', time: '', guests: '2', notes: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="contact-page">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Contact <span className="text-gradient">Us</span></h1>
                        <p>We'd love to hear from you. Reach out or make a reservation</p>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <span>Contact</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Get in <span className="text-gradient">Touch</span></h2>
                            <p>Have questions or want to reserve a table? We're here to help!</p>

                            <div className="info-cards">
                                <div className="info-card">
                                    <div className="info-icon"><Phone size={24} /></div>
                                    <div className="info-content">
                                        <h4>Call Us</h4>
                                        <p>+1 (234) 567-8900</p>
                                        <span>Available 7AM - 9PM</span>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon"><Mail size={24} /></div>
                                    <div className="info-content">
                                        <h4>Email Us</h4>
                                        <p>hello@brewandbites.com</p>
                                        <span>We reply within 24 hours</span>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon"><MapPin size={24} /></div>
                                    <div className="info-content">
                                        <h4>Visit Us</h4>
                                        <p>123 Coffee Street</p>
                                        <span>Brew City, BC 12345</span>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon"><Clock size={24} /></div>
                                    <div className="info-content">
                                        <h4>Opening Hours</h4>
                                        <p>Mon - Fri: 7AM - 9PM</p>
                                        <span>Sat - Sun: 8AM - 10PM</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Forms */}
                        <motion.div
                            className="contact-forms"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Tabs */}
                            <div className="form-tabs">
                                <button
                                    className={`form-tab ${activeTab === 'contact' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('contact')}
                                >
                                    <MessageCircle size={18} />
                                    Send Message
                                </button>
                                <button
                                    className={`form-tab ${activeTab === 'reservation' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('reservation')}
                                >
                                    <Clock size={18} />
                                    Book a Table
                                </button>
                            </div>

                            {submitted ? (
                                <div className="form-success">
                                    <div className="success-icon"><Check size={40} /></div>
                                    <h3>{activeTab === 'contact' ? 'Message Sent!' : 'Reservation Submitted!'}</h3>
                                    <p>{activeTab === 'contact' ? "We'll get back to you soon." : "We'll confirm your booking shortly."}</p>
                                </div>
                            ) : (
                                <>
                                    {/* Contact Form */}
                                    {activeTab === 'contact' && (
                                        <form onSubmit={handleContactSubmit} className="contact-form">
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Full Name *</label>
                                                    <input
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        placeholder="John Doe"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email *</label>
                                                    <input
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        placeholder="john@example.com"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        placeholder="+1 234 567 890"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Subject *</label>
                                                    <input
                                                        type="text"
                                                        value={formData.subject}
                                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                        placeholder="How can we help?"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Message *</label>
                                                <textarea
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    placeholder="Your message..."
                                                    rows="5"
                                                    required
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
                                                {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
                                            </button>
                                        </form>
                                    )}

                                    {/* Reservation Form */}
                                    {activeTab === 'reservation' && (
                                        <form onSubmit={handleReservationSubmit} className="reservation-form">
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Full Name *</label>
                                                    <input
                                                        type="text"
                                                        value={reservationData.name}
                                                        onChange={(e) => setReservationData({ ...reservationData, name: e.target.value })}
                                                        placeholder="John Doe"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone *</label>
                                                    <input
                                                        type="tel"
                                                        value={reservationData.phone}
                                                        onChange={(e) => setReservationData({ ...reservationData, phone: e.target.value })}
                                                        placeholder="+1 234 567 890"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    value={reservationData.email}
                                                    onChange={(e) => setReservationData({ ...reservationData, email: e.target.value })}
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Date *</label>
                                                    <input
                                                        type="date"
                                                        value={reservationData.date}
                                                        onChange={(e) => setReservationData({ ...reservationData, date: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Time *</label>
                                                    <input
                                                        type="time"
                                                        value={reservationData.time}
                                                        onChange={(e) => setReservationData({ ...reservationData, time: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Number of Guests *</label>
                                                <select
                                                    value={reservationData.guests}
                                                    onChange={(e) => setReservationData({ ...reservationData, guests: e.target.value })}
                                                    required
                                                >
                                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Special Requests</label>
                                                <textarea
                                                    value={reservationData.notes}
                                                    onChange={(e) => setReservationData({ ...reservationData, notes: e.target.value })}
                                                    placeholder="Any dietary requirements or special requests..."
                                                    rows="3"
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
                                                {isSubmitting ? 'Submitting...' : <><Clock size={18} /> Reserve Table</>}
                                            </button>
                                        </form>
                                    )}
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-container">
                    <iframe
                        title="Cafe Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
