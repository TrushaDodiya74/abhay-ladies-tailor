/* ===== ABHAY LADIES TAILOR - MAIN SCRIPT ===== */
(function () {
  'use strict';

  /* ----- Year in footer ----- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----- Sticky header ----- */
  const header = document.getElementById('header');
  let lastScroll = 0;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    lastScroll = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----- Mobile menu ----- */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  /* ----- Active nav link on scroll ----- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const setActive = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });

  /* ----- Gallery filter ----- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !match);
      });
    });
  });

  /* ----- Scroll reveal animation (IntersectionObserver) ----- */
  const revealEls = document.querySelectorAll(
    '.section-title, .section-desc, .service-card, .gallery-item, .review-card, .contact-card, .about-text, .about-image, .stat, .ai-text'
  );
  revealEls.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('active'));
  }

  /* ----- AI Style Consultant (local smart responses) ----- */
  const aiInput = document.getElementById('aiInput');
  const aiBtn = document.getElementById('aiBtn');
  const aiResponse = document.getElementById('aiResponse');

  const knowledgeBase = [
    {
      keywords: ['silk', 'heavy', 'bridal', 'wedding'],
      advice: 'For heavy silk sarees, choose a blouse with a round or sweetheart neckline and elbow-length sleeves. A back design with a deep U-shape or keyhole adds elegance without overcomplicating the drape. Keep embroidery concentrated on the sleeves and back border.'
    },
    {
      keywords: ['cotton', 'daily', 'office', 'simple'],
      advice: 'For cotton sarees and daily wear, go for a classic boat neck or collared blouse in a contrasting solid. Straight kurtis with side slits and minimal detailing work beautifully for office wear — breathable, comfortable, and effortlessly professional.'
    },
    {
      keywords: ['kurti', 'college', 'casual'],
      advice: 'For casual kurtis, A-line or straight cuts with 3/4 sleeves are versatile. Choose prints that contrast with your bottoms. Add subtle details like a fabric button placket or a contrasting border on the hem for a designer touch.'
    },
    {
      keywords: ['sleeve', 'frill', 'designer'],
      advice: 'Designer sleeves are a great way to elevate a simple blouse. Try bell sleeves with lace trim for festive wear, or a cutout sleeve with pearl detailing for a contemporary look. Keep the fabric lightweight for frills so they drape well.'
    },
    {
      keywords: ['neck', 'back', 'design'],
      advice: 'Popular back neck designs: deep U-shape with tassel strings, keyhole with pearl buttons, round with a bow, and sweetheart with a sheer panel. For bridal blouses, a high back with a cutout and dori ties balances tradition and trend.'
    },
    {
      keywords: ['alteration', 'fitting', 'resize'],
      advice: 'For alterations, bring your garment at least 7–10 days before the event. We can resize waistlines, adjust shoulder seams, shorten hems, and re-fit sleeves. Always bring the matching saree or bottom so we can match the drape.'
    }
  ];

  const getAdvice = (query) => {
    const q = query.toLowerCase().trim();
    if (!q) return 'Please type a question about fabric, necklines, sleeves, or fitting — I\'ll share styling tips!';
    const match = knowledgeBase.find(item => item.keywords.some(k => q.includes(k)));
    if (match) return match.advice;
    return 'For that style, I recommend visiting our boutique for a personalised consultation — every fabric and body type deserves a custom approach. Meanwhile, a classic round neck with 3/4 sleeves is always a safe, elegant choice. Call us at +91 98796 87515 to discuss!';
  };

  const askAI = () => {
    const advice = getAdvice(aiInput.value);
    aiResponse.textContent = advice;
    aiResponse.hidden = false;
    aiResponse.animate(
      [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 400, easing: 'ease-out' }
    );
  };

  aiBtn.addEventListener('click', askAI);
  aiInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') askAI(); });

  /* ----- Smooth scroll offset for fixed header ----- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = header.offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();