class MultipleDropdown extends HTMLElement {
    constructor() {
        super();

        const labels = this.getAttribute('labels').split(',');
        const options = this.getAttribute('options').split(',');

        this.innerHTML = `
            <style>
            .form-select {
                white-space: nowrap;
                width: auto;
            }
            form{
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                gap: 1rem;
            }
            </style>
            <form>
            ${labels.map((label, index) => `
                <select class="form-select form-select-lg mb-3" id="select${index}" name="Symbols[0]"}>
                    <option value="0">${label}</option>
                    ${ options.map(option => `<option value="${option}">${option}</option>`).join('') }
                </select>`).join(" ")}
            </form>
          `;
    }
    getValues() {
        const form = this.querySelector('form');
        const formData = new FormData(form);
        const data = [];
        formData.forEach((val, key) => { data.push(val) });
        return data;
    }
}

customElements.define('multiple-dropdown', MultipleDropdown);
