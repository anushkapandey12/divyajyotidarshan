import Image from 'next/image'
import { Users, BookOpen, Heart, Home } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-babyblue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-mauve-800">About Divya Jyoti Darshan</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 bg-white p-6 rounded-lg shadow-md">
              Divya Jyoti Darshan is a dedicated NGO based in Bokaro, Jharkhand, committed to uplifting underprivileged communities. Our holistic approach focuses on education, healthcare, and sustainable development to create lasting positive change.
            </p>
            <div className="bg-pista-100 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-mauve-700">Our Mission</h3>
              <p className="mb-4">To empower and uplift underprivileged communities through education, healthcare, and sustainable development initiatives, ensuring a brighter future for all.</p>
              <div className="grid grid-cols-2 gap-4">
                <MissionStat icon={<Users className="w-8 h-8 text-mauve-600" />} text="10,000+ Lives Impacted" />
                <MissionStat icon={<BookOpen className="w-8 h-8 text-mauve-600" />} text="Quality Education Programs" />
                <MissionStat icon={<Heart className="w-8 h-8 text-mauve-600" />} text="Healthcare Initiatives" />
                <MissionStat icon={<Home className="w-8 h-8 text-mauve-600" />} text="20 Villages Supported" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Children in a rural classroom"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="bg-babyblue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-mauve-700">Our Approach</h3>
              <ul className="list-disc pl-6 space-y-2 text-mauve-800">
                <li>Collaborate with local communities to understand their needs</li>
                <li>Implement sustainable solutions for long-term impact</li>
                <li>Partner with government agencies and other NGOs for wider reach</li>
                <li>Empower women and youth through skill development programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionStat({ icon, text }) {
  return (
    <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
      <div className="mr-3">{icon}</div>
      <span className="text-sm font-semibold text-mauve-700">{text}</span>
    </div>
  )
}

