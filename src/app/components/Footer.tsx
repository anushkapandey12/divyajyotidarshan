import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Divya Jyoti Darshan</h3>
            <p className="mb-2">Empowering communities in Jharkhand</p>
            <p>NGO Registration: 312/2013-14</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">HD 16, City Center, Sector 4,</p>
            <p className="mb-2">Bokaro Steel City, Jharkhand,</p>
            <p className="mb-2">India - 827004</p>
            <p className="mb-2">Phone: 7004186352</p>
            <p>Email: ngodivyajyoti84a@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-pista-300 transition duration-300">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-pista-300 transition duration-300">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-pista-300 transition duration-300">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Divya Jyoti Darshan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

