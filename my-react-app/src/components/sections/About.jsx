export default function Footer() {
return (
<footer className="bg-neutralDark text-neutralLight mt-12">
<div className="container-max px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div>
<div className="text-lg font-semibold">Nap Poultry Farm</div>
<div className="text-sm text-gray-200 mt-2">Freshness you can trust — straight from our coop to your kitchen.</div>
</div>
<div>
<div className="font-semibold">Contact</div>
<div className="text-sm text-gray-200 mt-2">Email: hello@nappoultry.example</div>
<div className="text-sm text-gray-200">Phone: +1 (555) 123-4567</div>
</div>
<div>
<div className="font-semibold">Follow</div>
<div className="flex gap-3 mt-2">
<a href="#" className="text-sm text-gray-200">Instagram</a>
<a href="#" className="text-sm text-gray-200">Facebook</a>
<a href="#" className="text-sm text-gray-200">@abigael_ngalu</a>
</div>
</div>
</div>
<div className="border-t border-neutralLight/10 py-6">
<div className="container-max px-6 text-sm text-gray-300">© {new Date().getFullYear()} Nap Poultry Farm — All rights reserved.</div>
</div>
</footer>
)
}