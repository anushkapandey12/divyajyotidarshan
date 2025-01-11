import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-babyblue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-mauve-800">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-mauve-700">Get in Touch</h3>
            <p className="text-gray-700 mb-4">We&apos;d love to hear from you! Please contact us using the information provided.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-mauve-700">Our Location</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-mauve-600 mr-2 mt-1" />
                <p>HD 16, City Center, Sector 4, Bokaro Steel City, Jharkhand, India - 827004</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-mauve-600 mr-2" />
                <p>7004186352</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-mauve-600 mr-2" />
                <p>ngodivyajyoti84a@gmail.com</p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-mauve-700">Working Hours</h4>
              <p>We are available to serve you every day.</p>
              <p>Monday - Sunday: 9:00 AM - 5:00 PM</p>
              <p>Helpline: [Insert helpline number here]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

