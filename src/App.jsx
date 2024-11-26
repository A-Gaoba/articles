import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <div
        className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-gray-100"
        dir="rtl"
      >
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">مقالاتي</h1>
            <nav>
              <a
                href="/"
                className="text-gray-600 hover:text-blue-600 transition font-medium ml-4"
              >
                الصفحة الرئيسية
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition font-medium ml-4"
              >
                من أنا
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles" element={<ArticleList />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-6 py-4">
            <p className="text-center text-sm">
              © 2024 مقالاتي. جميع الحقوق محفوظة.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
