import React, { useState, DragEvent } from 'react';
import { X, Upload } from 'lucide-react';

interface CreatePlanModalProps {
    onClose: () => void;
}

const CreateHealthTipsModal: React.FC<CreatePlanModalProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        videourl: '',
        description: '',
        category: ''
    });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Selected File:', selectedFile);
        console.log('Form Data:', formData);
        onClose();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setSelectedFile(e.dataTransfer.files[0]);
        }
    };

    const openFileDialog = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput?.click();
    };

    const handleViewFile = () => {
        if (selectedFile) {
            const fileURL = URL.createObjectURL(selectedFile);
            window.open(fileURL);
        }
    };

    const handleDeleteFile = () => {
        setSelectedFile(null);
    };

    const formatFileSize = (size: number) => {
        if (size < 1024) return size + ' bytes';
        else if (size < 1024 * 1024) return (size / 1024).toFixed(1) + ' KB';
        else return (size / (1024 * 1024)).toFixed(1) + ' MB';
    };

    return (
        <div className="fixed inset-y-0 right-0 w-[500px] bg-white shadow-xl z-50 transform transition-transform duration-300">
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h3 className="text-xl font-semibold">Create Oral Health Tips</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Upload Video
                            </label>
                            <div
                                className={`border-2 ${isDragging ? 'border-teal-500' : 'border-dashed border-gray-300'} rounded-lg p-6 text-center cursor-pointer`}
                                onClick={openFileDialog}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept="video/mp4"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <div className="flex flex-col items-center">
                                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                    {selectedFile ? (
                                        <div className="text-sm text-gray-500">
                                            <p className="font-medium">{selectedFile.name}</p>
                                            <p>{formatFileSize(selectedFile.size)} • {selectedFile.type}</p>
                                            <div className="flex space-x-3 mt-2">
                                                <button
                                                    type="button"
                                                    onClick={handleViewFile}
                                                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={handleDeleteFile}
                                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="text-sm text-gray-500">Drop your file here, or Browse</p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                Maximum upload file size: 10 MB, Supported file Format: MP4
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Title / Description
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Enter the Description"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                                Category Tag
                            </label>
                            <input
                                type="text"
                                placeholder="Enter category tag"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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

export default CreateHealthTipsModal;