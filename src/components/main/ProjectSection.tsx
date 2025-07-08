'use client';

import React, { useState, useRef } from 'react';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { PROJECT_DATA } from '@/data/PROJECT_DATA';

const filters = ['전체', '팀', '개인'];
const highlightKeywords = [
  'HOLO',
  'POKEDEX',
  'Daily Space',
  'FanHearts',
  'RIOT APP',
];

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState('전체');

  const [openStates, setOpenStates] = useState<boolean[]>(
    PROJECT_DATA.map(() => false),
  );

  const filteredProjects =
    activeFilter === '전체'
      ? PROJECT_DATA
      : PROJECT_DATA.filter((project) => project.type === activeFilter);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="scroll-mt-16 flex flex-col items-center"
      initial={{ opacity: 0, y: -40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, ease: 'easeOut' }}
    >
      <h1 className="text-4xl md:text-6xl font-pretendard-extrabold gradient-text mb-6 text-center">
        PROJECTS
      </h1>

      <div className="mt-4 mb-6 flex flex-wrap justify-center md:space-x-1 border rounded-full py-1.5 px-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`min-w-10 md:min-w-14 relative px-3 py-1.5 text-xs md:px-4 md:text-base rounded-full transition-colors duration-200 ${
              activeFilter === filter ? 'text-white' : 'text-gray-500'
            }`}
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="filterIndicator"
                className="absolute inset-0 bg-purple-500 rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {filter}
          </button>
        ))}
      </div>

      {filteredProjects.map((project, index) => (
        <div
          key={project.id}
          className="max-w-4xl w-full border-b py-6 md:py-14 px-5"
        >
          <p className="text-xl md:text-3xl">
            {(() => {
              const keyword = highlightKeywords.find((word) =>
                project.title.includes(word),
              );
              if (keyword) {
                const [before, after] = project.title.split(keyword);
                return (
                  <>
                    {before}
                    <span className="font-pretendard-extrabold">{keyword}</span>
                    {after}
                  </>
                );
              }
              return project.title;
            })()}
          </p>
          <p className="text-gray-500 text-sm mt-2 mb-6 md:mb-10">
            {project.period}
          </p>

          <div className="flex flex-col md:flex-row gap-5 md:gap-16">
            <div className="flex gap-2 md:gap-4">
              <p className="min-w-[60px] font-pretendard-extrabold text-sm md:text-base">
                기여도
              </p>
              <div className="text-sm md:text-base">
                <p>{project.contribution}</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, idx) => {
                    const filled =
                      (parseInt(project.contribution) / 100) * 5 >= idx + 1;
                    return (
                      <div
                        key={idx}
                        className={`w-4 h-2 md:w-6 md:h-2.5 rounded-sm ${
                          filled ? 'bg-purple-500' : 'bg-gray-300'
                        }`}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-col text-sm md:text-base mt-2">
                  {project.teamInfo.map((info, idx) => (
                    <p key={idx}>
                      {info.role} - {info.count}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <p className="min-w-[60px] font-pretendard-extrabold text-sm md:text-base">
                역할
              </p>
              <div className="text-sm md:text-base">
                {project.roles.map((role, idx) => (
                  <p key={idx}>{role}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-10 flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 text-xs md:text-sm font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {project.troubleshooting && project.troubleshooting.length > 0 && (
            <div className="mt-6 md:mt-10">
              <button
                onClick={() =>
                  setOpenStates((prev) =>
                    prev.map((open, i) => (i === index ? !open : open)),
                  )
                }
                className="font-pretendard-extrabold text-base md:text-lg mb-3 flex items-center gap-1"
              >
                <motion.span
                  animate={{ rotate: openStates[index] ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block mr-1"
                >
                  ▶
                </motion.span>
                트러블슈팅
              </button>

              <AnimatePresence>
                {openStates[index] && (
                  <motion.div
                    key="troubleshooting"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-3 text-sm md:text-base">
                      {project.troubleshooting.map((item, idx) => (
                        <li
                          key={idx}
                          className="leading-relaxed p-6 bg-gray-900 rounded-xl"
                        >
                          <p className="mb-1">• {item.title}</p>
                          <p className="pl-4 text-gray-400">
                            <span className="text-gray-400">- 시도:</span>{' '}
                            {item.attempt}
                          </p>
                          <p className="pl-4 text-gray-400">
                            <span className="text-gray-400">- 해결:</span>{' '}
                            {item.solution}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <div className="flex gap-4 my-6">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="group link-hover-underline py-1 px-2 text-sm md:text-lg inline-block"
              >
                <span className="link-hover-underline-text">Live Demo</span>
                <span className="link-hover-underline-bg" />
              </Link>
            )}

            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                className="group link-hover-underline py-1 px-2 text-sm md:text-lg inline-block"
              >
                <span className="link-hover-underline-text">GitHub</span>
                <span className="link-hover-underline-bg" />
              </Link>
            )}
          </div>

          <div className="mt-6 md:mt-10 flex justify-center w-full">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={1000}
              height={1000}
              className="w-full h-auto object-contain rounded-lg"
              unoptimized
            />
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default ProjectSection;
