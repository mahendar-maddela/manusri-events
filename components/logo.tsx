interface LogoProps {
  variant?: "full" | "compact"
  className?: string
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Magician Hat SVG Icon */}
      <div className="relative">
        <svg
          width={variant === "compact" ? "32" : "40"}
          height={variant === "compact" ? "32" : "40"}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          {/* Hat Base */}
          <ellipse cx="20" cy="32" rx="16" ry="4" fill="currentColor" />
          {/* Hat Cone */}
          <path d="M8 32 L20 8 L32 32 Z" fill="currentColor" />
          {/* Hat Band */}
          <rect x="6" y="28" width="28" height="4" rx="2" fill="currentColor" />
          {/* Magic Sparkles */}
          <circle cx="12" cy="20" r="1.5" fill="oklch(0.75 0.15 60)" className="sparkle-animation" />
          <circle
            cx="28"
            cy="16"
            r="1"
            fill="oklch(0.75 0.15 60)"
            className="sparkle-animation"
            style={{ animationDelay: "0.5s" }}
          />
          <circle
            cx="24"
            cy="24"
            r="1.5"
            fill="oklch(0.6 0.25 330)"
            className="sparkle-animation"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`font-heading font-bold text-magical-gradient ${variant === "compact" ? "text-lg" : "text-2xl"}`}
        >
          MANUSRI EVENTS
        </span>
        {variant === "full" && (
          <span className="text-xs text-muted-foreground font-medium tracking-wide">Magician & Event Organiser</span>
        )}
      </div>
    </div>
  )
}
