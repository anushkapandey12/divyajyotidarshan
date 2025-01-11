import Image from 'next/image'

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-pista-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-mauve-800">Current Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Shiksha Jyoti: Education for All"
            description="Our flagship education program has established 15 schools in rural Jharkhand, providing quality education to over 5,000 children from underprivileged communities."
            image="https://images.unsplash.com/photo-1617102888614-ae5c7c90d7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <ProjectCard 
            title="Swasthya Seva: Rural Health Initiative"
            description="Our mobile health clinics have reached 50 remote villages, providing essential healthcare services to over 10,000 individuals annually."
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <ProjectCard 
            title="Gram Vikas: Village Development Program"
            description="We've implemented sustainable development projects in 20 villages, improving infrastructure, sanitation, and livelihood opportunities for over 15,000 residents."
            image="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <ProjectCard 
            title="Mahila Shakti: Women Empowerment Initiative"
            description="Our women's self-help groups have empowered over 2,000 women through skill development, financial literacy, and entrepreneurship support."
            image="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl border border-mauve-200">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-mauve-700">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}

