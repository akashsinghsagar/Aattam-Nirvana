'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import profileImg from '@/assets/profile.jpg'
import LightRays from '@/components/effects/LightRays'
import { 
  FadeInUp, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem
} from '@/components/animations'
import { 
  Heart, 
  Sparkles, 
  Star, 
  Shield, 
  Users, 
  Award,
  Quote,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const journeyMilestones = [
  {
    year: 'Age 19',
    title: 'The Beginning',
    description: 'Arranged marriage. Move to UK. A new chapter that would test everything I thought I knew about love, safety, and self.',
  },
  {
    year: '25 Years',
    title: 'The Pattern',
    description: 'Two marriages. Control, silence, and survival. Learning how deeply a woman can disappear while trying to keep the peace.',
  },
  {
    year: 'Age 51',
    title: 'The Moment',
    description: 'A moment of clarity. A choice. With the support of a mentor who offered safety, I chose myself.',
  },
  {
    year: 'Today',
    title: 'The Mission',
    description: "Walking beside women who've spent years holding everything together. Your inner light is still burning.",
  },
]

const coreValues = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Every healing journey is unique. I meet you where you are with understanding and empathy.',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Creating a confidential, judgment-free space where you can be vulnerable and authentic.',
  },
  {
    icon: Sparkles,
    title: 'Transformation',
    description: 'Guiding you to turn your pain into power and discover your true eternal self.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building connections with women on similar journeys, because healing is stronger together.',
  },
]

const achievements = [
  { number: '500+', label: 'Women Empowered' },
  { number: '27+', label: 'Years of Insight' },
  { number: '12', label: 'Week Program' },
  { number: '100%', label: 'Confidential' },
]

export default function AboutPageContent() {
  return (
    <div className="relative bg-primary-700">
      {/* Hero Section - Editorial Style - Mobile Responsive */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] bg-primary-700 overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24">

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Content - 7 columns - Mobile Optimized */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/20 
                          px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 md:mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-gold" />
                <span className="text-accent-gold text-xs sm:text-sm font-semibold tracking-wide">
                  About Me
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-poppins font-bold text-white leading-[1.1] mb-4 sm:mb-5 md:mb-6"
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text 
                             bg-gradient-to-r from-accent-gold via-white to-accent-gold">
                  Rupi Dhillon
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-7 md:mb-8"
              >
                Trauma Liberator, Transformation Interventionist, Heart‑Led Facilitator, Speaker, Soulful Guide, and NLP Master Practitioner.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-7 md:mb-8"
              >
                More than titles, I am a woman who has lived many versions of herself—and the one speaking today is the woman who chose her own light.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start text-white/70"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold" />
                  <span className="text-xs sm:text-sm">Certified Coach</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/30" />
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold" />
                  <span className="text-xs sm:text-sm">500+ Lives Changed</span>
                </div>
              </motion.div>
            </div>

            {/* Image - 5 columns - Mobile Responsive */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 relative mt-8 lg:mt-0"
            >
              <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-sm md:max-w-md mx-auto lg:ml-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-hero border-2 sm:border-4 border-white/20">
                <Image
                  src={profileImg}
                  alt="Rupi Dhillon - Rupi"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-200/30 rounded-full -z-20" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent-gold/20 rounded-full -z-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Bento Style - Mobile Responsive */}
      <section className="py-10 sm:py-12 md:py-14 relative overflow-hidden">
        
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
            {/* Left - Text Content - Mobile Optimized */}
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="mb-6 sm:mb-7 md:mb-8">
                  <div className="inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 bg-primary-900/50 border border-primary-700 rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 mb-4 sm:mb-5 md:mb-6">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-accent-purple" />
                    <div>
                      <p className="text-base sm:text-lg md:text-xl font-poppins font-bold text-white">Rupi Dhillon</p>
                      <p className="text-sm text-accent-purple font-medium">fondly known as Rupi</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <div className="space-y-6 text-white/80">
                  <p className="text-lg md:text-xl leading-relaxed">
                    My story begins in India, raised in a loving Joint Punjabi family rooted in spirituality, connection, and emotional safety. At nineteen, I moved to the UK through an arranged marriage, believing I was stepping into freedom.
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed">
                    Instead, I entered years of control, silence, and abuse: physical, emotional, and psychological. Across two marriages and twenty-five years, I learned how deeply women can disappear while trying to keep the peace.
                  </p>

                  <p className="text-lg md:text-xl leading-relaxed">
                    In 2023, a moment of clarity shattered the patterns I had been living inside. At <span className="font-bold text-white">fifty‑one</span>, I chose myself. With the support of a mentor who offered emotional safety, I rebuilt my life from the inside out: confronting fear, grief, generational conditioning, and limiting beliefs.
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed font-medium text-white">
                    My pain became my strength. My silence became my mission.
                  </p>

                  <div className="relative pl-8 py-6 border-l-4 border-accent-gold bg-primary-900/50 rounded-r-2xl mt-8">
                    <Heart className="absolute -left-4 top-6 w-8 h-8 text-accent-gold fill-current bg-primary-900 rounded-full p-1" />
                    <p className="text-lg md:text-xl font-medium text-white italic leading-relaxed">
                      I chose healing so my daughters could inherit freedom rather than carry wounds. I found my way back home to my true self.
                    </p>
                  </div>
                  
                  <p className="text-lg md:text-xl leading-relaxed">
                    Today, I work with women who've spent years holding everything together. If you've ever felt like you've lost your voice in the process, I see you. I've been there too.
                  </p>
                  
                  <p className="text-base md:text-lg leading-relaxed text-accent-gold font-semibold">
                    Your inner light--even if it feels faint--is still burning. And together, we can reignite it.
                  </p>
                </div>
              </FadeInUp>
            </div>

            {/* Right - Stats & Highlights */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6 md:space-y-8">
              <FadeInUp delay={0.2}>
                <div className="bg-primary-600 rounded-3xl p-8 text-white shadow-purple-lg">
                  <Sparkles className="w-10 h-10 text-accent-gold mb-4" />
                  <h3 className="text-2xl font-poppins font-bold mb-3">The Transformation</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    At 51, a moment of clarity. A choice to walk away from survival and towards freedom.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-3xl font-bold">25+</p>
                      <p className="text-sm text-white/80">Years of Experience</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">Women</p>
                      <p className="text-sm text-white/80">Coming Home to Self</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="bg-primary-600 border border-primary-700 rounded-2xl p-6 shadow-purple-sm">
                  <h4 className="font-poppins font-bold text-lg mb-4 text-white">Core Values</h4>
                  <div className="space-y-3">
                    {[
                      { icon: Heart, label: 'Compassion', color: 'text-accent-gold' },
                      { icon: Shield, label: 'Safety', color: 'text-accent-gold' },
                      { icon: Sparkles, label: 'Transformation', color: 'text-accent-gold' },
                    ].map((value) => (
                      <div key={value.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center">
                          <value.icon className={`w-5 h-5 ${value.color}`} />
                        </div>
                        <span className="font-medium text-white">{value.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline - Creative Layout */}
      <section className="py-10 sm:py-12 md:py-14 bg-primary-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-16 bg-accent-gold" />
                <p className="text-accent-gold font-semibold text-sm uppercase tracking-[0.3em]">
                  The Journey
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight">
                The Path to{' '}
                <span className="text-accent-gold">
                  Liberation
                </span>
              </h2>
            </div>
          </FadeInUp>

          <div className="max-w-5xl mx-auto">
            {/* Vertical Timeline with Cards */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-12 top-0 bottom-0 w-1 bg-accent-gold/30 rounded-full" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {journeyMilestones.map((milestone, index) => (
                  <FadeInUp key={milestone.title} delay={index * 0.12}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                      className="relative pl-20 md:pl-28"
                    >
                      {/* Dot */}
                      <div className="absolute left-4 md:left-9 top-8 w-7 h-7 bg-accent-gold 
                                    rounded-full ring-4 ring-primary-900 shadow-lg z-10 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>

                      {/* Card */}
                      <div className="bg-primary-900 border border-primary-700 rounded-2xl p-6 md:p-8 shadow-purple-sm 
                                    hover:shadow-purple-md transition-all group">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-4 py-2 bg-accent-gold text-white 
                                       text-sm font-bold rounded-full shadow-sm">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl md:text-2xl font-poppins font-bold text-white 
                                       group-hover:text-accent-gold transition-colors">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-white/80 leading-relaxed text-base md:text-lg">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-primary-800/40 to-primary-900/60" />
        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <span className="inline-block text-accent-gold text-sm font-semibold uppercase tracking-widest mb-4">
                My Mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-8 leading-tight">
                Walking Beside Women{' '}
                <span className="text-accent-gold">
                  Coming Home to Self
                </span>
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                I work with women who've spent years holding everything together. Women who've lost their voice 
                in the process. Through personalised one‑to‑one sessions, the <span className="text-accent-gold font-semibold">Soul 
                Liberation Journey</span>, and the <span className="text-accent-gold font-semibold">Aattam Programme</span>, 
                I guide you back home to self.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20">
                <Quote className="w-10 h-10 text-accent-gold mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl text-white font-poppins italic leading-relaxed">
                  &ldquo;My pain became my strength. My silence became my mission.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Message to Women - Asymmetric Layout */}
      <section className="py-10 sm:py-12 md:py-14 bg-primary-800">
        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
            <SlideInRight>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-accent-gold fill-current" />
                  <p className="text-accent-gold font-semibold text-sm uppercase tracking-[0.3em]">
                    A Message For You
                  </p>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white leading-tight mb-8">
                  Your Inner Light{' '}
                  <span className="text-accent-gold">
                    Is Still Burning
                  </span>
                </h2>
                
                <div className="space-y-6 text-white/80 mb-8">
                  <p className="text-lg md:text-xl leading-relaxed">
                    If you've spent years holding everything together. If you've lost your voice in the process.
                  </p>
                  
                  <div className="relative pl-6 py-4 border-l-4 border-accent-gold bg-primary-900/50 backdrop-blur-sm rounded-r-xl">
                    <p className="text-xl md:text-2xl font-semibold text-accent-gold leading-relaxed">
                      I see you. I've been there too.
                    </p>
                  </div>
                  
                  <p className="text-lg leading-relaxed">
                    Your inner light—even if it feels faint—is still burning. And together, we can reignite it.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Heart, text: 'One‑to‑one Liberation Sessions' },
                    { icon: Shield, text: 'Safe and confidential space' },
                    { icon: Sparkles, text: 'Soul Liberation Journey' },
                    { icon: Users, text: 'Aattam Programme' }
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 p-4 bg-primary-900 rounded-xl border border-primary-700">
                      <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent-gold" />
                      </div>
                      <span className="text-sm font-medium text-white">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Button href="/contact" size="lg" className="group">
                  CONNECT HERE
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Core Values - Bento Grid */}
      <section className="py-10 sm:py-12 md:py-14 bg-primary-800 relative overflow-hidden">
        
        <div className="container-main relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-accent-gold" />
                <p className="text-accent-gold font-semibold text-sm uppercase tracking-[0.3em]">
                  Core Values
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight">
                What Guides My Work
              </h2>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-primary-900 rounded-2xl p-8 border border-primary-700 shadow-purple-sm hover:shadow-purple-md 
                            h-full group ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <div className={`w-16 h-16 bg-accent-gold rounded-2xl flex items-center justify-center mb-6 shadow-lg 
                  group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>
      
      {/* Global Fixed Ambient Light Layer - Blended on Top */}
      <div className="fixed inset-0 w-full h-screen z-[10] pointer-events-none mix-blend-screen opacity-75">
        <LightRays 
          raysOrigin="top-center"
          raysColor="#ffd966"
          raysSpeed={0.5}
          lightSpread={3.0}
          rayLength={5.0}
          pulsating={true}
          fadeDistance={1.5}
          saturation={1.8}
          opacity={0.5}
        />
      </div>
    </div>
  )
}
