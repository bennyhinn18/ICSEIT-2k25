"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef } from "react"

interface TimelineItem {
  date: string
  event: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  const refs = useRef<(HTMLElement | null)[]>([])

  return (
    <div className="relative container">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

      {/* Timeline Items */}
      <div className="relative">
        {items.map((item, index) => {
          if (!refs.current[index]) {
            refs.current[index] = null
          }
          const [inView, setInView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          })

          return (
            <motion.div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              onViewportChange={(isVisible) => {
                if (isVisible && !inView) {
                  setInView(true)
                }
              }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center justify-between mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-lg text-primary mb-2">{item.date}</h3>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="w-4 h-4 rounded-full bg-primary border-4 border-white"
                />
              </div>

              {/* Empty space for opposite side */}
              <div className="w-5/12" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

