'use client';

import { useAppendUTMs } from '../hooks/useAppendUTMs';

/**
 * Provider global para aplicar UTMs em links
 * Deve ser usado no layout principal
 */
export function UTMsProvider({ children }: { children: React.ReactNode }) {
  useAppendUTMs();
  return <>{children}</>;
}

