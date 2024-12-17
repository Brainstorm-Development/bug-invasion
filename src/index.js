class BugInvasion {
    constructor(options = {}) {
      this.options = {
        bugCount: options.bugCount || 5, // Number of bugs
        bugImage: options.bugImage || 'https://www.svgrepo.com/show/13138/bug.svg', // Bug image URL
        bugSize: options.bugSize || 40, // Size of the bug
        bugLifespan: options.bugLifespan || 15000, // Lifespan of each bug (ms)
        spawnInterval: options.spawnInterval || 2000, // Interval between spawns (ms)
        moveSpeed: options.moveSpeed || 2000, // How often bugs move (ms)
        moveDistance: options.moveDistance || 100, // Max distance a bug can move in one step
        invasionDuration: options.invasionDuration || null, // Duration of the invasion (ms)
      };
      this.bugs = [];
      this.activeBugs = 0;
      this.invasionTimeout = null;
  
      // Ensure no scrollbars
      this.setupBodyStyles();
  
      // Start the invasion
      this.startInvasion();
  
      // End invasion automatically if invasionDuration is set
      if (this.options.invasionDuration) {
        this.scheduleInvasionEnd();
      }
    }
  
    setupBodyStyles() {
      document.body.style.margin = '0';
      document.body.style.overflow = 'hidden'; // Disable scrollbars
    }
  
    startInvasion() {
      const spawnInterval = setInterval(() => {
        if (this.activeBugs >= this.options.bugCount) {
          clearInterval(spawnInterval);
        } else {
          this.createBug();
        }
      }, this.options.spawnInterval);
    }
  
    createBug() {
      const bug = document.createElement('img');
      bug.src = this.options.bugImage;
      bug.style.position = 'absolute';
      bug.style.width = `${this.options.bugSize}px`;
      bug.style.height = `${this.options.bugSize}px`;
      bug.style.top = `${Math.random() * (window.innerHeight - this.options.bugSize)}px`;
      bug.style.left = `${Math.random() * (window.innerWidth - this.options.bugSize)}px`;
      bug.style.cursor = 'pointer';
      bug.style.transition = `top ${this.options.moveSpeed}ms linear, left ${this.options.moveSpeed}ms linear, transform ${this.options.moveSpeed}ms linear`;
      bug.style.transformOrigin = 'center';
  
      // Add random movement logic
      const moveBug = () => {
        const currentTop = parseFloat(bug.style.top);
        const currentLeft = parseFloat(bug.style.left);
  
        // Calculate new random position within screen bounds
        const newTop = Math.max(
          0,
          Math.min(
            window.innerHeight - this.options.bugSize,
            currentTop + (Math.random() * this.options.moveDistance * 2 - this.options.moveDistance)
          )
        );
        const newLeft = Math.max(
          0,
          Math.min(
            window.innerWidth - this.options.bugSize,
            currentLeft + (Math.random() * this.options.moveDistance * 2 - this.options.moveDistance)
          )
        );
  
        // Calculate the angle of movement
        const deltaX = newLeft - currentLeft;
        const deltaY = newTop - currentTop;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  
        // Update position and rotation smoothly
        bug.style.top = `${newTop}px`;
        bug.style.left = `${newLeft}px`;
        bug.style.transform = `rotate(${angle}deg)`;
      };
  
      const moveInterval = setInterval(moveBug, this.options.moveSpeed);
  
      // Remove bug after lifespan ends
      setTimeout(() => {
        bug.remove();
        clearInterval(moveInterval);
        this.activeBugs--;
      }, this.options.bugLifespan);
  
      // Remove bug on click
      bug.addEventListener('click', () => {
        bug.remove();
        clearInterval(moveInterval);
        this.activeBugs--;
      });
  
      document.body.appendChild(bug);
      this.bugs.push(bug);
      this.activeBugs++;
    }
  
    stopInvasion() {
      this.bugs.forEach((bug) => bug.remove());
      this.bugs = [];
      this.activeBugs = 0;
  
      // Clear any scheduled invasion end timeout
      if (this.invasionTimeout) {
        clearTimeout(this.invasionTimeout);
        this.invasionTimeout = null;
      }
    }
  
    scheduleInvasionEnd() {
      this.invasionTimeout = setTimeout(() => {
        this.stopInvasion();
      }, this.options.invasionDuration);
    }
  }
  
  export default BugInvasion;
  