import React, { useState } from 'react';
    import { GraduationCap, Search, Bookmark, CheckCircle, BookOpen, Video, FileText } from 'lucide-react';
    import ContentModule from './ELearning/ContentModule';
    import ResourceLibrary from './ELearning/ResourceLibrary'; // Corrected import path

    function ELearning() {
      // Simulated AI-curated content (replace with actual AI logic)
      const [curatedContent, setCuratedContent] = useState([
        { id: 1, type: 'module', title: 'Understanding Your HRV', category: 'Wellness', progress: 50, badge: 'halfway' },
        { id: 2, type: 'webinar', title: 'Nutrition for Better Sleep', category: 'Nutrition', progress: 0, badge: null },
        { id: 3, type: 'article', title: 'The Science of Stress', category: 'Mental Health', progress: 100, badge: 'completed' },
        { id: 4, type: 'quiz', title: 'Test Your Sleep Knowledge', category: 'Sleep', progress: 0, badge: null },
      ]);

      const [bookmarkedContent, setBookmarkedContent] = useState([]);
      const [selectedTab, setSelectedTab] = useState('dashboard'); // 'dashboard', 'library'

      // Bookmark content
      const handleBookmark = (contentId) => {
        if (bookmarkedContent.includes(contentId)) {
          setBookmarkedContent(bookmarkedContent.filter(id => id !== contentId));
        } else {
          setBookmarkedContent([...bookmarkedContent, contentId]);
        }
      };

      return (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">e-Learning Portal</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedTab('dashboard')}
                className={`px-4 py-2 rounded-lg ${selectedTab === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setSelectedTab('library')}
                className={`px-4 py-2 rounded-lg ${selectedTab === 'library' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Resource Library
              </button>
            </div>
          </div>

          {selectedTab === 'dashboard' && (
            <>
              <h2 className="text-xl font-semibold mb-4">Personalized Learning Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {curatedContent.map((content) => (
                  <ContentModule
                    key={content.id}
                    content={content}
                    isBookmarked={bookmarkedContent.includes(content.id)}
                    onBookmark={handleBookmark}
                  />
                ))}
              </div>
            </>
          )}

          {selectedTab === 'library' && <ResourceLibrary />}
        </div>
      );
    }

    export default ELearning;
