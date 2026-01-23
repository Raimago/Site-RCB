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
        'Direito Sucessório': {
            description: 'Organização e transferência do patrimônio com segurança jurídica e redução de burocracias.',
            items: [
                'Planejamento sucessório estratégico',
                'Inventários judiciais e extrajudiciais',
                'Testamentos e doações',
                'Holdings familiares'
            ]
        },
        'Direito de Família': {
            description: 'Resolução de questões familiares com sensibilidade, ética e foco na proteção dos envolvidos.',
            items: [
                'Divórcio e partilha de bens',
                'Pensão alimentícia',
                'Guarda e regime de convivência',
                'Pactos antenupciais'
            ]
        },
        'Planejamento Civil': {
            description: 'Estruturação técnica para segurança de bens e conformidade em todas as esferas civis.',
            items: [
                'Contratos personalizados',
                'Responsabilidade civil',
                'Gestão de riscos contratuais',
                'Assessoria em negócios imobiliários'
            ]
        },
        'Direito Tributário': {
            description: 'Minimização legal de encargos e otimização fiscal para preservação de capital familiar.',
            items: [
                'Planejamento tributário nacional e internacional',
                'Consultoria em impostos sobre sucessão (ITCMD)',
                'Defesa em processos administrativos fiscais',
                'Recuperação de créditos tributários'
            ]
        },
        'Direito Societário': {
            description: 'Governança corporativa e estruturação de holdings para proteção e continuidade dos negócios.',
            items: [
                'Constituição de empresas e holdings',
                'Acordos de acionistas/quotistas',
                'Fusões e aquisições (M&A)',
                'Dissolução de sociedades e exclusão de sócios'
            ]
        },
        'Direito Digital': {
            description: 'Assessoria especializada na proteção de dados e ativos intelectuais no ambiente digital.',
            items: [
                'Adequação à LGPD',
                'Termos de uso e políticas de privacidade',
                'Proteção de propriedade intelectual online',
                'Combate a crimes digitais e vazamento de dados'
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
            title: 'Divórcio e Separação',
            description: 'Assessoria completa em processos de divórcio consensual ou litigioso, incluindo partilha de bens, definição de guarda de filhos e pensão alimentícia. Atuamos com sensibilidade e profissionalismo para resolver questões familiares de forma eficiente e respeitosa.'
        },
        'Guarda e Pensão': {
            title: 'Guarda e Pensão',
            description: 'Assessoria jurídica especializada em questões relacionadas à guarda de menores, regime de convivência e fixação de pensão alimentícia. Buscamos sempre o melhor interesse da criança, garantindo seus direitos e bem-estar através de acordos ou processos judiciais quando necessário.'
        },
        'Regime de Bens': {
            title: 'Regime de Bens',
            description: 'Consultoria e elaboração de pactos antenupciais para definição do regime de bens no casamento ou união estável. Orientamos sobre as diferentes modalidades (comunhão universal, parcial, separação total) e suas implicações patrimoniais e sucessórias.'
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
            title: 'Constituição de Empresas',
            description: 'Assessoria completa na constituição de empresas, incluindo escolha do tipo societário adequado, elaboração de contratos sociais, registro e obtenção de licenças. Garantimos que a empresa seja constituída de forma adequada às necessidades do negócio.'
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
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (btnTop) {
            if (window.scrollY > 500) {
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

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
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

            cardInner.addEventListener('click', function (e) {
                // Toggle flip state - click anywhere to flip/unflip
                card.classList.toggle('flipped');
            });
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
        console.log('Enviando webhook:', webhookPayload);
        fetch('https://n8n.raiarruda.com.br/webhook/RCB', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookPayload)
        }).then(response => {
            console.log('Webhook enviado com sucesso');
            // Reset form
            form.reset();
            // Show success message
            alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
        }).catch(err => {
            console.error('Erro ao enviar webhook:', err);
            form.reset();
            alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
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

        // Prepare webhook payload
        const webhookPayload = {
            nome: data.nome || '',
            email: data.email || '',
            telefone: (data.telefone || '').replace(/\D/g, ''),
            mensagem: data.mensagem || '',
            origem: 'Modal Contato - Site R&CB Advogados',
            data_envio: new Date().toISOString(),
            pagina: window.location.href
        };

        // Send webhook to n8n
        console.log('Enviando webhook modal contato:', webhookPayload);
        fetch('https://n8n.raiarruda.com.br/webhook/RCB', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(webhookPayload)
        }).then(() => {
            console.log('Webhook modal contato enviado');
            closeModal();
            alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
        }).catch(err => {
            console.error('Erro ao enviar webhook:', err);
            closeModal();
            alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
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
        const cards = document.querySelectorAll('.service-luxury-card, .team-card');

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
        // Scroll events
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', updateActiveNav);

        // Mobile menu
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
        }

        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', closeMobileMenu);
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

        // Phone mask for WhatsApp modal
        const phoneInputWA = document.getElementById('wPhone');
        if (phoneInputWA) {
            phoneInputWA.addEventListener('input', function () {
                phoneMask(this);
            });
        }

        // Form submit
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', handleSubmit);
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
    // Initialize
    // ==========================================================================
    function init() {
        initEventListeners();
        initTeamCards();
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
    }

    // ==========================================================================
    // Expose functions to global scope (for onclick handlers in HTML)
    // ==========================================================================
    // ==========================================================================
    // WhatsApp Form Modal
    // ==========================================================================
    function openWhatsAppForm() {
        const modal = document.getElementById('whatsappModal');
        if (modal) {
            // Close other modals
            closeModal();
            closeServiceModal();

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeWhatsAppForm() {
        const modal = document.getElementById('whatsappModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            const form = document.getElementById('whatsappForm');
            if (form) form.reset();
        }
    }

    // WhatsApp Form Submit
    const waForm = document.getElementById('whatsappForm');
    if (waForm) {
        waForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('wName').value;
            const email = document.getElementById('wEmail').value;
            const phone = document.getElementById('wPhone').value;
            const phoneClean = phone.replace(/\D/g, '');

            // Send webhook to n8n
            const webhookPayload = {
                nome: name,
                email: email,
                telefone: phone.replace(/\D/g, ''),
                origem: 'Modal WhatsApp - Site R&CB Advogados',
                data_envio: new Date().toISOString(),
                pagina: window.location.href
            };
            console.log('Enviando webhook modal:', webhookPayload);
            fetch('https://n8n.raiarruda.com.br/webhook/RCB', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(webhookPayload)
            }).then(() => {
                console.log('Webhook modal enviado com sucesso');
                closeWhatsAppForm();
                alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
            }).catch(err => {
                console.error('Erro ao enviar webhook:', err);
                closeWhatsAppForm();
                alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.');
            });
        });
    }

    window.openModal = openModal;
    window.openWhatsAppForm = openWhatsAppForm;
    window.closeWhatsAppForm = closeWhatsAppForm;
    window.closeModal = closeModal;
    window.flipCard = flipCard;
    window.closeServiceModal = closeServiceModal;
    window.openServiceDetailModal = openServiceDetailModal;
    window.closeServiceDetailModal = closeServiceDetailModal;
    window.handleInlineFormSubmit = handleInlineFormSubmit;

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
