import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Layers, Briefcase, Cpu, BookOpen, Mail } from 'lucide-react';

export const navItems = [
  { name: 'Home', href: '/', icon: Terminal, accent: 'text-slate-800' },
  { name: 'Projects', href: '/projects', icon: Layers, accent: 'text-slate-800' },
  { name: 'Experience', href: '/experience', icon: Briefcase, accent: 'text-slate-800' },
  { name: 'Skills', href: '/skills', icon: Cpu, accent: 'text-slate-800' },
  { name: 'Articles', href: '/blog', icon: BookOpen, accent: 'text-slate-800' },
  { name: 'Contact', href: '/contact', icon: Mail, accent: 'text-slate-800' },
];

export default function NavDesktopLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 border border-slate-200 px-2 py-1.5 rounded-2xl">
      {navItems.map((link) => {
        const isActive =
          link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
        const Icon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 relative ${
              isActive
                ? 'bg-white text-slate-950 font-bold shadow-sm border border-slate-200/90'
                : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? link.accent : 'text-slate-600'}`} />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
