import React, { useState } from 'react';
import { AppUser } from '../../types';
import Pagination from '../ui/Pagination';
import { Search, Filter } from 'lucide-react';

interface AppUsersTableProps {
  users: AppUser[];
}

const AppUsersTable: React.FC<AppUsersTableProps> = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  const processedUsers = users.map((user) => {
    if (user.fullName && !user.firstName && !user.lastName) {
      const [firstName, ...rest] = user.fullName.split(' ');
      return { ...user, firstName, lastName: rest.join(' ') };
    }
    return user;
  });

  const filteredUsers = processedUsers.filter((user) =>
    Object.values(user).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">App Users</h2>
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
              <th className="px-6 py-3">First Name</th>
              <th className="px-6 py-3">Last Name</th>
              <th className="px-6 py-3">NHS Number</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Mobile Number</th>
              <th className="px-6 py-3">Date of Birth</th>
              <th className="px-6 py-3">Last Login</th>
              <th className="px-6 py-3">Number of Feedbacks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.nhsNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.mobilePhone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.dob}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.lastLoginTimestamp}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.feedbackCount}</td>
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
  );
};

export default AppUsersTable;