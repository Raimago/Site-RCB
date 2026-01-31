/**
 * R & CB Advogados - Main JavaScript
 * Vanilla JavaScript - No dependencies
 */

(function () {
    'use strict';

    // ==========================================================================
    // DOM Elements
    // ==========================================================================
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const contactModal = document.getElementById('contactModal');
    const serviceModal = document.getElementById('serviceModal');
    const btnTop = document.getElementById('btnTop');

    // ==========================================================================
    // Service Details Data
    // ==========================================================================
    const serviceDetails = {
        'Planejamento Sucessório & Holdings': {
            description: 'Arquitetura sucessória avançada para famílias e empresas, garantindo a perpetuidade do patrimônio e a redução drástica de custos de inventário.',
            items: [
                'Constituição de Holdings Familiares e Patrimoniais',
                'Planejamento sucessório com reserva de usufruto',
                'Testamentos estratégicos',
                'Invenários extrajudiciais complexos'
            ]
        },
        'Direito de Família Patrimonial': {
            description: 'Atuação focada exclusivamente nos aspectos patrimoniais das relações familiares, com sigilo absoluto e segurança jurídica.',
            items: [
                'Pactos antenupciais estratégicos',
                'Alteração de regime de bens',
                'Divórcios de alta complexidade patrimonial',
                'Partilha de bens e participações societárias'
            ]
        },
        'Proteção Patrimonial': {
            description: 'Estruturação de mecanismos legais para a blindagem de ativos contra riscos empresariais e civis, preservando o legado conquistado.',
            items: [
                'Blindagem patrimonial lícita',
                'Segregação de riscos empresariais',
                'Estruturação de fundos exclusivos (FIP/FIDC)',
                'Due diligence patrimonial'
            ]
        },
        'Eficiência Tributária': {
            description: 'Inteligência fiscal aplicada à gestão e transmissão de bens, visando a máxima eficiência e conformidade legal.',
            items: [
                'Planejamento tributário sucessório (ITCMD)',
                'Otimização de ganho de capital imobiliário',
                'Recuperação de créditos fiscais',
                'Defesa em autuações fiscais de grandes contribuintes'
            ]
        },
        'Governança Corporativa': {
            description: 'Profissionalização da gestão familiar e criação de regras claras para a sucessão no controle das empresas.',
            items: [
                'Acordos de sócios e acionistas',
                'Criação de conselhos consultivos',
                'Protocolos familiares',
                'Mediação de conflitos societários'
            ]
        },
        'Herança Digital & Ativos': {
            description: 'Proteção legal para novos e antigos ativos, desde propriedade intelectual até criptoativos e contas digitais.',
            items: [
                'Planejamento sucessório de ativos digitais',
                'Proteção de marca e propriedade intelectual',
                'Contratos de tecnologia e inovação',
                'Adequação patrimonial à LGPD'
            ]
        }
    };

    // ==========================================================================
    // Individual Service Descriptions
    // ==========================================================================
    const individualServiceDescriptions = {
        'Planejamento Sucessório': {
            title: 'Planejamento Sucessório',
            description: 'Estruturação estratégica para organização e transferência do patrimônio familiar com segurança jurídica, minimizando conflitos e garantindo a continuidade dos bens para as próximas gerações. Inclui análise patrimonial, definição de estratégias de sucessão e implementação de instrumentos jurídicos adequados.'
        },
        'Inventário e Partilha': {
            title: 'Inventário e Partilha',
            description: 'Processo judicial ou extrajudicial para identificação, avaliação e divisão dos bens deixados pelo falecido entre os herdeiros legítimos. Realizamos todo o procedimento com agilidade, reduzindo burocracias e garantindo a partilha justa e conforme a legislação vigente.'
        },
        'Testamentos': {
            title: 'Testamentos',
            description: 'Elaboração de testamentos públicos ou particulares para expressar a vontade do testador sobre a distribuição de seus bens após o falecimento. Oferecemos assessoria completa na redação, registro e validação de testamentos, garantindo segurança jurídica e validade do documento.'
        },
        'Holding Familiar': {
            title: 'Holding Familiar',
            description: 'Constituição e estruturação de holding familiar para centralizar o controle patrimonial, facilitar a gestão de bens, otimizar a tributação e simplificar a sucessão. Solução estratégica para proteção e perpetuação do patrimônio familiar através de gerações.'
        },
        'Divórcio e Separação': {
            title: 'Divórcio & Partilha Estratégica',
            description: 'Condução de divórcios de alta complexidade com foco na proteção do patrimônio e na justa divisão de bens. Atuamos na blindagem de ativos e na negociação de partilhas que envolvem empresas, imóveis e investimentos.'
        },
        'Guarda e Pensão': {
            title: 'Proteção Financeira de Herdeiros',
            description: 'Gestão jurídica de pensões e guarda com foco na garantia do futuro financeiro e educacional dos herdeiros. Estabelecemos bases sólidas para a preservação do padrão de vida e segurança econômica dos filhos.'
        },
        'Regime de Bens': {
            title: 'Pactos & Regime de Bens',
            description: 'Planejamento matrimonial estratégico (Pactos Antenupciais) para definir regras claras de sucessão e incomunicabilidade de bens. Fundamental para quem possui patrimônio prévio ou participação societária.'
        },
        'União Estável': {
            title: 'União Estável',
            description: 'Reconhecimento e formalização de união estável, incluindo elaboração de escritura pública, definição de regime de bens e direitos sucessórios. Garantimos segurança jurídica para o casal e proteção dos direitos de ambos os companheiros.'
        },
        'Proteção Patrimonial': {
            title: 'Proteção Patrimonial',
            description: 'Estruturação jurídica para proteção de bens contra riscos empresariais, tributários e familiares. Desenvolvemos estratégias personalizadas utilizando instrumentos como holdings, trusts e outras ferramentas jurídicas para blindar o patrimônio.'
        },
        'Contratos Civis': {
            title: 'Contratos Civis',
            description: 'Elaboração, análise e revisão de contratos civis personalizados, garantindo segurança jurídica e proteção dos interesses das partes. Atuamos em diversos tipos de contratos, desde acordos simples até contratos complexos de prestação de serviços e negócios imobiliários.'
        },
        'Direito Imobiliário': {
            title: 'Direito Imobiliário',
            description: 'Assessoria completa em questões imobiliárias, incluindo compra e venda, locação, regularização de imóveis, incorporação imobiliária e questões condominiais. Garantimos segurança jurídica em todas as etapas das transações imobiliárias.'
        },
        'Planejamento Tributário': {
            title: 'Planejamento Tributário',
            description: 'Desenvolvimento de estratégias legais para otimização da carga tributária, minimizando impostos dentro da legalidade. Inclui análise da estrutura patrimonial, identificação de oportunidades de economia fiscal e implementação de medidas adequadas à realidade do cliente.'
        },
        'Recuperação de Créditos': {
            title: 'Recuperação de Créditos',
            description: 'Atuação na recuperação de créditos tributários junto aos órgãos fazendários, incluindo pedidos de restituição, compensação e anulação de débitos indevidos. Trabalhamos para garantir o direito do contribuinte à restituição de valores pagos indevidamente.'
        },
        'Consultoria Fiscal': {
            title: 'Consultoria Fiscal',
            description: 'Orientação especializada em questões tributárias para pessoas físicas e jurídicas, incluindo análise de obrigações fiscais, planejamento de pagamentos e defesa em processos administrativos. Mantemos o cliente sempre em conformidade com a legislação tributária.'
        },
        'Defesa em Execuções Fiscais': {
            title: 'Defesa em Execuções Fiscais',
            description: 'Defesa técnica em processos de execução fiscal movidos pela Fazenda Pública, buscando a anulação ou redução de débitos tributários. Atuamos com estratégias defensivas eficazes para proteger os interesses do contribuinte em todas as instâncias.'
        },
        'Constituição de Empresas': {
            title: 'Arquitetura Societária',
            description: 'Constituição de veículos jurídicos (SPEs, Offshores, Holdings) desenhados sob medida para a estratégia de negócio e proteção dos sócios. Foco em eficiência tributária e governança desde a fundação.'
        },
        'Holding Patrimonial': {
            title: 'Holding Patrimonial',
            description: 'Constituição e estruturação de holding patrimonial para centralização da gestão de bens, otimização tributária e facilitação da sucessão. Solução estratégica para famílias que buscam proteger e organizar seu patrimônio de forma eficiente.'
        },
        'Reestruturação Societária': {
            title: 'Reestruturação Societária',
            description: 'Planejamento e execução de reestruturações societárias, incluindo transformações, incorporações, fusões e cisões. Desenvolvemos estratégias personalizadas para adequar a estrutura societária às necessidades do negócio e objetivos dos sócios.'
        },
        'Acordos de Acionistas': {
            title: 'Acordos de Acionistas',
            description: 'Elaboração de acordos de acionistas ou quotistas para regulamentar relações entre sócios, incluindo cláusulas de tag along, drag along, direito de preferência e outras disposições importantes para a governança societária e proteção dos interesses dos sócios.'
        },
        'LGPD e Proteção de Dados': {
            title: 'LGPD e Proteção de Dados',
            description: 'Adequação de empresas e organizações à Lei Geral de Proteção de Dados (LGPD), incluindo mapeamento de dados, elaboração de políticas de privacidade, implementação de medidas de segurança e assessoria em casos de vazamento de dados pessoais.'
        },
        'Propriedade Intelectual': {
            title: 'Propriedade Intelectual',
            description: 'Proteção de direitos de propriedade intelectual, incluindo registro de marcas, patentes, direitos autorais e proteção de software. Atuamos na defesa contra violações e na garantia dos direitos exclusivos sobre criações intelectuais.'
        },
        'Contratos Digitais': {
            title: 'Contratos Digitais',
            description: 'Elaboração e análise de contratos específicos para o ambiente digital, incluindo termos de uso, políticas de privacidade, contratos de prestação de serviços digitais e acordos de licenciamento de software. Garantimos segurança jurídica nas relações digitais.'
        },
        'Compliance Digital': {
            title: 'Compliance Digital',
            description: 'Implementação de programas de compliance digital para adequação às normas de proteção de dados, segurança da informação e regulamentações do setor digital. Desenvolvemos políticas e procedimentos para garantir conformidade legal e redução de riscos.'
        }
    };

    // ==========================================================================
    // Header Scroll Effect
    // ==========================================================================
    function handleScroll() {
        const scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (btnTop) {
            if (scrollY > 500) {
                btnTop.classList.add('visible');
            } else {
                btnTop.classList.remove('visible');
            }
        }
    }

    // ==========================================================================
    // Mobile Menu
    // ==========================================================================
    function toggleMobileMenu() {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        if (mobileOverlay) {
            mobileOverlay.classList.toggle('active');
        }
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileMenu() {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        if (mobileOverlay) {
            mobileOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
    }

    // ==========================================================================
    // Smooth Scroll with Custom Easing
    // ==========================================================================

    // Custom easing function for ultra-smooth scrolling
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function smoothScrollTo(targetPosition, duration = 1000) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * easedProgress);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    function smoothScroll(e) {
        const href = this.getAttribute('href');

        // Only handle anchor links
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = target.offsetTop - headerHeight - 20;

                // Use custom smooth scroll for more fluid animation
                smoothScrollTo(targetPosition, 800);

                // Close mobile menu if open
                closeMobileMenu();

                // Update URL without jumping
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
            }
        }
    }

    // ==========================================================================
    // Active Navigation Link
    // ==========================================================================
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a, .mobile-nav a');

        let current = '';
        const scrollY = window.scrollY || window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // ==========================================================================
    // Unified Scroll Handler (performance)
    // ==========================================================================
    let scrollTicking = false;

    function handleScrollAll() {
        if (scrollTicking) return;

        scrollTicking = true;
        window.requestAnimationFrame(() => {
            handleScroll();
            updateActiveNav();
            scrollTicking = false;
        });
    }

    // ==========================================================================
    // Team Card Flip
    // ==========================================================================
    function flipCard(cardId) {
        const card = document.getElementById(cardId);
        if (card) {
            card.classList.toggle('flipped');
        }
    }

    function initTeamCards() {
        document.querySelectorAll('.team-card').forEach(card => {
            const cardInner = card.querySelector('.team-card-inner');

            if (cardInner) {
                cardInner.addEventListener('click', function (e) {
                    // Toggle flip state - click anywhere to flip/unflip
                    card.classList.toggle('flipped');
                });
            }
        });
    }

    // ==========================================================================
    // Contact Modal
    // ==========================================================================
    function openModal(type) {
        const contactModal = document.getElementById('contactModal');
        const modalTitle = document.getElementById('modalTitle');

        if (modalTitle) {
            modalTitle.textContent = 'Fale com um Especialista';
        }

        if (contactModal) {
            contactModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // ==========================================================================
    // Service Modal
    // ==========================================================================
    function openServiceModal(title) {
        const data = serviceDetails[title];

        if (data && serviceModal) {
            document.getElementById('serviceModalTitle').textContent = title;
            document.getElementById('serviceModalDescription').textContent = data.description;

            const listContainer = document.getElementById('serviceModalList');
            listContainer.innerHTML = '';

            data.items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                listContainer.appendChild(li);
            });

            serviceModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }


    // ==========================================================================
    // Individual Service Detail Modal
    // ==========================================================================
    function openServiceDetailModal(serviceName) {
        const serviceData = individualServiceDescriptions[serviceName];

        if (!serviceData) {
            // Se não encontrar descrição específica, abre modal de contato
            openModal('contato');
            return;
        }

        const detailModal = document.getElementById('serviceDetailModal');
        if (detailModal) {
            document.getElementById('serviceDetailTitle').textContent = serviceData.title;
            document.getElementById('serviceDetailDescription').textContent = serviceData.description;

            detailModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeServiceDetailModal() {
        const detailModal = document.getElementById('serviceDetailModal');
        if (detailModal) {
            // Adiciona animação de saída
            const content = detailModal.querySelector('.service-detail-modal-content');
            if (content) {
                content.style.animation = 'modalSlideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            }

            setTimeout(() => {
                detailModal.classList.remove('active');
                document.body.style.overflow = '';
                if (content) {
                    content.style.animation = '';
                }
            }, 300);
        }
    }

    function closeServiceModal() {
        if (serviceModal) {
            // Adiciona animação de saída
            const content = serviceModal.querySelector('.service-modal-content');
            if (content) {
                content.style.animation = 'modalSlideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            }

            setTimeout(() => {
                serviceModal.classList.remove('active');
                document.body.style.overflow = '';
                if (content) {
                    content.style.animation = '';
                }
            }, 300);
        }
    }

    function closeModal() {
        if (contactModal) {
            // Adiciona animação de saída
            const content = contactModal.querySelector('.modal-content');
            if (content) {
                content.style.animation = 'modalSlideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            }

            setTimeout(() => {
                contactModal.classList.remove('active');
                document.body.style.overflow = '';
                document.getElementById('contactForm').reset();
                if (content) {
                    content.style.animation = '';
                }
            }, 300);
        }
    }

    function initServiceCards() {
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', function () {
                const title = this.querySelector('h4').textContent;
                openServiceModal(title);
            });
        });
    }

    // ==========================================================================
    // Inline Form Submit Handler
    // ==========================================================================
    function handleInlineFormSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Format area of interest
        let assuntoFormatted = '';
        if (data.assunto) {
            assuntoFormatted = data.assunto
                .replace(/-/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase());
        }

        // Prepare webhook payload with all form fields
        const webhookPayload = {
            nome: data.nome || '',
            empresa: data.empresa || '',
            email: data.email || '',
            telefone: (data.telefone || '').replace(/\\D/g, ''),
            assunto: assuntoFormatted || data.assunto || '',
            mensagem: data.mensagem || '',
            origem: 'Formulário Contato - Site R&CB Advogados',
            data_envio: new Date().toISOString(),
            pagina: window.location.href
        };

        // Send webhook to n8n
        console.log('Enviando webhook (formulário inline):', webhookPayload);

        fetch('https://n8n.raiarruda.com.br/webhook/RCB', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookPayload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro HTTP ao enviar webhook: ' + response.status);
                }

                // Reset form
                form.reset();
                // Show success message
                alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
            })
            .catch(err => {
                console.error('Erro ao enviar webhook (formulário inline):', err);
                alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente em alguns instantes.');
            });
    }

    // ==========================================================================
    // Form Submit Handler
    // ==========================================================================
    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Determine origin based on form ID
        let origin = 'Modal Contato - Site R&CB Advogados';
        if (form.id === 'footerContactForm') {
            origin = 'Rodapé - Site R&CB Advogados';
        }

        // Prepare webhook payload
        const webhookPayload = {
            nome: data.nome || '',
            email: data.email || '',
            telefone: (data.telefone || '').replace(/\D/g, ''),
            mensagem: data.mensagem || '',
            origem: origin,
            data_envio: new Date().toISOString(),
            pagina: window.location.href
        };

        // Send webhook to n8n
        console.log('Enviando webhook (modal contato):', webhookPayload);

        fetch('https://n8n.raiarruda.com.br/webhook/RCB', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(webhookPayload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro HTTP ao enviar webhook: ' + response.status);
                }

                closeModal();
                // Show custom success modal
                if (typeof openSuccessModal === 'function') {
                    openSuccessModal();
                } else {
                    alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve via WhatsApp.');
                }

                // Clear form
                form.reset();
            })
            .catch(err => {
                console.error('Erro ao enviar webhook (modal contato):', err);
                alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente em alguns instantes.');
            });
    }

    // ==========================================================================
    // Phone Mask
    // ==========================================================================
    function phoneMask(input) {
        let value = input.value.replace(/\D/g, '');

        if (value.length > 11) {
            value = value.substring(0, 11);
        }

        if (value.length > 6) {
            value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
        } else if (value.length > 2) {
            value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
        } else if (value.length > 0) {
            value = `(${value}`;
        }

        input.value = value;
    }

    // ==========================================================================
    // Back to Top with smooth animation
    // ==========================================================================
    function scrollToTop() {
        smoothScrollTo(0, 1000);
    }

    // ==========================================================================
    // Initialize AOS (desktop only) and Custom Scroll Animations
    // ==========================================================================
    function initAOS() {
        const isMobile = window.innerWidth <= 768;

        // Initialize custom scroll animations for ALL devices
        initScrollAnimations();

        // Initialize Swiper for Services Carousel
        initServicesSwiper();

        // AOS only on desktop
        if (typeof AOS !== 'undefined' && !isMobile) {
            AOS.init({
                duration: 800,
                easing: 'ease-out',
                once: true,
                mirror: false,
                offset: 120,
                delay: 0,
                anchorPlacement: 'top-bottom',
                disable: false
            });
        } else if (typeof AOS !== 'undefined') {
            AOS.init({ disable: true });
        }
    }

    // ==========================================================================
    // Custom Scroll Animations (Like TGT Example Site - works on mobile!)
    // ==========================================================================
    function initScrollAnimations() {
        const isMobile = window.innerWidth <= 768;

        // No desktop, excluir elementos com data-aos (AOS cuida deles)
        // No mobile, incluir todos pois AOS está desabilitado
        const aosExclusion = isMobile ? '' : ':not([data-aos])';

        // Get all elements that should animate
        const animatedElements = document.querySelectorAll(
            `.section-header${aosExclusion}, .service-luxury-card${aosExclusion}, .team-card${aosExclusion}, ` +
            `.contact-location${aosExclusion}, .contact-form-section${aosExclusion}, .about-content${aosExclusion}`
        );

        // Add scroll-animate class to all elements
        // (já filtrados pelo seletor, mas adicionando verificação extra por segurança)
        animatedElements.forEach((el, index) => {
            // Verificação extra: no desktop, não processar elementos com data-aos
            if (!isMobile && el.hasAttribute('data-aos')) {
                return; // Skip elements with data-aos on desktop (AOS handles them)
            }

            el.classList.add('scroll-animate');

            // Add staggered delays for cards
            if (el.classList.contains('service-luxury-card') || el.classList.contains('team-card')) {
                const delayClass = `delay-${(index % 3) + 1}`;
                el.classList.add(delayClass);
            }
        });

        // Function to check and animate elements
        function animateOnScroll() {
            const viewportHeight = window.innerHeight;
            const scrollTop = window.scrollY;

            document.querySelectorAll('.scroll-animate:not(.animate)').forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                // rect.top já é relativo ao viewport, não precisa somar scrollTop
                const elementTop = rect.top;
                const elementBottom = rect.bottom;

                // Trigger quando elemento está 100px antes de sair do viewport
                if (elementTop < (viewportHeight - 100) && elementBottom > 0) {
                    // Small delay for staggered effect
                    const isCard = el.classList.contains('service-luxury-card') ||
                        el.classList.contains('team-card');
                    const delay = isCard ? (index % 6) * 80 : 0;

                    setTimeout(() => {
                        el.classList.add('animate');
                    }, delay);
                }
            });
        }

        // Throttle function for better performance
        let ticking = false;
        function throttledAnimateOnScroll() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    animateOnScroll();
                    ticking = false;
                });
                ticking = true;
            }
        }

        // Listen for scroll events (throttled)
        window.addEventListener('scroll', throttledAnimateOnScroll, { passive: true });

        // Run on page load
        animateOnScroll();

        // Run again after a short delay (for elements already in view)
        setTimeout(animateOnScroll, 100);
    }

    // ==========================================================================
    // 3D Parallax effect on cards following mouse movement
    // ==========================================================================
    function init3DParallax() {
        const cards = document.querySelectorAll('.team-card');

        // Disable on mobile/touch devices
        if (window.innerWidth <= 768 || 'ontouchstart' in window) {
            return;
        }

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                card.style.transition = 'transform 0.1s ease-out';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                card.style.transition = 'transform 0.5s ease-out';
            });
        });
    }

    // ==========================================================================
    // 3D Card Hover Effect - Additional cards and modals
    // ==========================================================================
    function init3DCardHover() {
        // Disable on mobile/touch devices
        if (window.innerWidth <= 768 || 'ontouchstart' in window) {
            return;
        }

        // Apply to additional card types if they exist
        const additionalCards = document.querySelectorAll('.preco-card-modern, .depoimento-card, .conteudo-item, .bonus-item-modern, .preco-card');

        additionalCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                card.style.transition = 'transform 0.1s ease-out';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                card.style.transition = 'transform 0.5s ease-out';
            });
        });

        // Efeito 3D no formulário também
        const modalContent = document.querySelector('.modal-content');
        const modalWrapper = document.querySelector('.modal-wrapper');

        if (modalContent && modalWrapper) {
            modalWrapper.addEventListener('mousemove', (e) => {
                const rect = modalWrapper.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 30; // Mais sutil que os cards
                const rotateY = (centerX - x) / 30;

                modalContent.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                modalContent.style.transition = 'transform 0.1s ease-out';
            });

            modalWrapper.addEventListener('mouseleave', () => {
                modalContent.style.transform = 'translateY(-8px) perspective(1000px) rotateX(0) rotateY(0)';
                modalContent.style.transition = 'transform 0.5s ease-out';
            });
        }
    }

    // ==========================================================================
    // Add smooth hover effects to interactive elements
    // ==========================================================================
    function initHoverEffects() {
        // Add ripple effect on buttons
        document.querySelectorAll('.btn-primary, .btn-submit').forEach(button => {
            button.addEventListener('click', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    background: rgba(255,255,255,0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    left: ${x}px;
                    top: ${y}px;
                    width: 100px;
                    height: 100px;
                    margin-left: -50px;
                    margin-top: -50px;
                    pointer-events: none;
                `;

                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // ==========================================================================
    // Event Listeners
    // ==========================================================================
    function initEventListeners() {
        // Scroll events (consolidated for performance)
        window.addEventListener('scroll', handleScrollAll, { passive: true });

        // Mobile menu - Re-query elements to ensure they exist
        const safeMenuToggle = document.getElementById('menuToggle');
        const safeMobileOverlay = document.getElementById('mobileOverlay');

        if (safeMenuToggle) {
            safeMenuToggle.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent any default behavior
                toggleMobileMenu();
            });
        }

        if (safeMobileOverlay) {
            safeMobileOverlay.addEventListener('click', closeMobileMenu);
        }

        // Close mobile menu when clicking links
        if (mobileNav) {
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        }

        // Smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', smoothScroll);
        });

        // Close contact modal when clicking outside
        if (contactModal) {
            contactModal.addEventListener('click', function (e) {
                if (e.target === this) {
                    closeModal();
                }
            });
        }

        // Close service modal when clicking outside
        if (serviceModal) {
            serviceModal.addEventListener('click', function (e) {
                if (e.target === this) {
                    closeServiceModal();
                }
            });
        }

        // Close service detail modal when clicking outside
        const serviceDetailModal = document.getElementById('serviceDetailModal');
        if (serviceDetailModal) {
            serviceDetailModal.addEventListener('click', function (e) {
                if (e.target === this) {
                    closeServiceDetailModal();
                }
            });
        }

        // Close modals with Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeModal();
                closeServiceModal();
                closeServiceDetailModal();
                closeMobileMenu();
            }
        });

        // Back to top button
        if (btnTop) {
            btnTop.addEventListener('click', scrollToTop);
        }

        // Phone mask
        const phoneInput = document.getElementById('telefone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function () {
                phoneMask(this);
            });
        }

        // Phone mask for inline form
        const phoneInputInline = document.getElementById('telefoneInline');
        if (phoneInputInline) {
            phoneInputInline.addEventListener('input', function () {
                phoneMask(this);
            });
        }

        // Form submit - Header Modal
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', handleSubmit);
        }

        // Form submit - Footer
        const footerContactForm = document.getElementById('footerContactForm');
        if (footerContactForm) {
            footerContactForm.addEventListener('submit', handleSubmit);
        }
    }

    // ==========================================================================
    // Service Cards Animation on Scroll
    // ==========================================================================
    function initServiceCardsAnimation() {
        const serviceCards = document.querySelectorAll('.service-luxury-card');

        if (serviceCards.length === 0) return;

        const isMobile = window.innerWidth <= 768;

        const observerOptions = {
            threshold: isMobile ? 0.05 : 0.15,
            rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const delay = isMobile ? 0 : index * 100;
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        serviceCards.forEach(card => {
            observer.observe(card);
        });
    }

    // ==========================================================================
    // Parallax Effect
    // ==========================================================================
    function initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        if (parallaxElements.length === 0) return;

        // Check if device prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Disable parallax on mobile for performance
        const isMobile = window.innerWidth <= 768;

        if (prefersReducedMotion || isMobile) {
            return;
        }

        let ticking = false;

        function updateParallax() {
            const scrollY = window.scrollY;

            parallaxElements.forEach(el => {
                const speed = parseFloat(el.dataset.parallax) || 0.5;
                const rect = el.parentElement.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Only apply parallax when element is in viewport
                if (rect.bottom > 0 && rect.top < windowHeight) {
                    const yPos = -(scrollY * speed);
                    el.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            });

            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });

        // Initial update
        updateParallax();

        // Re-check on resize
        window.addEventListener('resize', () => {
            const newIsMobile = window.innerWidth <= 768;
            if (newIsMobile) {
                // Reset transforms on mobile
                parallaxElements.forEach(el => {
                    el.style.transform = 'none';
                });
            }
        });
    }


    // ==========================================================================
    // Team Card Flip (Click to Flip)
    // ==========================================================================
    function initTeamCards() {
        // Desktop & Mobile Flip Logic
        document.querySelectorAll('.team-card').forEach(card => {
            const cardInner = card.querySelector('.team-card-inner');

            if (cardInner) {
                // Remove existing listeners to prevent duplicates (if any)
                const newInner = cardInner.cloneNode(true);
                cardInner.parentNode.replaceChild(newInner, cardInner);

                newInner.addEventListener('click', function (e) {
                    e.stopPropagation(); // Prevent bubbling issues
                    // Toggle flip state - click anywhere to flip/unflip
                    card.classList.toggle('flipped');
                    console.log('Card flipped:', card.id);
                });
            }
        });
    }



    // ==========================================================================
    // Initialize
    // ==========================================================================
    function init() {
        initEventListeners();
        // initTeamCards(); // Deprecated
        initTeamCards(); // Flip Cards Restored
        initServiceCards();
        initServiceCardsAnimation();
        initAOS();
        initHoverEffects();
        initParallax();
        init3DParallax();
        init3DCardHover();

        // Initial scroll check
        handleScroll();
        updateActiveNav();

        // Add loaded class for entrance animations
        document.body.classList.add('loaded');

        // Initialize number counter animation
        initNumberCounter();

        // Initialize exit intent popup
        initExitIntent();

        // Initialize phone mask for exit popup
        initExitPhoneMask();
    }

    // ==========================================================================
    // Exit Popup Phone Mask
    // ==========================================================================
    function initExitPhoneMask() {
        const phoneInput = document.getElementById('exitTelefone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function (e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 11) value = value.slice(0, 11);

                if (value.length > 0) {
                    if (value.length <= 2) {
                        value = '(' + value;
                    } else if (value.length <= 7) {
                        value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
                    } else {
                        value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7);
                    }
                }
                e.target.value = value;
            });
        }
    }

    // ==========================================================================
    // FAQ Toggle Function
    // ==========================================================================
    function toggleFaq(button) {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    }

    // ==========================================================================
    // Number Counter Animation
    // ==========================================================================
    function initNumberCounter() {
        const counters = document.querySelectorAll('[data-count]');

        if (counters.length === 0) return;

        const animateCounter = (element) => {
            const target = parseInt(element.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    element.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target;
                }
            };

            updateCounter();
        };

        // Use Intersection Observer to trigger animation when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); // Reduced threshold to ensure it triggers easier

        counters.forEach(counter => observer.observe(counter));
    }

    // ==========================================================================
    // Exit Intent Popup
    // ==========================================================================
    let exitPopupShown = false;

    function initExitIntent() {
        // Check if popup was already shown in this session
        if (sessionStorage.getItem('exitPopupShown')) {
            exitPopupShown = true;
            return;
        }

        // Desktop: Mouse leave detection
        document.addEventListener('mouseout', function (e) {
            if (exitPopupShown) return;

            // Check if mouse is leaving through the top of the page
            if (e.clientY <= 0 && !e.relatedTarget) {
                showExitPopup();
            }
        });

        // Mobile: Scroll up quickly detection (alternative trigger)
        let lastScrollY = 0;
        let scrollUpCount = 0;

        window.addEventListener('scroll', function () {
            if (exitPopupShown) return;

            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY && currentScrollY < 100) {
                scrollUpCount++;
                if (scrollUpCount > 3) {
                    showExitPopup();
                }
            } else {
                scrollUpCount = 0;
            }

            lastScrollY = currentScrollY;
        });
    }

    function showExitPopup() {
        if (exitPopupShown) return;

        const popup = document.getElementById('exitPopup');
        if (popup) {
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
            exitPopupShown = true;
            sessionStorage.setItem('exitPopupShown', 'true');
        }
    }

    function closeExitPopup() {
        const popup = document.getElementById('exitPopup');
        if (popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function handleExitPopupSubmit(event) {
        event.preventDefault();

        // Captura os dados do formulário
        const nome = document.getElementById('exitNome').value.trim();
        const email = document.getElementById('exitEmail').value.trim();
        const telefone = document.getElementById('exitTelefone').value.trim();

        // Validação básica
        if (!nome || !email || !telefone) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Prepara o payload do webhook
        const webhookPayload = {
            evento: 'download_ebook',
            origem: 'Formulário Ebook - Exit Intent Popup',
            ebook: '5 Erros que Destroem Patrimônios Familiares',
            nome: nome,
            email: email,
            telefone: telefone.replace(/\D/g, ''), // Remove caracteres não numéricos
            data_envio: new Date().toISOString(),
            pagina: window.location.href,
            user_agent: navigator.userAgent
        };

        // Desabilita o botão durante o envio
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'ENVIANDO...';
        submitBtn.disabled = true;

        // Envia webhook para n8n
        console.log('Enviando webhook ebook:', webhookPayload);

        fetch('https://n8n.raiarruda.com.br/webhook/RCB', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookPayload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro HTTP ao enviar webhook: ' + response.status);
                }

                // Mostra mensagem de sucesso
                alert('Obrigado, ' + nome + '! Você receberá o guia em breve no e-mail: ' + email);
                // Fecha o popup
                closeExitPopup();
                // Limpa o formulário
                document.getElementById('ebookForm').reset();
            })
            .catch(err => {
                console.error('Erro ao enviar webhook ebook:', err);
                alert('Ocorreu um erro ao enviar seus dados. Por favor, tente novamente em alguns instantes.');
            })
            .finally(() => {
                // Restaura o botão
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    }

    // Close exit popup on click outside
    document.addEventListener('click', function (e) {
        const popup = document.getElementById('exitPopup');
        if (popup && popup.classList.contains('active')) {
            if (e.target === popup) {
                closeExitPopup();
            }
        }
    });

    // Close exit popup on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeExitPopup();
        }
    });

    // Expose functions to global scope (for onclick handlers in HTML)
    // ==========================================================================
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.flipCard = flipCard;
    window.closeServiceModal = closeServiceModal;
    window.openServiceDetailModal = openServiceDetailModal;
    window.closeServiceDetailModal = closeServiceDetailModal;
    window.handleInlineFormSubmit = handleInlineFormSubmit;
    window.toggleFaq = toggleFaq;
    window.closeExitPopup = closeExitPopup;
    window.handleExitPopupSubmit = handleExitPopupSubmit;

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-initialize AOS on resize
    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }, 250);
    });

})();

/* ==========================================================================
   Blog Interactions
   ========================================================================== */

// Make function global for onclick access
window.handleEbookDownload = function () {
    // In a real scenario, this would open a modal or trigger a download/lead capture
    openModal('contactModal'); // Reuse contact modal for now or create a specific one

    // Pre-fill message if possible or just focus
    const msgArea = document.getElementById('mensagem');
    if (msgArea) {
        msgArea.value = "Olá, gostaria de baixar o Guia Completo de Proteção Patrimonial.";
    }
};


// ==========================================================================
// Swiper Carousel Initialization
// ==========================================================================
function initServicesSwiper() {
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.services-slider', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 40,
            loop: true,
            speed: 5000,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
            },
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    effect: 'slide',
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    effect: 'coverflow',
                    centeredSlides: true,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    effect: 'coverflow',
                    centeredSlides: true,
                },
            }
        });
    }
}

// Initialize Blog Interactions
document.addEventListener('DOMContentLoaded', function () {
    // Newsletter Form Handling
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            const btn = this.querySelector('button');

            if (input && input.value) {
                // Simulate success
                const originalText = btn.innerText;
                btn.innerText = 'Enviado!';
                btn.style.backgroundColor = '#2ecc71';
                btn.style.borderColor = '#2ecc71';
                input.value = '';

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                    alert("Obrigado por se inscrever! Em breve você receberá nossos conteúdos exclusivos.");
                }, 2000);
            }
        });
    });

    // About Section Carousel
    if (typeof Swiper !== 'undefined' && document.querySelector('.about-swiper')) {
        new Swiper('.about-swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.about-pagination',
                clickable: true,
            },
        });
    }
});
