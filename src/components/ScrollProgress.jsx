import { useEffect, useState } from 'preact/hooks'

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = (window.scrollY / scrollHeight) * 100
            setScrollProgress(scrolled)
        }

        // Use passive listener for better performance
        window.addEventListener('scroll', updateScrollProgress, { passive: true })
        updateScrollProgress()

        return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [])

    return (
        <div
            className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
            style={{
                background: 'linear-gradient(90deg, #B8860B, #D4AF37, #F4E4C1)',
                transform: `scaleX(${scrollProgress / 100})`,
                transition: 'transform 0.05s linear',
            }}
        />
    )
}

export default ScrollProgress
