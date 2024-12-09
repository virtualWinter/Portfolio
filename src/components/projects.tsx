import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
    {
        title: 'A Anime streaming platform',
        description: 'A full-stack anime streaming platform using Next.js, and Tailwind',
        tags: ['Next.js', 'Node.js', 'RestAPI']
    },
    {
        title: 'Library',
        description: 'A bukkit and bungeecord plugin library',
        tags: ['Java', 'Bukkit / Spigot', 'BungeeCord']
    },

]

export function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
        >
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80 py-12">
                <section id="projects">
                    <div className="container mx-auto px-6 md:px-12 lg:px-24">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                        type: 'spring',
                                        stiffness: 100
                                    }}
                                >
                                    <Card className="h-full">
                                        <CardHeader>
                                            <CardTitle>{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary">
                                                        {tag}
                                                    </Badge>
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
