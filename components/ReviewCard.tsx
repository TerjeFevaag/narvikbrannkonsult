interface ReviewCardProps {
  quote: string
  author: string
  company?: string
  date?: string
}

export default function ReviewCard({ quote, author, company, date }: ReviewCardProps) {
  return (
    <div className="bg-brand-white rounded-[30px] p-8 border border-brand-gray shadow-sm">
      <div className="text-brand-orange text-5xl font-serif leading-none mb-4 select-none">&ldquo;</div>
      <p className="text-brand-darkgray italic leading-relaxed mb-6">{quote}</p>
      <div className="border-t border-brand-gray pt-4">
        <p className="font-bold text-brand-black">{author}</p>
        {company && <p className="text-brand-darkgray text-sm">{company}</p>}
        {date && <p className="text-brand-darkgray text-xs mt-1">{date}</p>}
      </div>
    </div>
  )
}
