class Circle {
    constructor( shapecolor, text, textcolor) {     
      this.shapecolor = shapecolor;
      this.text = text;
      this.textcolor = textcolor;
    }
    render(){    
        return `
        <html>
            <svg width="200" height="200" viewBox="-100 -100 200 200">
                <circle cx="0" cy="0" r="100" fill="${this.shapecolor}"/>        
            <text fill="${this.textcolor}" x="0" y="0" font-size="40" text-anchor="middle">${this.text}</text>
            </svg>
        </html>
        `}
  }

class Square {
constructor( shapecolor, text, textcolor) {     
    this.shapecolor = shapecolor;
    this.text = text;
    this.textcolor = textcolor;
}
render(){    
    return `
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <rect x="-100" y="-100" width="200" height="200" fill="${this.shapecolor}"/>        
            <text fill="${this.textcolor}" x="0" y="0" font-size="40" text-anchor="middle">${this.text}</text>
        </svg>
    </html>
    `}
}

class Triangle {
constructor( shapecolor, text, textcolor) {     
    this.shapecolor = shapecolor;
    this.text = text;
    this.textcolor = textcolor;
}
//coords for an equilateral triangle
render(){    
    return `
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <polygon points="0,-100 100,100 -100,100" fill="${this.shapecolor}"/>      
            <text fill="${this.textcolor}"  x="0" y="0" font-size="40" text-anchor="middle">${this.text}</text>
        </svg>
    </html>
    `}
}


module.exports = {Circle, Square, Triangle}