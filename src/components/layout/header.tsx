
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Home, Users, MessageSquare, Info, Brain, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';


const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/story', label: 'Storia', icon: BookOpen },
  { href: '/characters', label: 'Personaggi', icon: Users },
  { href: '/author', label: 'Autore', icon: Info },
  { href: '/curiosities', label: 'Curiosità', icon: MessageSquare },
  { href: '/explore', label: 'Esplora', icon: Brain },
  { href: '/chat', label: 'Chatta', icon: MessageCircle },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    navItems.map(({ href, label, icon: Icon }) => (
      <Link
        key={href}
        href={href}
        onClick={isMobile ? closeSheet : undefined}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
          pathname === href
            ? 'bg-accent text-accent-foreground'
            : 'text-muted-foreground hover:text-foreground hover:bg-secondary',
          isMobile ? 'text-lg py-3' : '' // Larger text for mobile sheet
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Link>
    ))
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-playfair-display text-lg font-bold">
          {/* Optional: Add a small logo/icon here */}
          <span>Notti Bianche</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <NavLinks />
        </nav>

         {/* Mobile Navigation */}
        <div className="md:hidden">
           <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Apri menu di navigazione</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm p-0"> {/* Removed default padding */}
               <div className="flex flex-col h-full">
                 <SheetHeader className="p-4 border-b"> {/* Added SheetHeader for accessibility */}
                    <SheetTitle asChild>
                        <Link href="/" onClick={closeSheet} className="font-playfair-display text-lg font-bold">
                        Notti Bianche
                        </Link>
                    </SheetTitle>
                 </SheetHeader>
                <nav className="flex flex-col space-y-2 p-4 flex-grow">
                   <NavLinks isMobile={true}/>
                </nav>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

