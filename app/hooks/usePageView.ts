'use client';

import { useEffect } from 'react';

/**
 * Hook para garantir que o pageview seja enviado apenas uma vez
 * Usa uma flag no window para evitar disparos duplicados
 */
export function usePageView() {
  useEffect(() => {
    // Verificar se window está disponível (client-side)
    if (typeof window === 'undefined') {
      return;
    }

    // Verificar se já foi enviado usando flag no window
    if ((window as any).__pageview_sent__) {
      return;
    }

    // Marcar como enviado ANTES de disparar o evento
    (window as any).__pageview_sent__ = true;

    // Verificar se vturb está disponível e disparar pageview
    if (typeof (window as any).vturb === 'function') {
      (window as any).vturb('pageview');
    }

    // Também garantir que o Facebook Pixel não dispare duplicado
    if (typeof (window as any).fbq === 'function' && !(window as any).__fbq_pageview_sent__) {
      (window as any).__fbq_pageview_sent__ = true;
      // Não disparar aqui, pois já está no layout.tsx
      // Apenas marcar para evitar duplicação se houver outro lugar chamando
    }
  }, []);
}

