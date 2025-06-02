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

const _0x3a9e=['classList','toggle','dark-theme','contains','setItem','theme','dark','light','addEventListener','click','preventDefault','add','scroll-down-animation','scrollTo','offsetTop','remove','active','forEach','getAttribute','href','#projects','querySelectorAll','a[href^="#"]','querySelector','.hamburger','.nav-links','.nav-link','section','.reveal-text','#imageModal','#modalImage','.modal-close','.theme-toggle','#projects','getItem','documentElement','getElementById','navbar','style','overflow','hidden','src','display','block','DOMContentLoaded','body','transform','translateY(','px)','backgroundColor','rgba(26,\x2026,\x2026,\x200.95)','boxShadow','0\x202px\x2010px\x20rgba(0,\x200,\x200,\x200.3)','rgba(255,\x20255,\x20255,\x200.95)','0\x202px\x2010px\x20rgba(0,\x200,\x200,\x200.1)','rgba(26,\x2026,\x2026,\x200.8)','none','rgba(255,\x20255,\x20255,\x200.8)','.project-card','animationDelay','mouseenter','translateY(-10px)','0\x2015px\x2030px\x20rgba(0,\x200,\x200,\x200.15)','mouseleave','translateY(0)','0\x205px\x2015px\x20rgba(0,\x200,\x200,\x200.08)','.social-link','translateY(-5px)','getPropertyValue','--primary-color','white','--accent-color','.home-content\x20h1\x20.highlight','textContent','charAt','length','scroll','top','offsetTop\x20-\x2070','smooth','setTimeout','innerHeight','getBoundingClientRect','.animated-bg','*\x200.15'];

(function(_0x2d8f05,_0x3a9e1f){const _0x1e6d20=function(_0x292610){while(--_0x292610){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x1e6d20(++_0x3a9e1f);}(_0x3a9e,0x1f4));

const _0x1e6d=function(_0x2d8f05,_0x3a9e1f){_0x2d8f05=_0x2d8f05-0x0;let _0x1e6d20=_0x3a9e[_0x2d8f05];return _0x1e6d20;};

function _0x292610(_0x2fdb19){const _0x292610=document[_0x1e6d('0x0')](_0x1e6d('0x1'));const _0x1c9c58=document[_0x1e6d('0x0')](_0x1e6d('0x2'));if(_0x292610&&_0x1c9c58){_0x1c9c58[_0x1e6d('0x3')]=_0x2fdb19;_0x292610[_0x1e6d('0x4')][_0x1e6d('0x5')]=_0x1e6d('0x6');document[_0x1e6d('0x7')][_0x1e6d('0x4')][_0x1e6d('0x8')]=_0x1e6d('0x9');}}

document[_0x1e6d('0xa')](_0x1e6d('0xb'),()=>{const _0x292610=document[_0x1e6d('0x0')](_0x1e6d('0xc'));const _0x1c9c58=document[_0x1e6d('0xd')](_0x1e6d('0xe'));const _0x2fdb19=document[_0x1e6d('0xd')](_0x1e6d('0xf'));const _0x5a2d5c=document[_0x1e6d('0x10')](_0x1e6d('0x11'));const _0x5f3be4=document[_0x1e6d('0x10')](_0x1e6d('0x12'));const _0x1b1f2a=document[_0x1e6d('0x10')](_0x1e6d('0x13'));const _0x3e8c7e=document[_0x1e6d('0x0')](_0x1e6d('0x14'));const _0x1e6d20=document[_0x1e6d('0x0')](_0x1e6d('0x15'));const _0x3a9e1f=document[_0x1e6d('0xd')](_0x1e6d('0x16'));const _0x2d8f05=document[_0x1e6d('0xd')](_0x1e6d('0x17'));const _0x3c9c8c=document[_0x1e6d('0x0')](_0x1e6d('0x18'));const _0x5e8b7f=document[_0x1e6d('0xd')]('a[href="#projects"]');const _0x4d8a8d=localStorage[_0x1e6d('0x19')](_0x1e6d('0x1a'));if(_0x4d8a8d===_0x1e6d('0x1b')){document[_0x1e6d('0x1c')][_0x1e6d('0x1d')][_0x1e6d('0x1e')](_0x1e6d('0x1f'));}function _0x1e4b8c(){document[_0x1e6d('0x1c')][_0x1e6d('0x1d')][_0x1e6d('0x20')](_0x1e6d('0x1f'));if(document[_0x1e6d('0x1c')][_0x1e6d('0x1d')][_0x1e6d('0x21')](_0x1e6d('0x1f'))){localStorage[_0x1e6d('0x22')](_0x1e6d('0x1a'),_0x1e6d('0x1b'));}else{localStorage[_0x1e6d('0x22')](_0x1e6d('0x1a'),_0x1e6d('0x23'));}
_0x3c9c8c();}if(_0x2d8f05){_0x2d8f05[_0x1e6d('0x24')](_0x1e6d('0x25'),_0x1e4b8c);}if(_0x5e8b7f&&_0x3c9c8c){_0x5e8b7f[_0x1e6d('0x24')](_0x1e6d('0x25'),function(_0x292610){_0x292610[_0x1e6d('0x26')]();_0x3c9c8c[_0x1e6d('0x1d')][_0x1e6d('0x27')](_0x1e6d('0x28'));window[_0x1e6d('0x29')]({top:_0x3c9c8c[_0x1e6d('0x2a')]-0x46,behavior:_0x1e6d('0x2b')});setTimeout(()=>{_0x3c9c8c[_0x1e6d('0x1d')][_0x1e6d('0x2c')](_0x1e6d('0x28'));},0x5dc);});}
_0x1c9c58[_0x1e6d('0x24')](_0x1e6d('0x25'),()=>{_0x1c9c58[_0x1e6d('0x1d')][_0x1e6d('0x20')](_0x1e6d('0x2d'));_0x2fdb19[_0x1e6d('0x1d')][_0x1e6d('0x20')](_0x1e6d('0x2d'));});_0x5a2d5c[_0x1e6d('0x2e')](_0x292610=>{_0x292610[_0x1e6d('0x24')](_0x1e6d('0x25'),()=>{_0x1c9c58[_0x1e6d('0x1d')][_0x1e6d('0x2c')](_0x1e6d('0x2d'));_0x2fdb19[_0x1e6d('0x1d')][_0x1e6d('0x2c')](_0x1e6d('0x2d'));});});document[_0x1e6d('0x10')]('a[href^="#"]')[_0x1e6d('0x2e')](_0x292610=>{if(_0x292610[_0x1e6d('0x2f')](_0x1e6d('0x30'))!==_0x1e6d('0x31')){_0x292610[_0x1e6d('0x24')](_0x1e6d('0x25'),function(_0x292610){_0x292610[_0x1e6d('0x26')]();const _0x1c9c58=this[_0x1e6d('0x2f')](_0x1e6d('0x30'));const _0x2fdb19=document[_0x1e6d('0xd')](_0x1c9c58);if(_0x2fdb19){window[_0x1e6d('0x29')]({top:_0x2fdb19[_0x1e6d('0x2a')]-0x46,behavior:_0x1e6d('0x2b')});}});}});function _0x3c9c8c(){const _0x292610=document[_0x1e6d('0x1c')][_0x1e6d('0x1d')][_0x1e6d('0x21')](_0x1e6d('0x1f'));if(window['scrollY']>0x64){if(_0x292610){_0x292610[_0x1e6d('0x4')][_0x1e6d('0x32')]=_0x1e6d('0x33');_0x292610[_0x1e6d('0x4')][_0x1e6d('0x34')]=_0x1e6d('0x35');}else{_0x292610[_0x1e6d('0x4')][_0x1e6d('0x32')]=_0x1e6d('0x36');_0x292610[_0x1e6d('0x4')][_0x1e6d('0x34')]=_0x1e6d('0x37');}}else{if(_0x292610){_0x292610[_0x1e6d('0x4')][_0x1e6d('0x32')]=_0x1e6d('0x38');_0x292610[_0x1e6d('0x4')][_0x1e6d('0x34')]=_0x1e6d('0x39');}else{_0x292610[_0x1e6d('0x4')][_0x1e6d('0x32')]=_0x1e6d('0x3a');_0x292610[_0x1e6d('0x4')][_0x1e6d('0x34')]=_0x1e6d('0x39');}}}
window[_0x1e6d('0x24')](_0x1e6d('0x3b'),()=>{_0x3c9c8c();});if(_0x3a9e1f){_0x3a9e1f[_0x1e6d('0x24')](_0x1e6d('0x25'),()=>{_0x3e8c7e[_0x1e6d('0x4')][_0x1e6d('0x5')]=_0x1e6d('0x39');document[_0x1e6d('0x7')][_0x1e6d('0x4')][_0x1e6d('0x8')]=_0x1e6d('0x3c');});}if(_0x3e8c7e){_0x3e8c7e[_0x1e6d('0x24')](_0x1e6d('0x25'),_0x292610=>{if(_0x292610['target']===_0x3e8c7e){_0x3e8c7e[_0x1e6d('0x4')][_0x1e6d('0x5')]=_0x1e6d('0x39');document[_0x1e6d('0x7')][_0x1e6d('0x4')][_0x1e6d('0x8')]=_0x1e6d('0x3c');}});}
_0x3c9c8c();});
