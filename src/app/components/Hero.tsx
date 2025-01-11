import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Rural Indian village scene"
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-mauve-900/70 to-pista-900/70">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Empowering Rural India</h1>
          <p className="text-xl md:text-2xl mb-8">Supporting underprivileged communities in Jharkhand through education, healthcare, and sustainable development</p>
          <Button asChild className="bg-pista-500 hover:bg-pista-400 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
            <a href="#contact">Join Our Mission</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

