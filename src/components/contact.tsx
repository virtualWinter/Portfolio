import {motion} from 'framer-motion'
import {Mail, MessageSquare, Send} from 'lucide-react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"

export function Contact() {
    return (
        <div
            id="contact"
            className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-background/80 to-background">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.4, duration: 0.8}}
            >
                <section className="w-full">
                    <div className="container mx-auto px-6 md:px-12 lg:px-24">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-16 text-center">Contact
                            Me</h2>
                        <div className="grid grid-cols-1 gap-6 sm:gap-8">
                            <motion.div
                                initial={{scale: 0.8, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                transition={{delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100}}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Get in Touch</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 sm:p-6">
                                        <p className="text-muted-foreground mb-6">
                                            I&apos;m always open to new opportunities and collaborations. Feel free to
                                            reach out!
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <Mail className="text-primary"/>
                                                <a href="mailto:winter@arsn.cc"
                                                   className="hover:text-primary transition-colors">
                                                    winter@arsn.cc
                                                </a>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <MessageSquare className="text-primary"/>
                                                <span>Discord: @vwinter</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                            <motion.div
                                initial={{scale: 0.8, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                transition={{delay: 0.4, duration: 0.5, type: 'spring', stiffness: 100}}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Send a Message</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 sm:p-6">
                                        <form className="space-y-4">
                                            <div>
                                                <label htmlFor="name"
                                                       className="block text-sm font-medium text-muted-foreground mb-1">
                                                    Name
                                                </label>
                                                <Input id="name" name="name" required/>
                                            </div>
                                            <div>
                                                <label htmlFor="email"
                                                       className="block text-sm font-medium text-muted-foreground mb-1">
                                                    Email
                                                </label>
                                                <Input id="email" name="email" type="email" required/>
                                            </div>
                                            <div>
                                                <label htmlFor="message"
                                                       className="block text-sm font-medium text-muted-foreground mb-1">
                                                    Message
                                                </label>
                                                <Textarea id="message" name="message" rows={4} required/>
                                            </div>
                                            <Button type="submit" className="w-full">
                                                <Send className="mr-2 h-4 w-4"/>
                                                Send Message
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    )
}

