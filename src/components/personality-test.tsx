'use client';

import { useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { UserCheck, Users, RotateCcw, Brain } from 'lucide-react';
import Link from 'next/link';

interface PersonalityQuestion {
  id: number;
  text: string;
  options: { text: string; sognatoreScore: number; nastenkaScore: number }[];
}

const personalityTestQuestions: PersonalityQuestion[] = [
  {
    id: 1,
    text: "Come preferisci trascorrere una serata libera?",
    options: [
      { text: "Immerso in un buon libro o nei miei pensieri.", sognatoreScore: 2, nastenkaScore: 0 },
      { text: "Uscendo con amici o persone care.", sognatoreScore: 0, nastenkaScore: 2 },
      { text: "Un mix di tranquillità e socializzazione.", sognatoreScore: 1, nastenkaScore: 1 },
    ],
  },
  {
    id: 2,
    text: "Quando incontri qualcuno di nuovo, cosa ti colpisce di più?",
    options: [
      { text: "La profondità delle sue riflessioni e la sua sensibilità.", sognatoreScore: 2, nastenkaScore: 0 },
      { text: "La sua vivacità, il suo entusiasmo e la sua apertura.", sognatoreScore: 0, nastenkaScore: 2 },
      { text: "La sua capacità di ascoltare e comprendere.", sognatoreScore: 1, nastenkaScore: 1 },
    ],
  },
  {
    id: 3,
    text: "Di fronte a un'opportunità inaspettata, la tua reazione è più simile a:",
    options: [
      { text: "Cautela, analizzando tutti i pro e i contro prima di agire.", sognatoreScore: 2, nastenkaScore: 0 },
      { text: "Entusiasmo, cogliendola al volo con speranza.", sognatoreScore: 0, nastenkaScore: 2 },
    ],
  },
  {
    id: 4,
    text: "Cosa apprezzi di più in un'amicizia?",
    options: [
      { text: "La possibilità di condividere sogni e riflessioni intime.", sognatoreScore: 2, nastenkaScore: 0 },
      { text: "Il supporto reciproco e la lealtà incondizionata.", sognatoreScore: 0, nastenkaScore: 2 },
    ],
  },
  {
    id: 5,
    text: "Se dovessi descrivere il tuo approccio alla vita:",
    options: [
      { text: "Vivo spesso nel mio mondo interiore, tra sogni e ideali.", sognatoreScore: 2, nastenkaScore: 0 },
      { text: "Cerco di vivere il presente con concretezza, ma con un cuore aperto.", sognatoreScore: 0, nastenkaScore: 2 },
    ],
  },
  {
    id: 6,
    text: "In amore, sei più incline a:",
    options: [
      { text: "Idealizzare la persona amata e a sognare un futuro perfetto.", sognatoreScore: 2, nastenkaScore: 0 },
      { text: "Vivere il sentimento con passione e pragmatismo, cercando stabilità.", sognatoreScore: 0, nastenkaScore: 2 },
    ],
  },
  {
    id: 7,
    text: "Quando ti senti solo/a:",
    options: [
      { text: "Trovo conforto nei miei pensieri e nella mia immaginazione.", sognatoreScore: 2, nastenkaScore: 0 },
      { text: "Cerco attivamente compagnia e condivisione.", sognatoreScore: 0, nastenkaScore: 2 },
    ],
  },
  {
    id: 8,
    text: "Cosa temi di più in una relazione?",
    options: [
      { text: "La disillusione e la perdita dell'ideale.", sognatoreScore: 2, nastenkaScore: 0 },
      { text: "L'abbandono o il tradimento della fiducia.", sognatoreScore: 0, nastenkaScore: 2 },
    ],
  },
  {
    id: 9,
    text: "Il tuo \"luogo felice\" ideale è:",
    options: [
      { text: "Un posto tranquillo dove posso sognare ad occhi aperti.", sognatoreScore: 2, nastenkaScore: 0 },
      { text: "Un luogo vivace pieno di persone e opportunità di interazione.", sognatoreScore: 0, nastenkaScore: 2 },
    ],
  },
  {
    id: 10,
    text: "Se una persona a cui tieni ti delude profondamente:",
    options: [
      { text: "Mi chiudo in me stesso/a, rivivendo il dolore e cercando di capirne il perché.", sognatoreScore: 2, nastenkaScore: 0 },
      { text: "Esprimo il mio dolore, ma cerco di perdonare e andare avanti, se possibile.", sognatoreScore: 0, nastenkaScore: 2 },
    ],
  },
];

const personalityDescriptions: Record<string, { title: string; description: string; advice?: string }> = {
  "Il Sognatore": {
    title: "Il Sognatore: Un Animo Profondo e Introspettivo",
    description: "Come il Sognatore, sei una persona dalla profonda sensibilità, incline all'introspezione e con un ricco mondo interiore. Apprezzi la bellezza, la poesia delle piccole cose e le connessioni emotive autentiche. Potresti talvolta sentirti un po' distante dalla frenesia del mondo esterno, preferendo la compagnia dei tuoi pensieri e dei tuoi sogni. La tua immaginazione è vivida e spesso trovi rifugio nelle tue fantasie, il che ti rende creativo e capace di vedere il mondo da prospettive uniche.",
    advice: "Coltiva la tua creatività e non temere di condividere la tua unicità con gli altri. Cerca legami che nutrano la tua anima, ma ricorda anche di ancorarti alla realtà per non perderti completamente nelle tue fantasie. La tua sensibilità è un dono, usala per comprendere te stesso e gli altri più profondamente."
  },
  "Nasten'ka": {
    title: "Nasten'ka: Vivacità, Cuore e Pragmatismo",
    description: "Simile a Nasten'ka, possiedi una natura vivace, un cuore generoso e un sorprendente pragmatismo. Sei capace di grande affetto e lealtà, ma sai anche affrontare la vita con i piedi per terra. Appari socievole e aperta, ma porti dentro di te una ricca vita emotiva e un desiderio di stabilità e amore sincero. La tua forza risiede nella capacità di sperare e di adattarti alle circostanze, mantenendo un'indole fondamentalmente positiva.",
    advice: "Continua a fidarti del tuo istinto e della tua capacità di amare. Non aver paura di mostrare la tua vulnerabilità, ma proteggi anche il tuo cuore. L'equilibrio tra emozione e ragione, e la tua resilienza, sono le tue più grandi forze. Valorizza le connessioni autentiche e non smettere di credere nella possibilità della felicità."
  },
  "un equilibrato mix tra Il Sognatore e Nasten'ka": {
    title: "Un Armonioso Equilibrio: Sognatore e Realista",
    description: "In te convivono armoniosamente le qualità del Sognatore e di Nasten'ka. Possiedi la sensibilità e la profondità riflessiva del primo, unite alla vivacità, al calore umano e al senso pratico della seconda. Sei capace di sognare grandi ideali e di apprezzare la bellezza interiore, ma anche di agire concretamente per realizzare i tuoi obiettivi e di costruire relazioni solide. Questa combinazione ti rende una persona versatile e profondamente umana.",
    advice: "Questa dualità è un grande dono. Ti permette di comprendere diverse prospettive e di navigare la vita con empatia e determinazione. Continua a nutrire entrambi questi aspetti della tua personalità, trovando il giusto equilibrio tra il mondo interiore dei sogni e quello esteriore delle azioni e delle relazioni."
  }
};

interface PersonalityTestProps {
  children: ReactNode; // For the trigger button
}

export function PersonalityTest({ children }: PersonalityTestProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number | null>>({});
  const [sognatoreScore, setSognatoreScore] = useState(0);
  const [nastenkaScore, setNastenkaScore] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [dominantPersonality, setDominantPersonality] = useState<string | null>(null);

  const currentQuestion = personalityTestQuestions[currentQuestionIndex];

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleNextOrSubmit = () => {
    const selectedOptionIndex = selectedOptions[currentQuestion.id];
    if (selectedOptionIndex === null || selectedOptionIndex === undefined) return;

    const chosenOption = currentQuestion.options[selectedOptionIndex];
    setSognatoreScore((prev) => prev + chosenOption.sognatoreScore);
    setNastenkaScore((prev) => prev + chosenOption.nastenkaScore);

    if (currentQuestionIndex < personalityTestQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate final result
      const finalSognatoreScore = sognatoreScore + chosenOption.sognatoreScore;
      const finalNastenkaScore = nastenkaScore + chosenOption.nastenkaScore;

      if (finalSognatoreScore > finalNastenkaScore) {
        setDominantPersonality("Il Sognatore");
      } else if (finalNastenkaScore > finalSognatoreScore) {
        setDominantPersonality("Nasten'ka");
      } else {
        setDominantPersonality("un equilibrato mix tra Il Sognatore e Nasten'ka");
      }
      setTestCompleted(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions({});
    setSognatoreScore(0);
    setNastenkaScore(0);
    setTestCompleted(false);
    setDominantPersonality(null);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset test if dialog is closed externally (e.g. by pressing Esc)
       setTimeout(resetTest, 300); // Delay to allow dialog close animation
    }
  }

  const progressPercentage = ((currentQuestionIndex + 1) / personalityTestQuestions.length) * 100;


  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg md:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-cormorant-garamond text-2xl text-center">
            <Brain className="inline-block mr-2 h-6 w-6 text-accent" />
            Test di Personalità: Sognatore o Nasten'ka?
          </DialogTitle>
          {!testCompleted && (
            <DialogDescription className="text-center pt-2">
              Rispondi a 10 domande per scoprire a quale personaggio de "Le Notti Bianche" assomigli di più.
            </DialogDescription>
          )}
        </DialogHeader>

        {!testCompleted ? (
          <div className="py-4 space-y-6">
            <Progress value={progressPercentage} className="w-full" />
            <p className="text-sm text-muted-foreground text-center">Domanda {currentQuestionIndex + 1} di {personalityTestQuestions.length}</p>
            <h3 className="text-lg font-semibold font-lato">{currentQuestion.text}</h3>
            <RadioGroup
              key={currentQuestion.id} // Added key to force re-render on question change
              value={selectedOptions[currentQuestion.id]?.toString()}
              onValueChange={(value) => handleAnswerSelect(currentQuestion.id, parseInt(value))}
              className="space-y-2"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 border rounded-md hover:bg-secondary/50 transition-colors">
                  <RadioGroupItem value={index.toString()} id={`pt-q${currentQuestion.id}-o${index}`} />
                  <Label htmlFor={`pt-q${currentQuestion.id}-o${index}`} className="flex-1 cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <UserCheck className="mx-auto h-16 w-16 text-green-500" />
            <h3 className="text-2xl font-semibold font-cormorant-garamond">Risultato del Test!</h3>
            {dominantPersonality && personalityDescriptions[dominantPersonality] ? (
              <div className='space-y-3 text-left px-4'>
                <h4 className="text-xl font-semibold font-cormorant-garamond text-center">{personalityDescriptions[dominantPersonality].title}</h4>
                <p className="text-md text-muted-foreground">{personalityDescriptions[dominantPersonality].description}</p>
                {personalityDescriptions[dominantPersonality].advice && (
                  <p className="text-sm italic text-accent">{personalityDescriptions[dominantPersonality].advice}</p>
                )}
              </div>
            ) : (
               <p className="text-lg">
                Sembra che tu sia più affine a <span className="font-bold text-accent">{dominantPersonality}</span>!
              </p>
            )}
            <p className="text-muted-foreground text-sm pt-2">
              Questo test è un modo divertente per riflettere sulle tue inclinazioni. Ogni personaggio ha la sua unicità.
            </p>
            <Link href="/characters" passHref>
              <Button variant="link" onClick={() => setIsOpen(false)}>Scopri di più sui personaggi</Button>
            </Link>
          </div>
        )}

        <DialogFooter className="gap-2 sm:justify-between pt-4">
          {testCompleted ? (
             <Button variant="outline" onClick={resetTest} className="w-full sm:w-auto">
              <RotateCcw className="mr-2 h-4 w-4" />
              Rifai il Test
            </Button>
          ) : (
            <div/> // Placeholder for spacing if needed
          )}
          {!testCompleted ? (
            <Button
              onClick={handleNextOrSubmit}
              disabled={selectedOptions[currentQuestion.id] === null || selectedOptions[currentQuestion.id] === undefined}
              className="w-full sm:w-auto"
            >
              {currentQuestionIndex < personalityTestQuestions.length - 1 ? 'Prossima' : 'Mostra Risultato'}
            </Button>
          ) : (
            <DialogClose asChild>
                <Button className="w-full sm:w-auto">Chiudi</Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

