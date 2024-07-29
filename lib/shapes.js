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
                <circle cx="150" cy="100" r="80" fill="${this.shapecolor}"/>        
                <text fill="${this.textcolor}" z-index="50" x="150" y="125" font-size="60" text-anchor="middle">${this.text}
                </text>
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
            <circle cx="150" cy="100" r="80" fill="${this.shapecolor}"/>        
            <text fill="${this.textcolor}" z-index="50" x="150" y="125" font-size="60" text-anchor="middle">${this.text}
            </text>
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
render(){    
    return `
    <html>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <circle cx="150" cy="100" r="80" fill="${this.shapecolor}"/>        
            <text fill="${this.textcolor}" z-index="50" x="150" y="125" font-size="60" text-anchor="middle">${this.text}
            </text>
        </svg>
    </html>
    `}
}


module.exports = {Circle, Square, Triangle}