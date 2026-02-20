'use client'

import { motion } from 'framer-motion'
import { Moon, Brain, Sun } from 'lucide-react'
import FadeIn from '../animations/FadeIn'
import BreathingCircle from '../animations/BreathingCircle'

const steps = [
  {
    icon: Moon,
    number: '01',
    title: 'Drift Into Sleep',
    sanskrit: 'प्रथम ध्यान',
    description: 'As you prepare for rest, Nirvana Ring begins its silent vigil. Advanced sensors monitor your heart rate variability, body temperature, and subtle movements—mapping your unique sleep architecture.',
    details: ['HRV monitoring begins', 'Temperature baseline established', 'Movement patterns tracked'],
  },
  {
    icon: Brain,
    number: '02',
    title: 'REM Detection',
    sanskrit: 'स्वप्न अवस्था',
    description: 'Our AI identifies your REM cycles with superior accuracy. When dream sleep begins, the ring communicates with your app, preparing to deliver the perfect cue for lucidity.',
    details: ['REM stage identified', 'Sleep depth analyzed', 'Optimal timing calculated'],
  },
  {
    icon: Sun,
    number: '03',
    title: 'Awaken Within',
    sanskrit: 'बोधि प्राप्ति',
    description: 'Gentle lights, sacred sounds, or subtle vibrations ripple through your dream. You recognize the signal and become lucid—free to explore, heal, and create within your own mind.',
    details: ['Customizable dream cues', 'Consciousness triggered', 'Dream control achieved'],
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nirvana-jade/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-20">
          <span className="text-nirvana-jade-light text-sm tracking-widest uppercase mb-4 block">
            The Path to Lucidity
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">How </span>
            <span className="gradient-text">Nirvana</span>
            <span className="text-white"> Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            From the moment you sleep to the awakening within your dreams—
            experience the seamless journey to lucid consciousness.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nirvana-jade/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="relative p-8 rounded-2xl glass-card h-full">
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-nirvana-jade to-nirvana-jade-dark">
                      <span className="text-white font-mono text-sm">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-nirvana-jade/10 flex items-center justify-center mb-6 mt-2">
                      <step.icon className="w-8 h-8 text-nirvana-jade-light" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-nirvana-jade/60 text-sm mb-4 font-light tracking-wider">{step.sanskrit}</p>
                    <p className="text-white/60 leading-relaxed mb-6">{step.description}</p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/50">
                          <div className="w-1.5 h-1.5 rounded-full bg-nirvana-jade/60" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Decorative */}
                    <div className="absolute bottom-4 right-4 opacity-20">
                      <div className="text-6xl font-bold text-white/10">{step.number}</div>
                    </div>
                  </div>

                  {/* Connector Dot */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-nirvana-jade/50 transform -translate-y-1/2" />
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <FadeIn delay={0.6} className="mt-24 flex flex-col items-center">
          <p className="text-white/40 text-sm tracking-widest uppercase">Breathe. Sleep. Awaken.</p>
        </FadeIn>
      </div>
    </section>
  )
}
