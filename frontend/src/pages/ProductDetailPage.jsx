import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { cordset, dress, tops } from '../components/lib';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductDetailPage() {
  const { id } = useParams();

  // combine all products
  const allProducts = [...dress, ...cordset, ...tops];
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return <h2 className="text-center mt-20 text-2xl font-bold">Product not found</h2>;
  }

  // carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-slate-50 to-indigo-50 min-h-screen">
        <section className="px-6 py-12 max-w-5xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl p-8">
            {/* Image Carousel */}
            <Slider {...settings}>
              {product.images.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-96 object-contain rounded-lg my-20"
                  />
                </div>
              ))}
            </Slider>

            {/* Product Info */}
            <h1 className="text-3xl font-bold mt-6 mb-4">{product.name}</h1>
            <p className="text-slate-700 leading-relaxed text-lg">{product.description}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
