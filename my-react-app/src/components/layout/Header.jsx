import Button from '../common/Button'


export default function Header() {
return (
<header className="sticky top-0 z-40 bg-white/60 backdrop-blur">
<div className="container-max flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold">N</div>
<div>
<div className="text-sm font-semibold">Nap Poultry Farm</div>
<div className="text-xs text-gray-500 -mt-0.5">Fresh. Ethical. Local.</div>
</div>
</div>
<nav className="hidden md:flex gap-6 items-center text-sm text-neutralDark">
<a href="#products" className="hover:underline">Shop</a>
<a href="#about" className="hover:underline">About</a>
<a href="#testimonials" className="hover:underline">Reviews</a>
<a href="#contact" className="hover:underline">Contact</a>
<Button variant="outline">Sign in</Button>
</nav>
<div className="md:hidden">
<button aria-label="Open menu" className="p-2 rounded-md bg-neutralLight">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#1A1A1A" strokeWidth="1.5" /></svg>
</button>
</div>
</div>
</header>
)
}