import {motion} from 'framer-motion'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

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
        <div
            id="projects"
            className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-background to-background/80">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.4, duration: 0.8}}
            >
                <section className="w-full py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Projects</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{scale: 0.9, opacity: 0}}
                                    animate={{scale: 1, opacity: 1}}
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
                                        <CardContent className="p-4 sm:p-6">
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
            </motion.div>
        </div>
    )
}

