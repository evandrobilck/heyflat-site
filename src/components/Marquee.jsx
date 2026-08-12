// Infinite scrolling strip, pure CSS animation (transform only, GPU-accelerated,
// no per-frame JS) so it stays cheap on low-end/mobile devices. Pauses on hover
// and collapses to a static row when the user prefers reduced motion.
export default function Marquee({ children, className = '', speed = 32 }) {
  return (
    <div
      className={`group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <div
        className="flex w-max shrink-0 items-center gap-x-10 motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused]"
        style={{ '--marquee-duration': `${speed}s` }}
      >
        <div className="flex shrink-0 items-center gap-x-10">{children}</div>
        <div aria-hidden="true" className="flex shrink-0 items-center gap-x-10">
          {children}
        </div>
      </div>
    </div>
  )
}
