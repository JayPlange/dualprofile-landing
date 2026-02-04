import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Initialize Iconify icons
    if (typeof window !== 'undefined' && window.IconifyIcon) {
      window.IconifyIcon.scan();
    }
  }, []);

  return (
    <>
      <Head>
        <title>DualProfile - Control Your WhatsApp Profile Photos</title>
        <meta name="description" content="Upload two WhatsApp profile photos. Your boss sees professional. Your friends see personal. Control who sees what." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Fonts: Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        
        {/* Iconify */}
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" async />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com" async />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            brand: {
                                DEFAULT: '#25D366',
                                dark: '#128C7E',
                                light: '#DCF8C6',
                            },
                            dark: '#0f1115',
                            muted: '#6B7280',
                        },
                        fontFamily: {
                            sans: ['Inter', 'sans-serif'],
                        },
                        boxShadow: {
                            'glow': '0 0 60px -15px rgba(37, 211, 102, 0.3)',
                            '3d': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        },
                        animation: {
                            'float': 'float 6s ease-in-out infinite',
                            'float-delayed': 'float 6s ease-in-out 3s infinite',
                            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        }
                    }
                }
            }
          `
        }} />
      </Head>

      <div className="bg-white text-dark font-sans antialiased selection:bg-brand selection:text-white overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 supports-[backdrop-filter]:bg-white/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform duration-300">
                            <span className="font-semibold tracking-tighter">DP</span>
                        </div>
                        <span className="font-semibold tracking-tight text-lg group-hover:text-brand transition-colors">DualProfile</span>
                    </div>
                    
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
                        <a href="#how-it-works" className="hover:text-dark transition-colors">How it Works</a>
                        <a href="#pricing" className="hover:text-dark transition-colors">Pricing</a>
                        <a href="#roadmap" className="hover:text-dark transition-colors">Roadmap</a>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <a href="#pricing" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-dark">Log in</a>
                        <a href="#pricing" className="bg-dark hover:bg-black text-white text-sm font-medium px-4 py-2 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5">
                            Join Waitlist
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-visible">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(37,211,102,0.1),rgba(255,255,255,0))] -z-10 pointer-events-none"></div>
            <div className="absolute top-40 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center perspective-2000">
                
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                    </span>
                    <span className="text-xs font-medium text-gray-500 tracking-wide uppercase">Founder Pricing: First 500 Only</span>
                </div>

                {/* Headlines */}
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-dark mb-6 leading-[1.1]">
                    One WhatsApp. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">Two Realities.</span>
                </h1>
                
                <p className="text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                    Professional for your boss. Personal for your friends. <br className="hidden sm:block" />Control your digital identity with a simple toggle.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 relative z-10">
                    <a href="https://wadualpic.lemonsqueezy.com/checkout/buy/b1aa498c-ba28-4e4a-a5b9-ac6ea0b6381c" className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-dark text-white text-lg font-medium rounded-full transition-all shadow-glow hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
                        Get Founder Access - £22
                        <iconify-icon icon="solar:arrow-right-linear" width="20" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
                    </a>
                    <a href="#demo" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-dark hover:border-gray-300 hover:bg-gray-50 text-lg font-medium rounded-full transition-all hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2">
                        <iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Watch Demo
                    </a>
                </div>

                {/* Mobile Placeholder (No 3D) */}
                <div className="block md:hidden mx-auto max-w-sm">
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-xl">
                         <div className="flex justify-between items-center mb-6">
                            <div className="text-center w-1/2 border-r border-gray-200">
                                <iconify-icon icon="solar:user-id-bold" className="text-gray-400 text-5xl mb-2"></iconify-icon>
                                <p className="text-xs font-bold text-gray-500">Boss Sees</p>
                            </div>
                            <div className="text-center w-1/2">
                                <iconify-icon icon="solar:glasses-bold-duotone" className="text-brand text-5xl mb-2"></iconify-icon>
                                <p className="text-xs font-bold text-brand">Friends See</p>
                            </div>
                         </div>
                         <p className="text-xs text-center text-muted">DualProfile manages this automatically.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-dark">The 17-Year-Old Problem</h2>
                    <p className="text-muted">WhatsApp has 2 billion users, but zero privacy controls for your profile picture.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
                    {/* Card 1 */}
                    <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm card-hover-3d transform-style-3d h-full">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <iconify-icon icon="solar:tie-linear" width="24" strokeWidth="1.5"></iconify-icon>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-blue-600 transition-colors">Career Risk</h3>
                        <p className="text-muted leading-relaxed text-sm">Your boss sees your weekend party photos. Clients see your vacation selfies. One wrong photo can cost opportunities.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm card-hover-3d transform-style-3d h-full">
                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <iconify-icon icon="solar:users-group-two-rounded-linear" width="24" strokeWidth="1.5"></iconify-icon>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-purple-600 transition-colors">Social Friction</h3>
                        <p className="text-muted leading-relaxed text-sm">You keep your photo "neutral" for work, which means your friends never see the real you. You're living a diluted digital life.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm card-hover-3d transform-style-3d h-full">
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <iconify-icon icon="solar:shield-warning-linear" width="24" strokeWidth="1.5"></iconify-icon>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-red-600 transition-colors">Privacy Gap</h3>
                        <p className="text-muted leading-relaxed text-sm">Every handyman, delivery driver, or random contact gets access to your personal face. It's a security hole.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">How DualProfile Works</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="group cursor-default">
                        <div className="aspect-square bg-gray-50 rounded-2xl mb-6 border border-gray-100 flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-all duration-300">
                            <span className="absolute top-4 left-4 w-8 h-8 bg-white border border-gray-200 text-dark rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-sm">1</span>
                            <iconify-icon icon="solar:gallery-add-linear" className="text-gray-400 group-hover:text-brand group-hover:scale-110 transition-all duration-300 w-16 h-16"></iconify-icon>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Upload Two Photos</h3>
                        <p className="text-sm text-muted">Drag and drop. Securely stored locally on your device.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="group cursor-default">
                        <div className="aspect-square bg-gray-50 rounded-2xl mb-6 border border-gray-100 flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-all duration-300">
                            <span className="absolute top-4 left-4 w-8 h-8 bg-white border border-gray-200 text-dark rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-sm">2</span>
                            <div className="flex gap-2 group-hover:gap-4 transition-all duration-300">
                                 <div className="w-10 h-10 bg-brand rounded-full shadow-lg border-2 border-white relative z-10"></div>
                                 <div className="w-10 h-10 bg-gray-800 rounded-full shadow-lg border-2 border-white relative -ml-4 group-hover:ml-0 transition-all"></div>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Assign Contacts</h3>
                        <p className="text-sm text-muted">Select contacts or create rules (e.g. "+1 555..." = Professional).</p>
                    </div>

                    {/* Step 3 */}
                    <div className="group cursor-default">
                        <div className="aspect-square bg-gray-50 rounded-2xl mb-6 border border-gray-100 flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-all duration-300">
                            <span className="absolute top-4 left-4 w-8 h-8 bg-white border border-gray-200 text-dark rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-sm">3</span>
                            <iconify-icon icon="solar:eye-linear" className="text-gray-400 group-hover:text-brand group-hover:rotate-12 transition-all duration-300 w-16 h-16"></iconify-icon>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Preview Instantly</h3>
                        <p className="text-sm text-muted">Verify exactly what they see before you hit save.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="group cursor-default">
                        <div className="aspect-square bg-gray-50 rounded-2xl mb-6 border border-gray-100 flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-all duration-300">
                            <span className="absolute top-4 left-4 w-8 h-8 bg-white border border-gray-200 text-dark rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-sm">4</span>
                            <div className="relative">
                                <iconify-icon icon="solar:check-circle-bold" className="text-brand opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 absolute inset-0 w-16 h-16"></iconify-icon>
                                <iconify-icon icon="solar:check-circle-linear" className="text-gray-400 group-hover:opacity-0 transition-opacity duration-300 w-16 h-16"></iconify-icon>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Complete Control</h3>
                        <p className="text-sm text-muted">The extension handles the switching automatically in the background.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">One-Time Pricing</h2>
                    <p className="text-muted">Join the founding members. <span className="text-brand font-medium">427 spots remaining.</span></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto perspective-1000">
                    
                    {/* Founding Member Card */}
                    <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl p-8 overflow-hidden transform-style-3d transition-transform duration-500 hover:rotate-y-2 hover:scale-[1.02] z-10">
                        <div className="absolute top-0 right-0 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-bl-lg tracking-wider border-b border-l border-amber-200">MOST POPULAR</div>
                        
                        <div className="flex items-center gap-2 mb-2 text-amber-500 relative">
                            <iconify-icon icon="solar:cup-star-bold" width="20"></iconify-icon>
                            <span className="font-bold tracking-wide text-xs uppercase">Founding Member</span>
                        </div>
                        
                        <div className="flex items-baseline gap-1 mb-2 relative">
                            <span className="text-5xl font-bold tracking-tight text-dark">£22</span>
                            <span className="text-muted text-sm">/ lifetime</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8 relative">Pay once. Use forever. Include all future updates.</p>

                        <ul className="space-y-4 mb-8 relative">
                            <li className="flex items-center gap-3 text-sm">
                                <iconify-icon icon="solar:check-circle-bold" className="text-amber-500 flex-shrink-0"></iconify-icon>
                                <span><strong>Unlimited</strong> contacts & photos</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <iconify-icon icon="solar:check-circle-bold" className="text-amber-500 flex-shrink-0"></iconify-icon>
                                <span>Priority 24/7 Support</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <iconify-icon icon="solar:check-circle-bold" className="text-amber-500 flex-shrink-0"></iconify-icon>
                                <span>P2P Sync Access (Feb 2026)</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <iconify-icon icon="solar:check-circle-bold" className="text-amber-500 flex-shrink-0"></iconify-icon>
                                <span>Golden Founder Badge</span>
                            </li>
                        </ul>

                        <a href="https://wadualpic.lemonsqueezy.com/checkout/buy/b1aa498c-ba28-4e4a-a5b9-ac6ea0b6381c" className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl relative overflow-hidden group">
                            <span className="relative z-10">Become a Founder - £22</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>
                        <p className="text-center text-xs text-gray-400 mt-4">Price increases to £4.99/mo soon.</p>
                    </div>

                    {/* Free Tier */}
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 flex flex-col hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2 text-gray-500">
                            <iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
                            <span className="font-bold tracking-wide text-xs uppercase">Free Tier</span>
                        </div>
                        
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-5xl font-bold tracking-tight text-dark">Free</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-8 border-b border-gray-200 pb-8">Basic privacy controls.</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-gray-700">
                                <iconify-icon icon="solar:check-circle-linear" className="text-gray-400 flex-shrink-0"></iconify-icon>
                                <span>6 contact assignments</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-700">
                                <iconify-icon icon="solar:check-circle-linear" className="text-gray-400 flex-shrink-0"></iconify-icon>
                                <span>2 profile photos</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-700">
                                <iconify-icon icon="solar:check-circle-linear" className="text-gray-400 flex-shrink-0"></iconify-icon>
                                <span>Preview mode</span>
                            </li>
                        </ul>

                        <a href="#waitlist" className="w-full bg-transparent border-2 border-gray-200 hover:border-dark hover:text-dark text-gray-500 font-semibold py-4 rounded-xl transition-all">
                            Join Waitlist Free
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                    {/* Q1 */}
                    <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md">
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors">
                            <span className="font-medium text-dark">Is this available now?</span>
                            <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center group-open:bg-brand group-open:border-brand transition-colors">
                                <iconify-icon icon="solar:alt-arrow-down-linear" className="transform group-open:rotate-180 group-open:text-white transition-transform text-gray-400"></iconify-icon>
                            </div>
                        </summary>
                        <div className="px-6 pb-6 text-muted text-sm leading-relaxed border-t border-gray-50 animate-fade-in">
                            Chrome Web Store approval pending (typically 1-2 weeks). You'll receive install instructions via email when approved. Preview mode works now. P2P sync launches February 2026.
                        </div>
                    </details>

                    {/* Q2 */}
                    <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md">
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors">
                            <span className="font-medium text-dark">Does the other person need the extension?</span>
                            <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center group-open:bg-brand group-open:border-brand transition-colors">
                                <iconify-icon icon="solar:alt-arrow-down-linear" className="transform group-open:rotate-180 group-open:text-white transition-transform text-gray-400"></iconify-icon>
                            </div>
                        </summary>
                        <div className="px-6 pb-6 text-muted text-sm leading-relaxed border-t border-gray-50">
                            Not for preview mode (available now). Yes for P2P mode. As more people install, the value grows exponentially.
                        </div>
                    </details>

                    {/* Q3 */}
                    <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md">
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors">
                            <span className="font-medium text-dark">Is it safe?</span>
                            <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center group-open:bg-brand group-open:border-brand transition-colors">
                                <iconify-icon icon="solar:alt-arrow-down-linear" className="transform group-open:rotate-180 group-open:text-white transition-transform text-gray-400"></iconify-icon>
                            </div>
                        </summary>
                        <div className="px-6 pb-6 text-muted text-sm leading-relaxed border-t border-gray-50">
                            Yes. Photos are stored locally or encrypted. We don't read your messages. We only touch the profile picture element in the DOM.
                        </div>
                    </details>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-dark text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                 <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px]"></div>
                 <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Take Control of Your Identity</h2>
                <p className="text-xl text-gray-400 mb-10">Don't let a party photo ruin your career. Don't let a headshot ruin your vibe.</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <a href="https://wadualpic.lemonsqueezy.com/checkout/buy/b1aa498c-ba28-4e4a-a5b9-ac6ea0b6381c" className="w-full sm:w-auto px-10 py-4 bg-brand hover:bg-brand-dark text-white text-lg font-medium rounded-full transition-all hover:scale-105 shadow-glow">
                        Get Lifetime Access - £22
                    </a>
                    <a href="#waitlist" className="w-full sm:w-auto px-10 py-4 border border-gray-600 hover:border-white text-white text-lg font-medium rounded-full transition-colors">
                        Join Waitlist
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
                    <span className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear" className="text-brand"></iconify-icon> 30-day money-back guarantee</span>
                    <span className="flex items-center gap-2"><iconify-icon icon="solar:lock-password-linear" className="text-brand"></iconify-icon> Encrypted & Private</span>
                </div>
            </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-semibold tracking-tight mb-4">Join Free Waitlist</h2>
                <p className="text-muted mb-8">Not ready to commit? Join the waitlist for updates when Chrome approves.</p>
                
                {/* ConvertKit Form Embed */}
                <div id="convertkit-waitlist-form">
                    <script async data-uid="7a5b00e94e" src="https://dualprofile.kit.com/7a5b00e94e/index.js"></script>
                </div>
                
                <p className="text-sm text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-white pt-20 pb-12 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-brand flex items-center justify-center text-white text-xs font-bold">DP</div>
                        <span className="font-bold text-dark">DualProfile</span>
                    </div>
                    <div className="text-gray-400">
                        &copy; 2025 DualProfile. Not affiliated with WhatsApp/Meta.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-brand transition-colors"><iconify-icon icon="brandico:twitter-bird"></iconify-icon></a>
                        <a href="#" className="text-gray-500 hover:text-brand transition-colors"><iconify-icon icon="brandico:linkedin"></iconify-icon></a>
                        <a href="mailto:edwin.dualprofile@gmail.com" className="text-gray-500 hover:text-brand transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>

        {/* Custom Styles */}
        <style jsx global>{`
            /* Custom scrollbar hiding */
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            
            /* 3D Transform Utilities */
            .perspective-1000 { perspective: 1000px; }
            .perspective-2000 { perspective: 2000px; }
            .transform-style-3d { transform-style: preserve-3d; }
            .backface-hidden { backface-visibility: hidden; }
            
            /* Z-axis translation helpers not in default tailwind */
            .translate-z-0 { transform: translateZ(0px); }
            .translate-z-10 { transform: translateZ(20px); }
            .translate-z-20 { transform: translateZ(40px); }
            .translate-z-30 { transform: translateZ(60px); }

            /* Custom 3D Animations */
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotateX(5deg) rotateY(-5deg); }
                50% { transform: translateY(-20px) rotateX(8deg) rotateY(-2deg); }
            }
            
            @keyframes float-reverse {
                0%, 100% { transform: translateY(0px) rotateX(2deg) rotateY(2deg); }
                50% { transform: translateY(-15px) rotateX(-2deg) rotateY(-2deg); }
            }

            .animate-3d-float { animation: float 8s ease-in-out infinite; }
            .animate-3d-float-reverse { animation: float-reverse 9s ease-in-out infinite; }

            /* Smooth hover transitions for cards */
            .card-hover-3d {
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .card-hover-3d:hover {
                transform: translateY(-10px) rotateX(2deg);
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
            }

            .rotate-y-2:hover {
                transform: rotateY(2deg) scale(1.02);
            }

            .rotate-x-2:hover {
                transform: rotateX(2deg);
            }

            @keyframes fade-in-up {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out;
            }
        `}</style>
      </div>
    </>
  );
}
