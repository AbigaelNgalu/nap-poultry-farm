import React from "react";

const testimonials = [
	{ id: 1, quote: "Best hens I've ever had — healthy and productive.", author: "— A. Farmer" },
	{ id: 2, quote: "Great customer service and fast delivery.", author: "— B. Rancher" },
];

const Testimonials = () => {
	return (
		<section className="py-16 bg-white">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-3xl font-bold mb-8">What our customers say</h2>
				<div className="space-y-6">
					{testimonials.map((t) => (
						<blockquote key={t.id} className="text-gray-700">
							<p className="italic">"{t.quote}"</p>
							<cite className="block mt-2 text-sm text-gray-500">{t.author}</cite>
						</blockquote>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

