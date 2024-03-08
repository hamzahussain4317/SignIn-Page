import Image from 'next/image'
import logoWhite from '@/Images/logo-white.svg';

export default function BlockLogo() {
    return (
        <div class="logo">
            <Image src={logoWhite} className="img-fluid"></Image>
        </div>
    )
}