import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <section className="section bg-slate-900 text-center container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl mb-6">What is FOCUS?</h2>
                <p className="max-w-3xl mx-auto text-lg text-slate-400">
                    FOCUS Expo is the premier gathering for innovators, creators, and visionaries.
                    Join us for an immersive experience designed to sharpen your perspective and
                    accelerate your journey.
                </p>
            </motion.div>
        </section>
    );
};

export default Intro;
