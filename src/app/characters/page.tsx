

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PersonalityTest } from '@/components/personality-test'; // Import the new component
import { Brain } from 'lucide-react';

const characters = [
  {
    name: 'Il Sognatore',
    image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jttsefr1fzfv9ejtz2jnpm2a%2F1746803393_img_0.webp?st=2025-05-17T08%3A22%3A53Z&se=2025-05-23T09%3A22%3A53Z&sks=b&skt=2025-05-17T08%3A22%3A53Z&ske=2025-05-23T09%3A22%3A53Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=XI5AIuSpidsm0qJ6nEAltgzasv8zRNviU6tjmUtTv1Q%3D&az=oaivgprodscus', // Swapped image
    imageHint: "dreamy saint petersburg night canal",
    description: 'Il narratore anonimo e protagonista, archetipo del sognatore romantico. È profondamente introverso, intellettuale e si sente alienato dalla frenetica realtà di San Pietroburgo. Vive in gran parte nella sua immaginazione, trovando conforto nelle fantasie e osservando la vita piuttosto che parteciparvi.',
    psychology: 'Caratterizzato da un\'intensa solitudine, un desiderio struggente di connessione umana e una tendenza a idealizzare l\'amore e le relazioni. È incline all\'autoanalisi e a una malinconia poetica. La sua sensibilità lo rende vulnerabile ma anche capace di profonda empatia.',
    motivations: 'La sua spinta principale è sfuggire alla sua profonda solitudine e trovare un legame autentico e significativo con un\'altra persona. Idealizza rapidamente Nastenka come il potenziale appagamento dei suoi desideri romantici e come un\'ancora alla realtà.',
    role: 'È la lente attraverso cui il lettore vive la storia e sperimenta l\'atmosfera di San Pietroburgo. La sua prospettiva modella la narrazione, evidenziando i temi del sogno, della realtà, della solitudine e della natura effimera della felicità.',
    evolution: 'L\'incontro con Nastenka gli offre un breve ma intenso periodo di connessione e felicità nel mondo reale, quasi un risveglio dal suo torpore sognante. Sebbene la conclusione lo riporti alla solitudine, l\'esperienza lo arricchisce: ora possiede un ricordo reale di "un intero attimo di beatitudine", che, pur doloroso, conferisce un nuovo significato alla sua esistenza. Non si trasforma radicalmente, ma è toccato profondamente dalla realtà.',
    quotes: [
      '"Io sono un sognatore. Conosco così poco la vita reale che non posso fare a meno di rivivere momenti come questi nei miei sogni..."',
      '"Ma come potrei vivere e non avere una storia da raccontare?"',
      '"Un intero attimo di beatitudine! È forse poco, sia pure per tutta la vita di un uomo?"',
    ],
  },
  {
    name: 'Nasten\'ka',
    image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jttsjf6qe8xs7s39yqmbkzdd%2F1746803518_img_1.webp?st=2025-05-17T08%3A22%3A53Z&se=2025-05-23T09%3A22%3A53Z&sks=b&skt=2025-05-17T08%3A22%3A53Z&ske=2025-05-23T09%3A22%3A53Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=q668sn%2BuRMld5%2FlmfrHmE8eY6SkHku7JRtKsI6QyFfk%3D&az=oaivgprodscus',
    imageHint: "young woman thoughtful pensive",
    description: 'Una giovane donna, apparentemente ingenua e vivace, che il Sognatore incontra vicino al canale. Vive una vita protetta con la nonna cieca ed è coinvolta in un toccante dilemma emotivo, in attesa del ritorno del suo amore.',
    psychology: 'Appare innocente e vulnerabile, ma possiede anche un notevole grado di pragmatismo e forza interiore. È vivace ed emotivamente espressiva, ma porta con sé una corrente sotterranea di tristezza e ansia dovuta alla sua situazione. È combattuta tra l\'amore idealizzato per l\'inquilino assente e l\'affetto reale e immediato offerto dal Sognatore.',
    motivations: 'La sua motivazione principale è l\'ansiosa e fedele attesa del ritorno del suo amato inquilino, a cui ha promesso il suo cuore. Cerca conforto, compagnia e un orecchio comprensivo durante la sua veglia, trovandoli nel Sognatore. Desidera anche una vita oltre i confini ristretti impostile dalla nonna.',
    role: 'Agisce come catalizzatore per gli eventi della storia e come oggetto dell\'affetto intenso e idealizzato del Sognatore. La sua storia personale si svolge parallelamente a quella del Sognatore, fornendo un contrasto tra l\'attesa di un ideale e l\'impegno con il presente. Rappresenta la possibilità di un amore reale e tangibile per il Sognatore.',
    evolution: 'Nel corso delle quattro notti, sviluppa un affetto genuino e una profonda gratitudine verso il Sognatore. Sperimenta speranza, disperazione e alla fine compie una scelta decisiva che, sebbene dolorosa per il Sognatore, è coerente con i suoi impegni precedenti e la sua natura pragmatica. La sua evoluzione consiste nel confrontarsi con la realtà dei suoi sentimenti e nel prendere una decisione definitiva quando il suo passato ritorna.',
    quotes: [
      '"L\'ho aspettato qui per un anno intero."',
      '"Ascolta: perché non possiamo essere tutti come fratelli insieme?"',
      '"Perdonami... Ricordati della tua Nastenka."',
    ],
  },
];

export default function CharactersPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-playfair-display font-bold mb-12 text-center">
        I Protagonisti
      </h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        Incontra le due figure centrali de "Le Notti Bianche", le cui vite si intrecciano fugacemente sotto il cielo crepuscolare di San Pietroburgo, rivelando sogni, speranze e la complessità del cuore umano.
      </p>

      <div className="space-y-16">
        {characters.map((character) => (
          <Card key={character.name} className="overflow-hidden shadow-xl rounded-lg">
             <div className="md:flex">
                 <div className="md:w-2/5 flex-shrink-0 relative min-h-[300px] md:min-h-[auto]">
                   <Image
                     src={character.image}
                     alt={`Ritratto di ${character.name}`}
                     fill
                     sizes="(max-width: 768px) 100vw, 40vw"
                     className="object-cover"
                     data-ai-hint={character.imageHint}
                   />
                 </div>
                 <div className="md:w-3/5">
                    <CardHeader className="pb-4">
                        <CardTitle className="font-cormorant-garamond text-3xl md:text-4xl">{character.name}</CardTitle>
                        <CardDescription className="text-lg italic text-muted-foreground">{character.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5 pt-2">
                         <div>
                           <h3 className="font-bold font-lato text-xl mb-1 text-foreground">Psicologia e Personalità</h3>
                           <p className="text-muted-foreground leading-relaxed">{character.psychology}</p>
                         </div>
                         <div>
                            <h3 className="font-bold font-lato text-xl mb-1 text-foreground">Motivazioni e Desideri</h3>
                            <p className="text-muted-foreground leading-relaxed">{character.motivations}</p>
                         </div>
                         <div>
                            <h3 className="font-bold font-lato text-xl mb-1 text-foreground">Ruolo e Significato nella Storia</h3>
                            <p className="text-muted-foreground leading-relaxed">{character.role}</p>
                         </div>
                         <div>
                            <h3 className="font-bold font-lato text-xl mb-1 text-foreground">Evoluzione nel Racconto</h3>
                            <p className="text-muted-foreground leading-relaxed">{character.evolution}</p>
                         </div>
                         <Separator className="my-6"/>
                          <div>
                            <h3 className="font-bold font-lato text-xl mb-3 text-foreground">Citazioni Chiave</h3>
                            <ul className="space-y-3">
                              {character.quotes.map((quote, index) => (
                                <li key={index} className="border-l-4 border-accent pl-4 italic text-muted-foreground text-sm md:text-base">
                                  {quote}
                                </li>
                              ))}
                            </ul>
                          </div>
                    </CardContent>
                 </div>
             </div>
          </Card>
        ))}
      </div>
        <div className="mt-16 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/chat">Chatta con i Personaggi</Link>
            </Button>
            <PersonalityTest>
                 <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
                    <Brain className="mr-2 h-5 w-5" />
                    Fai il Test della Personalità
                </Button>
            </PersonalityTest>
        </div>
    </div>
  );
}
