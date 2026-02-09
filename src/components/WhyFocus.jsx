import React from 'react';
import { motion } from 'framer-motion';

const WhyFocus = () => {
    const benefits = [
        'Expand Your Network',
        'Learn from Experts',
        'Showcase Your Ideas',
        'Get Funded',
        'Stay Ahead of Trends'
    ];

    return (
        <section className="section" style={{ background: 'var(--color-surface)' }}>
            <div className="container">
                <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Why FOCUS?</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {benefits.map((benefit, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                fontSize: '1.25rem',
                                margin: '1rem 0',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <span style={{ color: 'var(--color-secondary)', marginRight: '1rem' }}>✓</span>
                            {benefit}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default WhyFocus;
