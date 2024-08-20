// Custom element for scrolling text
class ScrollingTextElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Create a container for the scrolling text
    const container = document.createElement('div');
    container.className = 'scrolling-text';
    container.textContent = `
      Expert Speakers • 50+ Exhibitors • Networking • MUST-ATTEND EVENT • Hundreds of Attendees • Breakout Sessions • Deal-Making Opportunities • MUST-ATTEND EVENT •
    `;

    // Create style for scrolling effect
    const style = document.createElement('style');
    style.textContent = `
      .scrolling-text {
        display: inline-block;
        white-space: nowrap;
        font-family: 'Avenir Light', Arial, sans-serif;
        font-size: 18pt;
        color: white;
        animation: scroll-text 20s linear infinite;
      }

      @keyframes scroll-text {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `;

    // Attach the created elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(container);
  }
