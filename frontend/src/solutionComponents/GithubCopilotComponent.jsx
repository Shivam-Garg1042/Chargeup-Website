import React, { useState, useEffect, useRef } from 'react';

const EnhancedSlidingWindow = () => {
  const [isWindowVisible, setIsWindowVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [hasScrolled, setHasScrolled] = useState(false);
  const [contentTransition, setContentTransition] = useState(false);
  const windowRef = useRef(null);

  // Only 3 tabs as requested
  const tabs = [
    { id: 'tab1', icon: '⚡', label: 'Tab 1' },
    { id: 'tab2', icon: '💰', label: 'Tab 2' },
    { id: 'tab3', icon: '🔄', label: 'Tab 3' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Show window after scrolling a certain amount
      if (scrollPosition > 200 && !hasScrolled) {
        setHasScrolled(true);
        setTimeout(() => {
          setIsWindowVisible(true);
          setTimeout(() => {
            setContentTransition(true);
          }, 400);
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const handleTabChange = (tabId) => {
    setContentTransition(false);
    setTimeout(() => {
      setActiveTab(tabId);
      setTimeout(() => {
        setContentTransition(true);
      }, 50);
    }, 300);
  };

  const closeWindow = () => {
    setContentTransition(false);
    setTimeout(() => {
      setIsWindowVisible(false);
    }, 300);
  };

  // Renders placeholder content for each tab
  const renderTabContent = () => {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="text-xl font-bold text-white mb-2">Content for {activeTab}</h3>
          <p className="text-gray-400">Placeholder content - will be populated later</p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Main Content Section */}
      <div className="min-h-[200vh] bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 transition-all duration-500">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 transition-all duration-500 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Build and ship software faster
          </h1>
          <p className="text-lg md:text-xl text-center mb-10 max-w-3xl text-gray-300">
            Join thousands of developers building amazing products with our platform
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
            Get Started Free
          </button>
        </div>
        
        {/* Additional Content Below Hero */}
        <div className="py-24 bg-[#0d1117]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Build code quickly and more securely with GitHub Copilot embedded throughout your workflows.
            </h2>
            
            {/* Logos Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center mt-16 opacity-70">
              <div className="flex justify-center">
                <div className="w-32 h-10 bg-gray-700/20 rounded-md"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-10 bg-gray-700/20 rounded-md"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-10 bg-gray-700/20 rounded-md"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-10 bg-gray-700/20 rounded-md"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-10 bg-gray-700/20 rounded-md"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-10 bg-gray-700/20 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Sliding Window - appears on scroll and positioned in center */}
      <div 
        className={`fixed left-1/2 bottom-0 z-50 transition-all duration-700 transform ${
          isWindowVisible 
            ? 'translate-y-0 -translate-x-1/2' 
            : 'translate-y-full -translate-x-1/2'
        }`}
        style={{ maxHeight: '85vh', width: '95%', maxWidth: '1000px' }}
      >
        <div 
          ref={windowRef}
          className="bg-[#0d1117] rounded-tl-2xl rounded-tr-2xl shadow-2xl border border-gray-700 overflow-hidden flex flex-col h-full"
          style={{ height: '80vh' }}
        >
          {/* Header with close button */}
          <div className="bg-gradient-to-r from-[#1a1f2e] to-[#0d1117] p-5 flex justify-between items-center border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-3 shadow-lg shadow-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">DevBoost Platform</h2>
                <p className="text-sm text-gray-400">Accelerate your development workflow</p>
              </div>
            </div>
            <button 
              onClick={closeWindow}
              className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-800 hover:bg-gray-700 p-2 rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content Area */}
          <div className="p-6 md:p-8 overflow-auto flex-grow">
            <div 
              className={`transition-all duration-500 ${
                contentTransition ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}
            >
              {/* Title Section */}
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2 text-white">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                <p className="text-gray-400 text-lg">Placeholder subtitle for {activeTab}</p>
              </div>
              
              {/* Dynamic Content Based on Tab */}
              {renderTabContent()}
            </div>
          </div>
          
          {/* Tabs at Bottom */}
          <div className="mt-auto bg-[#161b22] p-2 border-t border-gray-700 flex justify-around">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex flex-col items-center py-2 px-6 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
                onClick={() => handleTabChange(tab.id)}
              >
                <span className="text-2xl mb-1">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSlidingWindow;