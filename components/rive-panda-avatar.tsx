"use client"
import Image from "next/image"

interface RivePandaAvatarProps {
  isListening?: boolean
  isSpeaking?: boolean
  mood?: "happy" | "thinking" | "neutral"
  size?: "small" | "medium" | "large"
}

export function RivePandaAvatar({
  isListening = false,
  isSpeaking = false,
  mood = "neutral",
  size = "medium",
}: RivePandaAvatarProps) {
  // Uncomment below when panda-avatar.riv is available in public/animations/

  /*
  const { rive, RiveComponent } = useRive({
    src: '/animations/panda-avatar.riv',
    stateMachines: 'State Machine',
    artboard: 'Panda',
    autoplay: true,
  })

  const listeningInput = useStateMachineInput(rive, 'State Machine', 'isListening')
  const speakingInput = useStateMachineInput(rive, 'State Machine', 'isSpeaking')
  const moodInput = useStateMachineInput(rive, 'State Machine', 'mood')

  useEffect(() => {
    if (listeningInput) {
      listeningInput.value = isListening
    }
  }, [isListening, listeningInput])

  useEffect(() => {
    if (speakingInput) {
      speakingInput.value = isSpeaking
    }
  }, [isSpeaking, speakingInput])

  useEffect(() => {
    if (moodInput) {
      const moodValue = mood === 'happy' ? 1 : mood === 'thinking' ? 2 : 0
      moodInput.value = moodValue
    }
  }, [mood, moodInput])
  */

  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  }

  // Temporary fallback: Show static panda image with simple animations
  return (
    <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <Image
          src="/images/panda-mascot.png"
          alt="Panda Mascot"
          fill
          className={`object-contain ${isSpeaking ? "animate-pulse" : isListening ? "animate-bounce" : ""}`}
        />
      </div>
      {/* <RiveComponent /> */}
    </div>
  )
}
