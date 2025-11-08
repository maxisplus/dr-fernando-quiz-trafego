import { Metadata } from 'next';
import { QuizForm } from '../quiz/QuizForm';
import { QuizLayout } from '../quiz/QuizLayout';
import { getQuizVariation } from '../quiz/quizConfig';

const variationKey = 'a';
const variation = getQuizVariation(variationKey);

export const metadata: Metadata = {
  title: `${variation.headline} | Quiz Dr. Fernando`,
  description: variation.subheadline,
};

export default function VariationAPage() {
  return (
    <QuizLayout variationKey={variationKey}>
      <QuizForm variationKey={variationKey} />
    </QuizLayout>
  );
}

