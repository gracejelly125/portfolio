export interface Experience {
  company: string;
  period: string;
  details: string[];
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: '피스커버 FE 인턴',
    period: '2025.03 ~ 2025.03 (1개월)',
    details: [
      '신규 서비스 반응형 랜딩 페이지 개발',
      '레거시 서비스 다크 모드 테마 적용 및 UI 개선',
    ],
  },
  {
    company: '스파르타코딩클럽 내일배움캠프 React 7기',
    period: '2024.09 ~ 2025.02 (5개월)',
    details: [
      'React, Next.js 기반 프론트엔드 개발 부트캠프 (9 to 9 진행)',
      '매일 TIL 블로그 작성 (89일 교육 중 119개 작성)',
    ],
  },
  {
    company: '포토샵, 일러스트레이터 교육',
    period: '2024.06 ~ 2024.07 (2개월)',
    details: [
      '웹 디자이너 취업 위한 실무 포토샵, 일러스트 교육 수료',
      '디자인 소통 능력 강화 및 효과적인 협업 경험',
    ],
  },
];
