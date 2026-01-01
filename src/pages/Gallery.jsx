import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');

    const images = [
        { id: 1, src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800', category: 'interior', title: 'Cozy Corner' },
        { id: 2, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800', category: 'food', title: 'Morning Coffee' },
        { id: 3, src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800', category: 'interior', title: 'Main Area' },
        { id: 4, src: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800', category: 'food', title: 'Avocado Toast' },
        { id: 5, src: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800', category: 'barista', title: 'Crafting Coffee' },
        { id: 6, src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800', category: 'food', title: 'Cappuccino Art' },
        { id: 7, src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800', category: 'interior', title: 'Window Seats' },
        { id: 8, src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800', category: 'food', title: 'Fresh Croissants' },
        { id: 9, src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800', category: 'barista', title: 'Espresso Shot' },
        { id: 10, src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800', category: 'food', title: 'Pancake Stack' },
        { id: 11, src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800', category: 'interior', title: 'Outdoor Seating' },
        { id: 12, src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800', category: 'food', title: 'Latte Love' }
    ];

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'interior', name: 'Interior' },
        { id: 'food', name: 'Food & Drinks' },
        { id: 'barista', name: 'Barista' }
    ];

    const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

    const navigateImage = (direction) => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        let newIndex;
        if (direction === 'next') {
            newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
        } else {
            newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
        }
        setSelectedImage(filteredImages[newIndex]);
    };

    return (
        <div className="gallery-page">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Our <span className="text-gradient">Gallery</span></h1>
                        <p>A visual journey through the Brew & Bites experience</p>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <span>Gallery</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section section">
                <div className="container">
                    {/* Filter Tabs */}
                    <div className="gallery-filters">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`filter-tab ${filter === cat.id ? 'active' : ''}`}
                                onClick={() => setFilter(cat.id)}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <motion.div className="gallery-grid" layout>
                        <AnimatePresence>
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    className="gallery-item"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.05 }}
                                    layout
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img src={image.src} alt={image.title} />
                                    <div className="gallery-overlay">
                                        <span>{image.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                            <X size={24} />
                        </button>
                        <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}>
                            <ChevronLeft size={32} />
                        </button>
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage.src} alt={selectedImage.title} />
                            <p>{selectedImage.title}</p>
                        </motion.div>
                        <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}>
                            <ChevronRight size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
