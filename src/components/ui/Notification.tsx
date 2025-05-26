import React from 'react';
import { X, Check } from 'lucide-react';

interface NotificationProps {
  title: string;
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ 
  title = "Notification title", 
  message = "Subtitle text goes here.", 
  onClose = () => {} 
}) => {
  return (
    <div className="fixed bottom-4 right-4 border border-green-500 bg-green-50 rounded p-4 flex items-center">
      <div className="flex-shrink-0 mr-3">
        <div className="bg-green-500 rounded-full p-1">
          <Check className="w-4 h-4 text-white" />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 ml-4 text-gray-500 hover:text-gray-700"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Notification;