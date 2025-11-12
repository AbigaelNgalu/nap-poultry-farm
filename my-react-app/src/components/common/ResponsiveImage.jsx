import React from 'react'

// Small responsive image component that prefers WebP and falls back to a standard image.
export default function ResponsiveImage({ srcWebp, srcFallback, alt = '', className = '' }) {
	return (
		<picture className={className}>
			{srcWebp && <source srcSet={srcWebp} type="image/webp" />}
			<img src={srcFallback} alt={alt} className="w-full h-full object-cover" />
		</picture>
	)
}
