
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle, RotateCcw, HelpCircle, Sparkles, Edit3 } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
}

interface AnswerFeedback {
  questionId: number;
  questionText: string;
  options: string[];
  userSelectedOptionIndex: number | null;
  correctAnswerIndex: number;
  userAnswerText: string;
  correctAnswerText: string;
  isCorrect: boolean;
}

const allQuizQuestions: Question[] = [
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
  {
    id: 6,
    text: "Cosa attende Nasten'ka con ansia per un anno intero?",
    options: ["Un'eredità", "Il ritorno del suo amato inquilino", "Un viaggio a Parigi", "L'inizio delle notti bianche"],
    correctAnswerIndex: 1,
  },
  {
    id: 7,
    text: "Quale sentimento prevale nel Sognatore alla fine del racconto, nonostante la delusione?",
    options: ["Rabbia cieca", "Indifferenza totale", "Gratitudine per il momento vissuto", "Desiderio di vendetta"],
    correctAnswerIndex: 2,
  },
  {
    id: 8,
    text: "A chi è legata Nasten'ka da una promessa di matrimonio all'inizio della storia?",
    options: ["Al Sognatore", "A un ricco mercante", "A un giovane ufficiale", "A un inquilino che viveva nella sua casa"],
    correctAnswerIndex: 3,
  },
  {
    id: 9,
    text: "Qual è l'elemento atmosferico peculiare di San Pietroburgo che dà il titolo al racconto?",
    options: ["Le nebbie fitte", "Le piogge torrenziali", "Le notti bianche", "Le aurore boreali"],
    correctAnswerIndex: 2,
  },
  {
    id: 10,
    text: "Come definisce se stesso il narratore della storia?",
    options: ["Un avventuriero", "Un cinico", "Un sognatore", "Un realista"],
    correctAnswerIndex: 2,
  },
  {
    id: 11,
    text: "Quale oggetto Nasten'ka appunta al suo vestito per farsi riconoscere dall'inquilino?",
    options: ["Un nastro rosso", "Una spilla d'argento", "Un fiore di campo", "Nulla di particolare, ma si accordano su un segnale"], // Adjusted for more accuracy
    correctAnswerIndex: 3, 
  },
  {
    id: 12,
    text: "Cosa offre il Sognatore a Nasten'ka quando lei è disperata per l'assenza dell'inquilino?",
    options: ["Denaro", "Un passaggio per un'altra città", "Il suo amore e un futuro insieme", "Consigli su come dimenticarlo"],
    correctAnswerIndex: 2,
  },
  {
    id: 13,
    text: "Quale di queste affermazioni descrive meglio il rapporto del Sognatore con la realtà?",
    options: [
      "La abbraccia con entusiasmo, cercando sempre nuove esperienze.",
      "La percepisce come deludente e preferisce rifugiarsi nella sua immaginazione.",
      "Cerca attivamente di cambiarla per renderla più simile ai suoi sogni.",
      "La ignora completamente, vivendo solo nel presente.",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 14,
    text: "Qual è la principale fonte di ansia per Nasten'ka durante le prime notti?",
    options: [
      "La paura di essere scoperta dalla nonna mentre esce di nascosto.",
      "L'incertezza sul ritorno dell'inquilino e la paura di essere dimenticata.",
      "Il timore che il Sognatore possa giudicare la sua storia passata.",
      "La sua situazione economica precaria e la dipendenza dalla nonna.",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 15,
    text: "Come reagisce il Sognatore alla prospettiva di un amore reale con Nasten'ka?",
    options: [
      "Con cinismo, dubitando della sua durata e sincerità.",
      "Con un misto di incredulità, gioia travolgente e una profonda paura della perdita.",
      "Con freddezza e distacco, temendo di essere ferito nuovamente.",
      "Con pragmatismo, pianificando subito il futuro e gli aspetti pratici.",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 16,
    text: "Cosa rivela la decisione finale di Nasten'ka riguardo al suo carattere?",
    options: [
      "Una profonda superficialità e incapacità di provare veri sentimenti.",
      "Una fedeltà ai suoi impegni passati e un certo pragmatismo, nonostante i sentimenti per il Sognatore.",
      "Una completa dipendenza emotiva dall'inquilino, incapace di scegliere per sé.",
      "Un desiderio di manipolare i sentimenti altrui per il proprio vantaggio.",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 17,
    text: "Qual è il significato dell'\"intero attimo di beatitudine\" per il Sognatore?",
    options: [
      "Un breve momento di follia e illusione da dimenticare al più presto.",
      "La prova definitiva che la vita reale non potrà mai eguagliare la perfezione dei suoi sogni.",
      "Un ricordo prezioso e reale che, nonostante il dolore della perdita, dà un senso profondo alla sua esistenza solitaria.",
      "Un'invenzione della sua mente per sopportare meglio la solitudine.",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 18,
    text: "Quale conflitto interiore vive Nasten'ka durante le conversazioni con il Sognatore?",
    options: [
      "Tra il desiderio di una vita lussuosa e l'amore per l'inquilino povero.",
      "Tra la lealtà verso le aspettative della nonna e il desiderio di ribellione.",
      "Tra la speranza e la fedeltà verso l'inquilino atteso e il crescente affetto e conforto trovati nel Sognatore.",
      "Tra l'ambizione sociale di trovare un buon partito e i suoi sentimenti più umili.",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 19,
    text: "Quale aspetto della personalità del Sognatore lo rende un \"precursore\" dell'Uomo del Sottosuolo?",
    options: [
      "La sua estrema socievolezza e il suo desiderio di essere al centro dell'attenzione.",
      "La sua tendenza all'autoanalisi profonda, l'isolamento sociale e la creazione di un mondo interiore complesso.",
      "La sua ferrea volontà di agire concretamente per cambiare la società.",
      "La sua completa mancanza di immaginazione e la sua aderenza alla realtà.",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 20,
    text: "Come si manifesta la \"forza interiore\" di Nasten'ka, nonostante la sua apparente ingenuità?",
    options: [
      "Nella sua capacità di manipolare abilmente gli altri per ottenere ciò che vuole.",
      "Nel suo rifiuto totale di affrontare le proprie emozioni e debolezze.",
      "Nella sua resilienza, nella capacità di sperare contro ogni evidenza e nel prendere decisioni difficili per il suo futuro.",
      "Nella sua aggressività nascosta e nel suo desiderio di vendetta.",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 21,
    text: "Perché il Sognatore si descrive come un \"tipo\" e non semplicemente una \"persona\"?",
    options: [
      "Per sottolineare la sua eccezionalità e la sua superiorità intellettuale rispetto agli altri.",
      "Per esprimere il suo senso di alienazione, la sua esistenza quasi archetipica e non pienamente realizzata nel mondo reale.",
      "Per modestia, sminuendo la propria importanza e individualità.",
      "Perché sente di stare recitando una parte, non essendo mai veramente se stesso.",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 22,
    text: "Quale tema dostoevskiano fondamentale emerge chiaramente dall'esperienza di entrambi i protagonisti?",
    options: [
      "La ricerca del potere politico e dell'influenza sociale.",
      "La critica radicale alle istituzioni religiose organizzate.",
      "La complessità dei sentimenti umani, l'importanza della compassione, della memoria e la sofferenza come parte intrinseca dell'esistenza.",
      "L'elogio dell'individualismo sfrenato e dell'autoaffermazione a ogni costo.",
    ],
    correctAnswerIndex: 2,
  },
];

const QUIZ_LENGTH = 5;

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const getResultMessage = (score: number, totalQuestions: number): string => {
  const percentage = (score / totalQuestions) * 100;
  if (percentage === 100) {
    return "Congratulazioni! Conosci \"Le Notti Bianche\" alla perfezione e hai colto le sfumature dei suoi personaggi!";
  } else if (percentage >= 70) {
    return "Ottimo lavoro! Hai una profonda comprensione della storia e dell'animo dei suoi protagonisti.";
  } else if (percentage >= 40) {
    return "Non male! Hai una buona base, ma c'è ancora tanto da scoprire sulle profondità di quest'opera.";
  } else {
    return "Sembra che ci sia ancora molto da esplorare nel mondo de \"Le Notti Bianche\". Non arrenderti, ogni rilettura svela nuovi tesori!";
  }
};

export default function QuizPage() {
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({}); // question.id -> optionIndex
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswersWithFeedback, setUserAnswersWithFeedback] = useState<AnswerFeedback[]>([]);

  const initializeQuiz = () => {
    const shuffledQuestions = shuffleArray(allQuizQuestions);
    setCurrentQuizQuestions(shuffledQuestions.slice(0, QUIZ_LENGTH));
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setQuizCompleted(false);
    setUserAnswersWithFeedback([]);
  };

  useEffect(() => {
    initializeQuiz();
  }, []);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = () => {
    let currentScore = 0;
    const feedback: AnswerFeedback[] = currentQuizQuestions.map((q) => {
      const userSelectedOptionIndex = selectedAnswers[q.id] ?? null;
      const isCorrect = userSelectedOptionIndex === q.correctAnswerIndex;
      if (isCorrect) {
        currentScore++;
      }
      return {
        questionId: q.id,
        questionText: q.text,
        options: q.options,
        userSelectedOptionIndex,
        correctAnswerIndex: q.correctAnswerIndex,
        userAnswerText: userSelectedOptionIndex !== null ? q.options[userSelectedOptionIndex] : "Non risposto",
        correctAnswerText: q.options[q.correctAnswerIndex],
        isCorrect,
      };
    });
    setScore(currentScore);
    setUserAnswersWithFeedback(feedback);
    setQuizCompleted(true);
  };

  const handleRetryQuiz = () => {
    initializeQuiz();
  };

  if (currentQuizQuestions.length === 0) {
    return ( 
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 flex justify-center items-center min-h-screen">
        <Sparkles className="h-8 w-8 animate-spin text-accent" />
        <p className="ml-2 text-lg">Caricamento del quiz...</p>
      </div>
    );
  }

  const currentQuestion = currentQuizQuestions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / currentQuizQuestions.length) * 100;

  if (quizCompleted) {
    const resultMessage = getResultMessage(score, currentQuizQuestions.length);
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <Card className="shadow-lg max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="font-cormorant-garamond text-3xl">Risultati del Quiz!</CardTitle>
            <div className={`flex justify-center mt-4 ${score >= currentQuizQuestions.length / 2 ? 'text-green-500' : 'text-red-500'}`}>
              {score >= currentQuizQuestions.length / 2 ? <CheckCircle className="w-16 h-16" /> : <AlertCircle className="w-16 h-16" />}
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-xl">
              Il tuo punteggio è: <span className="font-bold">{score}</span> su <span className="font-bold">{currentQuizQuestions.length}</span>.
            </p>
            <p className="text-muted-foreground">{resultMessage}</p>
            
            <div className="space-y-4 text-left">
              <h3 className="text-xl font-semibold font-lato text-center">Riepilogo Risposte:</h3>
              {userAnswersWithFeedback.map((feedbackItem, index) => (
                <Card key={feedbackItem.questionId} className={`p-4 ${feedbackItem.isCorrect ? 'border-green-500 bg-green-50/50' : 'border-red-500 bg-red-50/50'}`}>
                  <p className="font-semibold text-md font-lato">Domanda {index + 1}: {feedbackItem.questionText}</p>
                  <div className="flex items-center mt-2">
                    {feedbackItem.isCorrect ? <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /> : <AlertCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />}
                    <p className={`text-sm ${feedbackItem.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      La tua risposta: {feedbackItem.userAnswerText || <span className="italic">Non hai risposto</span>}
                    </p>
                  </div>
                  {!feedbackItem.isCorrect && (
                    <p className="text-sm text-blue-700 mt-1">Risposta corretta: {feedbackItem.correctAnswerText}</p>
                  )}
                </Card>
              ))}
            </div>

            <Button onClick={handleRetryQuiz} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 mt-6">
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
            Metti alla prova la tua conoscenza dell'opera e l'introspezione dei suoi personaggi!
          </CardDescription>
          <Progress value={progressPercentage} className="mt-4" />
           <p className="text-sm text-muted-foreground text-center mt-2">Domanda {currentQuestionIndex + 1} di {currentQuizQuestions.length}</p>
        </CardHeader>
        <CardContent>
          {currentQuestion ? (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold font-lato">{currentQuestion.text}</h2>
              <RadioGroup
                key={currentQuestion.id} 
                value={selectedAnswers[currentQuestion.id]?.toString()}
                onValueChange={(value) => handleAnswerSelect(currentQuestion.id, parseInt(value))}
                className="space-y-3"
              >
                {currentQuestion.options.map((option, index) => (
                  <Label 
                    key={index} 
                    htmlFor={`q${currentQuestion.id}-o${index}`} 
                    className="flex items-center space-x-3 p-3 border rounded-md hover:bg-secondary/50 transition-colors cursor-pointer has-[:checked]:bg-accent/20 has-[:checked]:border-accent"
                  >
                    <RadioGroupItem value={index.toString()} id={`q${currentQuestion.id}-o${index}`} />
                    <span className="text-base flex-1">
                      {option}
                    </span>
                  </Label>
                ))}
              </RadioGroup>
              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestion.id] === null || selectedAnswers[currentQuestion.id] === undefined}
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                {currentQuestionIndex < currentQuizQuestions.length - 1 ? 'Prossima Domanda' : 'Mostra Risultati'}
              </Button>
            </div>
          ) : (
             <div className="text-center py-8">
                <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Caricamento domanda...</p>
             </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
