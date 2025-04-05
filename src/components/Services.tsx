'use client'

import { motion } from 'framer-motion'
import { FaUserCog, FaLaptopCode, FaChalkboardTeacher, FaUsers } from 'react-icons/fa'

const services = [
  {
    icon: <FaUserCog size={30} />,
    title: 'Solutions CRM',
    description: 'Automatisez la gestion de vos clients, suivez les leads, améliorez vos ventes.'
  },
  {
    icon: <FaUsers size={30} />,
    title: 'Community Management',
    description: 'Boostez votre présence sur les réseaux sociaux avec du contenu engageant.'
  },
  {
    icon: <FaChalkboardTeacher size={30} />,
    title: 'Formations Pros',
    description: 'Formez vos équipes sur les outils numériques, le marketing et l’IA.'
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: 'Sites Web Modernes',
    description: 'Créez des sites ultra performants, responsives et optimisés SEO.'
  }
]

export default function Services() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
