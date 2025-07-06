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
    <section
      id="projects"
      className="scroll-mt-16 flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-6xl font-pretendard-extrabold gradient-text mb-6 text-center">
        PROJECTS
      </h1>

      {/* 필터 바 */}
      <div className="mt-4 mb-6 flex flex-wrap justify-center gap-2 md:space-x-3 border rounded-full py-1.5 px-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-base rounded-full transition-colors duration-200 ${
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
        <div
          key={project.id}
          className="max-w-4xl w-full border-b py-6 md:py-14 px-5"
        >
          {/* 제목 */}
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

          {/* 기여도 & 역할 */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-16">
            <div className="flex gap-2 md:gap-4">
              <p className="min-w-[60px] font-pretendard-extrabold text-sm md:text-base">
                기여도
              </p>
              <div className="text-sm md:text-base">
                <p>{project.contribution}</p>
                <div className="flex flex-wrap text-sm md:text-base">
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

          {/* 스킬 */}
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

          <div className="flex gap-4 my-6 md:my-10">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="group link-hover-underline py-1 px-2 text-sm md:text-base inline-block"
              >
                <span className="link-hover-underline-text">Live Demo</span>
                <span className="link-hover-underline-bg" />
              </Link>
            )}

            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                className="group link-hover-underline py-1 px-2 text-sm md:text-base inline-block"
              >
                <span className="link-hover-underline-text">GitHub</span>
                <span className="link-hover-underline-bg" />
              </Link>
            )}
          </div>

          {/* 이미지 */}
          <div className="mt-10 flex justify-center w-full">
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
    </section>
  );
};

export default ProjectSection;
