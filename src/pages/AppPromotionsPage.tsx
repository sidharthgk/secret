import React from 'react';
import PromotionsTable from '../components/AppPromotions/PromotionsTable';
import { appPromotions } from '../data/mockData';

const AppPromotionsPage: React.FC = () => {
  return (
    <div className="py-6 px-8">
      <PromotionsTable promotions={appPromotions} />
    </div>
  );
};

export default AppPromotionsPage;