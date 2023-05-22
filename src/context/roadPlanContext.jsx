import React, { createContext, useState } from 'react';

const RoadPlanContext = createContext();

const RoadPlanProvider = ({ children }) => {
  const [start, setStart] = useState({ lat: 33.6844, lng: 73.0479 });
  const [end, setEnd] = useState({ lat: 33.5651, lng: 73.0169 });

  const updateStart = (location) => {
    setStart(location);
  };

  const updateEnd = (location) => {
    setEnd(location);
  };

  const contextValue = {
    start,
    updateStart,
    end,
    updateEnd,
  };

  return (
    <RoadPlanContext.Provider value={contextValue}>
      {children}
    </RoadPlanContext.Provider>
  );
};

export { RoadPlanContext, RoadPlanProvider };
