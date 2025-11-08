import { Metadata } from 'next';
import { JejumHormonalClient } from './JejumHormonalClient';

export const metadata: Metadata = {
  title: 'Jejum Hormonal® | Dr. Fernando Del Piero',
  description: 'Descubra por que você não emagrece. A resposta está nos seus hormônios. Método que já ajudou mais de 10 mil mulheres.',
};

export default function JejumHormonalPage() {
  return <JejumHormonalClient />;
}
