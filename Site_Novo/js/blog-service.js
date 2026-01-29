/**
 * Client-side integration for Blog (Static Mode)
 * Replaces PocketBase dependency with local static data for immediate functionality.
 */

// Static Data - Simulando banco de dados
const STATIC_POSTS = [
    {
        id: '1',
        slug: 'holding-familiar-protecao-patrimonial',
        title: 'A Importância da Holding Familiar para a Proteção Patrimonial',
        excerpt: 'Descubra como essa estrutura jurídica pode garantir a perenidade dos bens da sua família e reduzir custos sucessórios significativamente.',
        content: `
            <p class="lead">Muitas famílias brasileiras construíram patrimônios sólidos ao longo de décadas de trabalho duro. No entanto, a falta de planejamento para a transição desses bens pode colocar tudo a perder.</p>

            <p>O processo de inventário no Brasil é conhecido por ser burocrático, lento e, principalmente, caro. Custos com ITCMD (Imposto de Transmissão Causa Mortis e Doação), honorários advocatícios e taxas cartorárias podem consumir até 20% do valor total do patrimônio.</p>

            <h2>O que é uma Holding Familiar?</h2>
            <p>Diferente do que muitos pensam, a Holding Familiar não é um "bicho de sete cabeças". Trata-se de uma empresa constituída com o objetivo específico de controlar o patrimônio de uma ou mais pessoas físicas de uma mesma família.</p>

            <p>Ao invés de os bens estarem em nome das pessoas físicas (CPF), eles passam a pertencer à empresa (CNPJ). Os membros da família, por sua vez, tornam-se sócios dessa empresa através de quotas ou ações.</p>

            <blockquote>
                "A Holding Familiar não é apenas sobre economia tributária, é sobre a paz de espírito de saber que o legado da família será preservado sem conflitos."
            </blockquote>

            <h2>Principais Vantagens</h2>

            <h3>1. Economia Tributária</h3>
            <p>No sistema de holding, a tributação sobre rendimentos de aluguéis e venda de imóveis é significativamente menor do que na pessoa física. Enquanto um aluguel recebido na PF pode ser tributado em até 27,5% (Imposto de Renda), na Holding essa tributação gira em torno de 11,33%.</p>

            <h3>2. Planejamento Sucessório Facilitado</h3>
            <p>Com a Holding, é possível realizar a doação das quotas aos herdeiros ainda em vida, mantendo o usufruto e o controle político com os patriarcas. Isso elimina a necessidade de inventário futuro sobre esses bens.</p>

            <ul>
                <li><strong>Proteção Patrimonial:</strong> Os bens ficam segregados dos riscos das atividades empresariais operacionais.</li>
                <li><strong>Evita Conflitos:</strong> Regras de sucessão e administração bem definidas em Acordo de Sócios.</li>
                <li><strong>Rapidez:</strong> A transição do patrimônio é automática, sem bloqueio de bens.</li>
            </ul>

            <h2>Conclusão</h2>
            <p>O planejamento patrimonial através de uma Holding Familiar é uma ferramenta poderosa e acessível não apenas para grandes fortunas, mas para qualquer família que possua bens e deseje garantir segurança e eficiência na sucessão.</p>
        `,
        cover: 'assets/images/bg-hero.webp',
        category: 'Planejamento Sucessório',
        date: '2026-01-26 10:00:00',
        author: 'Davi Castelo Branco'
    },
    {
        id: '2',
        slug: 'reforma-tributaria-heranca',
        title: 'Reforma Tributária: O que muda para heranças e doações?',
        excerpt: 'Entenda os impactos das novas regras fiscais na transmissão de bens e como se antecipar para evitar perdas.',
        content: `
            <p class="lead">A Reforma Tributária trouxe discussões importantes sobre a tributação de grandes fortunas e a transmissão de heranças. É fundamental entender o novo cenário.</p>
            
            <h2>Aumento Progressivo do ITCMD</h2>
            <p>Uma das principais mudanças é a progressividade obrigatória do Imposto de Transmissão Causa Mortis e Doação (ITCMD). Isso significa que, quanto maior o patrimônio, maior a alíquota a ser paga.</p>
            
            <p>Estado que antes cobravam taxas fixas agora terão que adotar tabelas progressivas, o que pode encarecer significativamente o custo de um inventário para patrimônios de médio e grande porte.</p>
            
            <h2>A Importância de Antecipar</h2>
            <p>Diante desse cenário, o planejamento sucessório em vida torna-se ainda mais urgente. Estruturas como a doação com reserva de usufruto ou a constituição de holdings familiares podem travar a alíquota atual, protegendo a família de aumentos futuros.</p>
        `,
        cover: 'assets/images/bg-hero.webp',
        category: 'Direito Tributário',
        date: '2026-01-20 14:30:00',
        author: 'Equipe R&CB'
    },
    {
        id: '3',
        slug: 'blindagem-patrimonial-mito-verdade',
        title: 'Blindagem Patrimonial: Mito ou Realidade?',
        excerpt: 'Existe proteção absoluta de bens? Analisamos os limites legais e as melhores estratégias para segurança jurídica.',
        content: `
            <p class="lead">O termo "blindagem patrimonial" é muito usado, mas juridicamente impreciso. Não existe proteção absoluta que permita a fraude contra credores, mas existem camadas de proteção lícitas e eficazes.</p>
            
            <h2>O que é permitido?</h2>
            <p>A lei permite que você organize seu patrimônio de forma a não misturá-lo com os riscos do seu negócio. Isso é gestão de riscos, não fraude.</p>
            
            <p>Ferramentas como a holding patrimonial pura separam os imóveis da família da operação comercial da empresa, garantindo que uma crise no negócio não atinja a casa onde a família mora ou os bens que garantem sua renda.</p>
        `,
        cover: 'assets/images/bg-hero.webp',
        category: 'Proteção Patrimonial',
        date: '2026-01-15 09:15:00',
        author: 'Davi Castelo Branco'
    },
    {
        id: '4',
        slug: 'testamento-vs-holding',
        title: 'Testamento vs. Holding: Qual a melhor opção?',
        excerpt: 'Comparativo detalhado entre os dois instrumentos de sucessão. Saiba qual se adequa melhor ao perfil da sua família.',
        content: `
            <p class="lead">Na hora de planejar a sucessão, muitas pessoas ficam em dúvida: faço um testamento ou abro uma holding?</p>
            
            <h2>Testamento</h2>
            <p>O testamento é um instrumento solene onde você diz para quem vão seus bens. Ele não evita o inventário (na verdade, torna-o obrigatório na via judicial em muitos casos) e não reduz impostos. É útil para dividir bens de forma desigual (respeitando a legítima) ou deixar bens para quem não é herdeiro necessário.</p>
            
            <h2>Holding Familiar</h2>
            <p>A holding, por outro lado, resolve a sucessão em vida. As quotas são doadas, o imposto é pago (geralmente sobre valor histórico, mais barato), e não há necessidade de inventário sobre esses bens. É uma solução mais completa e eficiente.</p>
        `,
        cover: 'assets/images/bg-hero.webp',
        category: 'Sucessão',
        date: '2026-01-10 11:00:00',
        author: 'Equipe R&CB'
    }
];

const BlogService = {
    /**
     * Fetch all published posts (Simulated)
     */
    async getPosts(page = 1, perPage = 6) {
        // Simulate network delay for realism
        await new Promise(resolve => setTimeout(resolve, 600));

        const start = (page - 1) * perPage;
        const end = start + perPage;
        const items = STATIC_POSTS.slice(start, end);

        return {
            items: items,
            page: page,
            perPage: perPage,
            totalItems: STATIC_POSTS.length,
            totalPages: Math.ceil(STATIC_POSTS.length / perPage)
        };
    },

    /**
     * Get a single post by slug (Simulated)
     */
    async getPostBySlug(slug) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));

        return STATIC_POSTS.find(post => post.slug === slug) || null;
    },

    /**
     * Get image URL for a record
     * Since we are using local static images, we just return the path directly or a randomly assigned one if missing.
     */
    getImageUrl(record, fileName, useThumb = false) {
        if (!fileName && record.cover) return record.cover;
        if (!fileName) return 'assets/images/bg-hero.webp'; // Fallback

        // If it's a full URL, return it
        if (fileName.startsWith('http') || fileName.startsWith('assets/')) {
            return fileName;
        }

        // Keep original logic just in case, but modify base
        return fileName;
    },

    /**
     * Format date to PT-BR string
     */
    formatDate(dateString) {
        if (!dateString) return '';
        // Handle custom format if needed, or standard date parsing
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString; // Return as is if invalid

        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('pt-BR', options);
    }
};
