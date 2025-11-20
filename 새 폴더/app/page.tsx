import Link from "next/link"
import { PandaIcon } from "@/components/panda-icon"
import Image from "next/image"

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-[#e8eaf0] flex flex-col items-center justify-between p-6">
      <div className="flex-1 flex flex-col items-center justify-center space-y-12">
        {/* Panda Icon */}
        <PandaIcon size="large" />

        {/* Dots indicator */}
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2c303c]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#2c303c]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#9ca3af]" />
        </div>
      </div>

      {/* Bottom Logo and Language */}
      <div className="text-center space-y-2 pb-8">
        <div className="flex items-center justify-center gap-0.5">
          <span className="text-2xl font-bold text-[#2c303c]">LING</span>
          <Image src="/images/panda-mascot.png" alt="Panda" width={32} height={32} className="inline-block" />
          <span className="text-2xl font-bold text-[#2c303c]">MATE</span>
        </div>
        <p className="text-sm text-[#6b7280]">English × 한국어</p>
      </div>

      {/* Hidden link for navigation */}
      <Link href="/login" className="absolute inset-0" aria-label="Go to login" />
    </div>
  )
}
