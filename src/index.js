import PIXI from 'pixi';

class HelloPixi {
  constructor() {
    window.onload = () => {
      const stage = new PIXI.Stage();
      const renderer = PIXI.autoDetectRenderer(800, 600, null, true);
      document.body.appendChild(renderer.view);
      // create a texture from an image path
      var texture = PIXI.Texture.fromImage('bunny.png');

      // create a new Sprite using the texture
      var bunny = new PIXI.Sprite(texture);

      // center the sprite's anchor point
      bunny.anchor.x = 0.5;
      bunny.anchor.y = 0.5;

      // move the sprite to the center of the screen
      bunny.position.x = 200;
      bunny.position.y = 150;

      stage.addChild(bunny);
      animate();
      // start animating
      function animate() {
        requestAnimationFrame(animate);
        // just for fun, let's rotate mr rabbit a little
        bunny.rotation += 0.1;
        // render the container
        renderer.render(stage);
      }
    };
  }
}

new HelloPixi();
