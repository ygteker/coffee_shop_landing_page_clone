import React from 'react';
import ContentPanel from './panels/ContentPanel';
import GettingStartedPanel from './panels/GettingStartedPanel';
import FavoritesPanel from './panels/FavoritesPanel';

const Content = () => {
  return (
    <div>
      <ContentPanel />
      <GettingStartedPanel />
      <FavoritesPanel />
    </div>
  );
};

export default Content;
