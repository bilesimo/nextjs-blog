'use client'

import Link from 'next/link'
import { Icons } from './icon'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export function MainNav() {
  const pathName = usePathname()
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          'text-sm font medium transition-colors hover:text-primary hidden sm:inline-block',
          pathName === '/blog' ? 'text-foreground' : 'text-foregroun/60',
        )}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={cn(
          'text-sm font medium transition-colors hover:text-primary hidden sm:inline-block',
          pathName === '/about' ? 'text-foreground' : 'text-foregroun/60',
        )}
      >
        About
      </Link>
    </nav>
  )
}
