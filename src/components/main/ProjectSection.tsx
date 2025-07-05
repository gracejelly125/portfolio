'use client';

import React, { useState } from 'react';

import { motion } from 'framer-motion';
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

  const filteredProjects =
    activeFilter === '전체'
      ? PROJECT_DATA
      : PROJECT_DATA.filter((project) => project.type === activeFilter);

  return (
    <section id="projects" className="scroll-mt-16 flex flex-col items-center">
      <h1 className="text-6xl font-pretendard-extrabold gradient-text mb-6">
        PROJECTS
      </h1>

      {/* 필터 바 */}
      <div className="mt-4 mb-6 flex justify-center space-x-3 relative border rounded-full py-1.5 px-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative w-16 text-center px-4 py-2 transition-colors duration-200 ${
              activeFilter === filter ? 'text-white' : 'text-gray-500'
            }`}
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="filterIndicator"
                className="absolute inset-0 bg-gray-700 rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {filter}
          </button>
        ))}
      </div>

      {/* 프로젝트 리스트 */}
      {filteredProjects.map((project) => (
        <div key={project.id} className="max-w-4xl w-full border-b py-14 px-5">
          <p className="text-3xl">
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
          <p className="text-gray-500 mt-2 mb-10">{project.period}</p>

          <div className="flex">
            <div className="flex space-x-4 mr-20">
              <p>기여도</p>
              <div>
                <p>{project.contribution}</p>
                <p>{project.teamInfo}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <p>역할</p>
              <div>
                {project.roles.map((role, idx) => (
                  <p key={idx}>{role}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-grow">
            <div className="mt-10 flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="my-10">
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                className="group link-hover-underline py-2 px-2"
              >
                <span className="link-hover-underline-text">
                  프로젝트 배포 링크
                </span>
                <span className="link-hover-underline-bg" />
              </Link>
            ) : null}
          </div>

          <div className="mt-14 flex justify-center w-[90%] mx-auto">
            <Image 
              src={project.image.src}
              alt={project.image.alt}
              width={1000}
              height={1000}
              unoptimized
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;
