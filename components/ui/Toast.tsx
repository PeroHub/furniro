'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export default function Toast() {
  const { toast } = useStore();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#333333] text-white px-5 py-3.5 rounded-lg shadow-xl border border-neutral-700/50"
        >
          <div className="w-6 h-6 rounded-full bg-[#B88E2F] flex items-center justify-center text-white shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium tracking-wide">{toast}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
