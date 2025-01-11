import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-mauve-700 to-mauve-900 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/logo-placeholder.svg" alt="Divya Jyoti Darshan Logo" width={50} height={50} className="bg-white rounded-full p-1" />
            <div className="text-2xl font-bold text-pista-300">Divya Jyoti Darshan</div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Button variant="link" asChild>
              <Link href="#about" className="text-white hover:text-pista-200 transition duration-300">About</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#services" className="text-white hover:text-pista-200 transition duration-300">Services</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#projects" className="text-white hover:text-pista-200 transition duration-300">Projects</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#team" className="text-white hover:text-pista-200 transition duration-300">Team</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#contact" className="text-white hover:text-pista-200 transition duration-300">Contact</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

