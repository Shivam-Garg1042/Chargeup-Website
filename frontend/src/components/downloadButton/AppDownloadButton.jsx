import { useState } from 'react';
import { Download, X, PlayCircle } from 'lucide-react';

const AppDownloadButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handlePlayStoreClick = () => {
        
        window.open('https://play.google.com/store/apps/details?id=com.chargeup.isourse', '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {/* Animated Popup */}
            <div 
                className={`
                    absolute bottom-full right-0 mb-4
                    bg-white rounded-xl shadow-xl
                    transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}
                    w-72 overflow-hidden
                `}
            >
                {/* Popup Header */}
                <div className="relative bg-gradient-to-r from-[#003444] from-100 to-[#003444] to-800 p-4 text-white">
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-2 hover:bg-white/20 rounded-full p-1 transition-colors"
                        aria-label="Close popup"
                    >
                        <X size={16} />
                    </button>
                    <h3 className="text-lg font-semibold">Get Our Mobile App</h3>
                </div>

                {/* Popup Content */}
                <div className="p-4">
                    <div className="space-y-3">
                        <p className="text-gray-600 text-sm">
                            Download our app to access:
                        </p>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-[#1e7295] bg-500 rounded-full"></div>
                                Exclusive features
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-[#1e7295] bg-5000 rounded-full"></div>
                                Real-time notifications
                            </li>
                           
                        </ul>
                        <button
                            onClick={handlePlayStoreClick}
                            className="w-full bg-[#1e7295] bg-600 hover:bg-green-900 text-white px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
                        >
                            <PlayCircle size={20} />
                            <span>Download from Play Store</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    group
                    bg-[#003444] bg-600 hover:bg-[#1e7295] bg-700 
                    text-white rounded-full
                    shadow-lg transition-all duration-300
                    flex items-center gap-2
                    ${isOpen ? 'px-4 py-3 ring-4 ring-blue-300' : 'px-4 py-3'}
                    ${isOpen ? 'animate-pulse' : ''}
                `}
                aria-label="Download our app"
            >
                <Download 
                    size={24} 
                    className={`transition-transform group-hover:scale-110 ${isOpen ? 'animate-bounce' : ''}`}
                />
                <span className="hidden md:block">Download App</span>
            </button>
        </div>
    );
};

export default AppDownloadButton;