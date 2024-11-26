import { useParams, Link } from "react-router-dom";
import articles from "../data/articles.json";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6" dir="rtl">
        <p className="text-center text-red-500 text-xl">المقالة غير موجودة.</p>
        <div className="text-center mt-4">
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            ← العودة إلى المقالات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-600 p-2" dir="rtl">
      {/* Main Layout */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-0">
        {/* Main Article Section */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-lg p-6 lg:mx-2">
          {/* Back to Articles Link */}
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            ← العودة إلى المقالات
          </Link>

          {/* Article Title */}
          <h1 className="text-4xl font-bold text-gray-800 mt-4">
            {article.title}
          </h1>

          {/* Article Image */}
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg mt-4 shadow-md"
            />
          )}

          {/* Article Date */}
          <p className="text-sm text-gray-500 mt-2">{article.date}</p>

          {/* Article Content */}
          <div className="mt-6 text-gray-700 space-y-4">
            {article.content.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        {/* Right Sidebar for Article List */}
        <div className="lg:block bg-gray-100 p-4 rounded-lg shadow-md col-span-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            مقالات أخرى
          </h3>
          <ul className="space-y-3">
            {articles
              .filter((a) => a.id !== article.id)
              .slice(0, 15) 
              .map((a) => (
                <li key={a.id}>
                  <Link
                    to={`/article/${a.id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section for Ads (Optional) */}
      {/* <div className="mt-8 bg-gray-200 h-40 rounded-lg shadow-md p-4 flex justify-center items-center">
        <p className="text-center text-gray-700">إعلان في الأسفل</p>
      </div> */}
    </div>
  );
};

export default ArticleDetail;
