// Static site data - hardcoded, no API calls
export const siteData = {
    brand: {
        name: "Brew & Bean",
        tagline: "Where Every Sip Tells a Story",
        established: "2010"
    },

    contact: {
        address: "123 Coffee Lane, Downtown District",
        city: "Portland, OR 97201",
        phone: "(503) 555-BREW",
        email: "hello@brewandbean.com",
        hours: {
            weekdays: "7:00 AM - 8:00 PM",
            weekends: "8:00 AM - 9:00 PM"
        }
    },

    social: {
        instagram: "https://instagram.com/brewandbean",
        facebook: "https://facebook.com/brewandbean",
        twitter: "https://twitter.com/brewandbean"
    },

    about: {
        story: `Founded in 2010 by two passionate coffee lovers, Brew & Bean started as a small corner shop with a simple mission: serve the best cup of coffee in town.

What began as a humble dream has grown into a beloved community gathering place, where neighbors become friends over perfectly crafted espresso drinks and freshly baked pastries.

We source our beans directly from family farms in Ethiopia, Colombia, and Guatemala, building relationships that ensure fair compensation and sustainable farming practices.

Every cup we serve represents our commitment to quality, community, and the craft of coffee making. From the first sip to the last, we want you to taste the difference that passion makes.`,

        values: [
            {
                title: "Quality First",
                description: "We never compromise on the quality of our beans or ingredients",
                icon: "☕"
            },
            {
                title: "Community Focused",
                description: "Our cafe is more than coffee - it's a gathering place for neighbors",
                icon: "🤝"
            },
            {
                title: "Sustainably Sourced",
                description: "Direct trade relationships that support farmers and the environment",
                icon: "🌱"
            },
            {
                title: "Crafted with Care",
                description: "Every drink is made with attention to detail and love",
                icon: "❤️"
            }
        ],

        team: [
            {
                name: "Sarah Chen",
                role: "Founder & Head Roaster",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
                bio: "15 years of coffee expertise"
            },
            {
                name: "Marcus Williams",
                role: "Co-Founder & Operations",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
                bio: "The business behind the beans"
            },
            {
                name: "Emily Rodriguez",
                role: "Head Barista",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
                bio: "Latte art champion 2023"
            }
        ]
    },

    home: {
        hero: {
            headline: "Crafted Coffee,",
            subheadline: "Cherished Moments",
            description: "Experience the perfect blend of artisan coffee and warm hospitality at Portland's favorite neighborhood cafe.",
            image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80"
        },

        features: [
            {
                title: "Artisan Roasted",
                description: "Small batch roasting for peak freshness",
                icon: "🔥"
            },
            {
                title: "Farm Direct",
                description: "Ethically sourced from trusted farms",
                icon: "🌿"
            },
            {
                title: "Daily Fresh",
                description: "Pastries baked fresh every morning",
                icon: "🥐"
            }
        ],

        reviews: [
            {
                text: "The best coffee shop in Portland! The atmosphere is cozy and the lattes are perfection.",
                author: "Jennifer L.",
                rating: 5
            },
            {
                text: "I come here every morning. The staff remembers my order and always greets me with a smile.",
                author: "Michael T.",
                rating: 5
            },
            {
                text: "Their cold brew is unmatched. Smooth, rich, and never bitter. Highly recommend!",
                author: "Amanda K.",
                rating: 5
            }
        ]
    }
};
