// Constructors for shapes are imported.
const {Circle, Square, Triangle} = require('./shapes.js');

// A testing suite for all three Shapes.
describe('Shapes', () => {
  //subsuite for Triangle testing
  describe('Triangle', () => {
    it('should render the correct shape when the user picks Triangle', () => {
      const shape = new Triangle('shapecolor', 'text', 'textcolor')
      expect(shape.render()).toEqual();
    });
    it('should render the correct shape when the user picks Triangle', () => {
      const shape = new Triangle('shapecolor', 'text', 'textcolor')
      expect(shape.render()).toEqual('');
    });
    it('should render the correct shape when the user picks Triangle', () => {
      const shape = new Triangle('shapecolor', 'text', 'textcolor')
      expect(shape.render()).toEqual('');
    })
  }),
  //subsuite for Circle testing
  describe('Circle', () => {
    it('should render the correct shape when the user picks Circle', () => {
      const shape = new Circle('shapecolor', 'text', 'textcolor')
      expect(shape.render()).toEqual(`
        <html>
            <svg width="200" height="200" viewBox="-100 -100 200 200">
                <circle cx="0" cy="0" r="100" fill="${this.shapecolor}"/>        
            <text fill="${this.textcolor}" x="0" y="0" font-size="40" text-anchor="middle">${this.text}</text>
            </svg>
        </html>
        `);
    });
    it('should render the correct shape when the user picks Circle', () => {
      const shape = new Circle('shapecolor', 'text', 'textcolor')
      expect(shape.render()).toEqual(`
        <html>
            <svg width="200" height="200" viewBox="-100 -100 200 200">
                <circle cx="0" cy="0" r="100" fill="${this.shapecolor}"/>        
            <text fill="${this.textcolor}" x="0" y="0" font-size="40" text-anchor="middle">${this.text}</text>
            </svg>
        </html>
        `);
    });
    it('should render the correct shape when the user picks Circle', () => {
      const shape = new Circle('shapecolor', 'text', 'textcolor')
      expect(shape.render()).toEqual(`
        <html>
            <svg width="200" height="200" viewBox="-100 -100 200 200">
                <circle cx="0" cy="0" r="100" fill="${this.shapecolor}"/>        
            <text fill="${this.textcolor}" x="0" y="0" font-size="40" text-anchor="middle">${this.text}</text>
            </svg>
        </html>
        `);
    })
  }),
  //subsuite for Square testing
  describe('Square', () => {
    it('should render the correct shape when the user picks Square', () => {
      const shape = new Square('shapecolor', 'text', 'textcolor')
      expect(shape.render()).toEqual(`
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <rect x="-100" y="-100" width="200" height="200" fill="${this.shapecolor}"/>        
            <text fill="${this.textcolor}" x="0" y="0" font-size="40" text-anchor="middle">${this.text}</text>
        </svg>
    </html>
    `);
    });
    it('should render the correct shape when the user picks Square', () => {
      const shape = new Square('shapecolor', 'text', 'textcolor')
      expect(shape.render()).toEqual(`
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <rect x="-100" y="-100" width="200" height="200" fill="${this.shapecolor}"/>        
            <text fill="${this.textcolor}" x="0" y="0" font-size="40" text-anchor="middle">${this.text}</text>
        </svg>
    </html>
    `);
    });
    it('should render the correct shape when the user picks Square', () => {
      const shape = new Square('shapecolor', 'text', 'textcolor')
      expect(shape.render()).toEqual(`
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <rect x="-100" y="-100" width="200" height="200" fill="${this.shapecolor}"/>        
            <text fill="${this.textcolor}" x="0" y="0" font-size="40" text-anchor="middle">${this.text}</text>
        </svg>
    </html>
    `);
    })
  })
});