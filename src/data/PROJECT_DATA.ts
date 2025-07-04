export interface Project {
  id: number;
  type: '팀' | '개인';
  title: string;
  period: string;
  contribution: string;
  teamInfo: string;
  roles: string[];
  skills: string[];
  image: {
    src: string;
    alt: string;
  };
  link?: string;
}

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    type: '팀',
    title: '1인 가구 청년 자취생을 위한 정보 제공 서비스 HOLO',
    period: '2025.01 ~ 2025.02 (6주)',
    contribution: '25%',
    teamInfo: 'FE - 5 DESIGN - 1',
    roles: [
      '꿀팁게시판 페이지',
      '- Supabase 활용, 게시글 CRUD, 좋아요 및 댓글 실시간 데이터 처리',
      '- 좋아요/댓글: TanstackQuery 낙관적 업데이트 적용 → 사용자 경험 개선',
      '- 게시글 검색, 카테고리, 최신순/인기순 필터링 기능 → 사용자 편의성 향상',
      '- 커스텀 모달 직접 구현 및 Zustand로 모달 상태 관리 → 전역 상태 관리 효율성 향상',
      '- 스켈레톤 UI 로딩 페이지 구현 → 사용자 경험 개선',
    ],
    skills: [
      'NextJS',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Zustand',
      'TanstackQuery',
      'Vercel',
      'Figma',
    ],
    image: {
      src: '/images/honeytips.gif',
      alt: '꿀팁게시판 소개',
    },
  },
  {
    id: 2,
    type: '개인',
    title: '포켓몬 도감, 다양한 포켓몬을 한눈에! POKEDEX',
    period: '2024.11 ~ 2024.11 (1주)',
    contribution: '100%',
    teamInfo: 'FE - 1',
    roles: [
      '포케덱스 페이지',
      '- Git 브랜치 전략으로 Props Drilling, Context, Redux Toolkit 단계별 상태 관리 구현',
      '- react-router-dom으로 페이지 라우팅 및 상세 페이지 이동 기능 개발',
      '- Dashboard, PokemonList, PokemonCard 컴포넌트 구성 및 포켓몬 카드 추가/삭제 기능 제공',
      '- toast UI 알림으로 중복 및 최대 선택 수 초과 시 사용자 피드백 개선',
      '- styled-components로 일관된 스타일링 적용 및 리스트 페이지 상태 유지 기능 구현',
    ],
    skills: [
      'React',
      'styled-components',
      'Context',
      'Redux Toolkit',
      'Vercel',
    ],
    image: {
      src: '/images/pokedex.JPG',
      alt: '포케덱스 소개',
    },
    link: 'https://pokedex-pink-nine.vercel.app/',
  },
];
