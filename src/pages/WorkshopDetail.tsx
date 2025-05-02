import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen, ChevronLeft, CheckCircle, Clock, Award, User, Calendar, Download, BookmarkPlus } from 'lucide-react';
import { workshops } from '../data/mockData';

// Component for progress tracking
const ProgressTracker = ({ completed, total, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">Seu progresso</span>
        <span className="text-sm text-gray-600">{completed}/{total} aulas completas</span>
      </div>
      <div className="bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

// Component for video player
const VideoPlayer = ({ videoId }) => {
  return (
    <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};


// Component for lesson list
const LessonList = ({ lessons, currentLessonId, onSelectLesson }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <h3 className="font-semibold p-4 border-b border-gray-200">Aulas</h3>
      <div className="divide-y divide-gray-200">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => onSelectLesson(lesson.id)}
            className={`w-full text-left p-4 hover:bg-gray-50 flex items-start ${
              currentLessonId === lesson.id ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex-shrink-0 mt-0.5 mr-3">
              {lesson.completed ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <Clock className="h-5 w-5 text-gray-400" />
              )}
            </div>
            <div className="flex-grow">
              <h4 className="font-medium">{lesson.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                {lesson.duration}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Tabs components
const Tabs = ({ defaultValue, children, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  const tabsListChild = React.Children.toArray(children).find(
    (child) => child.type.name === 'TabsList'
  );
  
  const tabsContents = React.Children.toArray(children).filter(
    (child) => child.type.name === 'TabsContent'
  );
  
  const clonedTabsList = React.cloneElement(tabsListChild, {
    activeTab,
    setActiveTab,
  });
  
  const activeContent = tabsContents.find(
    (content) => content.props.value === activeTab
  );
  
  return (
    <div className={className}>
      {clonedTabsList}
      {activeContent}
    </div>
  );
};

const TabsList = ({ children, activeTab, setActiveTab, className }) => {
  const clonedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      active: child.props.value === activeTab,
      onClick: () => setActiveTab(child.props.value),
    });
  });
  
  return <div className={className}>{clonedChildren}</div>;
};

const TabsTrigger = ({ value, active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium ${
        active
          ? 'bg-white text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-600 hover:text-gray-800'
      }`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children }) => {
  return <div>{children}</div>;
};

const WorkshopDetail = () => {
  const { id } = useParams();
  const workshop = workshops.find(w => w.id === id);
  const [currentLessonId, setCurrentLessonId] = useState(workshop?.lessons[0]?.id || '');
  const currentLesson = workshop?.lessons.find(lesson => lesson.id === currentLessonId);
  
  const handleLessonSelect = (lessonId) => {
    setCurrentLessonId(lessonId);
  };

  if (!workshop) {
    return (
      <div className="p-6">
        <div className="flex flex-col items-center justify-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Workshop não encontrado</h2>
          <p className="text-gray-500 mb-6">O workshop que você está procurando não existe ou foi removido.</p>
          <Link
            to="/workshops"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Voltar para workshops
          </Link>
        </div>
      </div>
    );
  }

  // Calculate progress
  const completedLessons = workshop.lessons.filter(lesson => lesson.completed).length;
  const totalLessons = workshop.lessons.length;
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <div className="mb-4">
        <Link to="/workshops" className="text-blue-600 hover:text-blue-700 flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Voltar para workshops
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mb-6">
        <div className="relative h-64 md:h-80 bg-center bg-cover" style={{ backgroundImage: `url(${workshop.coverImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <span className="px-3 py-1 bg-blue-600/90 rounded-full text-xs font-medium mr-2">
                    {workshop.category}
                  </span>
                  {workshop.isFeatured && (
                    <span className="px-3 py-1 bg-yellow-500/90 rounded-full text-xs font-medium">
                      Em destaque
                    </span>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{workshop.title}</h1>
                <div className="flex flex-wrap items-center text-sm gap-y-2">
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1 opacity-70" />
                    <span>{workshop.instructor}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1 opacity-70" />
                    <span>{workshop.duration} horas</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1 opacity-70" />
                    <span>Atualizado em {workshop.updatedAt}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors px-4 py-2 rounded-lg flex items-center text-sm">
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  Salvar
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {progressPercentage > 0 ? 'Continuar' : 'Começar'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6">
          <div className="mb-6">
            <ProgressTracker 
              completed={completedLessons} 
              total={totalLessons} 
              percentage={progressPercentage} 
            />
          </div>

          <Tabs defaultValue="lessons" className="w-full">
            <TabsList className="w-full max-w-3xl justify-start mb-6 bg-gray-100">
              <TabsTrigger value="lessons">Aulas</TabsTrigger>
              <TabsTrigger value="about">Sobre</TabsTrigger>
              <TabsTrigger value="resources">Recursos</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="lessons" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  {currentLesson && (
                    <div className="space-y-4">
                      <VideoPlayer videoId={currentLesson.videoId} />
                      
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2">{currentLesson.title}</h2>
                        <p className="text-gray-600 mb-4">{currentLesson.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-500 mr-1" />
                            <span className="text-sm text-gray-500">{currentLesson.duration}</span>
                          </div>
                          
                          <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm">
                            <Download className="h-4 w-4 mr-1" />
                            Baixar materiais
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h3 className="font-medium mb-2">Suas anotações</h3>
                        <textarea 
                          className="w-full border border-gray-200 rounded-md p-3 min-h-[100px] text-sm" 
                          placeholder="Adicione suas anotações para esta aula aqui..."
                        />
                        <div className="flex justify-end mt-2">
                          <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm">
                            Salvar anotações
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="lg:col-span-1">
                  <LessonList 
                    lessons={workshop.lessons} 
                    currentLessonId={currentLessonId}
                    onSelectLesson={handleLessonSelect}
                  />
                  
                  {progressPercentage === 100 && (
                    <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-green-800 mb-1">Parabéns!</h3>
                      <p className="text-green-700 text-sm mb-3">Você completou este workshop.</p>
                      <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition-colors">
                        Obter certificado
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about">
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">Sobre este workshop</h2>
                <div className="mb-6">
                  <p className="mb-4">{workshop.description}</p>
                  <h3 className="font-semibold mb-2">O que você vai aprender</h3>
                  <ul className="space-y-2 list-disc list-inside mb-4">
                    {workshop.learningObjectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>
                  
                  <h3 className="font-semibold mb-2">Para quem é este workshop</h3>
                  <p>{workshop.targetAudience}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold mb-3">Sobre o instrutor</h3>
                  <div className="flex items-start">
                    <img 
                      src={workshop.instructorImage} 
                      alt={workshop.instructor} 
                      className="h-16 w-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-medium">{workshop.instructor}</h4>
                      <p className="text-sm text-gray-600 mb-2">{workshop.instructorTitle}</p>
                      <p className="text-sm">{workshop.instructorBio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Recursos</h2>
                
                {workshop.resources && workshop.resources.map((resource, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{resource.title}</h3>
                      <p className="text-sm text-gray-600">{resource.description}</p>
                    </div>
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      <span className="text-sm">Baixar</span>
                    </a>
                  </div>
                ))}
                
                {(!workshop.resources || workshop.resources.length === 0) && (
                  <p className="text-gray-500">Nenhum recurso disponível para este workshop.</p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Perguntas Frequentes</h2>
                
                {workshop.faq && workshop.faq.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
                
                {(!workshop.faq || workshop.faq.length === 0) && (
                  <p className="text-gray-500">Nenhuma pergunta frequente disponível para este workshop.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetail;