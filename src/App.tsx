/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Disciplines from './components/Disciplines';
import Inscribite from './components/Inscribite';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<string>('cross');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleSelectDisciplineAndNavigate = (id: string) => {
    setSelectedDisciplineId(id);
    setActiveTab('turnos');
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'inicio':
        return (
          <Home 
            onNavigate={setActiveTab} 
            onSelectDiscipline={setSelectedDisciplineId} 
          />
        );
      case 'disciplinas':
        return <Disciplines onBook={handleSelectDisciplineAndNavigate} setActiveTab={setActiveTab} />;
      case 'inscribite':
        return <Inscribite />;
      default:
        return (
          <Home 
            onNavigate={setActiveTab} 
            onSelectDiscipline={setSelectedDisciplineId}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] flex flex-col justify-between selection:bg-brand-orange selection:text-[#131313]">
      <div>
        {/* Navigation Bar Header */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Content Area */}
        <main className="animate-fadeIn">
          {renderActiveTab()}
        </main>
      </div>

      {/* Global Interactive Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <BackToTop setActiveTab={setActiveTab} />
    </div>
  );
}
