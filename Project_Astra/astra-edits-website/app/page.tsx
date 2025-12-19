import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 relative overflow-hidden">

      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-left z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900/70 z-10"></div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-1">
              <div className="inline-block mb-4 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-amber-100 border border-amber-400/30">
                Professional Video Editing Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
                <span className="block">Creative Video</span>
                <span className="block">Editing That</span>
                <span className="block">Scales With You</span>
          </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
            We handle the editing so you can focus on creating. Unlimited requests, one flat monthly fee.
                <span className="block mt-2 text-amber-100 font-medium">Transform your content into cinematic masterpieces.</span>
              </p>
            </div>
            <div className="hidden md:block w-full md:w-80 lg:w-96 flex-shrink-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 border border-amber-500/20 min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
                <div className="relative text-white text-center p-8 z-10">
                  <svg className="w-24 h-24 mx-auto mb-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg font-semibold text-slate-200">Video Editing</p>
                  <p className="text-sm text-slate-400 mt-2">Showcase</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
              className="px-10 py-4 bg-amber-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-amber-600 shadow-lg hover:shadow-xl hover:shadow-amber-500/30"
          >
            Get Started Today
          </a>
            <a
              href="#projects"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400/50"
            >
              View Our Work
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">500+</div>
              <div className="text-sm md:text-base text-slate-300 mt-2">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">24/7</div>
              <div className="text-sm md:text-base text-slate-300 mt-2">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">100%</div>
              <div className="text-sm md:text-base text-slate-300 mt-2">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-amber-400/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <AnimatedSection id="how-it-works" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-full text-sm font-medium text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            A simple, streamlined process designed to get your content edited fast and delivered beautifully.
          </p>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 text-left">
            <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-lg hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-700">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                1
              </div>
              <div className="mt-8 mb-6 relative">
                <div className="w-full h-32 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)', backgroundSize: '30px 30px'}}></div>
                  <svg className="w-16 h-16 text-amber-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Subscribe</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Choose a plan that fits your needs and get instant access to your personal editing team. 
                No contracts, cancel anytime.
              </p>
            </div>
            <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-lg hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-700">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                2
              </div>
              <div className="mt-8 mb-6 relative">
                <div className="w-full h-32 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)', backgroundSize: '30px 30px'}}></div>
                  <svg className="w-16 h-16 text-amber-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Request</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Submit unlimited video editing requests through our simple platform. 
                Upload your footage, share your vision, and we'll bring it to life.
              </p>
            </div>
            <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-lg hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-700">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                3
              </div>
              <div className="mt-8 mb-6 relative">
                <div className="w-full h-32 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)', backgroundSize: '30px 30px'}}></div>
                  <svg className="w-16 h-16 text-amber-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Receive</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Get your professionally edited videos back in 1-2 business days. 
                Revisions are unlimited until you're 100% satisfied.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-full text-sm font-medium text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Our Recent Work
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Showcasing the creative excellence we bring to every project
          </p>
          
          {/* Featured Video */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="relative group rounded-lg overflow-hidden shadow-xl border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 min-h-[400px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              {/* Fallback background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)', backgroundSize: '50px 50px'}}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-32 h-32 mx-auto mb-4 text-amber-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="text-amber-300/80 text-xl font-semibold">Featured Project</p>
                    <p className="text-amber-200/60 text-sm mt-2">Cinematic Video Production</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <div className="text-white text-center">
                  <p className="text-xl font-bold mb-2">Featured Project</p>
                  <p className="text-sm">Cinematic Video Production</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-12">
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-amber-300 dark:hover:border-amber-600 min-h-[400px] flex flex-col">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Fallback gradient background with pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-20 h-20 mx-auto mb-3 text-amber-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="text-amber-300/80 text-sm font-medium">Tech Review</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Tech</div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Tech Review Series</h3>
                <p className="text-slate-600 dark:text-slate-400 flex-1">Professional editing with dynamic transitions and cinematic color grading</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>View Project</span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-amber-300 dark:hover:border-amber-600 min-h-[400px] flex flex-col">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Fallback gradient background with pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-20 h-20 mx-auto mb-3 text-amber-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <p className="text-amber-300/80 text-sm font-medium">Lifestyle</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Lifestyle</div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Lifestyle Vlog</h3>
                <p className="text-slate-600 dark:text-slate-400 flex-1">Color grading and seamless storytelling with professional transitions</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>View Project</span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-amber-300 dark:hover:border-amber-600 min-h-[400px] flex flex-col">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Fallback gradient background with pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-20 h-20 mx-auto mb-3 text-amber-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="text-amber-300/80 text-sm font-medium">Brand</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Brand</div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Brand Commercial</h3>
                <p className="text-slate-600 dark:text-slate-400 flex-1">High-end production with motion graphics and cinematic effects</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>View Project</span>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-slate-900 dark:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-slate-800 dark:hover:bg-slate-600 shadow-md hover:shadow-lg"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-full text-sm font-medium text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Trusted by Creators
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            See what our clients have to say about working with us
          </p>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-left">
            <div className="group relative bg-white dark:bg-slate-800 p-8 lg:p-10 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-lg transition-all duration-300">
              <div className="relative z-10">
                <div className="mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 h-32 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)', backgroundSize: '30px 30px'}}></div>
                  <svg className="w-12 h-12 text-amber-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-lg lg:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic">
                  "AstraEdits is a game-changer. The quality and speed of their work is unmatched. I can finally focus on creating content instead of spending hours editing. Their attention to detail is incredible!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center ring-4 ring-amber-200 dark:ring-amber-800">
                      <span className="text-amber-700 dark:text-amber-300 font-semibold text-lg">AR</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-900 dark:text-white">Alex Rivera</p>
                    <p className="text-slate-600 dark:text-slate-400">Tech YouTuber • 2M+ Subscribers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-slate-800 p-8 lg:p-10 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-lg transition-all duration-300">
              <div className="relative z-10">
                <div className="mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 h-32 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)', backgroundSize: '30px 30px'}}></div>
                  <svg className="w-12 h-12 text-amber-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-lg lg:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic">
                  "I was hesitant about a subscription service, but AstraEdits has exceeded all my expectations. It's like having my own in-house editor, but better. The turnaround time is amazing and the quality is consistently top-notch."
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center ring-4 ring-amber-200 dark:ring-amber-800">
                      <span className="text-amber-700 dark:text-amber-300 font-semibold text-lg">SC</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-900 dark:text-white">Samantha Chen</p>
                    <p className="text-slate-600 dark:text-slate-400">Lifestyle Vlogger • 500K+ Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Us Section */}
      <AnimatedSection id="contact" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-full text-sm font-medium text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Ready to Elevate Your Content?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Let's talk about your project. Fill out the form below and we'll get back to you within 24 hours.
          </p>
          <div className="mb-12 max-w-3xl mx-auto rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 h-48 flex items-center justify-center border border-amber-200 dark:border-amber-800 relative">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
            <div className="relative text-white text-center z-10">
              <svg className="w-16 h-16 mx-auto mb-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-lg font-semibold text-amber-100">Get In Touch</p>
              <p className="text-sm text-amber-200/80 mt-2">We're here to help bring your vision to life</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg border border-slate-200 dark:border-slate-600 text-center hover:border-amber-300 dark:hover:border-amber-600 transition-colors">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">Email Us</h3>
              <p className="text-slate-600 dark:text-slate-400">hello@astraedits.com</p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg border border-slate-200 dark:border-slate-600 text-center hover:border-amber-300 dark:hover:border-amber-600 transition-colors">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">Response Time</h3>
              <p className="text-slate-600 dark:text-slate-400">Within 24 hours</p>
            </div>
          </div>
          <form className="flex flex-col gap-6 text-left bg-white dark:bg-slate-800 p-8 lg:p-12 rounded-lg border border-slate-200 dark:border-slate-700 shadow-md">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Your Name
              </label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                className="w-full p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:border-amber-500 dark:focus:border-amber-400 transition-all duration-300 outline-none" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Your Email
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com" 
                className="w-full p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:border-amber-500 dark:focus:border-amber-400 transition-all duration-300 outline-none" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Your Message
              </label>
              <textarea 
                id="message" 
                placeholder="Tell us about your project, goals, and what you're looking for..." 
                rows={6} 
                className="w-full p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:border-amber-500 dark:focus:border-amber-400 transition-all duration-300 outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="group mt-4 px-10 py-4 bg-amber-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-amber-600 shadow-md hover:shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2"
            >
              Send Inquiry
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </form>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12 text-left">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                AstraEdits
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
                Professional video editing services that help creators focus on what they do best - creating amazing content.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="#how-it-works" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">How it Works</Link></li>
                <li><Link href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Projects</Link></li>
                <li><Link href="#testimonials" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Testimonials</Link></li>
                <li><Link href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Video Editing</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Color Grading</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Motion Graphics</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Sound Design</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-300 dark:border-slate-700 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              &copy; 2025 AstraEdits. All Rights Reserved. Made with <span className="text-amber-500">❤️</span> for creators.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
