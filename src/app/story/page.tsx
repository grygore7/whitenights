
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Users, Landmark, Palette, Sparkles } from 'lucide-react';
import Image from 'next/image';

const storyContent = [
  {
    title: 'Prima Notte',
    summary: 'La storia inizia in una notte bianca a San Pietroburgo. Il narratore, un sognatore solitario, vaga per le strade e incontra Nastenka vicino a un canale mentre lei piange. Lui la conforta e si accordano per incontrarsi di nuovo, formando un legame istantaneo e fragile, costruito sulla solitudine condivisa e sulla magia della notte.',
    quote: 'Era una notte meravigliosa, una di quelle notti che possono capitare soltanto quando si è giovani, caro lettore.',
  },
  {
    title: 'Seconda Notte',
    summary: 'Si incontrano di nuovo. Il Sognatore racconta la storia della sua vita – una vita di solitudine, vissuta più nell’immaginazione che nella realtà. Descrive il suo mondo fantastico e il suo desiderio di una vera connessione. Nastenka ascolta attentamente, offrendo comprensione e condividendo il suo stesso senso di attesa.',
    quote: 'Io sono un sognatore. Conosco così poco la vita reale che non posso fare a meno di rivivere momenti come questi nei miei sogni...',
  },
  {
    title: 'Terza Notte',
    summary: 'Nastenka condivide la sua storia. Vive con la nonna cieca e si è innamorata di un inquilino che le ha promesso di tornare per lei esattamente un anno dopo. Questa è la notte in cui doveva tornare, e lei aspetta con ansia. Il Sognatore ascolta, mentre i suoi sentimenti per lei crescono.',
    quote: 'Perché anche il migliore degli uomini sembra sempre, in qualche modo, colpevole?',
  },
  {
    title: 'Quarta Notte',
    summary: 'L’inquilino non è comparso. Nastenka è disperata. Il Sognatore le confessa il suo amore, offrendole un futuro insieme. Nella sua disperazione e gratitudine, lei sembra accettare, riempiendo il Sognatore di immensa gioia. Ma proprio quando il loro futuro sembra possibile, compare l’inquilino. Nastenka corre da lui, lasciando il Sognatore di nuovo solo.',
    quote: 'Mio Dio, un intero attimo di beatitudine! È forse poco, sia pure per tutta la vita di un uomo?',
  },
  {
    title: 'Mattino (Epilogo)',
    summary: 'La mattina dopo, il Sognatore riceve una lettera da Nastenka. Lei chiede il suo perdono ed esprime la sua gratitudine, confermando di essere felice con il suo fidanzato. Il Sognatore riflette sulla breve e intensa felicità che ha vissuto. Sebbene abbia il cuore spezzato, è grato per il fugace momento di connessione, concludendo che anche un così breve periodo di beatitudine è stato sufficiente per un’intera vita.',
    quote: 'Che il tuo cielo sia sereno, che il tuo dolce sorriso sia luminoso e tranquillo, e che tu sia benedetta per quell\'attimo di beatitudine e felicità che hai dato a un altro cuore, solitario e grato...',
  },
];

export default function StoryPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-playfair-display font-bold mb-4">
          La Storia de Le Notti Bianche
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Segui la toccante narrazione del Sognatore e di Nastenka attraverso le luminose notti di San Pietroburgo, un racconto intessuto di solitudine, speranza e della natura effimera dei sogni.
        </p>
      </header>

      <div className="mb-12 flex justify-center">
        <Image
          src="https://videos.openai.com/vg-assets/assets%2Ftask_01jvhazx28ejjrz7x93jgv4zg6%2F1747559974_img_3.webp?st=2025-05-18T07%3A25%3A49Z&se=2025-05-24T08%3A25%3A49Z&sks=b&skt=2025-05-18T07%3A25%3A49Z&ske=2025-05-24T08%3A25%3A49Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=zQl0gkIm6kYwGb6wnTMU9ikIoIk%2Bud%2FZ9j%2B3FK2ZBok%3D&az=oaivgprodscus"
          alt="Illustrazione evocativa de Le Notti Bianche"
          width={800}
          height={400}
          className="rounded-lg shadow-xl object-cover"
          data-ai-hint="dreamy cityscape river"
          priority
        />
      </div>
      
      <Card className="mb-12 shadow-lg">
        <CardHeader>
           <CardTitle className="font-cormorant-garamond text-2xl md:text-3xl flex items-center">
             <Sparkles className="w-7 h-7 mr-3 text-accent" />
             Introduzione Generale e Riassunto Notturno
            </CardTitle>
        </CardHeader>
        <CardContent>
           <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
              "Le Notti Bianche", sottotitolato "Romanzo Sentimentale (Dalle Memorie di un Sognatore)", è un racconto giovanile di Fëdor Dostoevskij, pubblicato nel 1848. Si svolge nell'arco di quattro notti e un mattino durante il fenomeno unico di San Pietroburgo delle "notti bianche", quando il cielo non si oscura mai completamente. Racconta la storia di un giovane senza nome, il Sognatore, la cui intensa solitudine trova un temporaneo sollievo in un incontro casuale con una giovane donna, Nastenka.
           </p>
           <Accordion type="single" collapsible className="w-full space-y-4">
            {storyContent.map((night, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border bg-secondary/30 rounded-lg px-4 shadow-sm hover:bg-secondary/50 transition-colors">
                <AccordionTrigger className="text-xl md:text-2xl font-cormorant-garamond hover:no-underline text-left text-foreground/90">
                  {night.title}
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{night.summary}</p>
                  <Separator />
                  <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                    "{night.quote}"
                  </blockquote>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Separator className="my-16" />

      <h2 className="text-3xl md:text-4xl font-playfair-display font-bold mb-10 text-center">Approfondimenti sull'Opera</h2>

      <div className="space-y-12">
        {/* Analisi Tematica Approfondita */}
        <Card className="shadow-xl rounded-lg overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-8 h-8 text-accent flex-shrink-0" />
              <CardTitle className="font-cormorant-garamond text-2xl md:text-3xl">Analisi Tematica Approfondita</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="md:flex md:gap-6 items-start">
              <div className="md:w-2/3 space-y-4">
                <div>
                  <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Solitudine e Alienazione</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Il tema della solitudine pervade "Le Notti Bianche". Il Sognatore è l'epitome dell'individuo isolato nella grande città di San Pietroburgo. La sua alienazione è autoimposta ma anche riflesso di una società che può marginalizzare gli animi sensibili. Nastenka, pur vivendo con la nonna, sperimenta una sua forma di isolamento.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Sogno vs. Realtà</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Il confine tra sogno e realtà è costantemente sfumato. Il Sognatore vive prevalentemente nel suo mondo interiore. Le "notti bianche" stesse fungono da metafora per questo stato liminale. L'incontro con Nastenka offre un assaggio intenso della realtà.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Amore: Idealizzato, Effimero, Sacrificale</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    L'amore è presentato sotto diverse sfaccettature. Il Sognatore idealizza Nastenka. Nastenka è combattuta tra lealtà e affetto. Il "momento di beatitudine" è emblematico dell'intensità e della transitorietà dell'amore dostoevskiano.
                  </p>
                </div>
                 <Separator />
                <div>
                  <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Sofferenza e Accettazione</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    La sofferenza è una compagna costante. La solitudine del Sognatore è dolore esistenziale. Nastenka soffre nell'attesa e nella scelta. Dostoevskij spesso vede nella sofferenza una via per una più profonda comprensione.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <Image 
                  src="https://videos.openai.com/vg-assets/assets%2Ftask_01jttt5x4xfq5r01t7n41ez9v6%2F1746804157_img_2.webp?st=2025-05-18T08%3A19%3A20Z&se=2025-05-24T09%3A19%3A20Z&sks=b&skt=2025-05-18T08%3A19%3A20Z&ske=2025-05-24T09%3A19%3A20Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=kvV%2B3LLKtt2QSPSpNs2y8fkk7fk%2FeV2hOlBQC%2BLfpaM%3D&az=oaivgprodscus" 
                  alt="Immagine astratta per temi" 
                  width={600} 
                  height={400} 
                  className="rounded-md shadow-md object-cover aspect-video"
                  data-ai-hint="abstract book analysis" 
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dinamiche ed Evoluzione dei Personaggi */}
        <Card className="shadow-xl rounded-lg overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-8 h-8 text-accent flex-shrink-0" />
              <CardTitle className="font-cormorant-garamond text-2xl md:text-3xl">Dinamiche ed Evoluzione dei Personaggi</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="md:flex md:flex-row-reverse md:gap-6 items-start">
                <div className="md:w-2/3 space-y-4">
                  <div>
                    <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Il Sognatore e Nastenka: Un Incontro Trasformativo</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      L'incontro tra il Sognatore e Nastenka è il fulcro. Due anime solitarie creano un universo condiviso. Il Sognatore si apre, Nastenka trova conforto. La loro relazione si sviluppa rapidamente, culminando in una confessione e una scelta difficile.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Evoluzione del Sognatore</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      Il Sognatore inizia immerso nelle fantasie. L'incontro con Nastenka è un'irruzione della realtà. Sperimenta emozioni autentiche. Sebbene ritorni alla solitudine, il "momento di beatitudine" è un ricordo reale che lo arricchisce.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Evoluzione di Nastenka</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      Nastenka appare ansiosa ma speranzosa. Trova nel Sognatore un confidente. Sviluppa affetto, ma la sua lealtà al primo impegno e una visione pragmatica della felicità prevalgono nella sua scelta finale.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0">
                  <Image 
                  src="https://videos.openai.com/vg-assets/assets%2Ftask_01jvhbbej4eb5rjm7p7t7qx6sy%2F1747560356_img_0.webp?st=2025-05-18T08%3A19%3A32Z&se=2025-05-24T09%3A19%3A32Z&sks=b&skt=2025-05-18T08%3A19%3A32Z&ske=2025-05-24T09%3A19%3A32Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=%2FDq0N5JsOwsF5YOSckvQ4t16mQ7FtYZF8IoDyL19bYc%3D&az=oaivgprodscus" 
                   
                    alt="Immagine rappresentante interazione tra personaggi" 
                    width={600} 
                    height={400} 
                    className="rounded-md shadow-md object-cover aspect-video"
                    data-ai-hint="two people talking silhouette"
                  />
                </div>
            </div>
          </CardContent>
        </Card>

        {/* Contesto Storico e Culturale */}
        <Card className="shadow-xl rounded-lg overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Landmark className="w-8 h-8 text-accent flex-shrink-0" />
              <CardTitle className="font-cormorant-garamond text-2xl md:text-3xl">Contesto Storico e Culturale</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="md:flex md:gap-6 items-start">
              <div className="md:w-2/3 space-y-4">
                <div>
                  <h3 className="font-bold font-lato text-xl mb-2 text-foreground">San Pietroburgo: Città di Sogni e Contrasti</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    San Pietroburgo negli anni '40 del XIX secolo è un personaggio vivo. Capitale imperiale di contrasti, le "notti bianche" trasformano la città in un palcoscenico irreale, riflettendo lo stato d'animo del Sognatore.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold font-lato text-xl mb-2 text-foreground">L'Epoca Zarista e l'Individuo</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Il regno dello Zar Nicola I fu caratterizzato da repressione e fermento intellettuale. L'introspezione del Sognatore può riflettere un'epoca di limitata azione esterna, spingendo verso una ricca vita interiore.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold font-lato text-xl mb-2 text-foreground">"Le Notti Bianche" nell'Opera Dostoevskiana</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Quest'opera giovanile prefigura temi dostoevskiani chiave: alienazione, sogno vs. realtà, amore, sofferenza. Il Sognatore anticipa figure più complesse come l'"Uomo del Sottosuolo", ma conserva una dolcezza unica.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                 <Image 
                      src="https://videos.openai.com/vg-assets/assets%2Ftask_01jttssk17edb9515ekr26gkbn%2F1746803753_img_2.webp?st=2025-05-18T08%3A19%3A20Z&se=2025-05-24T09%3A19%3A20Z&sks=b&skt=2025-05-18T08%3A19%3A20Z&ske=2025-05-24T09%3A19%3A20Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=fJ5NdISJpdRegSUwKSoEUf4VdzPu3bmNrPLrpo%2BUMyg%3D&az=oaivgprodscus"
                    alt="Immagine storica di San Pietroburgo" 
                    width={600} 
                    height={400} 
                    className="rounded-md shadow-md object-cover aspect-video"
                    data-ai-hint="saint petersburg historical cityscape"
                  />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Considerazioni Finali */}
        <Card className="shadow-xl rounded-lg overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Palette className="w-8 h-8 text-accent flex-shrink-0" />
              <CardTitle className="font-cormorant-garamond text-2xl md:text-3xl">Un Momento di Eterna Bellezza</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              "Le Notti Bianche" rimane una testimonianza della capacità di Dostoevskij di catturare la fragilità del cuore umano e la bellezza struggente degli incontri fugaci. È un invito a riflettere sulla natura della felicità, sulla potenza dei sogni e sulla traccia indelebile che anche un solo "momento di beatitudine" può lasciare nell'anima.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    
