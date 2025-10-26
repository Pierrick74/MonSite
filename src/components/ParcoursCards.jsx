import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2
        }
    }
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 }
    }
};

export function ParcoursCard({ parcours }) {
    return (
        <motion.div
            className="timeline-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.p
                className="timeline-date"
                variants={itemVariants}
            >
                {parcours.date}
            </motion.p>

            <motion.h3
                className="timeline-title"
                variants={itemVariants}
            >
                {parcours.metier}
            </motion.h3>

            <motion.p
                className="timeline-subtitle"
                variants={itemVariants}
            >
                {parcours.entreprise}
            </motion.p>

            <motion.p
                className="timeline-description"
                variants={itemVariants}
            >
                {parcours.description}
            </motion.p>

            <motion.div
                className="mt-2 flex flex-wrap gap-2"
                variants={badgeContainerVariants}
            >
                {parcours.skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        className="parcours-badge"
                        variants={badgeVariants}
                        whileHover={{ scale: 1.1 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
}