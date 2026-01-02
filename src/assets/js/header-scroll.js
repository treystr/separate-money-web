/**
 * Header Scroll Behavior
 * Hides header when scrolling down, shows when scrolling up
 * Uses modern performance optimizations
 */

class HeaderScroll {
  constructor() {
    this.header = document.querySelector('.header-scroll');
    this.lastScrollY = window.scrollY;
    this.isHidden = false;
    this.ticking = false;
    this.headerHeight = this.header ? this.header.offsetHeight : 0;

    if (!this.header) return;

    this.init();
  }

  init() {
    // Use passive listeners for better performance
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
    
    // Handle window resize to recalculate header height
    window.addEventListener('resize', () => {
      this.headerHeight = this.header.offsetHeight;
      this.updateScrollPadding();
    }, { passive: true });

    // Show header on initial load if not at top
    if (window.scrollY > 100) {
      this.header.classList.add('header-hidden');
      this.isHidden = true;
      this.updateScrollPadding();
    } else {
      this.updateScrollPadding();
    }
  }

  updateScrollPadding() {
    // Update scroll-padding-top based on header visibility
    const paddingValue = this.isHidden ? '0' : `${this.headerHeight}px`;
    document.documentElement.style.scrollPaddingTop = paddingValue;
    document.documentElement.style.webkitScrollPaddingTop = paddingValue;
  }

  handleScroll() {
    if (!this.ticking) {
      requestAnimationFrame(this.update.bind(this));
      this.ticking = true;
    }
  }

  update() {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - this.lastScrollY;

    // Always show header at the top of the page
    if (currentScrollY <= 100) {
      if (this.isHidden) {
        this.header.classList.remove('header-hidden');
        this.isHidden = false;
        this.updateScrollPadding();
      }
    } else {
      // Only hide/show if we've scrolled more than a threshold
      if (Math.abs(scrollDelta) > 5) {
        if (scrollDelta > 0 && !this.isHidden) {
          // Scrolling down - hide header
          this.header.classList.add('header-hidden');
          this.isHidden = true;
          this.updateScrollPadding();
        } else if (scrollDelta < 0 && this.isHidden) {
          // Scrolling up - show header
          this.header.classList.remove('header-hidden');
          this.isHidden = false;
          this.updateScrollPadding();
        }
      }
    }

    this.lastScrollY = currentScrollY;
    this.ticking = false;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new HeaderScroll());
} else {
  new HeaderScroll();
}
