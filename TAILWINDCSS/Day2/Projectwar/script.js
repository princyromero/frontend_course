/**
 * ==============================================================================
 * CAREERCONNECT - JAVASCRIPT CONTROLLER
 * Handles interactive elements, animated counters, roadmap switching,
 * AI chat simulation, ATS resume analyzer demo, and form validation.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. NAVBAR SCROLL EFFECT & MOBILE COLLAPSE
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('mainNavbar');
  const navbarCollapse = document.getElementById('navbarContent');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Close mobile navbar on nav item click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 2. ANIMATED STATISTICS COUNTERS (INTERSECTION OBSERVER)
  // --------------------------------------------------------------------------
  const counterElements = document.querySelectorAll('.counter');
  let countersAnimated = false;

  const animateCounters = () => {
    counterElements.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1800; // milliseconds
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quadratic calculation
        const easeOutProgress = progress * (2 - progress);
        const currentVal = Math.floor(easeOutProgress * target);

        counter.innerText = currentVal >= 1000 
          ? (currentVal / 1000).toFixed(currentVal % 1000 === 0 ? 0 : 1) + 'K' 
          : currentVal.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target >= 1000 ? (target / 1000) + 'K' : target;
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const statsSection = document.querySelector('.hero-stats-wrapper');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          animateCounters();
          countersAnimated = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  }

  // --------------------------------------------------------------------------
  // 3. HERO CAREER GROWTH TIMELINE INTERACTION
  // --------------------------------------------------------------------------
  const growthSteps = document.querySelectorAll('.growth-step-item');
  growthSteps.forEach(step => {
    step.addEventListener('click', () => {
      growthSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
    });
  });

  // --------------------------------------------------------------------------
  // 4. INTERACTIVE PERSONALIZED CAREER ROADMAP
  // --------------------------------------------------------------------------
  const roadmapData = {
    1: {
      phaseBadge: 'Phase 1 of 6',
      duration: 'Estimated: 4 - 8 Weeks',
      heading: 'Beginner: Discovering Your Foundation',
      desc: 'Focus on computational thinking, understanding role domains (Frontend, Backend, AI/ML, Cloud), selecting your primary tech stack, and setting up your developer environment.',
      checkpoints: [
        'Understand Computer Science fundamentals & algorithmic logic',
        'Pick your primary language (Python, JavaScript, or Java)',
        'Set up Git, GitHub, and your professional IDE workflow'
      ],
      statValue: '100%',
      statLabel: 'Foundational Clarity',
      outcome: 'Daily Goal: 2 hrs practice & foundational syntax'
    },
    2: {
      phaseBadge: 'Phase 2 of 6',
      duration: 'Estimated: 8 - 12 Weeks',
      heading: 'Learning: Deep Skill Acquisition',
      desc: 'Master intermediate paradigms: asynchronous programming, database modeling, REST/GraphQL APIs, UI component architectures, and responsive layout standards.',
      checkpoints: [
        'Build structured frontend interfaces (Modern HTML5, CSS3, React/Vue)',
        'Implement server logic and SQL/NoSQL data persistence',
        'Solve core data structure problems (arrays, maps, trees, sorting)'
      ],
      statValue: '85%',
      statLabel: 'Skill Benchmark',
      outcome: 'Target: 5 mini-labs + 50 coding problems'
    },
    3: {
      phaseBadge: 'Phase 3 of 6',
      duration: 'Estimated: 6 - 10 Weeks',
      heading: 'Project Building: Real-World Applications',
      desc: 'Transition from passive tutorials to building 3 complete full-stack capstone projects with authentication, live cloud deployments, and clean README documentation.',
      checkpoints: [
        'Develop a production-grade web application with user auth & DB',
        'Incorporate external AI APIs or third-party payment gateways',
        'Deploy projects to cloud hosting (Vercel, AWS, or Docker)'
      ],
      statValue: '3+',
      statLabel: 'Deployed Projects',
      outcome: 'Deliverable: Professional live portfolio link'
    },
    4: {
      phaseBadge: 'Phase 4 of 6',
      duration: 'Estimated: 8 - 16 Weeks',
      heading: 'Internship: Industry Immersion',
      desc: 'Work in cross-functional engineering teams, participate in daily standups, adhere to pull request reviews, and solve real customer bugs in production codebases.',
      checkpoints: [
        'Collaborate on Agile sprints and sprint retrospectives',
        'Write unit tests, automated CI/CD checks, and technical documentation',
        'Receive feedback from senior engineering mentors'
      ],
      statValue: '1st',
      statLabel: 'Enterprise Experience',
      outcome: 'Key Result: Verified industry recommendation'
    },
    5: {
      phaseBadge: 'Phase 5 of 6',
      duration: 'Estimated: 4 - 8 Weeks',
      heading: 'Job: Placement & Market Launch',
      desc: 'Target high-fit roles with tailored ATS resumes, optimize LinkedIn and GitHub profiles, master technical whiteboarding, and excel in behavioral STAR interviews.',
      checkpoints: [
        'Tailor ATS-optimized resumes for specific job descriptions',
        'Complete mock behavioral and live technical coding screens',
        'Negotiate competitive compensation packages with market data'
      ],
      statValue: '94%',
      statLabel: 'Placement Rate',
      outcome: 'Milestone: Signed full-time tech offer letter'
    },
    6: {
      phaseBadge: 'Phase 6 of 6',
      duration: 'Continuous Horizon',
      heading: 'Career Growth: Leadership & AI Mastery',
      desc: 'Expand toward senior engineer or tech lead status. Lead architecture choices, guide junior developers, and adapt continuously to modern generative AI & cloud tooling.',
      checkpoints: [
        'Architect scalable, distributed, and resilient system solutions',
        'Mentor entry-level engineers and conduct technical hiring',
        'Lead AI tool adoption and high-level tech initiatives'
      ],
      statValue: '2.5x',
      statLabel: 'Career Velocity',
      outcome: 'Ongoing: Thought leadership & high-impact equity'
    }
  };

  const roadmapButtons = document.querySelectorAll('.roadmap-btn');
  const stageBadge = document.getElementById('roadmapStageBadge');
  const durationEl = document.getElementById('roadmapDuration');
  const headingEl = document.getElementById('roadmapStageHeading');
  const descEl = document.getElementById('roadmapStageDesc');
  const checkpointsEl = document.getElementById('roadmapCheckpoints');
  const statValEl = document.getElementById('roadmapStatValue');
  const statLabelEl = document.getElementById('roadmapStatLabel');
  const outcomeEl = document.getElementById('roadmapOutcome');
  const roadmapCard = document.getElementById('roadmapDisplay');

  roadmapButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const phase = btn.getAttribute('data-phase');
      const data = roadmapData[phase];
      if (!data) return;

      // Update button active state
      roadmapButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Subtle animation feedback
      roadmapCard.style.opacity = '0.5';
      roadmapCard.style.transform = 'translateY(6px)';

      setTimeout(() => {
        stageBadge.textContent = data.phaseBadge;
        durationEl.textContent = data.duration;
        headingEl.textContent = data.heading;
        descEl.textContent = data.desc;
        statValEl.textContent = data.statValue;
        statLabelEl.textContent = data.statLabel;
        outcomeEl.textContent = data.outcome;

        // Populate checkpoints
        checkpointsEl.innerHTML = data.checkpoints.map(cp => `
          <div class="d-flex align-items-center gap-2 mb-1 text-light">
            <i class="bi bi-check-circle-fill text-cyan"></i> ${cp}
          </div>
        `).join('');

        roadmapCard.style.opacity = '1';
        roadmapCard.style.transform = 'translateY(0)';
      }, 150);
    });
  });

  // --------------------------------------------------------------------------
  // 5. AI CAREER ASSISTANT INTERACTIVE DEMO MODAL
  // --------------------------------------------------------------------------
  const aiChatForm = document.getElementById('aiChatForm');
  const aiUserInput = document.getElementById('aiUserInput');
  const aiChatWindow = document.getElementById('aiChatWindow');
  const promptChips = document.querySelectorAll('.prompt-chip');

  const simulatedResponses = {
    'ai engineer': 'To become an **AI Engineer in 2026**, focus on: 1) Advanced Python, PyTorch, & Hugging Face; 2) Fine-tuning Large Language Models (LLMs) & LoRA; 3) Vector Databases (Pinecone, Weaviate) & RAG architectures; 4) Cloud deployments with Docker & Kubernetes.',
    'fresher': 'For freshers tackling technical coding interviews: 1) Master core Data Structures (Arrays, HashMaps, Two-Pointers); 2) Practice explaining your thought process out loud before coding; 3) Prepare 2 strong capstone projects using the STAR method (Situation, Task, Action, Result).',
    'ats': 'To pass modern ATS scanners: 1) Use clean standard headings (Education, Experience, Skills); 2) Mirror verbatim keywords from the job description; 3) Quantify achievements with metrics ("Improved page speed by 35%"); 4) Avoid complex tables or multi-column layouts that confuse parsers.',
    'full-stack vs cloud': 'Both are fantastic paths! **Full-Stack** offers rapid visual feedback and abundant freelance/startup entry roles. **Cloud & DevOps** is exceptional for high enterprise stability and system architecture. For freshers, starting with Full-Stack and learning Cloud deployments (AWS/Docker) is the ideal hybrid strategy.',
    'default': 'Great question! In today\'s competitive tech landscape, the strongest candidates demonstrate high curiosity, project proof-of-work on GitHub, and proactive communication. Would you like a step-by-step roadmap for this specialization?'
  };

  const appendChatMessage = (sender, message, isAi = false) => {
    const messageWrapper = document.createElement('div');
    messageWrapper.className = `chat-message ${isAi ? 'ai-message' : 'user-message text-end'} mb-3`;

    if (isAi) {
      messageWrapper.innerHTML = `
        <div class="d-flex align-items-start gap-2">
          <div class="chat-avatar bg-ai-gradient"><i class="bi bi-robot"></i></div>
          <div class="chat-bubble text-start">
            <div class="fw-bold text-cyan small mb-1">CareerConnect AI</div>
            <p class="mb-0 small">${message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
          </div>
        </div>
      `;
    } else {
      messageWrapper.innerHTML = `
        <div class="d-inline-block chat-bubble user-bubble text-start">
          <div class="fw-bold text-white small mb-1">You</div>
          <p class="mb-0 small text-light">${message}</p>
        </div>
      `;
    }

    aiChatWindow.appendChild(messageWrapper);
    aiChatWindow.scrollTop = aiChatWindow.scrollHeight;
  };

  const handleAiQuestion = (questionText) => {
    const cleaned = questionText.trim();
    if (!cleaned) return;

    // Show user message
    appendChatMessage('User', cleaned, false);

    // AI "thinking" indicator
    const thinkingWrapper = document.createElement('div');
    thinkingWrapper.id = 'aiThinking';
    thinkingWrapper.className = 'chat-message ai-message mb-3';
    thinkingWrapper.innerHTML = `
      <div class="d-flex align-items-start gap-2">
        <div class="chat-avatar bg-ai-gradient"><i class="bi bi-robot"></i></div>
        <div class="chat-bubble text-start">
          <span class="spinner-grow spinner-grow-sm text-cyan me-1"></span>
          <span class="text-muted small">CareerConnect AI is analyzing industry data...</span>
        </div>
      </div>
    `;
    aiChatWindow.appendChild(thinkingWrapper);
    aiChatWindow.scrollTop = aiChatWindow.scrollHeight;

    setTimeout(() => {
      const thinkingEl = document.getElementById('aiThinking');
      if (thinkingEl) thinkingEl.remove();

      const lower = cleaned.toLowerCase();
      let response = simulatedResponses['default'];

      if (lower.includes('ai') || lower.includes('machine learning')) {
        response = simulatedResponses['ai engineer'];
      } else if (lower.includes('fresher') || lower.includes('interview')) {
        response = simulatedResponses['fresher'];
      } else if (lower.includes('ats') || lower.includes('resume')) {
        response = simulatedResponses['ats'];
      } else if (lower.includes('cloud') || lower.includes('full-stack') || lower.includes('stack')) {
        response = simulatedResponses['full-stack vs cloud'];
      }

      appendChatMessage('AI', response, true);
    }, 800);
  };

  if (aiChatForm) {
    aiChatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const question = aiUserInput.value;
      if (question) {
        handleAiQuestion(question);
        aiUserInput.value = '';
      }
    });
  }

  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const promptText = chip.getAttribute('data-prompt');
      handleAiQuestion(promptText);
    });
  });

  // --------------------------------------------------------------------------
  // 6. ATS RESUME STRENGTH ANALYZER DEMO
  // --------------------------------------------------------------------------
  const analyzeResumeBtn = document.getElementById('analyzeResumeBtn');
  const resumeSnippet = document.getElementById('resumeSnippet');
  const resumeResultsBox = document.getElementById('resumeResultsBox');
  const kwMatchVal = document.getElementById('kwMatchVal');
  const readabilityVal = document.getElementById('readabilityVal');
  const impactVal = document.getElementById('impactVal');
  const resumeScoreBadge = document.getElementById('resumeScoreBadge');
  const resumeFeedbackText = document.getElementById('resumeFeedbackText');

  if (analyzeResumeBtn) {
    analyzeResumeBtn.addEventListener('click', () => {
      const text = (resumeSnippet.value || '').trim();
      analyzeResumeBtn.disabled = true;
      analyzeResumeBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Analyzing Resume Syntax...';

      setTimeout(() => {
        analyzeResumeBtn.disabled = false;
        analyzeResumeBtn.innerHTML = '<i class="bi bi-lightning-charge me-1"></i> Run AI ATS Analysis';
        resumeResultsBox.classList.remove('d-none');

        const length = text.length;
        if (length > 100) {
          kwMatchVal.textContent = '94%';
          readabilityVal.textContent = 'High';
          impactVal.textContent = '12 Found';
          resumeScoreBadge.className = 'badge bg-success-subtle text-success border border-success-subtle';
          resumeScoreBadge.textContent = '94 / 100 • Strong ATS Fit';
          resumeFeedbackText.innerHTML = '<i class="bi bi-check-circle-fill text-success me-1"></i> Strong quantification of achievements and modern technical keywords detected. Ready to submit!';
        } else {
          kwMatchVal.textContent = '76%';
          readabilityVal.textContent = 'Medium';
          impactVal.textContent = '4 Found';
          resumeScoreBadge.className = 'badge bg-warning-subtle text-warning border border-warning-subtle';
          resumeScoreBadge.textContent = '78 / 100 • Needs Metrics';
          resumeFeedbackText.innerHTML = '<i class="bi bi-exclamation-triangle-fill text-warning me-1"></i> Add more action verbs (e.g. "Architected", "Engineered", "Reduced") and specify percentages or user numbers to boost recruiter ranking.';
        }
      }, 1000);
    });
  }

  // --------------------------------------------------------------------------
  // 7. ROLE SELECTOR IN ONBOARDING MODAL
  // --------------------------------------------------------------------------
  const roleCards = document.querySelectorAll('.role-select-card');
  roleCards.forEach(card => {
    card.addEventListener('click', () => {
      roleCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  const onboardingForm = document.getElementById('onboardingForm');
  if (onboardingForm) {
    onboardingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const modalEl = document.getElementById('getStartedModal');
      const bsModal = bootstrap.Modal.getInstance(modalEl);
      if (bsModal) {
        bsModal.hide();
      }
      showToast('Welcome aboard! Your personalized career path has been initialized.', 'success');
      onboardingForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 8. CONTACT FORM SUBMISSION WITH VALIDATION
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitContactBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
        return;
      }

      contactForm.classList.remove('was-validated');

      // Button loading state
      const btnText = submitBtn.querySelector('.btn-text');
      const spinner = submitBtn.querySelector('.spinner-border');
      submitBtn.disabled = true;
      btnText.classList.add('d-none');
      spinner.classList.remove('d-none');

      // Simulate API call
      setTimeout(() => {
        submitBtn.disabled = false;
        btnText.classList.remove('d-none');
        spinner.classList.add('d-none');

        showToast('Thank you! Your career inquiry has been received. Our advisory team will reach out shortly.', 'success');
        contactForm.reset();
      }, 1200);
    });
  }

  // --------------------------------------------------------------------------
  // 9. NEWSLETTER SUBSCRIPTION
  // --------------------------------------------------------------------------
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed! You will now receive weekly tech skill forecasts.', 'success');
      newsletterForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 10. BACK TO TOP BUTTON
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 11. TOAST NOTIFICATION HELPER
  // --------------------------------------------------------------------------
  function showToast(message, type = 'success') {
    const toastEl = document.getElementById('actionToast');
    const toastMsgEl = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');

    if (!toastEl || !toastMsgEl) return;

    toastMsgEl.textContent = message;

    if (type === 'success') {
      toastIcon.className = 'bi bi-check-circle-fill text-cyan fs-5';
    } else {
      toastIcon.className = 'bi bi-info-circle-fill text-purple fs-5';
    }

    const bsToast = new bootstrap.Toast(toastEl, { delay: 4000 });
    bsToast.show();
  }

});
