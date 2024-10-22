import Image from "next/image";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Image
        src="/path/to/your/image.jpg" // Update with your image path
        alt="Description of the image"
        width={500} // Set your desired width
        height={300} // Set your desired height
         />
      <NewProducts />
      <Footer />
    </div>
  );
}
