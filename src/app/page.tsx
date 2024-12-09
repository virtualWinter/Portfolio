'use client'

import {motion} from 'framer-motion'
import {Header} from '@/components/header'
import {Introduction} from '@/components/introduction'
import {Skills} from '@/components/skills'
import {Projects} from '@/components/projects'
import {Contact} from '@/components/contact'
import {useEffect} from 'react'

export default function Portfolio() {
    useEffect(() => {
        const smoothScroll = (e: Event) => {
            e.preventDefault();
            const targetId = (e.target as HTMLAnchorElement).getAttribute('href')?.substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({behavior: 'smooth'});
                }
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', smoothScroll);
            });
        };
    }, []);

    return (
        <div className="bg-background text-foreground">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
            >
                <Header/>
                <Introduction/>
                <Skills/>
                <Projects/>
                <Contact/>
            </motion.div>
        </div>
    )
}

