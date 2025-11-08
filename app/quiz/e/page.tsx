import { Metadata } from 'next';
import { QuizForm } from '../QuizForm';
import { QuizLayout } from '../QuizLayout';
import { getQuizVariation } from '../quizConfig';

const variationKey = 'e';
const variation = getQuizVariation(variationKey);

export const metadata: Metadata = {
  title: `${variation.headline} | Quiz Dr. Fernando`,
  description: variation.subheadline,
};

export default function QuizVariationEPage() {
  return (
    <QuizLayout variationKey={variationKey}>
      <QuizForm variationKey={variationKey} />
    </QuizLayout>
  );
}

