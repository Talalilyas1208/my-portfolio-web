import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Layers, Briefcase, Cpu, BookOpen, Mail } from 'lucide-react';

export const navItems = [
  { name: 'Home', href: '/', icon: Terminal },
  { name: 'Projects', href: '/projects', icon: Layers },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Skills', href: '/skills', icon: Cpu },
  { name: 'Articles', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function NavDesktopLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1.5 liquid-glass px-3 py-1.5 rounded-full shadow-liquid-glass">
      {navItems.map((link) => {
        const isActive =
          link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
        const Icon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 relative ${
              isActive
                ? 'liquid-pill-primary text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
