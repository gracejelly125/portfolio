import { FC, SVGProps } from 'react';

import GithubICon from '@/assets/github.svg';
import JavaScriptICon from '@/assets/javascript.svg';
import NextJSICon from '@/assets/nextdotjs.svg';
import NotionICon from '@/assets/notion.svg';
import ReactICon from '@/assets/react.svg';
import StyledComponentsICon from '@/assets/styledcomponents.svg';
import SupabaseICon from '@/assets/supabase.svg';
import TailwindICon from '@/assets/tailwindcss.svg';
import TypeScriptICon from '@/assets/typescript.svg';

export interface Skill {
  Icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
}

export const SKILL_DATA: Skill[] = [
  {
    Icon: JavaScriptICon,
    name: 'JavaScript',
    description: 'ES6+ 문법 활용 및 비동기 처리 경험',
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
    Icon: TailwindICon,
    name: 'Tailwind CSS',
    description: '유틸리티 기반 빠른 UI 스타일링 및 반응형 디자인',
  },
  {
    Icon: StyledComponentsICon,
    name: 'Styled-Components',
    description: 'CSS-in-JS 방식으로 스타일 관리 및 컴포넌트 재사용성 강화',
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
