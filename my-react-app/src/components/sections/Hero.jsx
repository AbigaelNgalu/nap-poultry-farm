import Button from '../common/Button'
import ResponsiveImage from '../common/ResponsiveImage'


export default function Hero() {
return (
<section className="relative bg-black text-white">
<div className="absolute inset-0 -z-10">
<ResponsiveImage srcWebp={'/assets/images/hero.webp'} srcFallback={'/assets/images/hero.jpg'} alt="Nap Poultry Farm" className={'w-full h-full'} />
<div className="absolute inset-0 bg-black/45"></div>
</div>


<div className="container-max px-6 py-28 text-center">
<p className="text-sm font-medium text-secondary uppercase tracking-widest">Farm-fresh</p>
<h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">Fresh Poultry, From Our Farm to Your Table</h1>
<p className="mt-4 max-w-2xl mx-auto text-md text-gray-100">Ethically raised, locally sourced, and naturally delicious. Order online for pickup or delivery.</p>
<div className="mt-8 flex justify-center gap-4">
<Button variant="primary">Shop Now</Button>
<Button variant="secondary">Learn More</Button>
</div>
</div>
</section>
)
}