import { motion } from 'framer-motion'

export function Header() {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm py-4">
                <nav className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <h1 className="text-2xl font-bold">vWinter | Portfolio</h1>
                    </motion.div>
                    <ul className="flex space-x-4">
                        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <motion.li
                                key={item}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-accent-foreground"
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </header>
        </motion.div>
    )
}

