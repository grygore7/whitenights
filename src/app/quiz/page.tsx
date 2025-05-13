
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Chi è l'autore de \"Le Notti Bianche\"?",
    options: ["Lev Tolstoj", "Fëdor Dostoevskij", "Ivan Turgenev", "Aleksandr Puškin"],
    correctAnswerIndex: 1,
  },
  {
    id: 2,
    text: "In quale città è principalmente ambientato il racconto \"Le Notti Bianche\"?",
    options: ["Mosca", "Kiev", "San Pietroburgo", "Varsavia"],
    correctAnswerIndex: 2,
  },
  {
    id: 3,
    text: "Come si chiama la protagonista femminile che il Sognatore incontra?",
    options: ["Anna", "Sofia", "Nasten'ka", "Katerina"],
    correctAnswerIndex: 2,
  },
  {
    id: 4,
    text: "Qual è il soprannome del protagonista maschile del racconto?",
    options: ["L'Inquilino", "Il Solitario", "Il Sognatore", "L'Artista"],
    correctAnswerIndex: 2,
  },
  {
    id: 5,
    text: "Per quante notti si incontrano principalmente i due protagonisti?",
    options: ["Una notte", "Tre notti", "Quattro notti", "Sette notti"],
    correctAnswerIndex: 2,
  },
];

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({});
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = () => {
    let currentScore = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setQuizCompleted(true);
  };

  const handleRetryQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setQuizCompleted(false);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  if (quizCompleted) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <Card className="shadow-lg max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="font-cormorant-garamond text-3xl">Risultati del Quiz!</CardTitle>
            <div className={`flex justify-center mt-4 ${score >= quizQuestions.length / 2 ? 'text-green-500' : 'text-red-500'}`}>
              {score >= quizQuestions.length / 2 ? <CheckCircle className="w-16 h-16" /> : <AlertCircle className="w-16 h-16" />}
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl mb-4">
              Il tuo punteggio è: <span className="font-bold">{score}</span> su <span className="font-bold">{quizQuestions.length}</span>.
            </p>
            <Button onClick={handleRetryQuiz} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <RotateCcw className="mr-2 h-5 w-5" />
              Riprova il Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <Card className="shadow-lg max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="font-cormorant-garamond text-3xl text-center">Quiz Interattivo su "Le Notti Bianche"</CardTitle>
          <CardDescription className="text-center text-lg mt-2">
            Metti alla prova la tua conoscenza dell'opera!
          </CardDescription>
          <Progress value={progressPercentage} className="mt-4" />
           <p className="text-sm text-muted-foreground text-center mt-2">Domanda {currentQuestionIndex + 1} di {quizQuestions.length}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold font-lato">{currentQuestion.text}</h2>
            <RadioGroup
              value={selectedAnswers[currentQuestion.id]?.toString()}
              onValueChange={(value) => handleAnswerSelect(currentQuestion.id, parseInt(value))}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-secondary/50 transition-colors">
                  <RadioGroupItem value={index.toString()} id={`q${currentQuestion.id}-o${index}`} />
                  <Label htmlFor={`q${currentQuestion.id}-o${index}`} className="text-base flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <Button
              onClick={handleNextQuestion}
              disabled={selectedAnswers[currentQuestion.id] === null || selectedAnswers[currentQuestion.id] === undefined}
              className="w-full md:w-auto"
              size="lg"
            >
              {currentQuestionIndex < quizQuestions.length - 1 ? 'Prossima Domanda' : 'Mostra Risultati'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
