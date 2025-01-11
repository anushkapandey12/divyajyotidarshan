import { Book, Heart, FlagIcon as Government, Users } from 'lucide-react'
import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-babyblue-100 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-mauve-800">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard 
            icon={<Book className="w-12 h-12 text-mauve-600" />}
            title="Educational Development"
            description="We establish schools in rural areas, provide quality education and vocational training, and foster creativity and critical thinking. Our programs include:"
            items={[
              "Literacy programs for adults",
              "Scholarships for underprivileged students",
              "Computer literacy initiatives",
              "Teacher training workshops"
            ]}
          />
          <ServiceCard 
            icon={<Heart className="w-12 h-12 text-mauve-600" />}
            title="Healthcare Initiatives"
            description="We set up health centers in underserved areas, organize health awareness campaigns, and provide medical supplies and resources. Our healthcare services include:"
            items={[
              "Mobile health clinics",
              "Maternal and child health programs",
              "Vaccination drives",
              "Mental health awareness and support"
            ]}
          />
          <ServiceCard 
            icon={<Government className="w-12 h-12 text-mauve-600" />}
            title="Government Distribution Centers"
            description="We create hubs for welfare scheme distribution, ensuring benefits reach vulnerable sections, and act as a liaison between government and communities. Our efforts include:"
            items={[
              "Ration card registration camps",
              "Pension scheme awareness programs",
              "Skill development initiatives",
              "Legal aid and counseling services"
            ]}
          />
          <ServiceCard 
            icon={<Users className="w-12 h-12 text-mauve-600" />}
            title="Community Empowerment"
            description="We focus on empowering communities through various initiatives that promote self-reliance and sustainable development. Our programs include:"
            items={[
              "Women's self-help groups",
              "Organic farming training",
              "Microfinance initiatives",
              "Youth leadership development"
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description, items }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl border border-mauve-200">
      <div className="flex items-center mb-4">
        <div className="bg-mauve-100 p-3 rounded-full mr-4">{icon}</div>
        <h3 className="text-xl font-semibold text-mauve-700">{title}</h3>
      </div>
      <p className="mb-4">{description}</p>
      <ul className="list-disc pl-5 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  )
}

