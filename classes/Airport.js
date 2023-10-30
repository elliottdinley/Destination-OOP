class Airport {
    constructor(name) {
        this.name = name;
        this.planes = [];
    }
    
    static airportCode = "";
    
    getPlanes() {
        return this.planes;
    }
    
    addPlane(plane) {
        this.planes.push(plane);
    }
}

module.exports = Airport;