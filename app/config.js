var config = {
    salvarDados: true,
    debug: false,
    waterMark: false,
    language: 'pt-br',
    video: 'default',
    lms: {
        name: 'default'
    },
    acessibility: {
        tools: true,
        outlines: false,
        vlibras: false,
        customLibras: false
    },
    behaviors: {
        adaptive: false,
        width: 1920,
        height: 1080,
        fontSize: 30
    },
    modalVoltar: {
        active: false,
        msg: 'Você quer continuar de onde parou ou reiniciar o curso?',
        yes: 'CONTINUAR',
        no: 'REINICIAR',
        color: '#0a698d'
    },
    pages: [{
            uid: '01-pag',
            src: '01-pag/index.html'
        },
        {
            uid: '02-pag',
            src: '02-pag/index.html'
        },
        {
            uid: '03-pag',
            src: '03-pag/index.html'
        },
        {
            uid: 'a-01',
            src: 'a-01/index.html'
        },
        {
            uid: 'a-02',
            src: 'a-02/index.html'
        },
        {
            uid: 'a-03',
            src: 'a-03/index.html'
        },
        {
            uid: 'b-01',
            src: 'b-01/index.html'
        },
        {
            uid: 'b-02',
            src: 'b-02/index.html'
        },
        {
            uid: 'b-03',
            src: 'b-03/index.html'
        },
        {
            uid: 'c-01',
            src: 'c-01/index.html'
        },
        {
            uid: 'c-02',
            src: 'c-02/index.html'
        },
        {
            uid: 'c-03',
            src: 'c-03/index.html'
        },
        {
            uid: 'd-01',
            src: 'd-01/index.html'
        },
        {
            uid: 'd-02',
            src: 'd-02/index.html'
        },
        {
            uid: 'd-03',
            src: 'd-03/index.html'
        },
        {
            uid: 'y-pag',
            src: 'y-pag/index.html'
        },
        {
            uid: 'z-pag',
            src: 'z-pag/index.html'
        }
    ]
};
try {
    module.exports = config;
} catch (e) {}