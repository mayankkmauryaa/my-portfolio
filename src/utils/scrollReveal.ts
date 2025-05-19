
export const setupScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal');

    const checkReveal = () => {
        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            } else {
                // Optional: Remove the active class when element is out of view
                // element.classList.remove('active');
            }
        });
    };

    // Add CSS for revealing elements
    const style = document.createElement('style');
    style.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.75s ease-in-out;
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
    .gradient-text {
      background: linear-gradient(90deg, #4F46E5, #3B82F6);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .section-title {
      text-align: center;
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 2.5rem;
      position: relative;
      padding-bottom: 1rem;
    }
    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #4F46E5, #3B82F6);
    }
    .section-padding {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
    @media (min-width: 768px) {
      .section-padding {
        padding-top: 8rem;
        padding-bottom: 8rem;
      }
    }
  `;
    document.head.appendChild(style);

    // Initial check
    checkReveal();

    // Add event listener
    window.addEventListener('scroll', checkReveal);

    return () => {
        window.removeEventListener('scroll', checkReveal);
        document.head.removeChild(style);
    };
};
