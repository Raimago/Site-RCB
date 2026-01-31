/**
 * Calculator - Economia ITCMD
 * Interactive calculator for succession planning savings
 */

(function () {
    'use strict';

    // Initialize calculator when DOM is ready
    document.addEventListener('DOMContentLoaded', initCalculator);

    function initCalculator() {
        const slider = document.getElementById('patrimonioSlider');
        if (!slider) return;

        // Elements
        const patrimonioValue = document.getElementById('patrimonioValue');
        const semPlanejamento = document.getElementById('semPlanejamento');
        const comPlanejamento = document.getElementById('comPlanejamento');
        const economiaTotal = document.getElementById('economiaTotal');

        // Update calculation on slider change
        slider.addEventListener('input', updateCalculation);

        // Initial calculation
        updateCalculation();

        function updateCalculation() {
            const patrimonio = parseInt(slider.value);

            // Format patrimônio value
            patrimonioValue.textContent = formatCurrency(patrimonio);

            // Calculation logic:
            // Sem planejamento: ~8% (ITCMD 4-8% + custos judiciais + honorários inventário)
            // Com planejamento: ~4% (ITCMD reduzido via doação + holding)
            const taxaSemPlanejamento = 0.08;
            const taxaComPlanejamento = 0.04;

            const custoSem = Math.round(patrimonio * taxaSemPlanejamento);
            const custoCom = Math.round(patrimonio * taxaComPlanejamento);
            const economia = custoSem - custoCom;

            // Update display with animation
            animateValue(semPlanejamento, custoSem);
            animateValue(comPlanejamento, custoCom);
            animateValue(economiaTotal, economia);

            // Update slider gradient
            const percent = ((patrimonio - 100000) / (10000000 - 100000)) * 100;
            slider.style.background = `linear-gradient(to right, var(--accent-gold) ${percent}%, var(--accent-gold-light) ${percent}%)`;
        }

        function formatCurrency(value) {
            return value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
        }

        function animateValue(element, targetValue) {
            element.textContent = formatCurrency(targetValue);

            // Add pulse animation
            element.classList.add('value-updated');
            setTimeout(() => {
                element.classList.remove('value-updated');
            }, 300);
        }
    }
})();
