/**
 * Quiz - Diagnóstico Patrimonial
 * Interactive quiz for lead qualification
 */

(function () {
    'use strict';

    let currentQuestion = 1;
    let totalQuestions = 4;
    let answers = [];
    let totalPoints = 0;

    document.addEventListener('DOMContentLoaded', initQuiz);

    function initQuiz() {
        const quizSection = document.getElementById('quizQuestions');
        if (!quizSection) return;

        // Add click handlers to all options
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', handleOptionClick);
        });
    }

    function handleOptionClick(e) {
        const option = e.currentTarget;
        const question = option.closest('.quiz-question');
        const questionNum = parseInt(question.dataset.question);
        const points = parseInt(option.dataset.points);

        // Mark selected
        question.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        option.classList.add('selected');

        // Store answer
        answers[questionNum - 1] = {
            value: option.dataset.value,
            points: points
        };
        totalPoints = answers.reduce((sum, a) => sum + (a ? a.points : 0), 0);

        // Delay before next question
        setTimeout(() => {
            if (questionNum < totalQuestions) {
                goToQuestion(questionNum + 1);
            } else {
                showResults();
            }
        }, 400);
    }

    function goToQuestion(num) {
        currentQuestion = num;

        // Hide all questions
        document.querySelectorAll('.quiz-question').forEach(q => {
            q.classList.remove('active');
        });

        // Show target question
        const targetQuestion = document.querySelector(`.quiz-question[data-question="${num}"]`);
        if (targetQuestion) {
            targetQuestion.classList.add('active');
        }

        // Update progress
        updateProgress(num);
    }

    function updateProgress(num) {
        const progressBar = document.getElementById('quizProgress');
        const progressText = document.getElementById('currentQuestion');

        const percentage = (num / totalQuestions) * 100;
        progressBar.style.width = percentage + '%';
        progressText.textContent = num;
    }

    function showResults() {
        const questionsContainer = document.getElementById('quizQuestions');
        const resultsContainer = document.getElementById('quizResults');
        const progressContainer = document.querySelector('.quiz-progress');
        const progressText = document.querySelector('.quiz-progress-text');

        // Hide questions
        questionsContainer.style.display = 'none';
        progressContainer.style.display = 'none';
        progressText.style.display = 'none';

        // Calculate result level
        // Points range: 4 (min) to 16 (max)
        let resultLevel, resultTitle, resultDescription, recommendation, iconClass;

        if (totalPoints >= 12) {
            // High urgency
            resultLevel = 'urgent';
            iconClass = 'urgent';
            resultTitle = '⚠️ Atenção Urgente Necessária';
            resultDescription = 'Seu perfil indica alto risco patrimonial. Sem um planejamento adequado, seu patrimônio e seus herdeiros podem enfrentar sérias dificuldades em caso de sucessão.';
            recommendation = 'Recomendamos agendar uma consultoria imediata para avaliar estratégias de proteção, como a estruturação de uma holding familiar e doação em vida com reserva de usufruto.';
        } else if (totalPoints >= 8) {
            // Medium - attention needed
            resultLevel = 'attention';
            iconClass = 'attention';
            resultTitle = '🔍 Planejamento Recomendado';
            resultDescription = 'Você possui patrimônio relevante que se beneficiaria de uma análise estruturada. Há oportunidades de economia tributária e proteção que você pode estar perdendo.';
            recommendation = 'Uma análise personalizada pode identificar economias de até 50% em ITCMD e proteger seu patrimônio de riscos futuros. Vale a pena conversar com nossos especialistas.';
        } else {
            // Low - good situation
            resultLevel = 'good';
            iconClass = 'good';
            resultTitle = '✅ Situação Favorável';
            resultDescription = 'Sua situação atual apresenta menor complexidade. No entanto, mesmo patrimônios menores podem se beneficiar de um planejamento preventivo.';
            recommendation = 'Considere uma consultoria para entender as melhores práticas e garantir que está aproveitando todas as oportunidades de proteção e economia.';
        }

        // Update result elements
        const resultIcon = document.getElementById('resultIcon');
        resultIcon.className = 'quiz-result-icon ' + iconClass;
        resultIcon.innerHTML = getIconForLevel(resultLevel);

        document.getElementById('resultTitle').textContent = resultTitle;
        document.getElementById('resultDescription').textContent = resultDescription;
        document.getElementById('recommendationText').textContent = recommendation;

        // Show results
        resultsContainer.style.display = 'block';
    }

    function getIconForLevel(level) {
        switch (level) {
            case 'urgent':
                return '<i class="fas fa-exclamation-triangle"></i>';
            case 'attention':
                return '<i class="fas fa-search"></i>';
            case 'good':
                return '<i class="fas fa-check-circle"></i>';
            default:
                return '<i class="fas fa-info-circle"></i>';
        }
    }

    // Global function to reset quiz
    window.resetQuiz = function () {
        currentQuestion = 1;
        answers = [];
        totalPoints = 0;

        // Reset UI
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });

        document.querySelectorAll('.quiz-question').forEach(q => {
            q.classList.remove('active');
        });

        document.querySelector('.quiz-question[data-question="1"]').classList.add('active');
        document.getElementById('quizQuestions').style.display = 'block';
        document.getElementById('quizResults').style.display = 'none';
        document.querySelector('.quiz-progress').style.display = 'block';
        document.querySelector('.quiz-progress-text').style.display = 'block';

        updateProgress(1);
    };
})();
