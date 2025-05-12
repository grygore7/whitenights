import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AuthorPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-playfair-display font-bold mb-12 text-center">
        Fëdor Dostoevskij
      </h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        Uno sguardo sulla vita, il contesto e l'opera del geniale autore russo, la cui profonda introspezione psicologica ha segnato indelebilmente la letteratura mondiale.
      </p>

      <Card className="overflow-hidden shadow-xl rounded-lg mb-12">
        <div className="md:flex">
          <div className="md:w-2/5 flex-shrink-0 bg-secondary/30 flex items-center justify-center p-4 md:p-8 relative min-h-[350px] md:min-h-0">
            <div className="relative w-full h-[700px]">
              <Image
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01jtmxjd4besk8w0pprb3avwnz%2F1746606384_img_2.webp?st=2025-05-09T14%3A58%3A43Z&se=2025-05-15T15%3A58%3A43Z&sks=b&skt=2025-05-09T14%3A58%3A43Z&ske=2025-05-15T15%3A58%3A43Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=RLw3TKgcmFRea3HGMDYg0GOpznq6lFdzwNByZuXKYb4%3D&az=oaivgprodscus"
                alt="Ritratto di Fëdor Dostoevskij"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain rounded-md shadow-md"
                data-ai-hint="stylized dostoevsky portrait"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <CardHeader className="pb-4">
              <CardTitle className="font-cormorant-garamond text-3xl md:text-4xl">L'Autore e il Suo Tempo</CardTitle>
              <CardDescription className="text-lg italic text-muted-foreground">Comprendere la mente dietro il Sognatore e l'Uomo del Sottosuolo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-base md:text-lg leading-relaxed pt-2">
              <div>
                <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Biografia: Gli Anni Formativi</h3>
                <p className="text-muted-foreground">
                  Fëdor Michajlovič Dostoevskij (1821–1881) scrisse "Le Notti Bianche" nel 1848. Quest'opera appartiene al periodo formativo della sua prima carriera, prima del suo arresto, della condanna a morte commutata e del successivo esilio in Siberia. Nato a Mosca in una famiglia dalle origini nobili ma decadute, si trasferì a San Pietroburgo per studiare ingegneria militare, ma la sua vera vocazione lo portò presto a dedicarsi interamente alla letteratura. Il suo romanzo d'esordio, "Povera Gente" (1846), fu accolto con entusiasmo dalla critica, consacrandolo come una nuova, potente voce capace di esplorare con profonda introspezione psicologica ed empatia la vita degli umili e dei diseredati urbani.
                </p>
                <p className="text-muted-foreground mt-2">
                  Questo primo periodo fu cruciale per la sua formazione intellettuale, segnato dall'influenza del Romanticismo europeo (in particolare Schiller, Hoffmann, e Balzac, evidenti nell'archetipo del "sognatore") e dalle nascenti idee del Socialismo Utopico. La frequentazione del Circolo Petraševskij, un gruppo di intellettuali che discuteva di filosofia occidentale, letteratura proibita e riforme sociali, fu determinante e lo condusse all'arresto nel 1849 con l'accusa di attività sovversive contro lo Zar Nicola I. Questa esperienza traumatica segnò profondamente la sua vita e la sua opera futura.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-bold font-lato text-xl mb-2 text-foreground">Contesto Storico e Letterario della San Pietroburgo Anni '40</h3>
                <p className="text-muted-foreground">
                  San Pietroburgo negli anni '40 del XIX secolo non era solo la sfarzosa capitale imperiale, ma anche un paesaggio letterario vibrante e spesso contraddittorio. Le prime opere di Dostoevskij, inclusa "Le Notti Bianche," emersero nel contesto della "Scuola Naturale" della letteratura russa, che si focalizzava su rappresentazioni realistiche della vita urbana e delle sue miserie. Tuttavia, Dostoevskij seppe fondere questo realismo con un profondo sentimentalismo e una penetrante profondità psicologica che lo distinsero fin da subito. L'epoca sotto lo Zar Nicola I fu caratterizzata da una forte repressione politica e censura, ma paradossalmente anche da un intenso fermento intellettuale, con accesi dibattiti sull'identità e il futuro della Russia, in particolare tra Occidentalisti e Slavofili.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-bold font-lato text-xl mb-2 text-foreground">"Le Notti Bianche" nell'Opera Complessiva di Dostoevskij</h3>
                <p className="text-muted-foreground">
                  Spesso considerata una delle sue opere più poetiche, liriche e sentimentali, "Le Notti Bianche" si distingue per tono e atmosfera dai romanzi filosofici più cupi, complessi e polifonici che Dostoevskij scrisse dopo l'esperienza dell'esilio siberiano (come "Memorie dal Sottosuolo", "Delitto e Castigo", "L'Idiota" o "I Fratelli Karamazov"). Ciononostante, il racconto anticipa chiaramente temi dostoevskiani chiave: l'individuo alienato e isolato, il divario tra sogno e realtà, le complessità dell'amore non corrisposto, la sofferenza come elemento intrinseco dell'esistenza e le insondabili profondità psicologiche dell'animo umano. La figura del Sognatore è vista da molti critici come un precursore, più romantico e meno amareggiato, dell'"Uomo del Sottosuolo", altro iconico personaggio dostoevskiano definito dall'isolamento, dal risentimento e da un'intensa, tormentata autocoscienza.
                </p>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
      <div className="mt-12 text-center">
        <Button asChild size="lg">
          <Link href="/story">Approfondisci l'Opera nel Contesto</Link>
        </Button>
      </div>
    </div>
  );
}
