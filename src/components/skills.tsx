import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
    {
        name: "Frontend",
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI']
    },
    {
        name: "Backend",
        skills: ['Node.js', 'REST APIs', 'Spring Boot', 'Java']
    },
    {
        name: "Database",
        skills: ['MongoDB', 'PostgreSQL', 'MySql / MariaDB']
    },
    {
        name: "DevOps",
        skills: ['Docker', 'AWS', 'Git']
    },
    {
        name: "Languages",
        skills: ['Java', 'JavaScript', "TypeScript"]
    }
]

export function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
        >
            <div className="flex items-center justify-center bg-gradient-to-b from-background/80 to-background py-20">
                <section id="skills" className="w-full">
                    <div className="container mx-auto px-6 md:px-12 lg:px-24">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Skills & Expertise</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skillCategories.map((category, categoryIndex) => (
                                <motion.div
                                    key={category.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: categoryIndex * 0.2 }}
                                >
                                    <Card className="h-full">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {category.skills.map((skill) => (
                                                    <motion.div
                                                        key={skill}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Badge variant="secondary" className="text-sm py-1 px-2">
                                                            {skill}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

