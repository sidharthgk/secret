import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AppSettingsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/app-settings/plan-settings');
  }, [navigate]);

  return null;
}