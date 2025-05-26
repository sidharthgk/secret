import React from 'react';
import AppUsersTable from '../components/AppUsers/AppUsersTable';
import { appUsers } from '../data/mockData';
import { getAppUsers } from '../api/dashboardApi';

const AppUsersPage: React.FC = () => {
  const [appUser, setAppUsers] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const [page, setPage] = React.useState<number>(0);
  const [size] = React.useState<number>(10);

  React.useEffect(() => {
    const fetchAppUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getAppUsers(page, size);
        setAppUsers(response.data);
        console.log('App Users:', response.data);
      } catch (err: any) {
        let errorMessage = 'Failed to fetch app users';
        
        if (err.response?.status === 401) {
          errorMessage = 'Authentication token expired. Please refresh your session.';
        } else if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        } else if (err.message) {
          errorMessage = err.message;
        }
        
        console.error('Error fetching app users:', err);
        setError(errorMessage);
        // Fallback to mock data on error
        setAppUsers(appUsers);
      } finally {
        setLoading(false);
      }
    };

    fetchAppUsers();
  }, [page, size]);

  if (loading) {
    return (
      <div className="py-6 px-8 flex justify-center items-center">
        <div className="text-gray-600">Loading app users...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-6 px-8">
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
          <div className="text-red-800">
            <strong>Error:</strong> {error}
          </div>
          <div className="text-red-600 text-sm mt-2">
            Showing mock data as fallback.
          </div>
        </div>
        <AppUsersTable users={appUser} />
      </div>
    );
  }

  return (
    <div className="py-6 px-8">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">App Users</h1>
        <p className="text-gray-600">Manage and view all app users</p>
      </div>
      
      <AppUsersTable users={appUser} />
      
      {/* Optional: Add pagination controls if needed */}
      {appUser.length === size && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setPage(prev => prev + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default AppUsersPage;