import React from 'react';
import { Project, BlogPost } from '../types';
import { FooterSection } from '../components/FooterSection';

interface DetailArticlePageProps {
  item: Project | BlogPost;
  type: 'project' | 'blog';
  onNavigate: (path: string) => void;
}

export const DetailArticlePage: React.FC<DetailArticlePageProps> = ({
  item,
  type,
  onNavigate,
}) => {
  const isProject = type === 'project';
  const project = isProject ? (item as Project) : null;
  const blog = !isProject ? (item as BlogPost) : null;

  return (
    <div className="flex-1 flex flex-col bg-slate-50/30">
      <article className="editorial-article py-10 sm:py-16">
        <div className="editorial-article-container max-w-[860px] mx-auto px-4 sm:px-6">
          {/* Header navigation bar */}
          <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
            <button
              onClick={() => onNavigate(isProject ? '/projects' : '/blogs')}
              className="neomorphic-reading-btn inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors shadow-xs cursor-pointer"
            >
              <i className="fas fa-arrow-left" />
              <span>{isProject ? 'Back to Projects' : 'Back to Blog'}</span>
            </button>

            <span className="neomorphic-reading-badge px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              {item.category}
            </span>
          </div>

          {/* Title & Metadata */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {item.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500 mb-8 border-b border-slate-200 pb-6">
            <span>{item.date}</span>
            <span>•</span>
            <span>{isProject ? 'Case Study & Technical Docs' : (blog?.readTime || '5 min read')}</span>
            <span>•</span>
            <span className="font-semibold text-slate-800">By Bapi Debnath</span>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden mb-10 shadow-lg border border-slate-200/80 bg-slate-100">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-h-[480px] object-cover"
            />
          </div>

          {/* Article / Case Study Body */}
          {item.content ? (
            <div
              className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ) : (
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                {isProject ? project?.description : blog?.summary}
              </p>

              {isProject && project && (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Project Overview</h3>
                  <p>
                    This project was engineered from the ground up to solve complex telemetry and
                    control challenges. Utilizing custom firmware architectures, precision hardware
                    routing, and modular microcontrollers, it provides reliable performance in
                    both laboratory testing and real-world deployment.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Key Technical Features</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <strong>{tag}</strong>: Optimized for real-time responsiveness and low power
                        consumption.
                      </li>
                    ))}
                  </ul>

                  {project.githubUrl && (
                    <div className="mt-8 p-6 bg-slate-100 rounded-2xl flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Source Code Repository</h4>
                        <p className="text-xs text-slate-500">
                          Inspect schematics, firmware sketches, and 3D STL files on GitHub.
                        </p>
                      </div>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
                      >
                        <i className="fab fa-github" />
                        <span>View Repository</span>
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* Author Bio Card */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src="/kabya.jpeg"
              alt="Bapi Debnath"
              className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-xs shrink-0"
            />
            <div className="text-center sm:text-left">
              <span className="text-[11px] uppercase font-bold text-indigo-600 tracking-wider">
                Author &amp; Lead Engineer
              </span>
              <h4 className="text-lg font-bold text-slate-900">Bapi Debnath</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Computer Science and Engineering undergraduate at Daffodil International University.
                Specializing in embedded systems, edge AI vision, rapid 3D prototyping, and IoT
                cloud architectures.
              </p>
              <div className="mt-4 flex items-center justify-center sm:justify-start gap-3">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors cursor-pointer"
                >
                  Contact Bapi
                </button>
                <a
                  href="https://github.com/TechByKabya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <i className="fab fa-github text-sm" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <FooterSection onNavigate={onNavigate} />
    </div>
  );
};
