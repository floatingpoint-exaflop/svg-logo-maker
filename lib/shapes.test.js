// Constructors for shapes are imported.
const {Circle, Square, Triangle} = require('./shapes.js');

// A testing suite for all three Shapes.
describe('Shapes', () => {
  
  //subsuite for Triangle testing
  describe('Triangle', () => {
    
    it('should render a white triangle with the black text "one" when the user picks Triangle and specifies that information.', () => {
      const shape = new Triangle('#ffffff', 'one', '#000000')
      expect(shape.render()).toEqual(`
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <polygon points="0,-100 100,100 -100,100" fill="#ffffff"/>      
            <text fill="#000000"  x="0" y="0" font-size="40" text-anchor="middle">one</text>
        </svg>
    </html>
    `);
    });
    
    
    it('should render a green triangle with the purple text "TWO" when the user picks Triangle and specifies that information.', () => {
      const shape = new Triangle('green', 'TWO', 'purple')
      expect(shape.render()).toEqual(`
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <polygon points="0,-100 100,100 -100,100" fill="green"/>      
            <text fill="purple"  x="0" y="0" font-size="40" text-anchor="middle">TWO</text>
        </svg>
    </html>
    `);
    });
    
    
    it('should render a yellow triangle with the red text "tre" when the user picks Triangle and specifies that information.', () => {
      const shape = new Triangle('#FFF555', 'tre', 'red')
      expect(shape.render()).toEqual(`
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <polygon points="0,-100 100,100 -100,100" fill="#FFF555"/>      
            <text fill="red"  x="0" y="0" font-size="40" text-anchor="middle">tre</text>
        </svg>
    </html>
    `);
    })
  }),
  
  
  //subsuite for Circle testing
  describe('Circle', () => {
    it('should render an orange circle with the black text "txt" when the user picks Circle and specifies that information.', () => {
      const shape = new Circle('orange', 'txt', 'black')
      expect(shape.render()).toEqual(`
        <html>
            <svg width="200" height="200" viewBox="-100 -100 200 200">
                <circle cx="0" cy="0" r="100" fill="orange"/>        
            <text fill="black" x="0" y="0" font-size="40" text-anchor="middle">txt</text>
            </svg>
        </html>
        `);
    });
    
    
    it('should render a "chocolate" circle with the crimson text "TiM" when the user picks Circle and specifies that information.', () => {
      const shape = new Circle('chocolate', 'TiM', 'crimson')
      expect(shape.render()).toEqual(`
        <html>
            <svg width="200" height="200" viewBox="-100 -100 200 200">
                <circle cx="0" cy="0" r="100" fill="chocolate"/>        
            <text fill="crimson" x="0" y="0" font-size="40" text-anchor="middle">TiM</text>
            </svg>
        </html>
        `);
    });
    
    
    it('should render a cyan circle with the "darkslategrey" text "MAC" when the user picks Circle and specifies that information.', () => {
      const shape = new Circle('cyan', 'MAC', 'darkslategrey')
      expect(shape.render()).toEqual(`
        <html>
            <svg width="200" height="200" viewBox="-100 -100 200 200">
                <circle cx="0" cy="0" r="100" fill="cyan"/>        
            <text fill="darkslategrey" x="0" y="0" font-size="40" text-anchor="middle">MAC</text>
            </svg>
        </html>
        `);
    })
  }),
  
  
  //subsuite for Square testing
  describe('Square', () => {
    
    
    it('should render a fuschia square with the green text "svg" when the user picks Square and specifies that information.', () => {
      const shape = new Square('	#8A2BE2', 'svg', '#00FF7F')
      expect(shape.render()).toEqual(`
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <rect x="-100" y="-100" width="200" height="200" fill="	#8A2BE2"/>        
            <text fill="#00FF7F" x="0" y="0" font-size="40" text-anchor="middle">svg</text>
        </svg>
    </html>
    `);
    });
    
    
    it('should render a "bisque" square with the blue text "SVG" when the user picks Square and specifies that information.', () => {
      const shape = new Square('bisque', 'SVG', '#00008B')
      expect(shape.render()).toEqual(`
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <rect x="-100" y="-100" width="200" height="200" fill="bisque"/>        
            <text fill="#00008B" x="0" y="0" font-size="40" text-anchor="middle">SVG</text>
        </svg>
    </html>
    `);
    });
    
    
    it('should render a peach square with the light blue text "svG" when the user picks Square and specifies that information.', () => {
      const shape = new Square('#D2B48C', 'svG', '#87CEEB')
      expect(shape.render()).toEqual(`
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <rect x="-100" y="-100" width="200" height="200" fill="#D2B48C"/>        
            <text fill="#87CEEB" x="0" y="0" font-size="40" text-anchor="middle">svG</text>
        </svg>
    </html>
    `);
    })
  })
});