'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Button } from "@/components/ui/button"
import React from "react";

export function Introduction() {
    const scrollToSkills = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const skillsSection = document.getElementById('skills')
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
        >
            <div className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80">
                <section id="about">
                    <div className="text-center">
                        <div className="text-4xl md:text-6xl font-bold mb-4">
                            <motion.h1
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 100 }}
                            >
                                Welcome to My Portfolio
                            </motion.h1>
                        </div>
                        <motion.div
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            transition={{ type: 'spring', stiffness: 100 }}
                        >
                            <div className="text-xl md:text-2xl mb-8">
                                <TypeAnimation
                                    sequence={[
                                        'Hi, I\'m vWinter',
                                        3000,
                                        'I\'m a passionate developer',
                                        3000,
                                        'I create amazing web experiences',
                                        3000,
                                        'I love solving complex problems',
                                        3000,
                                        'I bring ideas to life',
                                        3000,
                                    ]}
                                    wrapper="span"
                                    speed={30}
                                    repeat={Infinity}
                                    className="text-primary"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <div>
                                <Button
                                    onClick={scrollToSkills}
                                    size="lg"
                                    className="rounded-full"
                                >
                                    Explore My Skills
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

