interface PandaIconProps {
  size?: "small" | "medium" | "large"
  className?: string
}

export function PandaIcon({ size = "medium", className = "" }: PandaIconProps) {
  const sizes = {
    small: "w-12 h-12",
    medium: "w-20 h-20",
    large: "w-28 h-28",
  }

  return (
    <div className={`${sizes[size]} ${className} relative`}>
      <img src="/images/panda-mascot.png" alt="Lingomate Panda Mascot" className="w-full h-full object-contain" />
    </div>
  )
}
