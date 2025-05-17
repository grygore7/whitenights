import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, User, Moon, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-secondary py-20 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://videos.openai.com/vg-assets/assets%2Ftask_01jttssk17edb9515ekr26gkbn%2F1746803753_img_3.webp?st=2025-05-17T08%3A03%3A18Z&se=2025-05-23T09%3A03%3A18Z&sks=b&skt=2025-05-17T08%3A03%3A18Z&ske=2025-05-23T09%3A03%3A18Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3jN3mkax2d7I0M2PeUDs31UGhmzLRY2ko5gqhVSu5Qk%3D&az=oaivgprodscus)`, // Changed to static seed
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.6,
          }}
          data-ai-hint="dreamy saint petersburg night canal"
        />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-playfair-display font-bold mb-4 text-white">
            Le Notti Bianche
          </h1>
          <p className="text-xl md:text-2xl font-cormorant-garamond text-background/90 mb-8">
            Fëdor Dostoevskij
          </p>
          <div className="max-w-3xl mx-auto text-lg md:text-xl mb-12">
            <p className="text-white">
              Scopri la storia di un incontro fugace e toccante durante le magiche notti bianche di San Pietroburgo. Un'esplorazione profonda della solitudine, dei sogni e della natura effimera dei legami umani nell'opera giovanile di Dostoevskij.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/story">Leggi ed Esplora la Storia</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-background/80 hover:bg-background hover:text-foreground">
              <Link href="/characters">Incontra i Protagonisti</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-background/80 hover:bg-background hover:text-foreground">
              <Link href="/explore">Reimmagina la Narrazione</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Themes Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-playfair-display font-bold text-center mb-12">
            Temi Chiave Esplorati
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Heart className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="font-cormorant-garamond text-xl">Amore e Idealizzazione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">La natura dell'amore, tra idealizzazione romantica e connessione effimera.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <User className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="font-cormorant-garamond text-xl">Solitudine e Alienazione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">L'isolamento dell'individuo nella città e la ricerca di un legame autentico.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Sparkles className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="font-cormorant-garamond text-xl">Sogno e Realtà</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Il confine labile tra il mondo interiore della fantasia e la concretezza della vita.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Moon className="w-12 h-12 text-accent" /> {/* Icon changed to better represent suffering/melancholy if needed, or keep Moon for dream/reality */}
                </div>
                <CardTitle className="font-cormorant-garamond text-xl">Sofferenza e Accettazione</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">La malinconia, la perdita e la toccante accettazione del destino.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Placeholder Image Section - Can be replaced with Dostoevsky portrait or original art */}
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <Image
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01jtmxjd4besk8w0pprb3avwnz%2F1746606384_img_2.webp?st=2025-05-09T14%3A59%3A24Z&se=2025-05-15T15%3A59%3A24Z&sks=b&skt=2025-05-09T14%3A59%3A24Z&ske=2025-05-15T15%3A59%3A24Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=38sRQlzJ1O5TXFWV70YWG53XRHdC1c72CJ4FG0aSJRM%3D&az=oaivgprodscus" // Changed to static seed
              alt="Ritratto stilizzato di Dostoevskij o illustrazione artistica"
              width={400}
              height={500}
              className="rounded-lg shadow-lg mx-auto object-contain"
              data-ai-hint="stylized dostoevsky portrait young"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-playfair-display font-bold mb-6">
              Un Racconto Intramontabile
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Le Notti Bianche" rimane una delle opere giovanili più amate di Dostoevskij, una toccante esplorazione della solitudine e del sogno, in un mondo di speranza e delusione. La bellezza della narrazione ti accompagnerà in un viaggio senza tempo attraverso l'animo umano.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-background py-12 mt-16">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
          <p className="text-lg mb-4">
            © 2025 Le Notti Bianche - Fëdor Dostoevskij. Tutti i diritti riservati.
          </p>
          <p className="text-sm mb-4">
            Un'opera giovanile di Fëdor Dostoevskij. Questa edizione è offerta per scopi educativi e culturali.
          </p>
          <div>
            <Link
              href="https://www.gutenberg.org/ebooks/36034" // Link al PDF del libro su Gutenberg
              target="_blank"
              className="text-accent hover:underline text-lg"
            >
              Leggi il Libro Completo (PDF)
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
