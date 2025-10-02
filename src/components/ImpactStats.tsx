'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Heart, Users, MapPin, Award, TrendingUp, Clock } from 'lucide-react';

const ImpactStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [counts, setCounts] = useState({
    smiles: 0,
    communities: 0,
    camps: 0,
    years: 0,
    countries: 0,
    volunteers: 0
  });

  const stats = [
    {
      icon: Heart,
      value: 10000,
      suffix: '+',
      label: 'Smiles Brightened',
      description: 'Lives transformed through quality dental care',
      color: 'primary'
    },
    {
      icon: MapPin,
      value: 50,
      suffix: '+',
      label: 'Communities Served',
      description: 'Underserved areas across East Africa',
      color: 'accent'
    },
    {
      icon: Users,
      value: 25,
      suffix: '+',
      label: 'Dental Camps',
      description: 'Mobile clinics bringing care to communities',
      color: 'secondary'
    },
    {
      icon: Clock,
      value: 5,
      suffix: '+',
      label: 'Years of Impact',
      description: 'Sustained commitment to community health',
      color: 'primary'
    },
    {
      icon: MapPin,
      value: 5,
      suffix: '',
      label: 'Countries',
      description: 'Kenya, Uganda, Tanzania, Rwanda, Burundi',
      color: 'accent'
    },
    {
      icon: Award,
      value: 200,
      suffix: '+',
      label: 'Volunteers',
      description: 'Dedicated professionals and community members',
      color: 'secondary'
    }
  ];

  const achievements = [
    {
      title: 'Blockchain Transparency',
      description: '100% transparent donations through DAO technology',
      icon: TrendingUp
    },
    {
      title: 'Community Partnership',
      description: 'Collaborating with local leaders and organizations',
      icon: Users
    },
    {
      title: 'Sustainable Impact',
      description: 'Long-term solutions for oral health challenges',
      icon: Heart
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-emerald-50',
          icon: 'text-emerald-600',
          iconBg: 'bg-emerald-100',
          text: 'text-emerald-600'
        };
      case 'accent':
        return {
          bg: 'bg-accent-50',
          icon: 'text-accent-600',
          iconBg: 'bg-accent-100',
          text: 'text-accent-600'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-50',
          icon: 'text-secondary-600',
          iconBg: 'bg-secondary-100',
          text: 'text-secondary-600'
        };
      default:
        return {
          bg: 'bg-emerald-50',
          icon: 'text-emerald-600',
          iconBg: 'bg-emerald-100',
          text: 'text-emerald-600'
        };
    }
  };

  // Counter animation
  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const targetCounts = {
      smiles: 10000,
      communities: 50,
      camps: 25,
      years: 5,
      countries: 5,
      volunteers: 200
    };

    const stepSizes = {
      smiles: targetCounts.smiles / steps,
      communities: targetCounts.communities / steps,
      camps: targetCounts.camps / steps,
      years: targetCounts.years / steps,
      countries: targetCounts.countries / steps,
      volunteers: targetCounts.volunteers / steps
    };

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCounts({
        smiles: Math.min(Math.floor(stepSizes.smiles * currentStep), targetCounts.smiles),
        communities: Math.min(Math.floor(stepSizes.communities * currentStep), targetCounts.communities),
        camps: Math.min(Math.floor(stepSizes.camps * currentStep), targetCounts.camps),
        years: Math.min(Math.floor(stepSizes.years * currentStep), targetCounts.years),
        countries: Math.min(Math.floor(stepSizes.countries * currentStep), targetCounts.countries),
        volunteers: Math.min(Math.floor(stepSizes.volunteers * currentStep), targetCounts.volunteers)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targetCounts);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-accent-50">
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
            Our <span className="gradient-text">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every number represents a life touched, a smile brightened, and a community empowered through our mission.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            const currentCount = counts[stat.label.toLowerCase().replace(/\s+/g, '') as keyof typeof counts] || 0;
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`${colors.bg} rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-emerald-100`}
              >
                <div className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <stat.icon className={`h-8 w-8 ${colors.icon}`} />
                </div>

                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-4xl lg:text-5xl font-bold gradient-text-green mb-2`}
                >
                  {currentCount.toLocaleString()}{stat.suffix}
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{stat.label}</h3>
                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Key Achievements</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to transparency, community partnership, and sustainable impact drives everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h4>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
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
            <h3 className="text-3xl font-bold mb-4">Be Part of Our Impact</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of supporters who are making a difference in communities across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Donate Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors duration-200 shadow-lg"
              >
                Volunteer
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;
