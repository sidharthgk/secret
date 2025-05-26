import React, { useState, useRef } from 'react';
import { X, Upload } from 'lucide-react';

interface CreatePlanModalProps {
    onClose: () => void;
}

const CreateGuidelinesModal: React.FC<CreatePlanModalProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        videourl: '',
        description: '',
    });
    
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent | React.MouseEvent) => {
        e.preventDefault();
        console.log('Video URL:', formData.videourl);
        console.log('Description:', formData.description);
        console.log('Uploaded File:', file);
        
        onClose();
    };

    return (
        <div className="fixed inset-y-0 right-0 w-[500px] bg-white shadow-xl z-50 transform transition-transform duration-300">
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h3 className="text-xl font-semibold">Create Oral Health Guidelines</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                PDF Upload
                            </label>
                            <div
                                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <div className="flex flex-col items-center">
                                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                    {file ? (
                                        <p className="text-sm text-gray-500">{file.name}</p>
                                    ) : (
                                        <>
                                            <p className="text-sm text-gray-500">Drop your file here, or Browse</p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                Maximum upload file size: 10 MB, Supported file format: PDF
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                            <input
                                type="file"
                                accept="application/pdf"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Video URL
                            </label>
                            <input
                                type="text"
                                placeholder="Enter video URL"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                                value={formData.videourl}
                                onChange={(e) => setFormData({ ...formData, videourl: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Enter the Description"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
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

export default CreateGuidelinesModal;