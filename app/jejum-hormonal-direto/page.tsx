import { Metadata } from 'next';
import { JejumHormonalDiretoClient } from './JejumHormonalDiretoClient';

export const metadata: Metadata = {
  title: 'Jejum Hormonal® | Dr. Fernando Del Piero',
  description: 'Descubra por que você não emagrece. A resposta está nos seus hormônios. Método que já ajudou mais de 10 mil mulheres.',
};

export default function JejumHormonalDiretoPage() {
  return <JejumHormonalDiretoClient />;
}

