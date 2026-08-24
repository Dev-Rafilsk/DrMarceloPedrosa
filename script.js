document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const proceduresData = [
        {
            id: 'coluna',
            icon: '🦴',
            title: 'Coluna e Medicina Intervencionista da Dor',
            shortDesc: 'Bloqueios, rizotomia e discectomia percutânea para dores na coluna.',
            category: 'Coluna e Intervenção',
            description: 'Tratamento especializado para dores na coluna cervical, torácica e lombar, com técnicas minimamente invasivas guiadas por radioscopia e ultrassonografia para diagnóstico e alívio preciso da dor.',
            diseases: [
                'Dor na coluna cervical', 'Dor na coluna torácica', 'Dor na coluna lombar',
                'Hérnia de disco', 'Dor ciática', 'Artrose', 'Dor neuropática',
                'Síndrome dolorosa complexa regional', 'Dor crônica em geral'
            ],
            procedures: [
                'Bloqueios da coluna (cervical, torácica, lombar, foraminais, facetários, epidurais)',
                'Rizotomia por radiofrequência',
                'Epiduroplastia',
                'Discectomia percutânea',
                'Bloqueios diagnósticos e terapêuticos'
            ]
        },
        {
            id: 'nervos',
            icon: '🔗',
            title: 'Bloqueios de Nervos Periféricos',
            shortDesc: 'Tratamento guiado por ultrassom para neuralgias e dores neuropáticas.',
            category: 'Intervenção em Nervos',
            description: 'Bloqueios anestésicos e terapêuticos de nervos periféricos com precisão milimétrica guiada por ultrassonografia, proporcionando alívio imediato e duradouro para dores neuropáticas.',
            diseases: [
                'Neuralgias', 'Dor neuropática', 'Neuralgia pós-herpética',
                'Enxaqueca', 'Dor miofascial', 'Dor crônica em geral',
                'Dor no membro superior', 'Dor no membro inferior'
            ],
            procedures: [
                'Bloqueios anestésicos guiados por ultrassom',
                'Bloqueio do nervo occipital para enxaqueca',
                'Bloqueios de nervos de membros superiores',
                'Bloqueios de nervos de membros inferiores',
                'Bloqueios simpáticos',
                'Bloqueio venoso regional (Bier)'
            ]
        },
        {
            id: 'infiltracoes',
            icon: '💉',
            title: 'Infiltrações Guiadas',
            shortDesc: 'Infiltrações articulares e periarticulares com precisão ecoguiada.',
            category: 'Procedimentos Articulares',
            description: 'Infiltrações precisas em articulações, tendões e bursas, sempre guiadas por ultrassonografia para máxima segurança e eficácia no tratamento de dores musculoesqueléticas.',
            diseases: [
                'Artrose', 'Tendinites', 'Bursites', 'Dor no ombro', 'Dor no joelho',
                'Dor no quadril', 'Dor no cotovelo', 'Dor no punho', 'Dor no tornozelo',
                'Lesões musculares'
            ],
            procedures: [
                'Infiltrações articulares',
                'Infiltrações periarticulares',
                'Infiltrações em tendões',
                'Infiltrações em bursas',
                'Procedimentos ecoguiados',
                'Viscossuplementação com ácido hialurônico'
            ]
        },
        {
            id: 'regenerativa',
            icon: '🧬',
            title: 'Medicina Regenerativa',
            shortDesc: 'PRP, BMAC e terapias com células para regeneração tecidual.',
            category: 'Regeneração Tecidual',
            description: 'Tratamentos inovadores com ortobiológicos que estimulam a regeneração natural do corpo para tratar artrose, tendinopatias e lesões crônicas sem necessidade de cirurgia.',
            diseases: [
                'Artrose', 'Tendinopatias', 'Lesões musculares crônicas',
                'Lesões de cartilagem', 'Dor crônica em geral'
            ],
            procedures: [
                'Tratamentos com ortobiológicos',
                'PRP (Plasma Rico em Plaquetas)',
                'BMAC (Aspirado de medula óssea)',
                'Concentrado de tecido adiposo',
                'Terapias regenerativas para artrose',
                'Terapias regenerativas para tendinopatias'
            ]
        },
        {
            id: 'outros',
            icon: '🌟',
            title: 'Outros Tratamentos',
            shortDesc: 'Acupuntura médica, toxina botulínica e terapias complementares.',
            category: 'Terapias Complementares',
            description: 'Abordagens terapêuticas complementares que combinam medicina tradicional e técnicas modernas para tratamento integral da dor crônica e condições específicas.',
            diseases: [
                'Enxaqueca', 'Fibromialgia', 'Dor miofascial',
                'Dor crônica em geral', 'Tensão muscular'
            ],
            procedures: [
                'Acupuntura médica',
                'Tratamentos guiados por ultrassonografia e radioscopia',
                'Toxina botulínica para enxaqueca',
                'Tratamento individualizado'
            ]
        }
    ];
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const carousel = document.getElementById('carousel');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselDots = document.getElementById('carouselDots');
    const modal = document.getElementById('modal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    function handleHeaderScroll() {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        const isOpen = nav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
        menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    document.querySelectorAll('.nav-link, .btn-header').forEach(function (link) {
        link.addEventListener('click', function () {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    function renderCarousel() {
        carousel.innerHTML = '';
        carouselDots.innerHTML = '';

        proceduresData.forEach(function (proc, index) {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.setAttribute('role', 'listitem');
            item.setAttribute('tabindex', '0');
            item.setAttribute('aria-label', proc.title);
            item.dataset.procId = proc.id;

            item.innerHTML = `
                <span class="carousel-item-icon">${proc.icon}</span>
                <h3 class="carousel-item-title">${proc.title}</h3>
                <p class="carousel-item-desc">${proc.shortDesc}</p>
                <span class="carousel-item-more">Ver detalhes →</span>
            `;

            item.addEventListener('click', function () {
                openModal(proc);
            });
            item.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(proc);
                }
            });

            carousel.appendChild(item);

            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Ir para ' + proc.title);
            dot.addEventListener('click', function () {
                scrollToCarouselItem(index);
            });
            carouselDots.appendChild(dot);
        });
    }

    function getCarouselItemWidth() {
        if (carousel.children.length > 0) {
            return carousel.children[0].offsetWidth + 16; 
        }
        return 300;
    }

    function getVisibleIndex() {
        const scrollLeft = carousel.scrollLeft;
        const itemWidth = getCarouselItemWidth();
        return Math.round(scrollLeft / itemWidth);
    }

    function updateCarouselDots() {
        const dots = carouselDots.querySelectorAll('.carousel-dot');
        const currentIndex = getVisibleIndex();
        dots.forEach(function (dot, index) {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function scrollToCarouselItem(index) {
        const itemWidth = getCarouselItemWidth();
        carousel.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    }

    carouselPrev.addEventListener('click', function () {
        const currentIndex = getVisibleIndex();
        const newIndex = Math.max(0, currentIndex - 1);
        scrollToCarouselItem(newIndex);
    });

    carouselNext.addEventListener('click', function () {
        const currentIndex = getVisibleIndex();
        const maxIndex = proceduresData.length - 1;
        const newIndex = Math.min(maxIndex, currentIndex + 1);
        scrollToCarouselItem(newIndex);
    });

    carousel.addEventListener('scroll', function () {
        updateCarouselDots();
        updateCarouselButtons();
    }, { passive: true });

    function updateCarouselButtons() {
        const scrollLeft = carousel.scrollLeft;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth - 10;
        carouselPrev.disabled = scrollLeft <= 10;
        carouselNext.disabled = scrollLeft >= maxScroll;
    }

    renderCarousel();
    updateCarouselButtons();

    function openModal(proc) {
        modalBody.innerHTML = `
            <h3 class="modal-title">${proc.title}</h3>
            <span class="modal-category">${proc.category}</span>
            <p class="modal-description">${proc.description}</p>
            <div class="modal-section">
                <h4>Doenças Tratadas</h4>
                <div class="modal-disease-list">
                    ${proc.diseases.map(function (d) { return `<span class="modal-disease-tag">${d}</span>`; }).join('')}
                </div>
            </div>
            <div class="modal-section">
                <h4>Procedimentos e Técnicas</h4>
                <div class="modal-procedure-list">
                    ${proc.procedures.map(function (p) { return `<div class="modal-procedure-item">${p}</div>`; }).join('')}
                </div>
            </div>
            <div class="modal-cta">
                <a href="https://wa.me/557132374001?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20o%20Dr.%20Marcelo%20Pedrosa." target="_blank" rel="noopener" class="btn btn-red btn-sm"> Agendar Avaliação
                </a>
                <a href="#locais" class="btn btn-outline btn-sm modal-close-trigger">Fechar</a>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        modalBody.querySelector('.modal-close-trigger').addEventListener('click', function (e) {
            e.preventDefault();
            closeModal();
        });
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (modal.classList.contains('active')) {
                closeModal();
            }
            if (lightbox.classList.contains('active')) {
                closeLightbox();
            }
        }
    });

    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryImages = [];
    let currentLightboxIndex = 0;

    galleryItems.forEach(function (item) {
        const img = item.querySelector('img');
        const caption = item.dataset.caption || img.alt;
        galleryImages.push({ src: img.src, caption: caption });

        item.addEventListener('click', function () {
            currentLightboxIndex = galleryImages.findIndex(function (g) { return g.src === img.src; });
            if (currentLightboxIndex === -1) currentLightboxIndex = 0;
            updateLightbox();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function updateLightbox() {
        const imageData = galleryImages[currentLightboxIndex];
        lightboxImg.src = imageData.src;
        lightboxImg.alt = imageData.caption;
        lightboxCaption.textContent = imageData.caption;
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function lightboxNavigate(direction) {
        currentLightboxIndex = (currentLightboxIndex + direction + galleryImages.length) % galleryImages.length;
        updateLightbox();
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', function () { lightboxNavigate(-1); });
    lightboxNext.addEventListener('click', function () { lightboxNavigate(1); });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') lightboxNavigate(-1);
            if (e.key === 'ArrowRight') lightboxNavigate(1);
        }
    });

    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(function (el) {
        revealObserver.observe(el);
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;

    carousel.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });

    carousel.addEventListener('touchmove', function (e) {
        if (isDragging) {
            touchEndX = e.touches[0].clientX;
        }
    }, { passive: true });

    carousel.addEventListener('touchend', function () {
        if (!isDragging) return;
        isDragging = false;
        const swipeDistance = touchStartX - touchEndX;
        const swipeThreshold = 60;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            const currentIndex = getVisibleIndex();
            if (swipeDistance > 0 && currentIndex < proceduresData.length - 1) {
                scrollToCarouselItem(currentIndex + 1);
            } else if (swipeDistance < 0 && currentIndex > 0) {
                scrollToCarouselItem(currentIndex - 1);
            }
        }
    });

    window.addEventListener('resize', function () {
        updateCarouselButtons();
        if (carousel.children.length > 0) {
            updateCarouselDots();
        }
    });

    console.log('🚀 Landing Page Dr. Marcelo Pedrosa Marinho carregada com sucesso!');

    const galleryCarousel = document.getElementById('galleryCarousel');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryNext = document.getElementById('galleryNext');

    if (galleryCarousel && galleryPrev && galleryNext) {
        function getGalleryScrollAmount() {
            const item = galleryCarousel.querySelector('.carousel-item-gallery');
            return item ? item.offsetWidth + 16 : 300;
        }

        galleryPrev.addEventListener('click', function () {
            galleryCarousel.scrollBy({ left: -getGalleryScrollAmount(), behavior: 'smooth' });
        });

        galleryNext.addEventListener('click', function () {
            galleryCarousel.scrollBy({ left: getGalleryScrollAmount(), behavior: 'smooth' });
        });

        galleryCarousel.addEventListener('scroll', function () {
            const scrollLeft = galleryCarousel.scrollLeft;
            const maxScroll = galleryCarousel.scrollWidth - galleryCarousel.clientWidth - 5;
            
            galleryPrev.style.opacity = scrollLeft <= 5 ? '0.4' : '1';
            galleryPrev.style.cursor = scrollLeft <= 5 ? 'not-allowed' : 'pointer';
            
            galleryNext.style.opacity = scrollLeft >= maxScroll ? '0.4' : '1';
            galleryNext.style.cursor = scrollLeft >= maxScroll ? 'not-allowed' : 'pointer';
        }, { passive: true });
        galleryCarousel.dispatchEvent(new Event('scroll'));
    }

});