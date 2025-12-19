import { motion } from 'framer-motion'

const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-1 w-full h-full min-h-screen" style={{ minHeight: '110vh' }}>
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/background.webp)',
                    filter: 'brightness(0.8) contrast(1.1)',
                    minHeight: '110vh',
                }}
            />

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/10 via-[#0F0F0F]/30 to-[#0F0F0F]/10" />

            {/* Animated Gradient Orbs for depth */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/30 to-transparent rounded-full blur-3xl"
                />

                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5
                    }}
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#B8860B]/30 to-transparent rounded-full blur-3xl"
                />
            </div>

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0F0F0F]/60" />
        </div>
    )
}

export default GlobalBackground
