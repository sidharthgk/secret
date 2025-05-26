import React, { useState } from 'react';
import { Search, Filter, Eye } from 'lucide-react';
import { PatientFeedback } from '../../types';
import StarRating from '../ui/StarRating';
import Pagination from '../ui/Pagination';
import FeedbackModal from './FeedbackModal';

interface FeedbackTableProps {
  feedbacks: PatientFeedback[];
}

const FeedbackTable: React.FC<FeedbackTableProps> = ({ feedbacks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFeedback, setSelectedFeedback] = useState<PatientFeedback | null>(null);
  
  const itemsPerPage = 10;
  
  const filteredFeedbacks = feedbacks.filter((feedback) =>
    Object.values(feedback).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeedbacks = filteredFeedbacks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredFeedbacks.length / itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">Patient Feedback</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-64 pl-10 pr-3 py-2 rounded-md bg-gray-50 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 text-sm"
              placeholder="Search ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center px-3 py-2 border border-gray-300 rounded text-gray-700">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-3">Patient Name</th>
              <th className="px-6 py-3">NHS Number</th>
              <th className="px-6 py-3">Date of Birth</th>
              <th className="px-6 py-3">Provider Name</th>
              <th className="px-6 py-3">Appointment Completed On</th>
              <th className="px-6 py-3">Rating</th>
              <th className="px-6 py-3">Google Review Submitted?</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentFeedbacks.map((feedback) => (
              <tr key={feedback.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{feedback.fullName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{feedback.nhsNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{feedback.dob}</td>
                <td className="px-6 py-4 whitespace-nowrap">{feedback.providerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{feedback.apptDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StarRating rating={feedback.rating} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {feedback.isGoogleReviewSubmitted ? 'Yes' : 'No'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setSelectedFeedback(feedback)}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-4 py-3 border-t border-gray-200">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      
      {selectedFeedback && (
        <FeedbackModal
          feedback={selectedFeedback}
          onClose={() => setSelectedFeedback(null)}
        />
      )}
    </div>
  );
};

export default FeedbackTable;