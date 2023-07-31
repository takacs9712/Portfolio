import React, { createContext, useState, useContext } from 'react';

const SubjectContext = createContext();

export function SubjectProvider({ children }) {
  const [subject, setSubject] = useState('');

  return (
    <SubjectContext.Provider value={{ subject, setSubject }}>
      {children}
    </SubjectContext.Provider>
  );
}

export function useSubject() {
  const context = useContext(SubjectContext);
  if (!context) {
    throw new Error('useSubject must be used within a SubjectProvider');
  }
  return context;
}
