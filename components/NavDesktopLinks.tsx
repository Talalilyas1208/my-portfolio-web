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
                ? 'liquid-pill-primary text-cyan-900 font-semibold shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-600' : 'text-slate-500'}`} />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
