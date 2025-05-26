import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { AppPromotion } from '../../types';

interface EditPromotionModalProps {
  promotion?: AppPromotion;
  onClose: () => void;
}

const EditPromotionModal: React.FC<EditPromotionModalProps> = ({ promotion, onClose }) => {
  const [formData, setFormData] = useState({
    name: promotion?.name || '',
    description: promotion?.description || '',
    scheduleFromDate: promotion?.scheduleFrom || '',
    scheduleFromTime: promotion?.startTime || '10:20',
    scheduleToDate: promotion?.scheduleTo || '',
    scheduleToTime: promotion?.endTime || '10:20',
    audience: 'all',
    ageRange: '',
    gender: '',
    planType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-y-0 right-0 w-[500px] bg-white shadow-xl z-50 transform transition-transform duration-300">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold">Edit Promotions</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Promotion Name
              </label>
              <input
                type="text"
                placeholder="Promotion Name 1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={3}
                placeholder="Schedule your comprehensive dental checkup and professional cleaning today! Our friendly team provides gentle and thorough care to keep your teeth and gums healthy."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Promotion Start Date
              </label>
              <div className="flex space-x-3">
                <input
                  type="date"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={formData.scheduleFromDate}
                  onChange={(e) => setFormData({ ...formData, scheduleFromDate: e.target.value })}
                />
                <input
                  type="time"
                  className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={formData.scheduleFromTime}
                  onChange={(e) => setFormData({ ...formData, scheduleFromTime: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Promotion End Date
              </label>
              <div className="flex space-x-3">
                <input
                  type="date"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={formData.scheduleToDate}
                  onChange={(e) => setFormData({ ...formData, scheduleToDate: e.target.value })}
                />
                <input
                  type="time"
                  className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={formData.scheduleToTime}
                  onChange={(e) => setFormData({ ...formData, scheduleToTime: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Audience
              </label>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="all-users"
                    name="audience"
                    value="all"
                    checked={formData.audience === 'all'}
                    onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                    className="text-teal-500 focus:ring-teal-500"
                  />
                  <label htmlFor="all-users">All Users</label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="filtered"
                    name="audience"
                    value="filtered"
                    checked={formData.audience === 'filtered'}
                    onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                    className="text-teal-500 focus:ring-teal-500"
                  />
                  <label htmlFor="filtered">Filtered Audience</label>
                </div>

                {formData.audience === 'filtered' && (
                  <div className="pl-6 space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Age</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="age" value="18-25" className="text-teal-500" />
                          <span>18 - 25</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="age" value="26-35" className="text-teal-500" />
                          <span>26 - 35</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="age" value="36-plus" className="text-teal-500" />
                          <span>36 - 45+</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Gender</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="gender" value="female" className="text-teal-500" />
                          <span>Female</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="gender" value="male" className="text-teal-500" />
                          <span>Male</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Plan Type</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="plan" value="normal" className="text-teal-500" />
                          <span>Normal</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="plan" value="premium" className="text-teal-500" />
                          <span>Premium</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Promotion Template
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Drop your file here, or Browse</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Maximum upload file size: 10 MB, Support file Format: JPG, PNG
                  </p>
                </div>
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

export default EditPromotionModal;