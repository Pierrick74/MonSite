import { motion } from 'framer-motion';

export function ParcoursCard({ parcours }) {
    return (
        <div className="timeline-content">
            <motion.p
                className="timeline-date"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {parcours.date}
            </motion.p>

            <motion.h3
                className="timeline-title"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
            >
                {parcours.metier}
            </motion.h3>

            <motion.p
                className="timeline-subtitle"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
            >
                {parcours.entreprise}
            </motion.p>

            <motion.p
                className="timeline-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
            >
                {parcours.description}
            </motion.p>

            <motion.div
                className="mt-2 flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
            >
                {parcours.skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        className="parcours-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}