'use client'

import {motion} from 'framer-motion'
import {TypeAnimation} from 'react-type-animation'
import React from "react";

export function Introduction() {
    return (
        <div
            id="about"
            className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-background to-background/80 py-16">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2, duration: 0.8}}
            >
                <section>
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <motion.h1
                                initial={{y: -50, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{type: 'spring', stiffness: 100}}
                            >
                                Welcome to My Portfolio
                            </motion.h1>
                        </div>
                        <motion.div
                            initial={{y: 50}}
                            animate={{y: 0}}
                            transition={{type: 'spring', stiffness: 100}}
                        >
                            <div className="text-lg sm:text-xl md:text-2xl mb-8">
                                <TypeAnimation
                                    sequence={[
                                        'Hello, I\'m vWinter',
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
                    </div>
                </section>
            </motion.div>
        </div>
    )
}

