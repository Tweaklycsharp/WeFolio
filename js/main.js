// Fonction pour ouvrir la modal avec l'image en grand format
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
        modalImg.src = imageSrc;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Désactiver le scroll de la page
    }
}

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Éléments du DOM
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const revealElements = document.querySelectorAll('.reveal-text');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');
    const themeToggle = document.querySelector('.theme-toggle');
    const projectsSection = document.getElementById('projects');
    const projectsLink = document.querySelector('a[href="#projects"]');

    // Vérifier si un thème est enregistré dans le localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
    }

    // Fonction pour basculer entre les thèmes clair et sombre
    function toggleTheme() {
        document.documentElement.classList.toggle('dark-theme');
        
        // Enregistrer la préférence de thème dans le localStorage
        if (document.documentElement.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        
        // Mettre à jour immédiatement les couleurs de la navbar
        navbarColorChange();
    }

    // Événement pour le bouton de changement de thème
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Animation de défilement vers la section projets
    if (projectsLink && projectsSection) {
        projectsLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ajouter la classe d'animation
            projectsSection.classList.add('scroll-down-animation');
            
            // Scroll fluide vers la section projets
            window.scrollTo({
                top: projectsSection.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Supprimer la classe d'animation après l'animation
            setTimeout(() => {
                projectsSection.classList.remove('scroll-down-animation');
            }, 1500);
        });
    }

    // Fonction pour le menu hamburger
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Fermer le menu mobile lorsqu'un lien est cliqué
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Fonction pour le défilement fluide (smooth scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Ne pas appliquer ce comportement au lien vers les projets (géré séparément)
        if (anchor.getAttribute('href') !== '#projects') {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

    // Fonction pour changer la classe active dans la navigation
    function setActiveNavLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    }

    // Fonction pour révéler les éléments au scroll
    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    // Effet de parallaxe pour le fond animé
    function parallaxEffect() {
        const animatedBg = document.querySelector('.animated-bg');
        if (animatedBg) {
            const scrollPosition = window.scrollY;
            animatedBg.style.transform = `translateY(${scrollPosition * 0.15}px)`;
        }
    }

    // Effet de changement de couleur pour la barre de navigation au scroll
    function navbarColorChange() {
        const isDarkTheme = document.documentElement.classList.contains('dark-theme');
        
        if (window.scrollY > 100) {
            if (isDarkTheme) {
                navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        } else {
            if (isDarkTheme) {
                navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
                navbar.style.boxShadow = 'none';
            } else {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                navbar.style.boxShadow = 'none';
            }
        }
    }

    // Animation des cartes de projet
    function animateProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
            
            // Animation au survol
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
            });
        });
    }

    // Animation des icônes sociales
    function animateSocialIcons() {
        const socialLinks = document.querySelectorAll('.social-link');
        
        socialLinks.forEach((link, index) => {
            link.style.animationDelay = `${index * 0.1}s`;
            
            // Animation au survol
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-5px)';
                link.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
                link.style.color = 'white';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
                link.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
                link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
            });
        });
    }

    // Fonction pour créer un effet de typage pour le texte d'accueil
    function typeEffect() {
        const textElement = document.querySelector('.home-content h1 .highlight');
        if (textElement) {
            const text = textElement.textContent;
            textElement.textContent = '';
            
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    textElement.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 100);
        }
    }

    // Initialisation des animations
    function initAnimations() {
        // Révéler les éléments de texte initiaux
        setTimeout(() => {
            revealElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('active');
                }, index * 200);
            });
        }, 500);
        
        // Initialiser les autres animations
        animateProjectCards();
        animateSocialIcons();
        typeEffect();
    }

    // Événements de défilement
    window.addEventListener('scroll', () => {
        setActiveNavLink();
        revealOnScroll();
        parallaxEffect();
        navbarColorChange();
    });

    // Fermer la modal quand on clique sur le X
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Réactiver le scroll
        });
    }

    // Fermer la modal quand on clique en dehors de l'image
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Réactiver le scroll
            }
        });
    }

    // Initialisation
    initAnimations();
    setActiveNavLink();
    revealOnScroll();
    navbarColorChange();
});
