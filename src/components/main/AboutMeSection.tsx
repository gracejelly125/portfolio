'use client';

import React from 'react';
import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import CSSICon from '@/assets/css.svg';
import GithubICon from '@/assets/github.svg';
import JavaScriptICon from '@/assets/javascript.svg';
import NextJSICon from '@/assets/nextdotjs.svg';
import NotionICon from '@/assets/notion.svg';
import ReactICon from '@/assets/react.svg';
import SupabaseICon from '@/assets/supabase.svg';
import TypeScriptICon from '@/assets/typescript.svg';

const ICON_STYLE = { width: 20, height: 20, fill: 'white' };

const experiences = [
  { company: '피스커버 FE 인턴', period: '2025.03 ~ 2025.03' },
  { company: '스파르타코딩클럽 React 7기', period: '2025.09 ~ 2025.02' },
  { company: '포토샵, 일러스트 과정', period: '2025.06 ~ 2025.07' },
];

const awards = ['스파르타코딩클럽 최종 팀 프로젝트 대상'];

const skills = [
  {
    Icon: JavaScriptICon,
    name: 'JavaScript',
    description: 'ES6+ 문법 활용 및 비동기 처리 경험',
  },
  {
    Icon: CSSICon,
    name: 'CSS',
    description: 'Flexbox, Grid 기반의 반응형 UI 설계',
  },
  {
    Icon: TypeScriptICon,
    name: 'TypeScript',
    description: '정적 타입 체크 및 제네릭 활용',
  },
  {
    Icon: ReactICon,
    name: 'React',
    description: '컴포넌트 라이프사이클과 상태관리 (Zustand, Tanstack Query)',
  },
  {
    Icon: NextJSICon,
    name: 'NextJS',
    description: 'Pages/App Router 이해 및 SSR/ISR/CSR/SSG 적용',
  },
  {
    Icon: SupabaseICon,
    name: 'Supabase',
    description: 'Supabase로 인증 및 실시간 데이터 관리 구현',
  },
  {
    Icon: GithubICon,
    name: 'GitHub',
    description: '협업을 위한 브랜치 전략(Git Flow)과 PR 리뷰 경험',
  },
  {
    Icon: NotionICon,
    name: 'Notion',
    description: '문서화 및 프로젝트 관리 협업 도구로 활용',
  },
];

const AboutMeSection = () => {
  const [showAwardImage, setShowAwardImage] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center max-w-4xl mx-auto">
      <div className="flex pb-10 border-b">
        <div className="flex-1">
          <h3 className="text-4xl mb-5">Experience</h3>
          <div className="flex">
            <div className="flex-1">
              {experiences.map(({ company }, idx) => (
                <p className="text-lg" key={idx}>
                  {company}
                </p>
              ))}
            </div>
            <div className="flex-1">
              {experiences.map(({ period }, idx) => (
                <p className="text-lg" key={idx}>
                  {period}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-4xl mb-5">Award</h3>
          {awards.map((award, idx) => (
            <p
              className="text-lg cursor-pointer hover:underline"
              key={idx}
              onClick={() => setShowAwardImage((prev) => !prev)}
            >
              {award}
            </p>
          ))}

          {/* 이미지가 나타나는 영역 */}
          <AnimatePresence>
            {showAwardImage && (
              <motion.div
                key="awardImage"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <Image
                  src="/images/award.png"
                  alt="certification"
                  width={300}
                  height={400}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-4xl mb-5">Skills</h3>
        <div className="flex">
          <div className="mr-1 space-y-2 p-1">
            {skills.map(({ Icon }, idx) => (
              <Icon key={idx} style={ICON_STYLE} />
            ))}
          </div>
          <div className="mr-8">
            {skills.map(({ name }, idx) => (
              <p className="text-lg" key={idx}>
                {name}
              </p>
            ))}
          </div>
          <div>
            {skills.map(({ description }, idx) => (
              <p className="text-lg" key={idx}>
                {description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
