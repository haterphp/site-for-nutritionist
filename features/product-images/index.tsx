import { MouseEventHandler, useMemo, useState } from 'react'
import Image from 'next/image'

import './index.css'

interface IProductImagesProps {
    images: string[]
}

export function ProductImages (props: IProductImagesProps) {
    const { images } = props

    const [idx, setCurrentIdx] = useState(0)
    const currentImage = useMemo(() => images[idx], [images, idx])

    const handleOnSelectImage = (idx: number): MouseEventHandler => {
        return () => setCurrentIdx(idx)
    }

    return (
        <div className="product-images">
            <div className="product-images-thumbnails">
                {images.map((image, index) => (
                    <Image
                        key={image}
                        alt={image}
                        src={image}
                        className="product-images-thumbnail"
                        fill
                        onClick={handleOnSelectImage(index)}
                    />
                ))}
            </div>
            
            <div className="product-images-preview">
                <Image alt={currentImage} src={currentImage} fill objectFit='cover' />
            </div>
        </div>
    )
}