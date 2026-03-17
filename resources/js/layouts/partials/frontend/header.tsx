import React, { useState } from 'react'

export function FrontendHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
          <header className="bg-accent-yellow2 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
            
                {/* Logo */}
                <a href="#" className="flex items-center gap-3">
                    <img src="logo.svg" alt="Logo" className="h-20 w-auto" />
                </a>
            
                {/* Desktop Nav */}
                <div className="hidden items-center gap-6 text-sm font-medium md:flex">
                    {/* Search */}
                    <a href="/login" className="flex w-64 items-center rounded-lg border border-gray-900 bg-white px-3 py-2 text-gray-400 transition hover:border-slate-300 hover:text-slate-500">
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    </svg>
                    <span>Search...</span>
                    </a>
            
                    <a href="/login" className="text-gray-900 transition hover:text-slate-900">Login</a>
            
                    <a href="/register" className="rounded-full bg-yellow-500 px-6 py-2 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-yellow-600">
                    Sign Up Free
                    </a>
                </div>
            
                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-full text-slate-700 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="sr-only">Toggle navigation</span>
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
                </div>
            
                {/* Mobile Menu */}
                <div id="mobile-menu" className={`hidden mt-4 flex flex-col gap-3 rounded-2xl border-t p-4 text-sm font-medium shadow-md md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <a href="/login" className="flex items-center rounded-lg border border-gray-900 bg-white px-3 py-2 text-gray-400 transition hover:border-slate-300 hover:text-slate-500">
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    </svg>
                    <span>Search...</span>
                </a>
            
                <a href="/login" className="text-gray-900 transition hover:text-slate-900">Login</a>
            
                <a href="/register" className="rounded-full bg-yellow-500 px-6 py-2 text-center text-white shadow-md transition hover:-translate-y-0.5 hover:bg-yellow-600">
                    Sign Up Free
                </a>
                </div>
            </nav>
        </header>
    )
}