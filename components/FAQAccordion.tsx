'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-brand-gray">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="py-5">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-start text-left gap-4 group"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-brand-black text-lg leading-snug group-hover:text-brand-orange transition-colors duration-200">
                {item.question}
              </span>
              <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center transition-colors duration-200 group-hover:bg-brand-orange/20">
                {isOpen ? (
                  <Minus size={14} className="text-brand-orange" />
                ) : (
                  <Plus size={14} className="text-brand-orange" />
                )}
              </span>
            </button>

            {/* Smooth height animation via grid trick */}
            <div
              className="overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="min-h-0">
                <div className="mt-4 text-brand-darkgray leading-relaxed text-base pr-8 pb-1">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
