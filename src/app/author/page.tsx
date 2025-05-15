
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Importa le icone se decidi di usarle, es:
// import { Feather, Landmark, BookOpen } from 'lucide-react';

export default function AuthorPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-playfair-display font-bold mb-6 text-center">
        Fëdor Dostoevskij
      </h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        Uno sguardo sulla vita, il contesto e l'opera del geniale autore russo, la cui profonda introspezione psicologica ha segnato indelebilmente la letteratura mondiale.
      </p>

      {/* Main Image Section */}
      <div className="mb-12 flex justify-center">
        <div className="relative w-full max-w-lg h-[400px] md:h-[550px] shadow-xl rounded-lg overflow-hidden group">
          <Image
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jva56eq3fwmt2ypv01qewf1n%2F1747319030_img_2.webp?st=2025-05-15T13%3A21%3A27Z&se=2025-05-21T14%3A21%3A27Z&sks=b&skt=2025-05-15T13%3A21%3A27Z&ske=2025-05-21T14%3A21%3A27Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=JGTn4cUJKL8Zjn3zCRFpCYfA%2BuIjXcquYf0sNHgtEQg%3D&az=oaivgprodscus"
            alt="Ritratto di Fëdor Dostoevskij"
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="stylized dostoevsky portrait"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-75"></div>
           <div className="absolute bottom-0 left-0 p-6">
             <h2 className="text-3xl font-cormorant-garamond font-bold text-white shadow-md">L'Autore e il Suo Tempo</h2>
             <p className="text-md text-gray-200 italic shadow-sm">Comprendere la mente dietro il Sognatore</p>
           </div>
        </div>
      </div>

      {/* Content Sections - Using individual cards */}
      <div className="space-y-10">
        <Card className="shadow-lg rounded-lg overflow-hidden bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-cormorant-garamond text-2xl md:text-3xl">
              {/* <Feather className="inline-block mr-3 h-7 w-7 text-accent" /> */}
              Biografia: Gli Anni Formativi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              Fëdor Michajlovič Dostoevskij (1821–1881) scrisse "Le Notti Bianche" nel 1848. Quest'opera appartiene al periodo formativo della sua prima carriera, prima del suo arresto, della condanna a morte commutata e del successivo esilio in Siberia. Nato a Mosca in una famiglia dalle origini nobili ma decadute, si trasferì a San Pietroburgo per studiare ingegneria militare, ma la sua vera vocazione lo portò presto a dedicarsi interamente alla letteratura. Il suo romanzo d'esordio, "Povera Gente" (1846), fu accolto con entusiasmo dalla critica, consacrandolo come una nuova, potente voce capace di esplorare con profonda introspezione psicologica ed empatia la vita degli umili e dei diseredati urbani.
            </p>
            <p>
              Questo primo periodo fu cruciale per la sua formazione intellettuale, segnato dall'influenza del Romanticismo europeo (in particolare Schiller, Hoffmann, e Balzac, evidenti nell'archetipo del "sognatore") e dalle nascenti idee del Socialismo Utopico. La frequentazione del Circolo Petraševskij, un gruppo di intellettuali che discuteva di filosofia occidentale, letteratura proibita e riforme sociali, fu determinante e lo condusse all'arresto nel 1849 con l'accusa di attività sovversive contro lo Zar Nicola I. Questa esperienza traumatica segnò profondamente la sua vita e la sua opera futura.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg overflow-hidden bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-cormorant-garamond text-2xl md:text-3xl">
              {/* <Landmark className="inline-block mr-3 h-7 w-7 text-accent" /> */}
              Contesto Storico e Letterario
            </CardTitle>
            <CardDescription className="text-md italic text-muted-foreground/90 pt-1">La San Pietroburgo degli Anni '40 del XIX Secolo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              San Pietroburgo negli anni '40 del XIX secolo non era solo la sfarzosa capitale imperiale, ma anche un paesaggio letterario vibrante e spesso contraddittorio. Le prime opere di Dostoevskij, inclusa "Le Notti Bianche," emersero nel contesto della "Scuola Naturale" della letteratura russa, che si focalizzava su rappresentazioni realistiche della vita urbana e delle sue miserie. Tuttavia, Dostoevskij seppe fondere questo realismo con un profondo sentimentalismo e una penetrante profondità psicologica che lo distinsero fin da subito. L'epoca sotto lo Zar Nicola I fu caratterizzata da una forte repressione politica e censura, ma paradossalmente anche da un intenso fermento intellettuale, con accesi dibattiti sull'identità e il futuro della Russia, in particolare tra Occidentalisti e Slavofili.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg overflow-hidden bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-cormorant-garamond text-2xl md:text-3xl">
              {/* <BookOpen className="inline-block mr-3 h-7 w-7 text-accent" /> */}
              "Le Notti Bianche" nell'Opera Complessiva
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              Spesso considerata una delle sue opere più poetiche, liriche e sentimentali, "Le Notti Bianche" si distingue per tono e atmosfera dai romanzi filosofici più cupi, complessi e polifonici che Dostoevskij scrisse dopo l'esperienza dell'esilio siberiano (come "Memorie dal Sottosuolo", "Delitto e Castigo", "L'Idiota" o "I Fratelli Karamazov"). Ciononostante, il racconto anticipa chiaramente temi dostoevskiani chiave: l'individuo alienato e isolato, il divario tra sogno e realtà, le complessità dell'amore non corrisposto, la sofferenza come elemento intrinseco dell'esistenza e le insondabili profondità psicologiche dell'animo umano. La figura del Sognatore è vista da molti critici come un precursore, più romantico e meno amareggiato, dell'"Uomo del Sottosuolo", altro iconico personaggio dostoevskiano definito dall'isolamento, dal risentimento e da un'intensa, tormentata autocoscienza.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-shadow">
          <Link href="/story">Approfondisci l'Opera nel Contesto</Link>
        </Button>
      </div>
    </div>
  );
}
