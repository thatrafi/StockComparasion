class StockInformationComponent extends HTMLElement {
    constructor() {
        super();
        // Define default property values
        this.symbol = 'Unknown';
        this.trends = '';
        this.timestamp = '';
        this.price = 0;
        this.stockId = this.getAttribute('stockId');

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
        const stockBoxId = `stockChart${this.stockId}`;
        this.innerHTML = `
        <style>
        .text-bg-dark {
            color: #fff!important;
            background-color: RGBA(33,37,41,var(--bs-bg-opacity,1))!important;
        }
        .bg-light {
            --bs-bg-opacity: 1;
            background-color: rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important;
        }
        .stock-card {
            width:470px
        }
        </style>
         <div class="stock-card ${this.stockId % 2 == 0 ? `text-bg-dark`:`bg-light` } me-md-1 text-center overflow-hidden">
            <div class="my-3 py-3">
                <h2 class="display-5">${this.symbol}</h2>
                <p class="lead">Current Price : ${this.price}</p>
            </div>
            <div id="${stockBoxId}" class="${this.stockId % 2 == 0 ? `bg-dark`:`bg-light`} shadow-sm mx-auto" style="display: flex; justify-content:center;width: 95%; border-radius: 21px 21px 0 0;"></div>
        </div>`;
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const stockBox = document.getElementById(`${stockBoxId}`);
        stockBox.appendChild(canvas);

        //this.appendChild(canvas);

        // Get the context of the canvas
        this.ctx = canvas.getContext('2d');
    }
}

customElements.define('stock-information', StockInformationComponent);
