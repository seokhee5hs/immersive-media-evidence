// Policy facts and analyst proposals are separate from the 2021–2025 outcome records.
const policySources=[
{id:'S24',title:'COSS 공식 실감미디어 컨소시엄 소개·대학별 역할',date:'게시일 미표시',url:'https://coss.ac.kr/intro/intro_realistic'},
{id:'S25',title:'교육부 5극3특 공유대학·초광역 성장엔진 기본계획 발표 및 첨부',date:'2026-06-23',url:'https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=294&boardSeq=106504&lev=0&m=020402&opType=N&s=moe&statusYN=W'},
{id:'S26',title:'교육부 지역성장 인재양성체계(앵커) 추진방안',date:'2026-04',url:'https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=294&boardSeq=105790&lev=0&m=020402&s=moe'},
{id:'S27',title:'국립금오공대 초광역 성장엔진 선정·계명대 참여 공식 발표',date:'2026-09-10',url:'https://bus.kumoh.ac.kr/ko/sub01_05_01.do?articleNo=577010&mode=view'},
{id:'S28',title:'교수신문: 5극3특 공유대학·초광역 성장엔진 인재 육성 추진',date:'2026년 6월 정책 보도',url:'https://www.kyosu.net/news/articleView.html?idxno=206876'}
].map(s=>({...s,accessed:'2026-09-29'}));
SOURCES.push(...policySources);
const officialRoles=[
['건국대','기술융합 교육·공유대학 포털 총괄','공통 교육과정·자산 목록·성과 원장 연결'],
['경희대','XR 핵심기술 교육·기술 테스트베드','AI–XR 인터랙션·공간 표현·사용성 검증'],
['계명대','국제교류·퍼블릭 테스트베드','대경권 성장엔진과 산업훈련 실증 협의'],
['계원예대','디자인·실무 교육·메타버스 스튜디오','디지털 휴먼·공간 경험·AI 제작 품질'],
['배재대','문화예술·실감미디어 교육 지역연계','지역 교육·문화 수요와 공동 PBL 연결'],
['전주대','콘텐츠·디자인 교육·지역 사회문제 해결','문화·생활서비스 접근성 현장 실증'],
['중앙대','창업·비즈니스 교육·창업지원센터','고객 검증·콘텐츠 IP·사업화 모델 교육']
];
const roleHTML=`<div class="coverage"><b>공식 역할과 제안 역할을 분리했습니다.</b> 아래 공식 역할은 COSS 소개의 요약입니다. 현재 시설 가동률이나 5개년 성과 총계를 뜻하지 않습니다. ${sourceLinks(['S24'])}</div><div class="table-wrap"><table><thead><tr><th>대학</th><th>COSS 공식 역할</th><th>휴먼–AI–XR 후속 역할 제안</th></tr></thead><tbody>${officialRoles.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]} <span class="badge plan">제안·미협약</span></td></tr>`).join('')}</tbody></table></div>`;
$('#comparison').insertAdjacentHTML('afterbegin',roleHTML);
const routes={
shared:{title:'주 경로 · 5극3특 공유대학의 실감미디어 AI 융합 트랙',facts:'첨부 기본계획은 거점국립대 주관의 9개 공유대학, 2026–2029년 지원을 제시합니다. 분야별 트랙·책임기관 설정과 필요시 수도권 대학 참여가 가능합니다. 기업 공동 교육과정은 필수입니다.',proposal:'권역 거점국립대와 지역 대학이 공동교육·공동연구를 운영하고, 기존 COSS 대학들은 기술·디자인·사업화 전문역량을 제공합니다. COSS 주관대학의 지위가 새 사업 총괄 자격으로 자동 승계되지는 않습니다.',gate:'지역앵커센터·거점국립대와 기존 확정계획을 대조 → 지역 수요·학생 수혜 확인 → 참여대학·과제·예산 반영 및 필요한 심의. 2027년 반영은 제안이며 신규 공모나 변경 승인이 보장되지 않습니다.',sources:['S25'],page:'첨부 PDF 인쇄면 2–5, 13쪽'},
growth:{title:'실증 경로 · 선정된 초광역 성장엔진의 직무훈련',facts:'금오공대의 2026년 9월 공식 발표는 반도체 소부장·AI 제조로봇 사업 선정과 계명대 참여를 확인합니다. 이는 실감미디어 컨소시엄 전체의 선정이나 XR 과제 확정을 의미하지 않습니다.',proposal:'계명대를 협의 접점으로 삼아 작업절차·장비정비·로봇 협업의 AI 튜터+XR 훈련 과제를 공동기획합니다. 기업이 직무·데이터·현장 검증·지도인력을 제공하고, 대학은 제작과 교육효과를 검증합니다.',gate:'기존 승인 과제와 중복 여부 확인 → 주관대학·기업의 수요 및 참여 합의 → 데이터 사용권·예산·성과 귀속 확정 → 단계적 실증. 추가 대학 참여는 별도 검토가 필요합니다.',sources:['S27'],page:'2026-09-10 대학 공식 선정 발표'},
anchor:{title:'운영 경로 · 기존 앵커 과제·공유대학 자산 연결',facts:'앵커는 지역성장 인재양성체계입니다. 공유대학 기본계획은 LRS·PRIDE·DSC 등 기존 공유대학 사업의 연계와 LMS·자원공유 시스템 활용을 제시하며 기존 과제와의 차별화를 요구합니다.',proposal:'지역 앵커의 교육·취업·창업 지원에 실감미디어 공동교과와 현장실증을 연결합니다. 이미 있는 LMS·X-SPACE·장비는 권리와 운영 현황을 조사한 뒤 재사용하고, 성과 관측소는 증빙과 과제 연결을 담당합니다.',gate:'기존 앵커 과제별 예산·교과·참여자·장비 원장 대조 → 재사용/보완/신규 구분 → 중복 집행 방지 → 지역 취업과 후속 사용 추적. 앵커 기업과 앵커 정책체계는 다른 개념입니다.',sources:['S24','S25','S26'],page:'첨부 PDF 인쇄면 3–4쪽'}
};
const policyBlock=document.createElement('div');policyBlock.className='policy-block';
policyBlock.innerHTML=`<div class="thesis"><p class="eyebrow" style="color:#6ce0cd">HUMAN × AI × XR · 2026.09.29 정책 연결 제안</p><h3>사람의 역량을 키우고,<br>지역의 현장을 바꾸는 실감미디어.</h3><p><b>휴먼–AI–XR 실감융합 공유캠퍼스</b><br>실감미디어(AI 융합)를 교육·연구의 공통 분야로 삼고, 지역 산업의 직무훈련과 문화·생활서비스에 적용하는 후속사업을 제안합니다.</p><p>Human은 사람의 학습·협업·접근성, AI는 콘텐츠 생성·상황 인식·피드백, XR은 공간 속 체험·상호작용을 담당합니다. 사업의 성패는 제작량을 넘어 실제 역량 향상과 지역 현장 활용으로 평가합니다.</p><a href="proposal.md" download>상세 제안서 내려받기 · Markdown ↗</a></div>
<div class="note"><b>정책 시점과 제안의 경계</b><p>2026년 6월 발표계획에 9월 선정 발표를 추가했습니다. 지금은 발표 당시의 공모 예고를 그대로 신규 지원 기회로 해석할 수 없습니다. 아래 역할·트랙·예산·목표는 분석 제안이며, 기관의 참여 동의나 선정·재원 확보를 뜻하지 않습니다.</p>${sourceLinks(['S25','S27','S28'])}</div>
<h3>어느 제도에, 어떤 기능으로 연결할까?</h3><p>연결 경로를 선택하면 근거·사업 설계·진입 조건을 볼 수 있습니다.</p><div class="policy-paths" role="group" aria-label="후속사업 연결 경로"><button data-route="shared" aria-pressed="true">① 공유대학 · 공동교육</button><button data-route="growth" aria-pressed="false">② 성장엔진 · 현장실증</button><button data-route="anchor" aria-pressed="false">③ 앵커 · 자산과 정주</button></div><div id="policy-detail" aria-live="polite"></div>
<h3>두 개의 실증 트랙, 하나의 공통 기술 기반</h3><div class="grid3"><article class="card"><span class="badge plan">우선 협의 제안</span><h3>산업 역량 · AI–XR 훈련</h3><p>대경권 성장엔진의 실제 직무를 선정해 AI 튜터와 XR 절차훈련을 결합합니다. 웹·영상 교육과 비교해 과업 성공, 오류, 현장 전이를 측정합니다.</p><p><b>산출물</b> 직무 시나리오, 훈련 콘텐츠, 튜터 근거자료, 평가 프로토콜.</p>${sourceLinks(['S27'])}</article><article class="card"><span class="badge plan">수요 확인 후 착수</span><h3>지역 경험 · 문화와 접근성</h3><p>배재대·전주대의 공식 지역연계 역할을 출발점으로 문화·교육기관의 반복 운영 수요를 찾습니다. AI 해설·디지털 휴먼·XR 경험을 이용자와 공동 설계합니다.</p><p><b>산출물</b> 권리 확인된 지역 자산, 다중접근 경험, 재사용 계약·운영계획.</p>${sourceLinks(['S24'])}</article><article class="card"><span class="badge plan">공동 연구 제안</span><h3>공통 기반 · Human–AI–XR</h3><p>사람의 피드백을 반영하는 AI 에이전트, 편집 가능한 3D 장면, XR 인터랙션과 접근성 평가를 함께 연구합니다. 석박사 연구와 학부 제작·검증 역할을 구분합니다.</p><p><b>산출물</b> 재현 가능한 코드·데이터 설명서, 평가도구, 권리·버전이 기록된 자산.</p></article></div>
<h3>기존 사업과 무엇이 달라지는가</h3><div class="table-wrap"><table><thead><tr><th>이어받을 자산</th><th>추가로 설계할 내용</th><th>증빙</th></tr></thead><tbody><tr><td>COSS 공동교과·MD·X-SPACE</td><td>기업 직무 기반 AI–XR 융합 모듈과 지역 적용</td><td>학점인정·기업 공동평가·현장 전이</td></tr><tr><td>기존 앵커·지역 공유대학 LMS·장비</td><td>공동 예약·자산 재사용·지역학생 이동 지원</td><td>외부 대학 이용·재사용·실제 수혜</td></tr><tr><td>산학 프로젝트·창업지원</td><td>수요기관 공동기획→비교 실증→유지·사업화</td><td>현장 채택·운영비·반복 사용·고용</td></tr></tbody></table></div>
<h3>착수 규모 · 확보 예산이 아닌 산정 예시</h3><p>첫 완전 운영연도에 2개 트랙·고유 학습자 120명·기업/기관 6곳·실증 4건을 가정합니다. 교육·멘토링 2억, 실증 제작·검증 3억, 연구·공유자산 2억, 학생 이동·참여 지원 1억, 운영·데이터·평가 2억으로 <b>연 10억원</b>의 기획안을 검토할 수 있습니다. 견적과 승인 예산에 따라 조정하며 대규모 신규 공간 구축은 이 예시에 포함하지 않습니다.</p><p class="small">정부의 공유대학 2026년 총 1,200억원은 전국 예산입니다. 위 10억원과 자동 연결되지 않습니다. 재원별 업무·비용·참여자 기여를 나누고 동일 지출을 중복 청구하지 않는 방식으로 설계합니다.</p>
<h3>90일 안에 제안서를 실행계획으로</h3><div class="grid3"><article class="card"><b>1–30일 · 수요·계획 대조</b><p>계명대·성장엔진 주관대학과 협의할 의제를 만들고, 지역앵커센터·거점국립대의 승인계획과 기존 COSS 자산을 대조합니다. 수요기관 후보의 직무·데이터·운영 여건을 확인합니다.</p></article><article class="card"><b>31–60일 · 공동 설계</b><p>트랙별 책임기관, 학점인정, 기업 지도인력, 데이터 권리, IP·성과 귀속과 실제 견적을 합의안에 담습니다. 교육·실증·연구 재원을 분리합니다.</p></article><article class="card"><b>61–90일 · 진입 판단</b><p>참여·예산 반영 절차와 필요한 심의를 확인하고 소규모 시험을 설계합니다. 수요·학사·데이터·운영비 조건이 갖춰진 트랙부터 진행합니다.</p></article></div>
<div class="note"><b>‘진정한 메타버스’에 대한 제언</b><p>플랫폼 재도래를 전제로 큰 공간을 먼저 만들기보다, AI와 사람이 함께 배우고 일하는 XR 경험이 기관 간에 재사용되는지를 검증합니다. 반복 이용·현장 효과·자산 이동·지속 운영이 확인될 때 연결 범위를 넓히는 방식이 현실적입니다.</p></div>
<p class="small">근거 범위: COSS 공식 소개, 교육부 정책 발표, 제공된 「5극3특 공유대학 기본계획」(2026.6), 금오공대 선정 발표. 첨부 PDF는 공유대학 계획으로 읽었으며 초광역 성장엔진의 모든 집행규칙으로 확대 적용하지 않았습니다.</p><h3>공통 연구·평가 원칙</h3>`;
$('#recommendations').prepend(policyBlock);
function renderRoute(key){const r=routes[key];$('#policy-detail').innerHTML=`<article class="route-detail"><h3>${r.title}</h3><p><b>확인된 제도·현황</b><br>${r.facts}</p><p><b>후속사업 설계 제안</b><br>${r.proposal}</p><p><b>실행 전 충족할 조건</b><br>${r.gate}</p><p class="small">${r.page}</p>${sourceLinks(r.sources)}</article>`;document.querySelectorAll('[data-route]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.route===key)));}
document.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>renderRoute(b.dataset.route));renderRoute('shared');
$('#bibliography').insertAdjacentHTML('beforeend',policySources.map(s=>`<p><b>${s.id}</b> · <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)} ↗</a><br><span class="small">원문 시점: ${s.date} · 확인일: ${s.accessed}</span></p>`).join(''));
