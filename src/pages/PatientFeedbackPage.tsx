import React, { useEffect, useState } from 'react';
import FeedbackTable from '../components/PatientFeedback/FeedbackTable';
import { getPatientFeedback } from '../api/dashboardApi'

const PatientFeedbackPage: React.FC = () => {
  const PRACTICE_ID = '80664e87-778f-4d17-a10e-4c5a35185138'; 
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await getPatientFeedback(PRACTICE_ID);
        setFeedbacks(response.data);
        console.log(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch feedback');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

    return (
    <div className="py-6 px-8">
      <FeedbackTable feedbacks={feedbacks} />
    </div>
  );
};

export default PatientFeedbackPage;
