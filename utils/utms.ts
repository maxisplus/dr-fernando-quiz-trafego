/**
 * Helper para capturar e manipular UTMs da URL
 */

/**
 * Captura todas as UTMs da URL atual e retorna como string de query
 * Exemplo: "?utm_source=facebook&utm_medium=cpc&utm_campaign=teste"
 */
export function getUTMs(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: string[] = [];

  // Lista de parâmetros UTM comuns
  const utmKeys = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'utm_id',
    'fbclid',
    'gclid',
    'ttclid',
  ];

  utmKeys.forEach((key) => {
    const value = urlParams.get(key);
    if (value) {
      utmParams.push(`${key}=${encodeURIComponent(value)}`);
    }
  });

  if (utmParams.length === 0) {
    return '';
  }

  return `?${utmParams.join('&')}`;
}

/**
 * Recebe uma URL e anexa as UTMs atuais ao final dela
 * Preserva qualquer query existente na URL
 * 
 * @param url - URL base (ex: "/lipedema" ou "https://example.com/page")
 * @returns URL com UTMs anexadas
 */
export function appendUTMsToUrl(url: string): string {
  const utms = getUTMs();
  
  if (!utms) {
    return url;
  }

  // Se a URL já tem query params, usar &, senão usar ?
  const separator = url.includes('?') ? '&' : '?';
  
  // Remover o ? inicial das UTMs se já estamos adicionando
  const utmsToAppend = utms.startsWith('?') ? utms.substring(1) : utms;
  
  return `${url}${separator}${utmsToAppend}`;
}

