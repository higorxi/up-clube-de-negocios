import React from 'react';
import { CheckCircle, PlayCircle, Lock, Clock } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  videoId: string;
}

interface LessonListProps {
  lessons: Lesson[];
  currentLessonId: string;
  onSelectLesson: (id: string) => void;
}

const LessonList: React.FC<LessonListProps> = ({ lessons, currentLessonId, onSelectLesson }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium">Aulas do curso</h3>
      </div>
      
      <div className="divide-y divide-gray-200 max-h-[500px] overflow-y-auto">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => !lesson.locked && onSelectLesson(lesson.id)}
            disabled={lesson.locked}
            className={`w-full text-left p-4 transition-colors hover:bg-gray-50 flex items-start
              ${currentLessonId === lesson.id ? 'bg-blue-50' : ''}
              ${lesson.locked ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <div className="mr-3 mt-0.5">
              {lesson.completed ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : lesson.locked ? (
                <Lock className="h-5 w-5 text-gray-400" />
              ) : (
                <PlayCircle className={`h-5 w-5 ${currentLessonId === lesson.id ? 'text-blue-600' : 'text-gray-400'}`} />
              )}
            </div>
            
            <div className="flex-1">
              <h4 className={`font-medium text-sm mb-1 ${lesson.locked ? 'text-gray-500' : 'text-gray-800'}`}>
                {lesson.title}
              </h4>
              
              <div className="flex items-center text-gray-500 text-xs">
                <Clock className="h-3 w-3 mr-1" />
                <span>{lesson.duration}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LessonList;