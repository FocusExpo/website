import { motion } from 'motion/react';

export default function FadeInWhenVisible({ children, className = "" }) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            {children}
        </motion.div>
    );
}
