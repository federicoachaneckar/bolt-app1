import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function PageOne() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-2xl bg-white rounded-2xl shadow-xl p-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to Page One</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          This is the first page of our application. It features a clean, modern design
          with smooth navigation. Explore the connection between pages by clicking the link below.
        </p>
        <Link
          to="/page-two"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Go to Page Two
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}

export default PageOne;
