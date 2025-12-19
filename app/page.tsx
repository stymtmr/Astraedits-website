'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Menu, X, Video, Film, Clapperboard, Youtube } from 'lucide-react'

// Main Page Component
export default function HomePage() {
  return (
    <div className="bg-zinc-950 text-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

// Navigation Header
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#portfolio', label: 'Work' },
    { href: '#services', label: 'Services' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-zinc-950 bg-opacity-80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              AstraEdits
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://calendly.com/satytmr008/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200"
              >
                Book Strategy Call
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/satytmr008/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block rounded-md bg-white px-3 py-2 text-base font-medium text-black hover:bg-gray-200"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

// Section wrapper for animations
const AnimatedSection = ({ children, className }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// Hero Section
const HeroSection = () => (
  <AnimatedSection className="py-24 sm:py-32 text-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
        We Turn Passive Viewers Into
        <br />
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Loyal Communities.
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
        Premium video editing for creators and brands who demand retention. You film the vision; we engineer the attention.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://calendly.com/satytmr008/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto rounded-md bg-white px-8 py-3 text-base font-medium text-black hover:bg-gray-200"
        >
          Book Your Free Strategy Call
        </a>
        <a
          href="#portfolio"
          className="w-full sm:w-auto rounded-md border border-white px-8 py-3 text-base font-medium text-white hover:bg-zinc-800"
        >
          View Our Work
        </a>
      </div>
    </div>
  </AnimatedSection>
)

// Problem/Solution Section
const ProblemSolutionSection = () => (
  <AnimatedSection className="py-16 sm:py-24 bg-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Is Your Content Getting the Reach It Deserves?
      </h2>
      <p className="mt-4 text-gray-300 text-lg">
        Great content dies without great editing. In a world of 3-second attention spans, your raw footage is just potential. AstraEdits unlocks that potential. We don't just cut clips; we craft narratives that keep audiences watching till the very last second.
      </p>
    </div>
  </AnimatedSection>
)

// Services Section
const services = [
  {
    icon: <Video size={32} className="text-purple-400" />,
    title: 'Short-Form Retention',
    description: 'Reels, Shorts, and TikToks engineered to hook viewers instantly and maximize watch time.',
  },
  {
    icon: <Film size={32} className="text-blue-400" />,
    title: 'Long-Form Storytelling',
    description: 'YouTube videos that build authority and connection through masterful narrative crafting.',
  },
  {
    icon: <Clapperboard size={32} className="text-white" />,
    title: 'Visual Identity',
    description: 'High-impact thumbnails, motion graphics, and branding that make your content unmistakable.',
  },
]

const ServicesSection = () => (
  <AnimatedSection id="services" className="py-16 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-2 text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

// Portfolio Section
const VideoCard = ({ youtubeUrl }) => {
  let videoId = '';
  if (youtubeUrl.includes('youtu.be/')) {
    videoId = youtubeUrl.split('/').pop()?.split('?')[0];
  } else if (youtubeUrl.includes('watch?v=')) {
    videoId = new URL(youtubeUrl).searchParams.get('v');
  }

  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  if (!embedUrl) {
    return (
      <div className="aspect-[6.83/1] flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
        <p className="text-sm text-zinc-500">Invalid YouTube URL</p>
      </div>
    );
  }
  
  return (
    <div className="aspect-[6.83/1] overflow-hidden rounded-lg border border-zinc-800">
      <iframe
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      ></iframe>
    </div>
  )
}

const portfolioItems = [
  { url: 'https://youtu.be/ppRDwgoZkUo' }, // User's video
]

const PortfolioSection = () => (
  <AnimatedSection id="portfolio" className="py-16 sm:py-24 bg-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        The Astra Standard
      </h2>
      <div className="mt-12 max-w-4xl mx-auto"> {/* Centered and wider */}
        {portfolioItems.map((item, index) => (
          <VideoCard key={index} youtubeUrl={item.url} />
        ))}
      </div>
    </div>
  </AnimatedSection>
)


// Final Call-to-Action
const CTASection = () => (
    <AnimatedSection id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Ready to scale your content?</h2>
        <div className="mt-8">
          <a
            href="https://calendly.com/satytmr008/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white px-8 py-3 text-base font-medium text-black hover:bg-gray-200"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </AnimatedSection>
  )

// Footer
const Footer = () => (
  <footer className="bg-black py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
      <p>&copy; 2025 AstraEdits</p>
    </div>
  </footer>
)
