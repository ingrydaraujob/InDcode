'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);
  const words = ['futuro', 'sucesso', 'inovação'];
  
  // Referências para as seções
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  
  // Efeito de digitação
  useEffect(() => {
    const handleTyping = () => {
      const current = currentWord % words.length;
      const fullWord = words[current];
      
      setText(isDeleting 
        ? fullWord.substring(0, text.length - 1)
        : fullWord.substring(0, text.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 75 : 150);
      
      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentWord(currentWord + 1);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWord, typingSpeed, words]);
  
  
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

  // Funções de scroll
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Funções de contato
  const openWhatsApp = () => {
    const phoneNumber = '5581996559325';
    const message = 'Olá! Gostaria de uma consultoria gratuita sobre desenvolvimento web com a InD Code.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  const openEmail = () => {
    const email = 'Danilomateus739@gmail.com';
    const subject = 'Consultoria - InD Code';
    const body = 'Olá! Tenho interesse em conhecer mais sobre os serviços da InD Code e gostaria de agendar uma consultoria gratuita.';
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  // Variantes de animação
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const floatAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      
    
      {/* Hero Section */}
      {/* Botão flutuante do WhatsApp */}
<motion.button
  onClick={openWhatsApp}
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 200, damping: 10 }}
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-6 h-6"
    fill="currentColor"
  >
    <path d="M380.9 97.1C339-2.9 207.1-32.3 117.1 28.1 27 88.6-3.5 220.4 57 310.4l-15.9 73.9c-2.7 12.7 8.5 23.8 21.2 21.1l74-15.9c89.9 60.6 221.8 30.1 282.3-60 60.5-90 31.1-221.9-38.7-281.9zM224 416c-36.5 0-72.1-9.6-103.4-28L96 400l12-55.2c-19.2-30.2-29.3-65.2-29.2-101.4C78.9 153.8 143.7 88 224 88c80.3 0 145.1 65.8 145.1 145.3 0 80.2-65.8 145.1-145.1 145.1zM273.6 303c-4.1-2.1-24.1-11.9-27.9-13.2-3.8-1.4-6.6-2.1-9.4 2.1-2.8 4.1-10.8 13.2-13.2 15.9-2.4 2.8-4.9 3.2-9 1.1-24.5-12.3-40.5-22-56.7-49.7-4.3-7.4 4.3-6.9 12.3-23.1 1.4-2.8.7-5.2-.4-7.4-1.1-2.1-9.4-22.7-12.9-31.2-3.4-8.2-6.9-7.1-9.4-7.2-2.4-.1-5.2-.1-8-.1s-7.4 1.1-11.3 5.2c-3.9 4.1-14.8 14.4-14.8 35.2s15.2 40.9 17.3 43.7c2.1 2.8 29.9 45.7 72.5 64.1 10.1 4.3 18 6.9 24.2 8.9 10.1 3.2 19.2 2.7 26.4 1.6 8.1-1.2 24.1-9.8 27.5-19.3 3.4-9.4 3.4-17.4 2.4-19.3-.9-1.9-3.7-3-7.8-5.1z" />
  </svg>
</motion.button>

      
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
        {/* Elementos decorativos */}
        
        <motion.div 
          className="absolute top-20 left-10 w-2 h-2 bg-indigo-400 rounded-full"
          variants={floatAnimation}
          animate="animate"
        />
        
        <motion.div 
          className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full"
          variants={floatAnimation}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-2 h-2 bg-pink-400 rounded-full"
          variants={floatAnimation}
          animate="animate"
          transition={{ delay: 4 }}
        />
    
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
          

 <div className="flex items-center mb-6 ml-8">
    <img 
      src="/icon-fundotransparente.png" 
      alt="InD Code Logo" 
      className="w-12 h-12 mr-3"
    />
    <span className="text-2xl font-bold text-white">InD Code</span>
  </div>

  <h1 className="text-5xl lg:text-7xl font-bold text-white mb-10 leading-tight ml-8">
    Sites que 
    <span className="gradient-text"> conectam </span> 
    sua marca ao 
    <span className="gradient-text border-r-2 border-indigo-600 animate-pulse ml-4">{text}</span>
  </h1>

  <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-lg">
    Desenvolvemos experiências digitais <strong>rápidas</strong>, <strong>responsivas</strong> e <strong>sob medida</strong> para impulsionar o seu sucesso no ambiente digital.
  </p>

  <div className="flex flex-col sm:flex-row gap-6 mb-14">
    <button 
      onClick={scrollToServices} 
      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 glow-effect"
    >
      Explorar Serviços
    </button>

    <button 
      onClick={scrollToContact} 
      className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
    >
      Falar com Especialista
    </button>
  </div>


              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
              
              </div>
            </motion.div>
            
            {/* Visual Element */}
         <motion.div 
  className="relative"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <motion.div 
    className="bg-black/40 rounded-2xl p-8" // fundo preto semi-transparente
    variants={floatAnimation}
    animate="animate"
  >
    <div className="mono text-green-400 text-sm mb-4">$ npm run build</div>
    <div className="space-y-2 text-gray-300 text-sm">
      <div>✓ Compilando componentes...</div>
      <div>✓ Otimizando performance...</div>
      <div>✓ Gerando build responsivo...</div>
      <div className="text-green-400">✓ Deploy realizado com sucesso!</div>
    </div>
  </motion.div>
</motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
      {/* Background com profundidade */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-indigo-100 to-white blur-xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Tag de seção */}
          <motion.div 
            className="mono text-indigo-600 text-sm font-medium mb-4 tracking-wider"
            variants={itemVariants}
          >
            &lt;/SOBRE_NÓS&gt;
          </motion.div>

          {/* Título com animação na palavra-chave */}
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            variants={itemVariants}
          >
            Tecnologia que{' '}
            <motion.span
              className="gradient-text inline-block"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              transforma
            </motion.span>
          </motion.h2>

          {/* Parágrafos com stagger */}
          <motion.div 
            className="max-w-4xl mx-auto text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-xl text-gray-600 leading-relaxed mb-6">
              Somos uma <strong>equipe apaixonada</strong> por tecnologia e design. Criamos soluções digitais que ajudam empresas e pessoas a se destacarem na internet.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
              Do <strong>planejamento estratégico</strong> ao <strong>lançamento final</strong>, cuidamos de cada detalhe para entregar sites modernos, seguros e funcionais que geram resultados reais.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Services Section */}
<section id="services" ref={servicesRef} className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
  {/* Elementos de fundo decorativos */}
  <div className="absolute top-0 left-0 w-full h-full opacity-5">
    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
    <div className="absolute top-60 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-4000"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    <motion.div 
      className="text-center mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
    >
      <motion.div 
        className="mono text-indigo-600 text-sm font-medium mb-4 tracking-wider inline-block px-4 py-1 bg-indigo-100 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        &lt;/SERVIÇOS&gt;
      </motion.div>
      <motion.h2 
        className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Soluções <span className="gradient-text bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">completas</span>
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Oferecemos um ecossistema completo de serviços digitais para impulsionar sua presença online e otimizar seus processos
      </motion.p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div 
        className="group relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
          }
        }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
        <div className="service-card relative bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Sites Responsivos</h3>
          <p className="text-gray-600 mb-6">Experiências perfeitas em todos os dispositivos - mobile, tablet e desktop com performance otimizada e carregamento ultrarrápido.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Mobile-First</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">SEO Otimizado</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Performance</span>
          </div>
         
        </div>
      </motion.div>

      <motion.div 
        className="group relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.1 }
          }
        }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
        <div className="service-card relative bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Sistemas Sob Medida</h3>
          <p className="text-gray-600 mb-6">Ferramentas personalizadas para automatizar processos, integrar sistemas existentes e aumentar a produtividade da sua empresa.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Customização</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Automação</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Integração</span>
          </div>
         
        </div>
      </motion.div>

      <motion.div 
        className="group relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 }
          }
        }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
        <div className="service-card relative bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Design UI/UX</h3>
          <p className="text-gray-600 mb-6">Interfaces intuitivas e experiências visuais que encantam usuários, aumentam o engajamento e maximizam conversões.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">User Research</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Prototipagem</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Testes A/B</span>
          </div>
         
        </div>
      </motion.div>

      <motion.div 
        className="group relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 }
          }
        }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
        <div className="service-card relative bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Manutenção & Suporte 24/7</h3>
          <p className="text-gray-600 mb-6">Monitoramento contínuo, atualizações de segurança, backups automáticos e suporte técnico especializado sempre que precisar.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Monitoramento</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Backups</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Suporte</span>
          </div>
        
        </div>
      </motion.div>
    </div>

    <motion.div 
      className="text-center mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
    >
      
    </motion.div>
  </div>
</section>

      {/* Differentials Section */}
<section id="differentials" className="py-24 bg-white relative overflow-hidden">
  {/* Elementos de fundo decorativos */}
  <div className="absolute top-0 left-0 w-full h-full opacity-5">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float-medium animation-delay-2000"></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    <motion.div 
      className="text-center mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" }
        }
      }}
    >
      <motion.div 
        className="mono text-indigo-600 text-sm font-medium mb-4 tracking-wider inline-block px-4 py-1 bg-indigo-100 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        &lt;/DIFERENCIAIS&gt;
      </motion.div>
      <motion.h2 
        className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Por que escolher a <span className="gradient-text bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">InD Code</span>?
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Descubra os diferenciais que nos tornam a escolha certa para impulsionar seu negócio digital
      </motion.p>
    </motion.div>
    
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        <motion.div 
          className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
          }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-indigo-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0h2M9 21h2"></path>
              </svg>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">Design Exclusivo & Moderno</h3>
            <p className="text-gray-600">Cada projeto é único, desenvolvido especialmente para sua marca com as últimas tendências de design e interfaces que convertem.</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }
          }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-green-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">Suporte Ágil & Especializado</h3>
            <p className="text-gray-600">Atendimento direto com nossa equipe técnica, respostas rápidas e soluções eficientes para manter seu negócio sempre online.</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }
          }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-blue-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Entrega Garantida no Prazo</h3>
            <p className="text-gray-600">Metodologia ágil com cronogramas realistas. Seus projetos sempre entregues no tempo acordado, sem surpresas.</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }
          }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-purple-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Tecnologia de Ponta</h3>
            <p className="text-gray-600">Utilizamos as tecnologias mais avançadas para garantir performance, segurança e escalabilidade para seu crescimento.</p>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Visual Element - Process Timeline */}
      <motion.div 
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" }
          }
        }}
      >
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-indigo-100 relative overflow-hidden">
          {/* Elemento decorativo */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-200 rounded-full opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
          
          <div className="relative z-10">
            <div className="mono text-indigo-600 text-sm mb-6 font-medium tracking-wide">// NOSSO PROCESSO</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Metodologia que garante resultados</h3>
            
            <div className="space-y-8 relative">
              {/* Linha do tempo */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300"></div>
              
              <motion.div 
                className="flex items-start space-x-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 shadow-lg">
                  <span>1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Análise & Estratégia</h4>
                  <p className="text-gray-600">Compreendemos seu negócio, objetivos e definimos a estratégia digital ideal.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 shadow-lg">
                  <span>2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Design & Prototipagem</h4>
                  <p className="text-gray-600">Criamos interfaces intuitivas e experiências visuais que encantam seus usuários.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 shadow-lg">
                  <span>3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Desenvolvimento</h4>
                  <p className="text-gray-600">Implementamos com tecnologias modernas, código limpo e boas práticas.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 shadow-lg">
                  <span>4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Testes & Lançamento</h4>
                  <p className="text-gray-600">Garantimos qualidade, performance e uma implantação suave e bem-sucedida.</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-10 pt-6 border-t border-indigo-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-4 shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">Processo comprovado que já entregou <span className="text-indigo-600"> otimos projetos</span> </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section id="contact" ref={contactRef} className="py-24 hero-bg relative overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-2 h-2 bg-indigo-400 rounded-full"
          variants={floatAnimation}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-3 h-3 bg-purple-400 rounded-full"
          variants={floatAnimation}
          animate="animate"
          transition={{ delay: 3 }}
        />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            className="mono text-indigo-400 text-sm font-medium mb-4 tracking-wider"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            &lt;/VAMOS_COMEÇAR&gt;
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Transforme sua <span className="gradient-text">visão</span> em realidade
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Fale com nossa equipe de especialistas e descubra como podemos impulsionar seu negócio no ambiente digital.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <button onClick={openWhatsApp} className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-all duration-300 glow-effect flex items-center justify-center space-x-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>WhatsApp</span>
            </button>
            <button onClick={openEmail} className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>E-mail</span>
            </button>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="glass-effect rounded-2xl p-6 max-w-md mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="mono text-indigo-400 text-sm mb-2">Resposta em até 12 horas</div>
            <div className="text-white font-medium">Consultoria gratuita • Orçamento sem compromisso</div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12">
  <img src="/icon-fundotransparente.png" alt="InD Code" className="w-12 h-12 object-contain rounded-xl" />
</div>
              <div className="text-left">
                <h3 className="text-2xl font-bold">InD Code</h3>
                <p className="text-gray-400 mono text-sm">Innovation • Design • Development</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Transformando ideias em experiências digitais excepcionais. Sites que conectam sua marca ao futuro digital.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .dark-glass {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .hero-bg {
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
        }
        
        .glow-effect {
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
        }
        
        .code-bg {
          background-image: 
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
          @keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-5deg); }
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 8s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
        
        .service-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid rgba(99, 102, 241, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .service-card:hover::before {
          left: 100%;
        }
        
        .mono {
          font-family: 'JetBrains Mono', monospace;
        }
      `}</style>
    </div>
  );
}