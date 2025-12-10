'use client';

import { useEffect } from 'react';
import { appendUTMsToUrl } from '../../utils/utms';

/**
 * Hook que aplica UTMs automaticamente em todos os links com data-append-utms="true"
 * Roda automaticamente em todas as páginas
 */
export function useAppendUTMs() {
  useEffect(() => {
    // Função para atualizar os links
    const updateLinks = () => {
      const elements = document.querySelectorAll<HTMLAnchorElement>('[data-append-utms="true"]');
      
      elements.forEach((element) => {
        // Obter href original (do atributo salvo ou do href atual)
        let originalHref = element.getAttribute('data-original-href');
        
        if (!originalHref) {
          // Salvar href original na primeira vez
          originalHref = element.href;
          element.setAttribute('data-original-href', originalHref);
        }
        
        // Aplicar UTMs apenas se ainda não foram aplicadas
        // Verificar se o href atual já tem UTMs para evitar duplicação
        const currentHref = element.href;
        const hasUTMs = currentHref.includes('utm_source') || currentHref.includes('utm_medium') || 
                       currentHref.includes('fbclid') || currentHref.includes('gclid');
        
        if (!hasUTMs) {
          const urlWithUTMs = appendUTMsToUrl(originalHref);
          element.href = urlWithUTMs;
        }
      });
    };

    // Executar imediatamente
    updateLinks();

    // Observar mudanças no DOM (para elementos carregados dinamicamente)
    const observer = new MutationObserver(updateLinks);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

