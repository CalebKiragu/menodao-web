'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Target, Award, MapPin, Calendar } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We believe every person deserves access to quality dental care, regardless of their circumstances.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our mission is driven by the needs of underserved communities in Kenya and East Africa.',
    },
    {
      icon: Target,
      title: 'Sustainable Impact',
      description: 'We create lasting change through education, prevention, and accessible treatment programs.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of dental care and professional service delivery.',
    },
  ];

  const milestones = [
    { year: '2019', event: 'MenoDAO Founded by Dr. Said "Papi" Athman' },
    { year: '2020', event: 'First Dental Camp in Nairobi' },
    { year: '2021', event: 'Blockchain DAO Integration' },
    { year: '2022', event: 'Dental Insurance Program Launch' },
    { year: '2023', event: 'Expansion to 5 East African Countries' },
    { year: '2024', event: '10,000+ Smiles Brightened' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-ocean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text-green">MenoDAO</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded by Dr. Said &quot;Papi&quot; Athman, MenoDAO is a non-profit organization dedicated to 
            providing quality dental care to underserved and marginalized communities across Kenya and East Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Founder Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Founder Image Placeholder */}
              <div className="relative bg-gradient-to-br from-emerald-100 via-teal-50 to-accent-100 rounded-3xl p-8 shadow-xl">
                <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center pulse-glow">
                      <Award className="h-16 w-16 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Dr. Said &quot;Papi&quot; Athman
                    </h3>
                    <p className="text-gray-600">
                      Founder & Chief Dental Officer
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-accent-500 to-purple-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg"
              >
                <span className="text-xs sm:text-sm font-semibold">Founder</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To brighten smiles, improve oral health, and empower disadvantaged communities by providing 
                accessible, quality dental care through innovative blockchain technology and community-driven initiatives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every person, regardless of their socioeconomic status, has access to quality 
                dental care and can maintain optimal oral health throughout their lives.
              </p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-500" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-teal-500" />
                <span>Founded 2019</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-emerald-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 via-teal-200 to-accent-200 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-sm">{milestone.year}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">{milestone.event}</h4>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full border-4 border-white shadow-lg z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
