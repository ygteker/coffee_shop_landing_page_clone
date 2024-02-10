import React from 'react';
import ContentPanel from './panels/ContentPanel';
import GettingStartedPanel from './panels/GettingStartedPanel';
import FavoritesPanel from './panels/FavoritesPanel';
import ExtrasPanel from './panels/ExtrasPanel';
import BenefitsPanel from './panels/BenefitsPanel';

const Content = () => {
  return (
    <div>
      <ContentPanel />
      <GettingStartedPanel />
      <FavoritesPanel />
      <ExtrasPanel />
      <BenefitsPanel />
    </div>
  );
};

export default Content;
