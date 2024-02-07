import React from 'react';
import ContentPanel from './panels/ContentPanel';
import GettingStartedPanel from './panels/GettingStartedPanel';
import FavoritesPanel from './panels/FavoritesPanel';
import ExtrasPanel from './panels/ExtrasPanel';

const Content = () => {
  return (
    <div>
      <ContentPanel />
      <GettingStartedPanel />
      <FavoritesPanel />
      <ExtrasPanel />
    </div>
  );
};

export default Content;
