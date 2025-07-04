import React from 'react';

const ReferenceSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center">
      <div className="max-w-2xl mx-auto space-y-6 py-8 px-10 rounded-xl bg-gray-300">
        <h2 className="text-2xl tracking-tight text-center text-gray-800 font-pretendard-extrabold">
          추천서
        </h2>

        <div className="space-y-5 text text-gray-800">
          <p>
            정은혜 인턴은 맡은 업무의 성격에 관계없이 책임감을 가지고 성실하게
            임하는 모습을 보여주었습니다. 반복적이거나 세세한 작업도 불평 없이
            끝까지 해내며 팀의 운영에 큰 도움을 주었고, 업무에 대한 이해를
            높이기 위해 스스로 탐구하고자 하는 태도가 인상적이었습니다.
          </p>
          <p>
            특히, NextJS를 사용하여 홈페이지를 구축하는 프로젝트에서 뛰어난
            기술적 능력과 효율성이 두드러졌습니다. 초기 셋업부터 시작하여 2주
            안에 구현을 완료함으로써 목표를 성공적으로 달성했으며, 이는 웹
            개발에 대한 정은혜님의 역량과 시간 관리 능력을 잘 보여줬습니다.
          </p>
          <p>
            또한, Tailwind CSS를 활용해 전체 홈페이지에 Dark 모드를 추가하는
            작업을 맡아 수행했습니다. 이 과정에서 반복적인 작업을 묵묵히 해내며,
            2주 안에 전체 파일을 수정하여 완료했습니다. 이는 UI/UX 디자인에 대한
            이해와 세부 사항에 집중할 수 있는 인내심을 입증합니다.
          </p>
          <p>
            항상 밝고 긍정적인 태도로 팀 분위기를 좋게 이끌었고, 원활한
            커뮤니케이션 능력 덕분에 비대면 협업 환경에서도 빠르게 적응해
            주었습니다. 주어진 가이드 안에서 스스로 방향을 잡고 꾸준히 결과를
            내는 안정적인 스타일로, 팀원으로서 매우 신뢰할 수 있는
            인턴이었습니다.
          </p>
          <p>
            더불어, 협약 인턴 중 유일하게 기간 내 목표를 충실히 수행한 인재로서,
            정은혜님의 헌신과 전문성은 다른 인턴들과 비교해도 단연 돋보였습니다.
          </p>
          <p>
            이와 같이 정은혜 인턴은 기술적 능력, 효율성, 인내심, 그리고 헌신을
            겸비한 인재로, 팀에 큰 가치를 더해준 인턴이었습니다. 이러한 역량과
            태도는 앞으로의 업무에서도 큰 자산이 될 것이라 확신합니다.
          </p>
        </div>

        <div className="text-right font-pretendard-extrabold text-xl mt-4 text-gray-800">
          이호련 @피스커버 CTO
        </div>
      </div>
    </section>
  );
};

export default ReferenceSection;
