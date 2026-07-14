import { Hero } from '@features/hero/components/Hero';
import { About } from '@features/about/components/About';
import { Skills } from '@features/skills/components/Skills';
import { Experience } from '@features/experience/components/Experience';
import { Projects } from '@features/projects/components/Projects';
import { Contact } from '@features/contact/components/Contact';

export const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
  </>
);
