'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Users, Coins, ArrowRight, CheckCircle, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Coins,
      title: 'DAO Donations',
      description: 'Contribute to our blockchain-based DAO to support dental care initiatives across East Africa.',
      features: [
        'Transparent blockchain transactions',
        'Community governance participation',
        'Real-time impact tracking',
        'Tax-deductible contributions'
      ],
      color: 'primary',
      cta: 'Donate Now'
    },
    {
      icon: Shield,
      title: 'Dental Insurance',
      description: 'Comprehensive dental insurance coverage for members to access quality care from our network of providers.',
      features: [
        'Network of certified dentists',
        'Preventive care coverage',
        'Emergency dental services',
        'Affordable premium plans'
      ],
      color: 'accent',
      cta: 'Get Coverage'
    },
    {
      icon: Users,
      title: 'Community Camps',
      description: 'Mobile dental camps bringing essential oral health services directly to underserved communities.',
      features: [
        'Free dental checkups',
        'Basic treatments provided',
        'Oral health education',
        'Follow-up care coordination'
      ],
      color: 'secondary',
      cta: 'Join a Camp'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Quality Care',
      description: 'All our dental providers are certified and committed to delivering the highest standards of care.'
    },
    {
      icon: Heart,
      title: 'Community Focus',
      description: 'Every service is designed with the needs of underserved communities at the center.'
    },
    {
      icon: Star,
      title: 'Proven Impact',
      description: 'Over 10,000 smiles brightened and 50+ communities served across East Africa.'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-emerald-50',
          icon: 'text-emerald-600',
          iconBg: 'bg-emerald-100',
          button: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600',
          border: 'border-emerald-200'
        };
      case 'accent':
        return {
          bg: 'bg-accent-50',
          icon: 'text-accent-600',
          iconBg: 'bg-accent-100',
          button: 'bg-gradient-to-r from-accent-500 to-purple-500 hover:from-accent-600 hover:to-purple-600',
          border: 'border-accent-200'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-50',
          icon: 'text-secondary-600',
          iconBg: 'bg-secondary-100',
          button: 'bg-gradient-to-r from-secondary-500 to-indigo-500 hover:from-secondary-600 hover:to-indigo-600',
          border: 'border-secondary-200'
        };
      default:
        return {
          bg: 'bg-emerald-50',
          icon: 'text-emerald-600',
          iconBg: 'bg-emerald-100',
          button: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600',
          border: 'border-emerald-200'
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-aurora">
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
            Our <span className="gradient-text-blue">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive dental care solutions through innovative blockchain technology, 
            community-driven initiatives, and accessible insurance programs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${colors.bg} rounded-3xl p-8 border ${colors.border} hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className={`h-8 w-8 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className={`h-5 w-5 ${colors.icon} flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${colors.button} text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center group`}
                >
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-emerald-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MenoDAO?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine traditional dental care with innovative blockchain technology to create 
              sustainable, transparent, and impactful solutions for underserved communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-accent-500 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join us in our mission to brighten smiles and empower communities across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Start Donating
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors duration-200 shadow-lg"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
