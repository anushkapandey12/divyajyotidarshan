import Image from 'next/image'

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-pista-100 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-mauve-800">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember
            name="Anil Kumar"
            role="President"
            image="/placeholder.svg?height=256&width=256"
            description="Leading our organization with vision and dedication."
          />
          <TeamMember
            name="Gautam"
            role="Vice President"
            image="/placeholder.svg?height=256&width=256"
            description="Supporting our initiatives and driving growth."
          />
          <TeamMember
            name="Nityanand Pandey"
            role="Secretary"
            image="/placeholder.svg?height=256&width=256"
            description="With over 25 years of teaching experience, dedicated to improving lives through education and development."
          />
          <TeamMember
            name="Ranjit Kumar"
            role="Treasurer"
            image="/placeholder.svg?height=256&width=256"
            description="Managing our finances to ensure maximum impact of our programs."
          />
        </div>
      </div>
    </section>
  )
}

function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300 hover:shadow-xl border border-mauve-200">
      <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-mauve-700">{name}</h3>
      <p className="text-lg text-gray-600 mb-4">{role}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

