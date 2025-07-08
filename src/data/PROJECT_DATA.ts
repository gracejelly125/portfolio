export interface TroubleshootingItem {
  title: string;
  attempt: string;
  solution: string;
}

export interface Project {
  id: number;
  type: '팀' | '개인';
  title: string;
  period: string;
  contribution: string;
  teamInfo: {
    role: string;
    count: number;
  }[];
  roles: string[];
  skills: string[];
  image: {
    src: string;
    alt: string;
  };
  link?: string;
  githubLink?: string;
  troubleshooting?: TroubleshootingItem[];
}

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    type: '팀',
    title: '1인 가구 청년 자취생을 위한 정보 제공 서비스 HOLO',
    period: '2025.01 ~ 2025.02 (6주)',
    contribution: '25%',
    teamInfo: [
      { role: 'FE', count: 5 },
      { role: 'DESIGN', count: 1 },
    ],
    roles: [
      '꿀팁 공유 커뮤니티 기능 구현',
      '- Supabase 활용, 게시글 CRUD, 좋아요 및 댓글 실시간 데이터 처리',
      '- 좋아요/댓글: TanstackQuery 낙관적 업데이트 적용 → 사용자 경험 개선',
      '- 게시글 검색, 카테고리, 최신순/인기순 필터링 기능 → 사용자 편의성 향상',
      '- 커스텀 모달 구현 및 Zustand 모달 상태 관리 → 전역 상태 관리 효율성 향상',
      '- 스켈레톤 UI 로딩 페이지 구현 → 사용자 경험 개선',
    ],
    skills: [
      'NextJS',
      'React',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'Tailwind CSS',
      'Supabase',
      'Vercel',
      'Figma',
    ],
    image: {
      src: '/images/honeytips.gif',
      alt: '꿀팁게시판 소개',
    },
    githubLink: 'https://github.com/zi0w/HOLO',
    troubleshooting: [
      {
        title: '클라이언트 - 서버 데이터 동기화 문제 및 서버액션 도입',
        attempt:
          'Tanstack Query의 캐싱 정책으로 인해 클라이언트가 데이터 동기화 지연 현상을 겪음',
        solution:
          'Next.js 서버액션을 도입하여 revalidatePath()로 서버 캐시를 명시적으로 무효화하고, 클라이언트 캐시 무효화 로직을 단순화하여 유지보수성을 향상시킴. 게시글, 좋아요, 댓글 데이터가 실시간에 가깝게 반영되도록 개선',
      },
      {
        title: '모달 상태 관리 및 재사용성 문제 해결',
        attempt:
          '기존에는 페이지별로 독립적인 스토어와 컴포넌트로 관리하여 모달 상태 분산과 props drilling 문제 발생',
        solution:
          'Zustand를 활용해 모달 상태와 타입을 한 곳에서 관리하는 전용 스토어를 설계하여 버그를 제거하고 코드 가독성을 개선함',
      },
      {
        title: 'Lighthouse 피드백 활용, 이미지 용량 최적화',
        attempt: 'react-resizer 라이브러리 사용 시 타입스크립트 호환 문제 발생',
        solution:
          'FileReader Web API와 Canvas API를 활용해 이미지 압축 로직을 직접 구현. JPEG 포맷 재인코딩과 해상도 조절(0.7)을 통해 용량 평균 60% 감소, Lighthouse 점수 20% 상승, 초기 렌더링 속도 25% 단축',
      },
    ],
  },
  {
    id: 2,
    type: '팀',
    title: '인턴 | 팬 소통 및 포카 교환 플랫폼 FanHearts',
    period: '2025.03 ~ 2025.03 (2주)',
    contribution: '100%',
    teamInfo: [
      { role: 'FE', count: 1 },
      { role: 'DESIGN', count: 1 },
    ],
    roles: [
      '신규 서비스 랜딩 페이지 개발',
      '- i18next 활용한 JSON 기반 다국어 시스템 구현',
      '- Zustand 활용하여 클라이언트 상태 관리 성능 최적화',
      '- TanStack React Query 도입으로 데이터 페칭, 캐싱, 동기화 성능 개선',
      '- SEO 최적화 (사이트맵, robots.txt 설정) 및 성능 개선',
      '- 디바이스 환경 감지(OS, 디스플레이 정보) 기반 앱스토어/구글스토어 이동 처리',
      '- GitHub Actions를 활용해 자동 배포 파이프라인 구축',
    ],
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tanstack Query',
      'Zustand',
      'Tailwind CSS',
      'Styled-components',
      'i18next',
      'Contentful API',
      'GitHub Actions',
      'Figma',
    ],
    image: {
      src: '/images/fanhearts.JPG',
      alt: '팬하트 소개',
    },
    link: 'https://fanhearts.com/',
    troubleshooting: [
      {
        title: 'Next.js 환경에서 i18next 언어 상태 불일치 문제 해결',
        attempt:
          '쿠키 기반 저장 방식으로 전환하고, useI18n 훅을 만들어 언어 변경 시 i18next와 쿠키를 동기화',
        solution:
          '18nProvider 컴포넌트에서 쿠키의 lang 값을 읽어 초기 언어 상태를 설정. useI18n 훅에서 언어 변경 시 쿠키와 i18next 언어를 함께 업데이트하여 일관된 상태 유지',
      },
    ],
  },
  {
    id: 3,
    type: '개인',
    title: '매일의 순간들을 담아가는 공간 Daily Space',
    period: '2025.07 ~ 2025.07 (1주)',
    contribution: '100%',
    teamInfo: [{ role: 'FE', count: 1 }],
    roles: [
      'To Do List + Blog 서비스 개발',
      '- 하루의 할 일(To Do List)과 블로그 형식의 일기 작성 기능 제공',
      '- Supabase를 이용한 사용자 인증 및 데이터 저장',
      '- Zustand로 글로벌 상태 관리 및 모듈화된 상태 구조 구현',
      '- react-hook-form, Zod로 폼 유효성 검사 및 사용자 입력 처리',
      '- Tailwind CSS 기반의 반응형 UI 및 일관된 디자인 시스템 구축',
      '- TanStack Query로 데이터 패칭 최적화 및 캐싱 처리',
    ],
    skills: [
      'Next.js',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'Tailwind CSS',
      'Supabase',
      'React Hook Form',
      'Zod',
      'Vercel',
    ],
    image: {
      src: '/images/DailySpace.JPG',
      alt: '데일리 스페이스 소개',
    },
    link: 'https://daily-space-five.vercel.app/',
    githubLink: 'https://github.com/gracejelly125/DailySpace',
  },
  {
    id: 4,
    type: '개인',
    title: '롤 무료 챔피언, 이번 주 누가 뜨나 바로 확인! RIOT APP',
    period: '2024.12 ~ 2024.12 (1주)',
    contribution: '100%',
    teamInfo: [{ role: 'FE', count: 1 }],
    roles: [
      'Riot API를 활용한 리그 오브 레전드 정보 앱 개발',
      '- Next.js와 TypeScript를 사용한 서버 및 클라이언트 데이터 페칭 구현',
      '- Tanstack Query로 상태 관리 및 데이터 캐싱 최적화',
      '- ISR, SSG, CSR 등 다양한 렌더링 방식 적용한 페이지 개발',
      '- React Suspense와 error.tsx로 로딩 및 에러 핸들링 고도화',
      '- Tailwind CSS로 반응형 디자인과 다크 모드 UI 구현',
    ],
    skills: [
      'Next.js',
      'TypeScript',
      'React',
      'Tanstack Query',
      'Riot API',
      'Tailwind CSS',
      'Vercel',
    ],
    image: {
      src: '/images/riot.JPG',
      alt: '리그 오브 레전드 챔피언 및 아이템 정보 앱',
    },
    link: 'https://riot-mu.vercel.app/',
    githubLink: 'https://github.com/gracejelly125/Riot',
  },
  {
    id: 5,
    type: '개인',
    title: '포켓몬 도감, 다양한 포켓몬을 한눈에! POKEDEX',
    period: '2024.11 ~ 2024.11 (1주)',
    contribution: '100%',
    teamInfo: [{ role: 'FE', count: 1 }],
    roles: [
      '포켓몬 카드 컬렉션 기능 구현',
      '- Props Drilling → Context → Redux Toolkit으로 상태 관리 단계별 전환 구조 구현',
      '- react-router-dom을 활용한 페이지 라우팅 및 상세 페이지 네비게이션 처리',
      '- Dashboard, PokemonList, PokemonCard 등 재사용 가능한 컴포넌트 구조 설계',
      '- toast UI 알림으로 중복 선택 및 제한 초과 시 사용자 피드백 UX 개선',
      '- styled-components로 전역 스타일 적용 및 리스트 페이지 상태 유지 처리',
    ],
    skills: [
      'React',
      'Redux Toolkit',
      'Context API',
      'styled-components',
      'Vercel',
    ],
    image: {
      src: '/images/pokedex.JPG',
      alt: '포케덱스 소개',
    },
    link: 'https://pokedex-pink-nine.vercel.app/',
    githubLink: 'https://github.com/gracejelly125/pokedex',
  },
];
