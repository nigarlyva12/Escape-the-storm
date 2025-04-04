window.addEventListener('DOMContentLoaded', () => {
    const ambient = new Howl({
      src: ['sound.wav'],
      loop: true,
      volume: 0.1
    });
  
    ambient.play();
  });