'use client'

import {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Menu, X} from 'lucide-react'
import {Button} from "@/components/ui/button"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const menuItems = ['About', 'Skills', 'Projects', 'Contact']

    return (
        <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
            <motion.div
                initial={{y: -100}}
                animate={{y: 0}}
                transition={{type: 'spring', stiffness: 100}}
            >
                <header className="py-4">
                    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <motion.div
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            <h1 className="text-2xl font-bold">vWinter | Portfolio</h1>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <ul className="flex space-x-4">
                                {menuItems.map((item) => (
                                    <motion.li
                                        key={item}
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.9}}
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
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <Button variant="ghost" size="icon" onClick={toggleMenu}>
                                {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{opacity: 0, height: 0}}
                                animate={{opacity: 1, height: 'auto'}}
                                exit={{opacity: 0, height: 0}}
                                transition={{duration: 0.3}}
                            >
                                <div className="md:hidden bg-background">
                                    <ul className="flex flex-col items-center py-4 space-y-4">
                                        {menuItems.map((item) => (
                                            <motion.li
                                                key={item}
                                                whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}}
                                            >
                                                <a
                                                    href={`#${item.toLowerCase()}`}
                                                    className="hover:text-accent-foreground"
                                                    onClick={toggleMenu}
                                                >
                                                    {item}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </header>
            </motion.div>
        </div>
    )
}

