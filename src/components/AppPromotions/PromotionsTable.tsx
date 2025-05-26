import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal } from 'lucide-react';
import { AppPromotion } from '../../types';
import Pagination from '../ui/Pagination';
import CreatePromotionModal from './CreatePromotionModal';
import EditPromotionModal from './EditPromotionModal';
import Notification from '../ui/Notification';

interface PromotionsTableProps {
  promotions: AppPromotion[];
}

const PromotionsTable: React.FC<PromotionsTableProps> = ({ promotions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState<AppPromotion | undefined>();
  const [showNotification, setShowNotification] = useState(false);
  
  const itemsPerPage = 10;
  
  const filteredPromotions = promotions.filter((promotion) =>
    Object.values(promotion).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPromotions = filteredPromotions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPromotions.length / itemsPerPage);

  const getStatusClass = (status: AppPromotion['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEditClick = (promotion: AppPromotion) => {
    setSelectedPromotion(promotion);
    setShowEditModal(true);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">App Promotions</h2>
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
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
          >
            Create Promotion
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-3">Promotions Name</th>
              <th className="px-6 py-3">Schedule From</th>
              <th className="px-6 py-3">Schedule To</th>
              <th className="px-6 py-3">Target Audience summary</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Engagement Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentPromotions.map((promotion) => (
              <tr key={promotion.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{promotion.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{promotion.scheduleFrom}</td>
                <td className="px-6 py-4 whitespace-nowrap">{promotion.scheduleTo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{promotion.targetAudienceSummary}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full capitalize ${getStatusClass(promotion.status)}`}>
                    {promotion.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">
                    Views: {promotion.views} | Clicks: {promotion.clicks}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button 
                    onClick={() => handleEditClick(promotion)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <MoreHorizontal className="w-5 h-5" />
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

      {showCreateModal && (
        <CreatePromotionModal 
          onClose={() => {
            setShowCreateModal(false);
            setShowNotification(true);
          }} 
        />
      )}

      {showEditModal && (
        <EditPromotionModal
          promotion={selectedPromotion}
          onClose={() => {
            setShowEditModal(false);
            setShowNotification(true);
          }}
        />
      )}

      {showNotification && (
        <Notification
          title="Success!"
          message="Your changes have been saved successfully."
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default PromotionsTable;