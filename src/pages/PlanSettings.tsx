import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal } from 'lucide-react';
import Pagination from '../components/ui/Pagination';
import Notification from '../components/ui/Notification';
import CreatePlanModal from '../components/AppSettings/CreatePlanModal';
import { Plan } from '../types';

const AppSettingsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const mockPlans: Plan[] = [
    {
      id: '1',
      practice: 'St.Paul\'s dental practice',
      planName: 'NHS',
      description: 'Lorem ipsum lorem',
      features: 'Lorem ipsum lorem',
      price: 23226
    },
    {
      id: '2',
      practice: 'Throneworry dental care',
      planName: 'Private',
      description: 'Lorem ipsum lorem',
      features: 'Lorem ipsum lorem',
      price: 30964
    },
    {
      id: '3',
      practice: 'Throneworry dental care',
      planName: 'SGA Services',
      description: 'Lorem ipsum lorem',
      features: 'Lorem ipsum lorem',
      price: 72352
    },
    {
      id: '4',
      practice: 'St.Paul\'s dental practice',
      planName: 'Patient Plans',
      description: 'Lorem ipsum lorem',
      features: 'Lorem ipsum lorem',
      price: 13327
    },
    {
      id: '5',
      practice: 'Twindent dental care',
      planName: 'SGA Services',
      description: 'Lorem ipsum lorem',
      features: 'Lorem ipsum lorem',
      price: 46671
    },
    {
      id: '6',
      practice: 'Twindent dental care',
      planName: 'Private',
      description: 'Lorem ipsum lorem',
      features: 'Lorem ipsum lorem',
      price: 67547
    },
    {
      id: '7',
      practice: 'St.Paul\'s dental practice',
      planName: 'Patient Plans',
      description: 'Lorem ipsum lorem',
      features: 'Lorem ipsum lorem',
      price: 13614
    },
    {
      id: '8',
      practice: 'Throneworry dental care',
      planName: 'SGA Services',
      description: 'Lorem ipsum lorem',
      features: 'Lorem ipsum lorem',
      price: 23470
    },
    {
      id: '9',
      practice: 'Twindent dental care',
      planName: 'Private',
      description: 'Lorem ipsum lorem',
      features: 'Lorem ipsum lorem',
      price: 44944
    }
  ];

  const itemsPerPage = 10;
  const filteredPlans = mockPlans.filter((plan) =>
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
          <h2 className="text-xl font-semibold">App Settings / Plan Settings</h2>
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
              Create Plan
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-xs text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3">Practice</th>
                <th className="px-6 py-3">Plan Name</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Features</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentPlans.map((plan) => (
                <tr key={plan.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{plan.practice}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{plan.planName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{plan.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{plan.features}</td>
                  <td className="px-6 py-4 whitespace-nowrap">£ {plan.price.toLocaleString()}</td>
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
        <CreatePlanModal
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

export default AppSettingsPage;