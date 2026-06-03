import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Price from "@/components/Price";
import Channels from "@/components/Channels";
import Promo from "@/components/Promo";
import Audience from "@/components/Audience";
import Service from "@/components/Service";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Product />
      <Price />
      <Channels />
      <Promo />
      <Audience />
      <Service />
      <Footer />
    </>
  );
}
