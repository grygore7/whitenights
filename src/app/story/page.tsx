import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Users, Landmark, Palette } from 'lucide-react';

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
      <h1 className="text-4xl md:text-5xl font-playfair-display font-bold mb-4 text-center">
        La Storia de Le Notti Bianche
      </h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        Segui la toccante narrazione del Sognatore e di Nastenka attraverso le luminose notti di San Pietroburgo, un racconto intessuto di solitudine, speranza e della natura effimera dei sogni.
      </p>

      <Card className="mb-12 shadow-lg">
        <CardHeader>
           <CardTitle className="font-cormorant-garamond text-2xl">Introduzione Generale</CardTitle>
        </CardHeader>
        <CardContent>
           <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              "Le Notti Bianche", sottotitolato "Romanzo Sentimentale (Dalle Memorie di un Sognatore)", è un racconto giovanile di Fëdor Dostoevskij, pubblicato nel 1848. Si svolge nell'arco di quattro notti e un mattino durante il fenomeno unico di San Pietroburgo delle "notti bianche", quando il cielo non si oscura mai completamente. Racconta la storia di un giovane senza nome, il Sognatore, la cui intensa solitudine trova un temporaneo sollievo in un incontro casuale con una giovane donna, Nastenka.
           </p>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full space-y-4 mb-12">
        {storyContent.map((night, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border bg-secondary/50 rounded-lg px-4 shadow-sm">
            <AccordionTrigger className="text-xl md:text-2xl font-cormorant-garamond hover:no-underline text-left">
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

      <Separator className="my-12" />

      {/* Analisi Tematica Approfondita */}
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8 text-accent flex-shrink-0" />
            <CardTitle className="font-cormorant-garamond text-3xl">Analisi Tematica Approfondita</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Solitudine e Alienazione</h3>
            <p className="text-muted-foreground leading-relaxed">
              Il tema della solitudine pervade "Le Notti Bianche". Il Sognatore è l'epitome dell'individuo isolato nella grande città di San Pietroburgo, un'entità quasi spettrale che osserva la vita scorrere senza parteciparvi attivamente. La sua alienazione è autoimposta ma anche riflesso di una società che può marginalizzare gli animi sensibili. Nastenka, pur vivendo con la nonna, sperimenta una sua forma di isolamento, legata alla sua attesa e alle restrizioni della sua vita. Questo isolamento urbano è un leitmotiv in Dostoevskij, che troverà la sua espressione più estrema e amara nell' "Uomo del Sottosuolo". Il Sognatore, tuttavia, rappresenta una versione più romantica e meno cinica di questo archetipo, un'anima che anela alla connessione piuttosto che crogiolarsi nel proprio risentimento.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Sogno vs. Realtà</h3>
            <p className="text-muted-foreground leading-relaxed">
              Il confine tra sogno e realtà è costantemente sfumato. Il Sognatore vive prevalentemente nel suo mondo interiore, popolato da fantasie elaborate che sostituiscono un'esistenza reale e appagante. Le "notti bianche" stesse, con la loro luce eterea che confonde il giorno e la notte, fungono da metafora perfetta per questo stato liminale. Nastenka, a sua volta, idealizza l'inquilino assente, nutrendo un amore basato più sull'attesa e sull'immaginazione che su una conoscenza profonda. L'incontro con Nastenka offre al Sognatore un assaggio intenso, seppur fugace, della realtà e dell'emozione autentica. La sua successiva "caduta" di nuovo nei sogni, sebbene arricchita da un ricordo reale, sottolinea la difficoltà di conciliare l'ideale con il prosaico, un tema caro a Dostoevskij che esplora la psiche umana e la sua necessità di evasione di fronte alla durezza dell'esistenza.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Amore: Idealizzato, Effimero, Sacrificale</h3>
            <p className="text-muted-foreground leading-relaxed">
              L'amore in "Le Notti Bianche" è presentato sotto diverse sfaccettature. Il Sognatore idealizza Nastenka quasi istantaneamente, vedendo in lei la personificazione dei suoi aneliti romantici. Nastenka, d'altro canto, è combattuta tra la lealtà verso un amore idealizzato (l'inquilino) e l'affetto tangibile e immediato offertole dal Sognatore. Il "momento di beatitudine" che il Sognatore sperimenta è emblematico dell'intensità e della transitorietà dell'amore nelle opere di Dostoevskij. La domanda implicita – se un singolo istante di felicità possa bastare per una vita intera – rimane aperta. L'accettazione finale del Sognatore del suo destino, con una malinconica gratitudine, ha quasi i tratti di un amore sacrificale, un'eco della capacità dostoevskiana di trovare nobiltà anche nella rinuncia.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Sofferenza e Accettazione</h3>
            <p className="text-muted-foreground leading-relaxed">
              La sofferenza è una compagna costante per i personaggi. La solitudine del Sognatore è una forma di sofferenza cronica, un dolore esistenziale. Nastenka soffre nell'attesa, nell'incertezza e, infine, nel dover fare una scelta che inevitabilmente ferirà qualcuno. Dostoevskij spesso vede nella sofferenza una via per una più profonda comprensione di sé e del mondo, sebbene in "Le Notti Bianche" essa si manifesti più come una toccante accettazione del destino che come un percorso verso la redenzione. Questa sofferenza è meno auto-inflitta e intellettualizzata rispetto a quella, per esempio, dell'Uomo del Sottosuolo, ma non meno sentita.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Dinamiche ed Evoluzione dei Personaggi */}
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8 text-accent flex-shrink-0" />
            <CardTitle className="font-cormorant-garamond text-3xl">Dinamiche ed Evoluzione dei Personaggi</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Il Sognatore e Nastenka: Un Incontro Trasformativo</h3>
            <p className="text-muted-foreground leading-relaxed">
              L'incontro tra il Sognatore e Nastenka è il fulcro della narrazione. Due anime solitarie si trovano e, per quattro notti, creano un universo condiviso di confidenze e speranze. Il Sognatore, solitamente chiuso nel suo mondo interiore, si apre, rivelando la sua vulnerabilità e il suo profondo bisogno di connessione. Nastenka trova in lui un ascoltatore empatico e un conforto inatteso. La loro relazione si sviluppa rapidamente, passando dalla curiosità iniziale a una profonda intimità emotiva. Il culmine giunge con la confessione del Sognatore e la momentanea accettazione di Nastenka, subito infranta dal ritorno dell'inquilino. La scelta finale di Nastenka, pur pragmatica, non cancella l'autenticità del legame formatosi.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Evoluzione del Sognatore</h3>
            <p className="text-muted-foreground leading-relaxed">
              Il Sognatore inizia la storia come un uomo completamente immerso nelle sue fantasie, quasi incapace di interagire con il mondo reale. L'incontro con Nastenka rappresenta una potente, seppur breve, irruzione della realtà nella sua vita. Egli sperimenta emozioni autentiche: speranza, amore, gioia e, infine, un profondo strazio. Sebbene ritorni alla sua solitudine, non è più lo stesso. Il "momento di beatitudine" vissuto non è più una semplice fantasia, ma un ricordo reale, un tesoro da custodire. Non si trasforma in un uomo d'azione, ma la sua capacità di sentire è stata risvegliata e arricchita. Questo lo distingue da una figura come l'Uomo del Sottosuolo, che rimane intrappolato in un circolo vizioso di alienazione e autoanalisi senza la catarsi, seppur malinconica, di un'autentica connessione umana.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Evoluzione di Nastenka</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nastenka appare inizialmente come una figura ansiosa, quasi eterea nella sua attesa, con un'aura di ingenuità ma anche di speranza. Trova nel Sognatore non solo un confidente ma anche una persona capace di offrirle un affetto sincero e disinteressato. Sviluppa per lui una profonda gratitudine e un affetto genuino, tanto da considerare per un momento un futuro diverso. Tuttavia, di fronte alla scelta tra l'amore idealizzato e a lungo atteso (l'inquilino) e l'affetto più recente ma altrettanto reale (il Sognatore), la sua lealtà al primo impegno e forse una visione più convenzionale della felicità prevalgono. La sua evoluzione sta nel confrontarsi con questa scelta difficile e nel prendere una decisione che, sebbene dolorosa per il Sognatore, è coerente con il suo personaggio e i suoi desideri.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contesto Storico e Culturale */}
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Landmark className="w-8 h-8 text-accent flex-shrink-0" />
            <CardTitle className="font-cormorant-garamond text-3xl">Contesto Storico e Culturale</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-bold font-lato text-xl mb-2 text-foreground">San Pietroburgo: Città di Sogni e Contrasti</h3>
            <p className="text-muted-foreground leading-relaxed">
              San Pietroburgo, negli anni '40 del XIX secolo, non è solo uno sfondo, ma un personaggio vivo nell'opera di Dostoevskij. Capitale imperiale, era una città di stridenti contrasti: la magnificenza dei palazzi e la desolazione dei quartieri poveri, la vivacità intellettuale e l'oppressione politica. Le "notti bianche", fenomeno atmosferico unico, trasformano la città in un palcoscenico quasi irreale, perfetto per la storia d'amore sognante e malinconica. I canali, i ponti, le strade scarsamente illuminate creano un'atmosfera che riflette lo stato d'animo del Sognatore. La città, con la sua vastità, può acuire il senso di solitudine, un tema che Dostoevskij esplorerà ripetutamente, influenzato dal Romanticismo europeo (in particolare Hoffmann e Schiller) e dalle nascenti idee del socialismo utopico discusse nel Circolo Petraševskij, che lo stesso Dostoevskij frequentava.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-bold font-lato text-xl mb-2 text-foreground">L'Epoca Zarista e l'Individuo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Il regno dello Zar Nicola I (1825-1855) fu caratterizzato da una forte repressione politica e da una rigida censura, ma fu anche un periodo di grande fermento intellettuale e dibattito sul futuro della Russia. Sebbene "Le Notti Bianche" non sia un'opera overtly politica, il senso di impotenza e di introspezione del Sognatore può essere letto anche come un riflesso di un'epoca in cui l'azione esterna era limitata, spingendo gli individui verso una più ricca, o più tormentata, vita interiore. Le convenzioni sociali erano rigide, specialmente per le donne come Nastenka, la cui vita era largamente definita dalla famiglia e dalle prospettive matrimoniali.
            </p>
          </div>
           <Separator />
          <div>
            <h3 className="font-bold font-lato text-xl mb-2 text-foreground">"Le Notti Bianche" nell'Opera Dostoevskiana</h3>
            <p className="text-muted-foreground leading-relaxed">
              Quest'opera giovanile, con il suo sentimentalismo e la sua atmosfera poetica, prefigura molti dei temi che Dostoevskij svilupperà con maggiore complessità e profondità psicologica nei suoi grandi romanzi post-siberiani. L'alienazione dell'individuo, il conflitto tra sogno e realtà, le complessità dell'amore e della sofferenza, l'esplorazione dell'animo umano sono tutti elementi già presenti. Il Sognatore, con la sua tendenza all'autoanalisi e la sua esistenza marginale, è una figura embrionale che anticipa personaggi più complessi e tormentati come l'"Uomo del Sottosuolo". Tuttavia, a differenza di quest'ultimo, il Sognatore conserva una capacità di meraviglia e una dolcezza che rendono "Le Notti Bianche" una delle opere più liriche e accessibili di Dostoevskij.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Considerazioni Finali */}
      <Card className="shadow-lg">
        <CardHeader>
           <div className="flex items-center gap-3 mb-2">
            <Palette className="w-8 h-8 text-accent flex-shrink-0" />
            <CardTitle className="font-cormorant-garamond text-3xl">Un Momento di Eterna Bellezza</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
           <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            "Le Notti Bianche" rimane una testimonianza della capacità di Dostoevskij di catturare la fragilità del cuore umano e la bellezza struggente degli incontri fugaci. È un invito a riflettere sulla natura della felicità, sulla potenza dei sogni e sulla traccia indelebile che anche un solo "momento di beatitudine" può lasciare nell'anima.
           </p>
        </CardContent>
      </Card>

    </div>
  );
}

    