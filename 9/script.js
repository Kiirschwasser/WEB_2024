document.addEventListener("DOMContentLoaded", function() {
    const depositForm = document.getElementById('depositForm');//Записываем в переменную объекты из HTML
    const termSelect = document.getElementById('term');
    const resultMessage = document.getElementById('resultMessage');
    
    // Обработчик события изменения типа вклада
    document.getElementById('depositType').addEventListener('change', function() {
        const depositType = this.value;
        // Удаляем текущие опции сроков вклада
        termSelect.innerHTML = '';
        // Добавляем новые опции в зависимости от выбранного типа вклада
        if (depositType === 'replenishable') {
            addOption(termSelect, '6 месяцев');
            addOption(termSelect, '1 год');
            addOption(termSelect, '1,5 года');
            addOption(termSelect, '2 года');
        } else if (depositType === 'fixed') {
            addOption(termSelect, '3 месяца');
            addOption(termSelect, '6 месяцев');
            addOption(termSelect, '9 месяцев');
            addOption(termSelect, '1 год');
            addOption(termSelect, '1,5 года');
            addOption(termSelect, '2 года');
        }
    });
    
    // Функция для добавления опции в селект
    function addOption(select, text) {
        const option = document.createElement('option');
        option.textContent = text;
        select.appendChild(option);
    }
    
    // Обработчик события отправки формы
    depositForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const depositType = document.getElementById('depositType').value;
        const term = document.getElementById('term').value;
        const amount = parseFloat(document.getElementById('amount').value);
        
        // Выполняем расчет в зависимости от типа вклада и срока
        let interestRate;
        if (depositType === 'replenishable') {
            interestRate = calculateReplenishableInterestRate(term);
        } else if (depositType === 'fixed') {
            interestRate = calculateFixedInterestRate(term);
        }
        const finalAmount = calculateFinalAmount(amount, interestRate);
        
        // Формируем сообщение о результате и выводим его на странице
        resultMessage.textContent = `Сумма вклада: ${amount} рублей. Итоговая сумма по окончанию срока: ${finalAmount} рублей`;
    
    });
    
    // Функция для расчета годовой процентной ставки для пополняемого вклада
    function calculateReplenishableInterestRate(term) {
        switch (term) {
            case '6 месяцев':
                return 20;
            case '1 год':
                return 22;
            case '1,5 года':
                return 15;
            case '2 года':
                return 10;
            default:
                return 0;
        }
    }
    
    // Функция для расчета годовой процентной ставки для срочного вклада
    function calculateFixedInterestRate(term) {
        switch (term) {
            case '3 месяца':
                return 20;
            case '6 месяцев':
                return 22;
            case '9 месяцев':
                return 23;
            case '1 год':
                return 24;
            case '1,5 года':
                return 18;
            case '2 года':
                return 15;
            default:
                return 0;
        }
    }
    
    // Функция для расчета итоговой суммы по окончанию срока
    function calculateFinalAmount(amount, interestRate) {
        return amount * (1 + interestRate / 100);
    }
});