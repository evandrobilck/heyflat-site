export default function StoreBadge({ label, sublabel, icon, href, theme = 'dark' }) {
  const isDark = theme === 'dark'

  const content = (
    <>
      <span className="text-lg leading-none">{icon}</span>
      <span className="text-left leading-tight">
        <span className={`block text-[9px] ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>{sublabel}</span>
        <span className={`block text-xs font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{label}</span>
      </span>
    </>
  )

  const border = isDark ? 'border-white/15 bg-white/5' : 'border-gray-300 bg-white'

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${border} ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-50'}`}
      >
        {content}
      </a>
    )
  }

  return (
    <span className={`flex cursor-not-allowed items-center gap-2 rounded-lg border px-3 py-2 opacity-70 ${border}`}>
      {content}
    </span>
  )
}
