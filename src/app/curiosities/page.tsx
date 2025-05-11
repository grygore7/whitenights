
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Film, Feather, MapPin, BookOpen } from 'lucide-react';
import Image from 'next/image';

const curiosities = [
  {
    title: 'Genesi dell\'Opera',
    icon: Feather,
    content: 'Sebbene aneddoti specifici sul processo di scrittura siano scarsi, "Le Notti Bianche" emerse durante il primo periodo pre-siberiano di Dostoevskij. Riflette il suo impegno con il Romanticismo tedesco (specialmente E.T.A. Hoffmann) e il Socialismo Utopico francese. L\'archetipo del "Sognatore" stava già prendendo forma nella sua mente, riflettendo i suoi sentimenti di alienazione e le sue osservazioni sulla vita di San Pietroburgo. La storia è sottotitolata "Romanzo Sentimentale (Dalle Memorie di un Sognatore)", sottolineando il suo focus soggettivo ed emotivo.',
    image: 'https://i.postimg.cc/QMGMwdsd/Empty-streets-of-19th-century-Saint-Petersburg-at-night-cobblestones-shining-from-recent-rain-gas.png',
    imageHint: 'saint petersburg night street'
  },
  {
    title: 'Eredità Culturale e Adattamenti',
    icon: Film,
    content: 'La toccante storia ha ispirato numerosi adattamenti attraverso diversi media. Forse il più famoso è il film di Luchino Visconti del 1957 "Le Notti Bianche", con Marcello Mastroianni e Maria Schell, che traspose l\'ambientazione a Livorno, Italia, pur mantenendo l\'atmosfera malinconica della storia. Esistono altri adattamenti cinematografici dalla Francia, India ("Saawariya", 2007), Iran e dalla stessa Russia. Il racconto è stato adattato anche per il teatro e la radio, dimostrando il suo fascino duraturo.',
    image: 'https://bing.com/th/id/BCO.9fec4e56-4662-4592-abc9-0f474536002e.png',
    imageHint: "movie poster film adaptation"
  },
  {
    title: 'Analisi Tematica Approfondita',
    icon: BookOpen,
    content: 'Oltre al romanticismo superficiale, la storia approfondisce temi profondi. Le "notti bianche" stesse simboleggiano uno spazio liminale tra giorno e notte, realtà e sogno, rispecchiando gli stati dei personaggi. Il Sognatore incarna i pericoli e i comfort dell\'evasione. Il finale, spesso dibattuto, mette in discussione la natura della felicità: un momento fugace di connessione genuina è sufficiente a sostenere un\'anima solitaria? L\'ambiguità consente una ricca interpretazione riguardo alla speranza, alla memoria e all\'accettazione della realtà.',
    image: 'https://i.postimg.cc/596mP3mg/create-an-image-in-the-style-of-the-others-you-ve-created-so-far-reflecting-this-piece-of-text-Gen.png',
    imageHint: 'dream reality liminal space'
  },
  {
    title: 'San Pietroburgo: La Città come Personaggio',
    icon: MapPin,
    content: 'San Pietroburgo è più di un semplice sfondo; è parte integrante dell\'atmosfera della storia. I canali, i ponti e le strade scarsamente illuminate durante le eteree notti bianche creano un\'ambientazione onirica, quasi irreale, perfettamente adatta alla narrazione. La città riflette lo stato interiore del Sognatore: vasta, bella, ma potenzialmente isolante. Dostoevskij usa magistralmente l\'ambiente urbano per esaltare i temi della solitudine e della connessione fugace.',
    image: 'https://i.postimg.cc/T2Fq1nJ7/Panoramic-view-of-Saint-Petersburg-under-a-white-night-sky-soft-glow-over-rooftops-golden-domes-an.png',
    imageHint: "saint petersburg canal night bridge old"
  },
];

export default function CuriositiesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-playfair-display font-bold mb-12 text-center">
        Curiosità e Approfondimenti
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {curiosities.map((item, index) => (
          <Card key={index} className="shadow-lg flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                 <item.icon className="w-8 h-8 text-accent flex-shrink-0" />
                 <CardTitle className="font-cormorant-garamond text-2xl">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-muted-foreground leading-relaxed mb-4">{item.content}</p>
              {item.image && (
                 <div className="mt-auto pt-4">
                    <Image
                      src={item.image}
                      alt={`Immagine relativa a ${item.title}`}
                      width={300}
                      height={200}
                      className="rounded-md object-cover w-full h-auto max-h-48 mx-auto"
                      data-ai-hint={item.imageHint}
                    />
                 </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
