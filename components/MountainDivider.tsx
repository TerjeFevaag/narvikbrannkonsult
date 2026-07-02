interface Props {
  className?: string
  fillClassName?: string
}

export default function MountainDivider({ className = '', fillClassName = 'fill-brand-lightgray' }: Props) {
  return (
    <svg
      className={`absolute bottom-0 left-0 w-full ${className}`}
      viewBox="0 0 1200 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className={fillClassName}
        d="M0,90 L0,55 L150,20 L280,48 L420,10 L560,42 L700,18 L860,50 L1000,15 L1200,45 L1200,90 Z"
      />
    </svg>
  )
}
