import LaptopIllustrationTwo from '@/Images/laptop-illustration_2x.png'
import Image from 'next/image'
export default function RegImage() {
    return (
        <div className="register-img">
            <Image
                src={LaptopIllustrationTwo}
                alt="laptop illustration"
                layout="responsive"
                className="img-fluid"
                quality={100}
                width={70}
            />
        </div>
    )
}



// {/* <div className="register-content">
// {/* <BlockLogo /> */}


// {
//     <div className="register-text">
//         {/* <h1>Start your journey <br /> with us.</h1> */}
// // <RegTextheading />
//     {/* <p>Lorem ipsum dolor sit amet consectetur. Pellentesque quis urna proin urna faucibus ut erat id
// bibendum. </p> */}
// // </div>}

// <div className="register-img">
//     <Image
//         src={LaptopIllustrationTwo}
//         alt="laptop illustration"
//         layout="responsive"
//         className="yourClassName"
//         quality={100}
//         width={70}
//     />
// </div>

// </div> */}