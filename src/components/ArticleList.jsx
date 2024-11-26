import articles from "../data/articles.json";
import { Link } from "react-router-dom";

const ArticleList = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6" dir="rtl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        أحدث المقالات
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {article.title}
            </h2>
            <p className="text-gray-600 mt-2 line-clamp-2">{article.summary}</p>
            <p className="text-sm text-gray-500 mt-2">{article.date}</p>
            <Link
              to={`/article/${article.id}`}
              className="text-blue-500 mt-4 inline-block hover:text-blue-700 transition"
            >
              اقرأ المزيد ←
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
