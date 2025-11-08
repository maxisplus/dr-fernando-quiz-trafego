export type QuizVariationKey = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

export interface QuizVariationConfig {
  key: QuizVariationKey;
  utmValue: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
}

export const quizVariations: Record<QuizVariationKey, QuizVariationConfig> = {
  a: {
    key: 'a',
    utmValue: 'A',
    headline: 'Você faz tudo “certo”. Mas o seu corpo não responde. Por quê?',
    subheadline:
      'Descubra em 60 segundos se o bloqueio é hormonal, metabólico ou emocional. Antes de tentar mais uma dieta que só te culpa.',
    ctaLabel: 'FAZER O TESTE',
  },
  b: {
    key: 'b',
    utmValue: 'B',
    headline: 'Antes de mudar a alimentação, descubra o que está travando o seu corpo.',
    subheadline:
      'Em poucos segundos, identifique se o problema é hormonal — e receba o caminho certo para o seu metabolismo voltar a funcionar.',
    ctaLabel: 'FAZER O TESTE',
  },
  c: {
    key: 'c',
    utmValue: 'C',
    headline: 'E se o problema nunca foi você… e sim o hormônio errado, na hora errada?',
    subheadline:
      'Faça o teste e descubra qual dos 3 bloqueios está impedindo seu emagrecimento. Hormonal, Metabólico ou Emocional',
    ctaLabel: 'FAZER O TESTE',
  },
  d: {
    key: 'd',
    utmValue: 'D',
    headline: 'Você não está errada. Sua estratégia está.',
    subheadline:
      'Descubra o que está impedindo o seu corpo de emagrecer — sem trocar carbo por culpa.',
    ctaLabel: 'FAZER O TESTE',
  },
  e: {
    key: 'e',
    utmValue: 'E',
    headline: 'Seu corpo não emagrece porque está travado. A única pergunta é: por qual motivo?',
    subheadline:
      'Faça o teste e descubra se a causa é hormonal, inflamatória ou comportamental.',
    ctaLabel: 'FAZER O TESTE',
  },
  f: {
    key: 'f',
    utmValue: 'F',
    headline: 'Você não emagrece porque está atacando o problema errado.',
    subheadline:
      'Seu corpo não é uma calculadora. É um sistema hormonal. Descubra em 60 segundos o que está travando.',
    ctaLabel: 'FAZER O TESTE',
  },
};

export function getQuizVariation(key: QuizVariationKey): QuizVariationConfig {
  return quizVariations[key];
}

