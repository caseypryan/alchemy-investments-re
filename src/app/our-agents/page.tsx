import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Agents | Alchemy Investments RE',
  description: 'Meet our experienced Las Vegas real estate agents. Licensed professionals ready to help you sell your home.',
}

const leadershipAgents = [
  {
    id: 1,
    name: 'Casey Ryan',
    title: 'Agent',
    license: 'NV License: S.0184768',
    phone: '(702) 718-6934',
    email: 'casey@alchemyinvestmentsre.com',
    bio: 'With over 15 years of experience in the Las Vegas real estate market, Casey specializes in helping homeowners get top dollar for their properties through innovative marketing and expert negotiation.',
    image: '/agents/casey-ryan.jpg',
    specialties: ['Residential Sales', 'Investment Properties', 'Cash Offers'],
    stats: {
      yearsExperience: '15+',
      homesSold: '500+',
      avgDaysOnMarket: '14'
    }
  },
  {
    id: 2,
    name: 'Samantha Bonneville',
    title: 'Principal Broker',
    license: 'NV License: S.0184768',
    phone: '(702) 718-6934',
    email: 'samantha@alchemyinvestmentsre.com',
    bio: 'As Principal Broker, Samantha brings extensive expertise in Las Vegas real estate, ensuring every transaction meets the highest professional standards while delivering exceptional results for clients.',
    image: '/agents/samantha-bonneville.jpg',
    specialties: ['Brokerage Management', 'Residential Sales', 'Client Relations'],
    stats: {
      yearsExperience: '10+',
      homesSold: '300+',
      avgDaysOnMarket: '18'
    }
  },
]

const teamAgents = [
  { firstName: 'Dawn', lastName: 'Agudo', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'Danielle', lastName: 'Bald', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'Nicole', lastName: 'Gillespie', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'Dasha', lastName: 'Giraldo', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'Karina', lastName: 'Giraldo Mirkovich', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'April', lastName: 'Hamilton', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'Christopher', lastName: 'Kampshoff', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'Jamie', lastName: 'Kirk', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'Brendon', lastName: 'Marchand', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'Robert', lastName: 'Robinson', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'Brandon', lastName: 'Tan', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'Corey', lastName: 'Trent', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
  { firstName: 'Kaitlyn', lastName: 'Twitchell', title: 'Agent', specialties: ['Residential Listings', 'Buyers Agent'] },
]

export default function OurAgents() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4A90E2] via-[#5B9FE3] to-[#7CB3E8] py-20">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-[44px] font-extrabold mb-4">Meet Our Expert Agents</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Licensed professionals with deep Las Vegas market knowledge ready to help you sell your home fast for top dollar.
            </p>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-[36px] font-bold text-center mb-12 text-[#1a1a1a]">Leadership Team</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {leadershipAgents.map((agent) => (
                <div key={agent.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Agent Photo */}
                  <div className="relative h-80 bg-gradient-to-br from-[#4A90E2] to-[#7CB3E8]">
                    {/* Placeholder for agent photo - uncomment when images are added */}
                    {/* <Image
                      src={agent.image}
                      alt={agent.name}
                      fill
                      className="object-cover"
                    /> */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                      {agent.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Agent Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-1">{agent.name}</h3>
                    <p className="text-[#22c55e] font-semibold mb-2">{agent.title}</p>
                    <p className="text-sm text-gray-600 mb-4">{agent.license}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4 py-4 border-y border-gray-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#4A90E2]">{agent.stats.yearsExperience}</div>
                        <div className="text-xs text-gray-600">Years</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#4A90E2]">{agent.stats.homesSold}</div>
                        <div className="text-xs text-gray-600">Homes Sold</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#4A90E2]">{agent.stats.avgDaysOnMarket}</div>
                        <div className="text-xs text-gray-600">Avg Days</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{agent.bio}</p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-800 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="bg-[#f0f9ff] text-[#4A90E2] text-xs px-3 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="space-y-2">
                      <a
                        href={`tel:${agent.phone.replace(/\D/g, '')}`}
                        className="block w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-2.5 px-4 rounded text-center transition-colors"
                      >
                        {agent.phone}
                      </a>
                      <a
                        href={`mailto:${agent.email}`}
                        className="block w-full bg-white border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white font-semibold py-2.5 px-4 rounded text-center transition-colors"
                      >
                        Email {agent.name.split(' ')[0]}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-[#f8f9fb]">
          <div className="container mx-auto px-6">
            <h2 className="text-[36px] font-bold text-center mb-12 text-[#1a1a1a]">Our Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {teamAgents.map((agent, index) => {
                const fullName = `${agent.firstName} ${agent.lastName}`

                return (
                  <div key={index} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                    {/* Agent Info */}
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{fullName}</h3>
                    <span className="inline-block bg-[#e3f2fd] text-[#4A90E2] text-xs px-3 py-1 rounded-full mb-3">
                      {agent.title}
                    </span>

                    {/* Specialties */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {agent.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-[#f0f9ff] text-[#4A90E2] text-xs px-3 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Button */}
                    <a
                      href="tel:702-718-6934"
                      className="block w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-2 px-4 rounded text-center transition-colors text-sm"
                    >
                      Contact Us
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#22c55e] text-white py-20">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-[40px] font-bold mb-4">Ready to work with our team?</h2>
            <p className="text-xl mb-8">Get your free, no-obligation cash offer today</p>

            <a
              href="#contact"
              className="bg-white text-[#22c55e] hover:bg-gray-100 font-bold px-10 py-4 rounded text-lg transition-colors inline-block"
            >
              Get Started →
            </a>

            <p className="text-lg mt-6">
              Or call us: <a href="tel:702-718-6934" className="font-bold hover:underline">(702) 718-6934</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
