import { useEffect, useState } from 'preact/hooks'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = (window.scrollY / scrollHeight) * 100
            setScrollProgress(scrolled)
        }

        window.addEventListener('scroll', updateScrollProgress)
        updateScrollProgress()

        return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
            style={{
                background: 'linear-gradient(90deg, #B8860B, #D4AF37, #F4E4C1)',
                scaleX: scrollProgress / 100,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress / 100 }}
            transition={{ duration: 0.1 }}
        />
    )
}

export default ScrollProgress
