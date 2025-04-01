
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white flex flex-col items-center p-10">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="text-4xl font-bold mb-10">
        Mi Libro de Poesía
      </motion.h1>
      <Card className="w-full max-w-3xl mb-4 shadow-2xl rounded-2xl">
        <CardContent className="p-6">
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-xl">
            Aquí puedes escribir tus poemas y verlos en tiempo real.
          </motion.p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
