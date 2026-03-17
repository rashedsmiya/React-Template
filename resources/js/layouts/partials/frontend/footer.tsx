import React from 'react'
import { Link } from '@inertiajs/react';
import { Menu, Search } from 'lucide-react';
import { useState } from 'react';

import AppLogo from '@/components/app-logo';
export function FrontendFooter() {
    return (
         
 
<footer className="bg-[#0f1923] text-white">

  {/* Newsletter Strip */}
  <div className="border-b border-[#1e2d3d]">
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-white mb-1">Stay Connected</h2>
        <p className="text-[#7a93a8] text-sm leading-relaxed max-w-xs">
          Get the latest wellness tips, exclusive offers, and new practitioner announcements.
        </p>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 md:w-72 bg-white text-gray-900 text-sm rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-brand-gold placeholder-gray-400"
        />
        <button className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-800 transition-colors text-white font-semibold text-sm px-5 py-3 rounded-md whitespace-nowrap">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Subscribe
        </button>
      </div>
    </div>
  </div>

  {/* Main Footer */}
  <div className="max-w-7xl mx-auto px-6 py-14">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

      {/* Brand Column */}
      <div className="md:col-span-2">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.svg" alt="MIRIA" className="h-12 w-auto" /> 
        </div>

        <p className="text-[#7a93a8] text-sm leading-relaxed max-w-xs mb-6">
          Your trusted platform for connecting with holistic practitioners and discovering pathways to well-being.
        </p>

        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm font-medium text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Secure Payments
          </li>
          <li className="flex items-center gap-2 text-sm font-medium text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Verified Practitioners
          </li>
        </ul>
      </div>

      {/* Platform */}
      <div>
        <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Platform</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">About Us</a></li>
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">How It Works</a></li>
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">For Practitioners</a></li>
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">For Clients</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Support</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">Help Center</a></li>
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">Contact Support</a></li>
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">FAQs</a></li>
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">Community Guidelines</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Legal</h3>
        <ul className="space-y-3">
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">Terms of Service</a></li>
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">Cookie Policy</a></li>
          <li><a href="#" className="text-[#7a93a8] text-sm hover:text-brand-gold transition-colors">Refund Policy</a></li>
        </ul>
      </div>

    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-[#1e2d3d]">
    <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-[#4a6070] text-xs">© 2025 Holistic Marketplace. All rights reserved.</p>

      {/* Social Icons */}
      <div className="flex items-center gap-2">
        {/* Facebook */}
        <a href="#" className="w-9 h-9 rounded-full bg-brand-gold hover:bg-brand-gold-light transition-colors flex items-center justify-center">
          <svg className="w-4 h-4 text-[#0f1923]" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        {/* Twitter/X */}
        <a href="#" className="w-9 h-9 rounded-full bg-brand-gold hover:bg-brand-gold-light transition-colors flex items-center justify-center">
          <svg className="w-4 h-4 text-[#0f1923]" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
        </a>
        {/* Instagram */}
        <a href="#" className="w-9 h-9 rounded-full bg-brand-gold hover:bg-brand-gold-light transition-colors flex items-center justify-center">
          <svg className="w-4 h-4 text-[#0f1923]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="#" className="w-9 h-9 rounded-full bg-brand-gold hover:bg-brand-gold-light transition-colors flex items-center justify-center">
          <svg className="w-4 h-4 text-[#0f1923]" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </div>
  </div>

</footer>

 
    )
}
