import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CreatePlanModalProps {
  onClose: () => void;
}

const CreatePlanModal: React.FC<CreatePlanModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    practice: '',
    planName: '',
    description: '',
    features: '',
    price: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-y-0 right-0 w-[500px] bg-white shadow-xl z-50 transform transition-transform duration-300">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold">Create Plan</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Practice
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={formData.practice}
                onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
              >
                <option value="">Select practice</option>
                <option value="St.Paul's dental practice">St.Paul's dental practice</option>
                <option value="Throneworry dental care">Throneworry dental care</option>
                <option value="Twindent dental care">Twindent dental care</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Plan Name
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={formData.planName}
                onChange={(e) => setFormData({ ...formData, planName: e.target.value })}
              >
                <option value="">Select plan</option>
                <option value="NHS">NHS</option>
                <option value="Private">Private</option>
                <option value="SGA Services">SGA Services</option>
                <option value="Patient Plans">Patient Plans</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter plan description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Features
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                placeholder="Enter plan features"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">£</span>
                <input
                  type="number"
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="0.00"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlanModal;