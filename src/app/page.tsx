import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-[#003366]">Gkipedia:대문</h1>
        <div className="mt-4 rounded border border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-600">
          분류 : <span className="font-medium text-[#003366]">대문</span>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="space-y-4 py-10 text-center">
        <h2 className="text-4xl font-bold text-[#003366]">GSM의 모든 순간을 기억하는 타임캡슐</h2>
        <p className="text-lg font-medium text-gray-600">
          <span className="text-[#003366]">Gkipedia</span>에 오신 것을 환영합니다!
        </p>
        <div className="mt-6 space-y-1 text-sm text-gray-500">
          <p>
            Gkipedia는 광주소프트웨어마이스터고등학교 학생이라면 누구나 기여할 수 있는 위키입니다.
          </p>
          <p>검증되지 않았거나 편향된 내용이 있을 수 있습니다.</p>
          <p className="font-bold text-red-500">
            ※ 타인에 대한 조롱 또는 비방, 비난으로 인해 발생하는 문제에 대한 책임은 본인에게
            있습니다. 주의해주세요! ※
          </p>
        </div>
      </div>

      {/* School Info Card */}
      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <div className="bg-[#003366] p-3 text-center text-white">
          <h3 className="text-xl font-bold">광주소프트웨어마이스터고등학교</h3>
          <p className="text-sm opacity-80">Gwangju Software Meister High School</p>
        </div>
        <div className="relative flex aspect-video w-full items-center justify-center bg-gray-200 text-gray-500">
          <Image src="/images/school.webp" alt="학교 전경 이미지" fill />
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            개교
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            1954년 6월
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            마이스터고교 지정
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            2017년 3월
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            성별
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            남녀 공학
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            유형
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            마이스터고등학교
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            교장
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            최홍진
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            교감
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            김광진
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            학생 수
          </div>
          <div className="flex flex-1 flex-col items-start justify-center bg-white p-3 font-medium text-gray-800">
            <span>208명</span>
            <span className="text-sm text-gray-500">(2025년 기준)</span>
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            교훈
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            더불어 살아가는 사람다운 미래 인재
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            교화
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            동백꽃
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            교목
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            소나무
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            교색
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            파란색
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            교직원 수
          </div>
          <div className="flex flex-1 flex-col items-start justify-center bg-white p-3 font-medium text-gray-800">
            <span>41명</span>
            <span className="text-sm text-gray-500">(2025년 기준)</span>
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            설립형태
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            공립
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <div className="flex w-36 shrink-0 items-center justify-center bg-[#003366] p-3 text-center text-sm font-bold text-white">
            주소
          </div>
          <div className="flex flex-1 items-center bg-white p-3 font-medium text-gray-800">
            광주광역시 광산구 상무대로 312
          </div>
        </div>
      </div>

      {/* Wiki Content Sections */}
      <div className="mt-8 space-y-12">
        {/* 1. Overview */}
        <section id="overview" className="scroll-mt-20">
          <h2 className="mb-4 text-2xl font-bold text-[#003366]">1. 개요</h2>
          <div className="leading-relaxed text-gray-800">
            <p>
              <span className="font-bold text-[#003366]">광주소프트웨어마이스터고등학교</span>는 4차
              산업혁명 시대를 이끌어갈 영 마이스터(Young Meister)를 양성하는 소프트웨어 분야
              마이스터고등학교입니다. 2017년 개교하였으며, 바른 인성과 창의적 기술력을 겸비한 글로벌
              소프트웨어 인재 육성을 목표로 하고 있습니다.
            </p>
          </div>
        </section>

        {/* 2. Departments */}
        <section id="departments" className="scroll-mt-20">
          <h2 className="mb-4 text-2xl font-bold text-[#003366]">2. 학과</h2>
          <div className="space-y-4">
            <ul className="list-inside list-disc space-y-2 text-gray-800">
              <li>
                <span className="font-bold text-[#003366]">SW개발과</span> : 응용 소프트웨어 개발,
                웹 및 앱 서비스 구현 등 소프트웨어 개발 전반을 다룹니다.
              </li>
              <li>
                <span className="font-bold text-[#003366]">스마트IoT과</span> : 사물인터넷(IoT)
                기술을 기반으로 하드웨어와 소프트웨어를 융합한 시스템 개발을 다룹니다.
              </li>
              <li>
                <span className="font-bold text-[#003366]">인공지능과</span> : AI 모델링, 빅데이터
                분석 등 인공지능 기술의 핵심 원리와 응용을 다룹니다.
              </li>
            </ul>
          </div>
        </section>

        {/* 3. School Song */}
        <section id="school-song" className="scroll-mt-20">
          <h2 className="mb-4 text-2xl font-bold text-[#003366]">3. 교가</h2>
          <div className="flex items-center justify-center rounded-lg p-6">
            <Image
              src="/images/school-music.webp"
              alt="광주소프트웨어마이스터고등학교 교가 악보"
              width={600}
              height={1000}
              className="rounded shadow-sm"
            />
          </div>
        </section>

        {/* 4. Privacy Policy (Footer-like Section) */}
        <section id="privacy" className="mt-16 border-t border-gray-200 pt-8 font-bold">
          <div className="mb-4 flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-600">Gkipedia 개인정보처리방침</h2>
          </div>
          <div className="space-y-2 text-sm text-gray-500">
            <p>
              &apos;Gkipedia&apos;(이하 &apos;쥐키피디아&apos;)는 이용자의 개인정보를 소중히 다루며,
              관련 법령을 준수하고 있습니다.
            </p>
            <p>
              본 방침은 쥐키피디아에서 제공하는 서비스와 관련하여 이용자의 개인정보 수집, 이용, 제공
              및 보호에 관한 사항을 규정함을 목적으로 합니다. 자세한 내용은 운영진에게 문의해주시기
              바랍니다.
            </p>
            <p className="mt-4 text-xs text-gray-400">
              ※ 본 내용은 예시이며, 실제 운영 시에는 정식 약관 및 방침을 적용해야 합니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
