import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function PageTwo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-8">
      <div className="max-w-2xl bg-white rounded-2xl shadow-xl p-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">You've Reached Page Two</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Congratulations! You've successfully navigated to the second page. This demonstrates
          seamless routing between different views in a modern web application.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <ArrowLeft size={20} />
          Back to Page One
        </Link>
      </div>
    </div>
  );
}

export default PageTwo;
