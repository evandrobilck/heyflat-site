const FLAGS = {
  en: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#B22234" />
      <rect y="2.22" width="30" height="2.22" fill="#fff" />
      <rect y="6.67" width="30" height="2.22" fill="#fff" />
      <rect y="11.11" width="30" height="2.22" fill="#fff" />
      <rect y="15.56" width="30" height="2.22" fill="#fff" />
      <rect width="12" height="10.78" fill="#3C3B6E" />
    </svg>
  ),
  pt: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#009739" />
      <polygon points="15,2 28,10 15,18 2,10" fill="#FEDD00" />
      <circle cx="15" cy="10" r="5.5" fill="#012169" />
    </svg>
  ),
  es: (
    <svg viewBox="0 0 30 20" className="h-full w-full">
      <rect width="30" height="20" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
    </svg>
  ),
}

export default function FlagIcon({ code, className = '' }) {
  return (
    <span className={`inline-block overflow-hidden rounded-sm ${className}`}>
      {FLAGS[code]}
    </span>
  )
}
