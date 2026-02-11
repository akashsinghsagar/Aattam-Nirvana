'use client'

import { useEffect } from 'react'
import LightRays from '@/components/effects/LightRays'

export default function BookSessionPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-primary-700 pt-24 pb-12">
      <div className="container-main">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
              90-Minute Coaching Session
            </h1>
            <p className="text-xl text-white/80">
              Schedule your personalized 90-minute coaching session
            </p>
          </div>

          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget bg-white rounded-2xl overflow-hidden shadow-2xl" 
            data-url="https://calendly.com/rupika2020-aattamnirvana/90-minute-coaching-session"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
      
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
