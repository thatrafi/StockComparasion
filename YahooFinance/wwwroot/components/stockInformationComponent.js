class StockInformationComponent extends HTMLElement {
    constructor() {
        super();
        // Define default property values
        this.symbol = 'Unknown';
        this.trends = '';
        this.timestamp = '';
        this.price = 0

    }

    connectedCallback() {
        let myArray = this.trends.split('/');
        let myNewArray = myArray.map(x => parseFloat(x.replace(',', '.')));
        const chart = new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: this.timestamp.split(","),
                datasets: [{
                    label: 'Close Price',
                    data: myNewArray,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
            }
        });
    }

    // Define properties for the component
    static get observedAttributes() {
        return ['symbol','trends','timestamp','price'];
    }

    // Handle property changes
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'symbol' && oldValue !== newValue) {
            this.symbol = newValue;
        }

        if (name === 'trends' && oldValue !== newValue) {
            this.trends = newValue;
        }

        if (name === 'timestamp' && oldValue !== newValue) {
            this.timestamp = newValue;
        }

        if (name === 'price' && oldValue !== newValue) {
            this.price = newValue;
        }

        this.render();
    }

    // Render the component
    render() {
        this.innerHTML = `<div style="display: flex; flex-flow: row wrap; gap:1rem;">
              <p>Stocks : ${this.symbol}</p>
              <p>Current Price : ${this.price}</p>
          </div>`;
        // Create a canvas element
        const canvas = document.createElement('canvas');
        canvas.width = 420;
        canvas.height = 250;

        this.appendChild(canvas);

        // Get the context of the canvas
        this.ctx = canvas.getContext('2d');
    }
}

customElements.define('stock-information', StockInformationComponent);
