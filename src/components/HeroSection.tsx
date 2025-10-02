'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Shield, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { number: '10,000+', label: 'Smiles Brightened' },
    { number: '50+', label: 'Communities Served' },
    { number: '25+', label: 'Dental Camps' },
    { number: '5', label: 'Years of Impact' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-nature" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" />
        <div className="absolute top-40 right-4 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
            >
              <Heart className="h-4 w-4 mr-2" />
              Non-Profit Organization
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Brightening{' '}
              <span className="gradient-text-green">Smiles</span>
              <br />
              Empowering{' '}
              <span className="gradient-text-purple">Communities</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              MenoDAO provides quality dental care to underserved communities in Kenya and East Africa through blockchain technology and community-driven initiatives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent-500 text-accent-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-500 hover:text-white transition-colors duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold gradient-text-green mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Hero Image Placeholder */}
              <div className="relative bg-gradient-to-br from-emerald-100 via-teal-50 to-accent-100 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center pulse-glow">
                      <Heart className="h-16 w-16 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Community Dental Care
                    </h3>
                    <p className="text-gray-600">
                      Bringing smiles to underserved communities
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-2xl p-2 sm:p-4 shadow-lg border border-emerald-200"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 text-emerald-600" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Community</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-2xl p-2 sm:p-4 shadow-lg border border-accent-200"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-accent-600" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Insurance</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
