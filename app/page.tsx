"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, CheckCircle, ArrowRight, Video, Instagram, Youtube } from "lucide-react";

/* --- Internal Components --- */

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="text-xl font-bold text-white tracking-tighter">AstraEdits</div>
      <div className="hidden md:flex items-center gap-8">
        <Link href="#work" className="text-sm text-gray-400 hover:text-white transition-colors">Work</Link>
        <Link href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link>
        <Link 
          href="https://calendly.com" 
          target="_blank"
          className="bg-white text-black px-4 py-2 text-sm font-semibold rounded-full hover:bg-gray-200 transition-all"
        >
          Book Strategy Call
        </Link>
      </div>
    </div>
  </nav>
);

/* --- Main Page --- */

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              We Turn Passive Viewers Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Loyal Communities.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Premium video editing for creators and brands who demand retention. 
              You film the vision; we engineer the attention.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link 
                href="https://calendly.com" 
                target="_blank"
                className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                Book Your Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#work"
                className="w-full md:w-auto px-8 py-4 bg-white/10 border border-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Is Your Content Getting the Reach It Deserves?</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Great content dies without great editing. In a world of 3-second attention spans, 
              your raw footage is just potential. <span className="text-white font-semibold">AstraEdits</span> unlocks that potential. 
              We don't just cut clips; we craft narratives that keep audiences watching till the very last second.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Short-Form Retention", desc: "Reels/Shorts/TikToks that hook instantly and retain users.", icon: <Video className="w-6 h-6 text-purple-400" /> },
              { title: "Long-Form Storytelling", desc: "YouTube videos that build authority and maximize watch time.", icon: <Youtube className="w-6 h-6 text-red-400" /> },
              { title: "Visual Identity", desc: "Thumbnails and motion graphics that define your brand.", icon: <CheckCircle className="w-6 h-6 text-blue-400" /> }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-purple-500/30 transition-colors h-full">
                  <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Astra Standard</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* VIDEO 1 PLACEHOLDER */}
            <FadeIn>
              <div className="aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/10 relative group">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder" 
                  title="Portfolio Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </FadeIn>
            {/* VIDEO 2 PLACEHOLDER */}
            <FadeIn delay={0.1}>
              <div className="aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/10 relative group">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder" 
                  title="Portfolio Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/10 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to scale your content?</h2>
        <Link 
          href="https://calendly.com" 
          target="_blank"
          className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all mb-8"
        >
          Start Your Project
        </Link>
        <p className="text-gray-500 text-sm">© 2025 AstraEdits. All rights reserved.</p>
      </footer>
    </main>
  );
}