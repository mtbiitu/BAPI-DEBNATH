import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { BlogsSection } from '../components/BlogsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { IndustrialSection } from '../components/IndustrialSection';
import { SkillsSection } from '../components/SkillsSection';
import { FooterSection } from '../components/FooterSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection onNavigate={onNavigate} />
      <BlogsSection onNavigate={onNavigate} />
      <ProjectsSection onNavigate={onNavigate} />
      <IndustrialSection onNavigate={onNavigate} />
      <SkillsSection />
      <FooterSection onNavigate={onNavigate} />
    </main>
  );
};
