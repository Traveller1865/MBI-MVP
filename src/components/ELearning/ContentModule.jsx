import React from 'react';
    import { BookOpen, Video, FileText, CheckCircle, Bookmark, Award } from 'lucide-react';

    function ContentModule({ content, isBookmarked, onBookmark }) {
      const getIcon = () => {
        switch (content.type) {
          case 'module':
            return <BookOpen className="h-5 w-5 text-blue-600" />;
          case 'webinar':
            return <Video className="h-5 w-5 text-purple-600" />;
          case 'article':
            return <FileText className="h-5 w-5 text-green-600" />;
          case 'quiz':
            return <CheckCircle className="h-5 w-5 text-yellow-600" />;
          default:
            return null;
        }
      };

      const getBadge = () => {
        switch (content.badge) {
          case 'halfway':
            return <div className='absolute top-2 right-2 text-yellow-500'><Award className='h-5 w-5'/></div>;
          case 'completed':
            return <div className='absolute top-2 right-2 text-green-500'><Award className='h-5 w-5'/></div>;
          default:
            return null;
        }
      }

      return (
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="flex items-center mb-2">
            {getIcon()}
            <h3 className="text-lg font-semibold ml-2">{content.title}</h3>
          </div>
          <p className="text-gray-600 mb-2">{content.category}</p>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className={`h-full ${content.progress === 100 ? 'bg-green-500' : 'bg-blue-500'} rounded-full`}
              style={{ width: `${content.progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">{content.progress}% Complete</p>
          <button
            onClick={() => onBookmark(content.id)}
            className="absolute bottom-2 right-2 text-gray-500 hover:text-blue-600"
          >
            <Bookmark className={`h-5 w-5 ${isBookmarked ? 'text-blue-600' : ''}`} />
          </button>
          {getBadge()}
        </div>
      );
    }

    export default ContentModule;
