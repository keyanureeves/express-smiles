"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const questions = [
  {
    id: 1,
    question: "How often do you brush your teeth?",
    options: [
      { label: "Once a day", score: 1 },
      { label: "Twice a day", score: 2 },
      { label: "After every meal", score: 3 },
      { label: "Less than once a day", score: 0 },
    ],
  },
  {
    id: 2,
    question: "How often do you floss?",
    options: [
      { label: "Daily", score: 3 },
      { label: "A few times a week", score: 2 },
      { label: "Occasionally", score: 1 },
      { label: "Never", score: 0 },
    ],
  },
  {
    id: 3,
    question: "When was your last dental check-up?",
    options: [
      { label: "Within the last 6 months", score: 3 },
      { label: "6-12 months ago", score: 2 },
      { label: "Over a year ago", score: 1 },
      { label: "I can't remember", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Do you experience any tooth sensitivity?",
    options: [
      { label: "Never", score: 3 },
      { label: "Occasionally", score: 2 },
      { label: "Frequently", score: 1 },
      { label: "Always", score: 0 },
    ],
  },
  {
    id: 5,
    question: "How often do you consume sugary foods or drinks?",
    options: [
      { label: "Rarely", score: 3 },
      { label: "A few times a week", score: 2 },
      { label: "Daily", score: 1 },
      { label: "Multiple times a day", score: 0 },
    ],
  },
];

const DentalHealthQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getResult = () => {
    const total = answers.reduce((sum, score) => sum + score, 0);
    if (total >= 13) {
      return {
        title: "Excellent!",
        message: "You're doing a great job with your oral hygiene! Keep up the excellent work and continue regular dental check-ups.",
        color: "text-green-600",
      };
    } else if (total >= 8) {
      return {
        title: "Good",
        message: "Your oral hygiene routine is decent, but there's room for improvement. Consider flossing daily and reducing sugar intake.",
        color: "text-yellow-600",
      };
    } else {
      return {
        title: "Needs Attention",
        message: "Your dental health needs attention. We recommend scheduling a dental check-up soon to prevent potential issues.",
        color: "text-red-600",
      };
    }
  };

  if (showResult) {
    const result = getResult();
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6 text-center">
          <h3 className={`text-2xl font-bold mb-4 ${result.color}`}>{result.title}</h3>
          <p className="text-gray-600 mb-6">{result.message}</p>
          <Button onClick={resetQuiz}>Retake Quiz</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <div className="mb-4">
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <div
              className="h-2 bg-primary rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-6">{questions[currentQuestion].question}</h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start text-left h-auto py-3"
              onClick={() => handleAnswer(option.score)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DentalHealthQuiz;
