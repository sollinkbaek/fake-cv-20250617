document.addEventListener('DOMContentLoaded', () => {
    // DOM 요소 캐싱
    const navbar = document.getElementById('navbar'); // <<< 추가: navbar 요소 캐싱 (가장 중요)
    const navbarCvOwnerName = document.querySelector('.cv-owner-name');
    const navMenuLinks = document.querySelectorAll('.nav-menu a');
    const langKoBtn = document.getElementById('lang-ko');
    const langEnBtn = document.getElementById('lang-en');

    const profilePhoto = document.getElementById('profile-photo');
    const profileName = document.getElementById('profile-name');
    const profileTagline = document.getElementById('profile-tagline');
    // HTML에 h3 태그에 id를 부여하지 않았다면 querySelector로 접근해야 합니다.
    // 하지만, 안전성을 위해 HTML에 id를 부여하는 것을 추천합니다.
    const contactInfoTitle = document.querySelector('.contact-info h3');
    const contactEmail = document.getElementById('contact-email');
    const contactPhone = document.getElementById('contact-phone');
    const contactLocation = document.getElementById('contact-location');
    const keywordsTitle = document.querySelector('.keywords h3');
    const keywordsList = document.getElementById('keywords-list');
    const summaryAwardsTitle = document.querySelector('.summary-awards h3');
    const summaryAwardsText = document.getElementById('summary-awards-text');
    const externalLinksTitle = document.querySelector('.external-links h3');
    const externalLinksList = document.getElementById('external-links-list');
    const contactCtaButton = document.getElementById('contact-cta');

    const sections = {
        introduction: document.getElementById('introduction'),
        education: document.getElementById('education'),
        experience: document.getElementById('experience'),
        projects: document.getElementById('projects'),
        skills: document.getElementById('skills'),
        research: document.getElementById('research'),
        awards: document.getElementById('awards')
    };

    const introSelfIntroSubtitle = sections.introduction.querySelector('.subsection:nth-child(1) h3');
    const introSelfIntro = document.getElementById('intro-self-intro');
    const introGoalsSubtitle = sections.introduction.querySelector('.subsection:nth-child(2) h3');
    const introGoals = document.getElementById('intro-goals');
    const educationTimeline = document.getElementById('education-timeline');
    const experienceList = document.getElementById('experience-list');
    const projectsGrid = document.getElementById('projects-grid');
    const skillsCategories = document.getElementById('skills-categories');
    const researchList = document.getElementById('research-list');
    const awardsList = document.getElementById('awards-list');

    const footerText = document.getElementById('footer-text');

    const contactModal = document.getElementById('contact-modal');
    const projectDetailModal = document.getElementById('project-detail-modal');
    const modalCloseButtons = document.querySelectorAll('.modal .close-button');
    const contactForm = document.getElementById('contact-form');

    // --- 언어 관련 함수 ---
    function getCurrentLanguage() {
        return CV_DATA.currentLang;
    }

    function setLanguage(lang) {
        CV_DATA.currentLang = lang;
        langKoBtn.classList.remove('active');
        langEnBtn.classList.remove('active');
        document.getElementById(`lang-${lang}`).classList.add('active');
        renderUI(); // UI 전체 다시 렌더링
    }

    // getLocalizedText 함수 수정: obj가 문자열일 경우 바로 반환 (skills.items의 name 등)
    function getLocalizedText(obj) {
        const lang = getCurrentLanguage();
        if (typeof obj === 'string') {
            return obj;
        }
        return obj[lang] || obj['en']; // 해당 언어가 없으면 영어로 대체
    }

    // --- UI 렌더링 함수 ---
    function renderUI() {
        const lang = getCurrentLanguage();

        // NavBar
        navbarCvOwnerName.textContent = getLocalizedText(CV_DATA.sections.navbar.home);
        navMenuLinks.forEach(link => {
            const sectionKey = link.dataset.section;
            if (CV_DATA.sections.navbar[sectionKey]) {
                link.textContent = getLocalizedText(CV_DATA.sections.navbar[sectionKey]);
            }
        });

        // Summary Area
        profilePhoto.src = CV_DATA.profile.photo;
        profileName.textContent = getLocalizedText(CV_DATA.profile.name);
        profileTagline.textContent = getLocalizedText(CV_DATA.profile.tagline);

        // h3 태그에 텍스트 할당
        contactInfoTitle.textContent = getLocalizedText(CV_DATA.sections.summary.contactInfoTitle);
        contactEmail.textContent = CV_DATA.profile.contact.email;
        contactPhone.textContent = CV_DATA.profile.contact.phone;
        contactLocation.textContent = getLocalizedText(CV_DATA.profile.contact.location);

        keywordsTitle.textContent = getLocalizedText(CV_DATA.sections.summary.keywordsTitle);
        keywordsList.innerHTML = '';
        CV_DATA.profile.keywords.forEach(keyword => {
            const span = document.createElement('span');
            span.classList.add('tag'); // 필요 시 tag 클래스 추가 (CSS 스타일링 위함)
            span.textContent = getLocalizedText(keyword);
            keywordsList.appendChild(span);
        });

        summaryAwardsTitle.textContent = getLocalizedText(CV_DATA.sections.summary.summaryAwardsTitle);
        summaryAwardsText.textContent = getLocalizedText(CV_DATA.profile.summaryAwards);

        externalLinksTitle.textContent = getLocalizedText(CV_DATA.sections.summary.externalLinksTitle);
        externalLinksList.innerHTML = '';
        CV_DATA.profile.externalLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            const img = document.createElement('img');
            img.src = link.icon;
            img.alt = link.name + " Icon";
            img.classList.add('icon');
            const span = document.createElement('span');
            span.textContent = link.name; // link.name은 LocalizedText 필요 없을 수 있음 (GitHub, LinkedIn 등 고유명사)
            a.appendChild(img);
            a.appendChild(span);
            externalLinksList.appendChild(a);
        });

        contactCtaButton.textContent = getLocalizedText(CV_DATA.sections.summary.contactCtaButton);

        // Contents Area - Section Titles
        for (const key in sections) {
            const titleSpan = sections[key].querySelector('.section-title [data-section-title]');
            if (titleSpan) { // 해당 요소가 존재할 경우에만 처리
                titleSpan.textContent = getLocalizedText(CV_DATA.sections[key].title);
            }
        }

        // Introduction
        introSelfIntroSubtitle.textContent = getLocalizedText(CV_DATA.sections.introduction.selfIntroSubtitle);
        introSelfIntro.textContent = getLocalizedText(CV_DATA.sections.introduction.selfIntro);
        introGoalsSubtitle.textContent = getLocalizedText(CV_DATA.sections.introduction.goalsSubtitle);
        introGoals.textContent = getLocalizedText(CV_DATA.sections.introduction.goals);

        // Education
        educationTimeline.innerHTML = '';
        CV_DATA.sections.education.items.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('timeline-item');
            div.innerHTML = `
                <h4>${getLocalizedText(item.degree)} - ${getLocalizedText(item.institution)}</h4>
                <p class="period">${getLocalizedText(item.period)}</p>
                <p>${getLocalizedText(item.description)}</p>
            `;
            educationTimeline.appendChild(div);
        });

        // Experience
        experienceList.innerHTML = '';
        CV_DATA.sections.experience.items.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('experience-card');
            const dutiesHtml = item.duties.map(duty => `<li>${getLocalizedText(duty)}</li>`).join('');
            // projects는 문자열 배열이므로 getLocalizedText를 개별 요소에 적용
            const projectsHtml = item.projects.map(project => `<span>${getLocalizedText(project)}</span>`).join(', ');

            div.innerHTML = `
                <h3>${getLocalizedText(item.position)}</h3>
                <p class="company">${getLocalizedText(item.company)}</p>
                <p class="period">${getLocalizedText(item.period)}</p>
                <h4>${lang === 'ko' ? '주요 업무' : 'Key Responsibilities'}</h4>
                <ul>${dutiesHtml}</ul>
                <p class="projects-info"><strong>${lang === 'ko' ? '참여 프로젝트' : 'Involved Projects'}</strong>: ${projectsHtml}</p>
            `;
            experienceList.appendChild(div);
        });

        // Projects
        projectsGrid.innerHTML = '';
        CV_DATA.sections.projects.items.forEach(project => {
            const div = document.createElement('div');
            div.classList.add('project-card');
            div.innerHTML = `
                <img src="${project.image}" alt="${getLocalizedText(project.name)} Thumbnail">
                <div class="project-card-content">
                    <h3>${getLocalizedText(project.name)}</h3>
                    <p class="description">${getLocalizedText(project.description)}</p>
                    <p class="technologies"><strong>${lang === 'ko' ? '기술' : 'Tech'}</strong>: ${project.technologies.join(', ')}</p>
                    <p class="period"><strong>${lang === 'ko' ? '기간' : 'Period'}</strong>: ${getLocalizedText(project.period)}</p>
                    <button class="button view-project-btn" data-project-id="${project.id}">${getLocalizedText(CV_DATA.sections.projects.viewProjectButton)}</button>
                </div>
            `;
            projectsGrid.appendChild(div);
        });

        // Skills
        skillsCategories.innerHTML = '';
        CV_DATA.sections.skills.categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('skills-category');
            categoryDiv.innerHTML = `<h4>${getLocalizedText(category.name)}</h4>`;
            category.items.forEach(skill => {
                const skillItemDiv = document.createElement('div');
                skillItemDiv.classList.add('skill-item');
                skillItemDiv.innerHTML = `
                    <span>${getLocalizedText(skill.name)}</span> <div class="skill-level-bar">
                        <div class="skill-level-fill" style="width: ${skill.level * 20}%;"></div>
                    </div>
                `;
                categoryDiv.appendChild(skillItemDiv);
            });
            skillsCategories.appendChild(categoryDiv);
        });

        // Research
        researchList.innerHTML = '';
        CV_DATA.sections.research.items.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('list-item');
            div.innerHTML = `
                <h4>${getLocalizedText(item.title)}</h4>
                <p>${getLocalizedText(item.publisher)}</p>
                <p class="date">${getLocalizedText(item.date)}</p>
                <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="button link-button">${getLocalizedText(CV_DATA.sections.research.viewPaperButton)}</a>
            `;
            researchList.appendChild(div);
        });

        // Awards
        awardsList.innerHTML = '';
        CV_DATA.sections.awards.items.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('list-item');
            div.innerHTML = `
                <h4>${getLocalizedText(item.name)}</h4>
                <p>${getLocalizedText(item.issuer)}</p>
                <p class="date">${getLocalizedText(item.date)}</p>
            `;
            awardsList.appendChild(div);
        });

        // Footer
        footerText.textContent = getLocalizedText(CV_DATA.footer.text);

        // Modals - Contact
        document.getElementById('contact-modal-title').textContent = getLocalizedText(CV_DATA.modals.contact.title);
        document.querySelector('#contact-form label[for="contact-name"]').textContent = getLocalizedText(CV_DATA.modals.contact.nameLabel);
        document.querySelector('#contact-form label[for="contact-email-input"]').textContent = getLocalizedText(CV_DATA.modals.contact.emailLabel);
        document.querySelector('#contact-form label[for="contact-phone-input"]').textContent = getLocalizedText(CV_DATA.modals.contact.phoneLabel);
        document.querySelector('#contact-form label[for="contact-message"]').textContent = getLocalizedText(CV_DATA.modals.contact.messageLabel);
        document.getElementById('contact-submit-btn').textContent = getLocalizedText(CV_DATA.modals.contact.submitButton);

        // Modals - Project Detail (labels only, content dynamically loaded)
        document.getElementById('project-detail-period-label').textContent = getLocalizedText(CV_DATA.sections.projects.projectDetailPeriodLabel);
        document.getElementById('project-detail-tech-label').textContent = getLocalizedText(CV_DATA.sections.projects.projectDetailTechLabel);
        document.getElementById('project-detail-link').textContent = getLocalizedText(CV_DATA.sections.projects.projectDetailLinkButton);
    }

    // --- 이벤트 리스너 ---

    // 언어 전환 버튼
    langKoBtn.addEventListener('click', () => setLanguage('ko'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    // NavBar 이름 클릭 시 최상단 스크롤
    navbarCvOwnerName.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // NavBar 메뉴 앵커 스크롤
    navMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // navbar의 높이를 고려하여 스크롤 위치 조정
                const offsetTop = targetElement.offsetTop - (navbar ? navbar.offsetHeight : 0);
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact CTA 버튼 클릭 시 모달 열기
    contactCtaButton.addEventListener('click', () => {
        contactModal.style.display = 'flex'; // Flexbox로 중앙 정렬
    });

    // 프로젝트 보기 버튼 클릭 시 모달 열기
    projectsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-project-btn')) {
            const projectId = e.target.dataset.projectId;
            const project = CV_DATA.sections.projects.items.find(p => p.id === projectId);
            if (project) {
                // project.detail은 CV_DATA에 정의되어 있습니다.
                document.getElementById('project-detail-title').textContent = getLocalizedText(project.name);
                document.getElementById('project-detail-image').src = project.image;
                document.getElementById('project-detail-image').alt = getLocalizedText(project.name);
                document.getElementById('project-detail-period').textContent = getLocalizedText(project.period);
                document.getElementById('project-detail-technologies').textContent = project.technologies.join(', ');
                document.getElementById('project-detail-description').innerHTML = `<p>${getLocalizedText(project.detail)}</p>`; // HTML 태그가 있다면 innerHTML
                document.getElementById('project-detail-link').href = project.link;
                projectDetailModal.style.display = 'flex';
            }
        }
    });

    // 모달 닫기 버튼 (모든 모달에 적용)
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
        }
        if (e.target === projectDetailModal) {
            projectDetailModal.style.display = 'none';
        }
    });

    // Contact Form 제출 (임시 로직)
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // 실제 API 연동 대신 간단한 메시지 표시
        alert(getLocalizedText(CV_DATA.modals.contact.successMessage));
        contactModal.style.display = 'none';
        contactForm.reset();
    });

    // 초기 UI 렌더링
    // 이 시점에 CV_DATA가 로드되어 있어야 합니다.
    renderUI();
});

// scrollToTop 함수는 HTML에서 onclick으로 호출되므로 전역 스코프에 있어야 합니다.
// 하지만, 이력서 웹 페이지의 구조상 navbarCvOwnerName에 이벤트를 주는 것이 더 적절합니다.
// HTML의 onclick="scrollToTop()"을 제거하고, JS의 navbarCvOwnerName 이벤트 리스너를 사용하는 것이 좋습니다.
// 만약 꼭 필요하다면, 아래와 같이 정의합니다.
// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// }
