import React from 'react';
import { X } from 'lucide-react';
import { PatientFeedback } from '../../types';
import StarRating from '../ui/StarRating';

interface FeedbackModalProps {
  feedback: PatientFeedback;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ feedback, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Feedback</h3>
              <button 
                onClick={onClose} 
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex justify-center mb-4">
              <StarRating rating={feedback.rating} />
            </div>
            
            <p className="text-gray-700 mb-4">
              {feedback.feedbackText || 'No feedback text provided.'}
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-200 text-right">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;