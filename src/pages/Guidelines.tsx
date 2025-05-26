import React, { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import Pagination from '../components/ui/Pagination';
import Notification from '../components/ui/Notification';
import CreateGuidelinesModal from '../components/AppSettings/CreateGuidelinesModal';
import { Guideline } from '../types';

const Guidelines: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

const mockGuideline: Guideline[] = [
    {
        id: '1',
        videourl: 'Lorem ipsum lorem',
        description: 'Lorem ipsum lorem',
        pdfuploaded: 'Yes',
    },
    {
        id: '1',
        videourl: 'Lorem ipsum lorem',
        description: 'Lorem ipsum lorem',
        pdfuploaded: 'No',
    },
    {
        id: '1',
        videourl: 'Lorem ipsum lorem',
        description: 'Lorem ipsum lorem',
        pdfuploaded: 'Yes',
    },
    {
        id: '1',
        videourl: 'Lorem ipsum lorem',
        description: 'Lorem ipsum lorem',
        pdfuploaded: 'No',
    },
    {
        id: '1',
        videourl: 'Lorem ipsum lorem',
        description: 'Lorem ipsum lorem',
        pdfuploaded: 'Yes',
    },
    {
        id: '1',
        videourl: 'Lorem ipsum lorem',
        description: 'Lorem ipsum lorem',
        pdfuploaded: 'No',
    },
    {
        id: '1',
        videourl: 'Lorem ipsum lorem',
        description: 'Lorem ipsum lorem',
        pdfuploaded: 'Yes',
    },
];

  const itemsPerPage = 10;
  const filteredPlans = mockGuideline.filter((plan) =>
    Object.values(plan).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlans = filteredPlans.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPlans.length / itemsPerPage);

  return (
    <div className="py-6 px-8">
      <div className="bg-white rounded-lg shadow">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">App Settings / Oral Health Guidelines</h2>
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
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
            >
               Create Oral Health Guidelines
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3">Video URL</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">PDF Uploaded?</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentPlans.map((plan) => (
                <tr key={plan.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{plan.videourl}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{plan.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{plan.pdfuploaded}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-400 hover:text-gray-600">
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
      </div>

      {showCreateModal && (
        <CreateGuidelinesModal
          onClose={() => {
            setShowCreateModal(false);
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

export default Guidelines;