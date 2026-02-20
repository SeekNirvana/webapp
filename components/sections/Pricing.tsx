"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Shield, Truck } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const features = [
  "Nirvana Ring (Ceramic)",
  "Mobile app (iOS & Android)",
  "Lifetime free updates",
  "1-year warranty",
  "Community Access",
  "Meditation guide access",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mandala-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-nirvana-jade/10 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-nirvana-jade-light text-sm tracking-widest uppercase mb-4 block">
            Begin Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Own Your </span>
            <span className="gradient-text">Nirvana</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            One investment. Infinite dreams. No subscriptions, no hidden fees—
            just pure, unbounded consciousness.
          </p>
        </FadeIn>

        {/* Pricing Card */}
        <FadeIn delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative max-w-2xl mx-auto"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-nirvana-jade via-nirvana-cyan to-nirvana-jade rounded-3xl blur opacity-20" />

            <div className="relative p-8 sm:p-12 rounded-3xl glass-card border border-nirvana-jade/20">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-nirvana-jade to-nirvana-jade-dark">
                <span className="text-white text-sm font-medium tracking-wide">
                  Limited Launch Offer
                </span>
              </div>

              {/* Price */}
              <div className="text-center pt-4 mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl sm:text-6xl font-bold text-white">
                    $99
                  </span>
                  <span className="text-white/40 line-through text-xl">
                    $199
                  </span>
                </div>
                <p className="text-nirvana-jade-light mt-2">
                  One-time payment. No subscription.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-nirvana-jade/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-nirvana-jade" />
                    </div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="/preorder"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-4 rounded-xl bg-gradient-to-r from-nirvana-jade to-nirvana-jade-dark text-white font-semibold text-center text-lg hover:shadow-lg hover:shadow-nirvana-jade/20 transition-shadow"
              >
                Pre-Order Now — Ships Q2 2026
              </motion.a>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <Shield className="w-4 h-4" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <Truck className="w-4 h-4" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        {/* Movement */}
        <FadeIn delay={0.4} className="mt-12 text-center">
          <p className="text-white/50 text-sm">
            <span className="text-nirvana-gold">ॐ</span> Join the exclusive
            conscious movement. Awaken your potential with seekers worldwide.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
