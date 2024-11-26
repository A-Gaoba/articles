import { Link } from "react-router-dom";
import ArticleList from "./ArticleList";

const HeroSection = () => {
  return (
    <div>
    <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Hero Title */}
        <h1 className="text-5xl font-bold mb-4">
          اكتشف مقالات تعبر عن مشاعرك وتلامس قلبك
        </h1>

        {/* Hero Subtitle */}
        <p className="text-xl mb-8">
          استمتع بقراءة مقالات تشعرك بالأمل والتفاؤل، وتستفز مشاعرك وتفتح أمامك
          آفاق جديدة{" "}
        </p>

        {/* Call to Action Button */}
        <Link
          to="/articles"
          className="inline-block bg-yellow-500 text-gray-800 hover:bg-yellow-400 hover:text-white px-6 py-3 rounded-lg font-semibold text-lg"
        >
          اقرأ المزيد
        </Link>
      </div>
    </section>
      <div>
        <ArticleList />
      </div>
    </div>
  );
};

export default HeroSection;
