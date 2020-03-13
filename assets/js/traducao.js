let idiomaPadrao = 'pt-br';
let DATA_LANG_ELEMENTS = document.querySelectorAll('[data-lang-str]');

$(document).ready(function () {
    // iniciar o site com o idioma do navegador
    translate(idiomaPadrao);
});

let configTraducoes = {
    'en': {
        'mh-home': 'Home page',
        'mh-about': 'About me',
        'mh-experience': 'Experiences',
        'mh-portfolio': 'Portfolio',
        'span-saudacao': 'Hello, my name is',
        'ap-work': 'Web developer',
        'sobre': 'About me',
        'apresentacao': `Graduated in Internet Systems. I'm ${calcularIdade()} years old and passionate about technology. Nowadays I work as Software Engineer-Middle in a multinational at Porto Digital in Recife, focused on Front-end inSharePoint solutions. I like to be challeged and I'm always trying to quit my comfort zone.`,

        'ap-work-1': 'Web development',
        'ap-work-2': 'Application Development',

        'formacao': 'FORMATION',
        'curso': 'Systems for internet',
        'titulo-referencia': 'PROFESSIONAL REFERENCES',

        'atv-mv-1': 'Execution of manual tests in the Strategic Systems application for release releases;',
        'atv-mv-2': 'Preparation of product test cases;',
        'atv-mv-3': 'Elaboration of automated product tests, using selenium, C # and JavaScript;',
        'atv-mv-4': 'Opening tickets for flagging errors and possible software improvements.',

        'atv-avanade-1': 'Development and maintenance on SharePoint systems;',
        'atv-avanade-2': 'Development and maintenance of WEB systems (HTML5, CSS3, JavaScript);',
        'atv-avanade-3': 'Database manipulation, using SQL Server;',
        'atv-avanade-4': 'SharePoint Framework with\ g React;',
        "atv-avanade-6": "Business Connectivity Services in SharePoint, using SQL Server on Azure;",
        "atv-avanade-7": "Web API with C #.",

        'portfolio': 'Portfolio',

        'desc-frequency': 'The Frequency FICR was a project developed at the college to conclude the course',
        'btn-detalhes': '+ Details',
        'desc-coogema': 'Volunteer work for COOGEMA, an NGO, self-sustaining, of technical members, who comes to solve management and innovation problems of social entities, with the objective of reconciling social, technological, educational, environmental, economic and cultural aspects, generating values and productive impact. ',

        'desc-ariano': 'First project developed as a web developer, at CRC Recife.',
        'oque-faco': 'What do I do',
        'certicacao': 'CERTIFICATIONS',
        'periodo-avanade': '05/2019 - Current',
    },
    'pt-br': {
        'mh-home': 'Página inicial',
        'mh-about': 'Sobre mim',
        'mh-experience': 'Experiências',
        'mh-portfolio': 'Portfólio',
        'span-saudacao': 'Olá, me chamo',
        'ap-work': 'Desenvolvedor Web',
        'sobre': 'Sobre mim',
        'apresentacao': `Formado em Sistemas para internet, ${calcularIdade()} anos. Apaixonado por tecnologia. Atualmente estou atuando como Software Engineer - Pleno em uma multinacional localizada no Porto Digital em Recife, com o foco em Front-end de soluções SharePoint. Gosto de ser desafiado e estou sempre buscando sair da minha zona de conforto.`,
        'ap-work-1': 'Desenvolvimento web',
        'ap-work-2': 'Desenvolvimento de Aplicativos',
        'formacao': 'FORMAÇÃO',
        'curso': 'Sistemas para internet',
        'titulo-referencia': 'REFERÊNCIAS PROFISSIONAIS',

        'atv-mv-1': 'Execução de testes manuais na aplicação Sistemas Estratégicos para liberação de releases;',
        'atv-mv-2': 'Elaboração de casos de testes do produto;',
        'atv-mv-3': 'Elaboração de testes automatizados do produto, utilizando selenium, C# e JavaScript;',
        'atv-mv-4': 'Abertura de tickets para sinalização de erros e possíveis melhorias no software.',

        'atv-avanade-1': 'Desenvolvimento e manutenção em sistemas SharePoint;',
        'atv-avanade-2': 'Desenvolvimento e manutenção de sistemas WEB (HTML5, CSS3, JavaScript);',
        'atv-avanade-3': 'Manipulação de Banco de Dados, utilizando o SQL Server;',
        'atv-avanade-4': 'SharePoint Framework com React;',
        "atv-avanade-6": "Serviços Corporativos de Conectividade no SharePoint, utilizando o SQL Server no Azure;",
        "atv-avanade-7": "Web API com C#.",

        'portfolio': 'Portfólio',
        'desc-frequency': 'O Frequency FICR foi projeto desenvolvido na faculdade para conclusão de curso',
        'btn-detalhes': '+ Detalhes',
        'desc-coogema': 'Trabalho voluntario para a COOGEMA uma ONGOSC, autossustentável, de cooperados técnicos, que vem solucionar problemas de gestão e inovação das entidades sociais, com objetivos de compatibilizar os aspectos sociais, tecnológicos, educacionais, ambientais, econômicos e culturais, gerando valores e impacto produtivo.',

        'desc-ariano': ' Primeiro projeto desenvolvido como desenvolvedor web, no CRC Recife.',
        'oque-faco': 'O que faço',
        'certicacao': 'CERTIFICAÇÕES',
        'periodo-avanade': '05/2019 - Atual',

    }
};

const translate = (lang = null) => {
    if (lang === null) {
        lang = idiomaPadrao;
    }

    // Verifica se o idioma selecionado existe.
    if (configTraducoes[lang]) {
        DATA_LANG_ELEMENTS.forEach((el) => {
            let STR = el.getAttribute('data-lang-str');
            if (configTraducoes[lang][STR]) {
                el.innerText = (configTraducoes[lang][STR]);
            }
        });
    }
}

let btnIdioma = document.querySelectorAll('[name=btn-translate]');
btnIdioma.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
        translate(btn.getAttribute('data-lang'));
    });
});

function calcularIdade() {
    // A idade será calculada levando em consideração a data atual
    return Math.floor(moment(new Date()).diff(moment("1996-12-15"), 'years', true));
}

