import { useEffect, useRef } from 'preact/hooks'

const ParticleBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2 + 0.5
                this.speedX = Math.random() * 0.3 - 0.15
                this.speedY = Math.random() * 0.3 - 0.15
                this.opacity = Math.random() * 0.3 + 0.2
                // Gold colors
                const colors = [
                    'rgba(212, 175, 55,', // Gold
                    'rgba(230, 199, 163,', // Rose gold
                    'rgba(247, 231, 206,', // Champagne
                ]
                this.color = colors[Math.floor(Math.random() * colors.length)]
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                // Wrap around screen
                if (this.x > canvas.width) this.x = 0
                if (this.x < 0) this.x = canvas.width
                if (this.y > canvas.height) this.y = 0
                if (this.y < 0) this.y = canvas.height
            }

            draw() {
                ctx.fillStyle = `${this.color} ${this.opacity})`
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        // Create particles
        const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000))
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle) => {
                particle.update()
                particle.draw()
            })

            // Draw subtle connections
            particles.forEach((particleA, indexA) => {
                particles.slice(indexA + 1).forEach((particleB) => {
                    const dx = particleA.x - particleB.x
                    const dy = particleA.y - particleB.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(212, 175, 55, ${0.08 * (1 - distance / 100)})`
                        ctx.lineWidth = 0.5
                        ctx.beginPath()
                        ctx.moveTo(particleA.x, particleA.y)
                        ctx.lineTo(particleB.x, particleB.y)
                        ctx.stroke()
                    }
                })
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.3 }}
        />
    )
}

export default ParticleBackground
