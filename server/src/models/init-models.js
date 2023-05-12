var DataTypes = require("sequelize").DataTypes;
var _acesso = require("./acesso");
var _acessocloud = require("./acessocloud");
var _agenda = require("./agenda");
var _agendador = require("./agendador");
var _apuracao = require("./apuracao");
var _balanco = require("./balanco");
var _caborcamento = require("./caborcamento");
var _cadprod = require("./cadprod");
var _cadsegmento = require("./cadsegmento");
var _cancelamentos = require("./cancelamentos");
var _cancvenda = require("./cancvenda");
var _carga = require("./carga");
var _cartoes = require("./cartoes");
var _categoria = require("./categoria");
var _cb = require("./cb");
var _cest = require("./cest");
var _cfop = require("./cfop");
var _cfop2 = require("./cfop2");
var _clientes = require("./clientes");
var _clientes_pet = require("./clientes_pet");
var _clientes_pet_exames = require("./clientes_pet_exames");
var _clientes_pet_prontuario = require("./clientes_pet_prontuario");
var _clientes_pet_receitas = require("./clientes_pet_receitas");
var _clientesad = require("./clientesad");
var _clientescloud = require("./clientescloud");
var _codcfop = require("./codcfop");
var _codmunicip = require("./codmunicip");
var _compras = require("./compras");
var _concbancaria = require("./concbancaria");
var _concbanco = require("./concbanco");
var _concbancos = require("./concbancos");
var _conccontas = require("./conccontas");
var _config1 = require("./config1");
var _contabilista = require("./contabilista");
var _contribuinte = require("./contribuinte");
var _correlacaocfop = require("./correlacaocfop");
var _correlacaocfopcst = require("./correlacaocfopcst");
var _cotacao = require("./cotacao");
var _cotacaoold = require("./cotacaoold");
var _cotacaoprod = require("./cotacaoprod");
var _cotacaoprodold = require("./cotacaoprodold");
var _cotalista = require("./cotalista");
var _csticms = require("./csticms");
var _cupom = require("./cupom");
var _cupons = require("./cupons");
var _cupons_vendidos = require("./cupons_vendidos");
var _cupons_vendidos_cancelados = require("./cupons_vendidos_cancelados");
var _deptos = require("./deptos");
var _dupcob = require("./dupcob");
var _dupconfpag = require("./dupconfpag");
var _dupextrato = require("./dupextrato");
var _dupextratoocorrencia = require("./dupextratoocorrencia");
var _dupmov = require("./dupmov");
var _dupocorrencia = require("./dupocorrencia");
var _duppagar = require("./duppagar");
var _duppagarold = require("./duppagarold");
var _dupreceber = require("./dupreceber");
var _dupreceberold = require("./dupreceberold");
var _ecf = require("./ecf");
var _empresa = require("./empresa");
var _empresalojas = require("./empresalojas");
var _entrada = require("./entrada");
var _entrada_cega = require("./entrada_cega");
var _entradaref = require("./entradaref");
var _entradaservico = require("./entradaservico");
var _entregas = require("./entregas");
var _est_comp = require("./est_comp");
var _estacionamento = require("./estacionamento");
var _estoque = require("./estoque");
var _estoque0701 = require("./estoque0701");
var _estoque_aux = require("./estoque_aux");
var _estoqueajustes = require("./estoqueajustes");
var _estoquecesta = require("./estoquecesta");
var _estoquecloud = require("./estoquecloud");
var _estoquecomposicao = require("./estoquecomposicao");
var _estoquecustobase = require("./estoquecustobase");
var _estoquedesdobcab = require("./estoquedesdobcab");
var _estoquedesdobitens = require("./estoquedesdobitens");
var _estoquefam09012022 = require("./estoquefam09012022");
var _estoqueinativo = require("./estoqueinativo");
var _estoquejunior16122021 = require("./estoquejunior16122021");
var _estoqueloja = require("./estoqueloja");
var _estoquelojacloud = require("./estoquelojacloud");
var _estoquelojaold = require("./estoquelojaold");
var _estoquenutricionais = require("./estoquenutricionais");
var _estoqueold = require("./estoqueold");
var _estoqueold20211216 = require("./estoqueold20211216");
var _estoqueprecompra = require("./estoqueprecompra");
var _estoquetabpreco = require("./estoquetabpreco");
var _estoquevendas = require("./estoquevendas");
var _estoqueviaplan = require("./estoqueviaplan");
var _eventonfe = require("./eventonfe");
var _familia = require("./familia");
var _fechamento = require("./fechamento");
var _ficha = require("./ficha");
var _finalizadores = require("./finalizadores");
var _fincadast = require("./fincadast");
var _fornec = require("./fornec");
var _fornec2 = require("./fornec2");
var _fornec3 = require("./fornec3");
var _forneccloud = require("./forneccloud");
var _forneccobr = require("./forneccobr");
var _fornecprod = require("./fornecprod");
var _grade = require("./grade");
var _grupocontas = require("./grupocontas");
var _grupocontas2 = require("./grupocontas2");
var _ibptax = require("./ibptax");
var _importacao = require("./importacao");
var _invent = require("./invent");
var _inventario = require("./inventario");
var _itcanc = require("./itcanc");
var _itens_invent = require("./itens_invent");
var _itens_vendidos = require("./itens_vendidos");
var _itensficha = require("./itensficha");
var _logcad = require("./logcad");
var _logcotacao = require("./logcotacao");
var _logpreco1 = require("./logpreco1");
var _logpromocao1 = require("./logpromocao1");
var _markup = require("./markup");
var _mercadorias = require("./mercadorias");
var _mercadorias2 = require("./mercadorias2");
var _monitoramento = require("./monitoramento");
var _monitorecf = require("./monitorecf");
var _mxf_tmp_produtos = require("./mxf_tmp_produtos");
var _nfeespiao = require("./nfeespiao");
var _nfenatureza = require("./nfenatureza");
var _nfenaturezaoperacoes = require("./nfenaturezaoperacoes");
var _nfeunidades = require("./nfeunidades");
var _nfp = require("./nfp");
var _oper_ger_credito = require("./oper_ger_credito");
var _operacoes = require("./operacoes");
var _operacoesold = require("./operacoesold");
var _organizador = require("./organizador");
var _pedido = require("./pedido");
var _pedidoitens = require("./pedidoitens");
var _pedtabelacom = require("./pedtabelacom");
var _plu = require("./plu");
var _prod_entrada = require("./prod_entrada");
var _prod_entrada_cega = require("./prod_entrada_cega");
var _prod_orcamento = require("./prod_orcamento");
var _prodcompras = require("./prodcompras");
var _prodorcamento = require("./prodorcamento");
var _produtos = require("./produtos");
var _redes = require("./redes");
var _reducaoz = require("./reducaoz");
var _representantes = require("./representantes");
var _saidas = require("./saidas");
var _sintegra = require("./sintegra");
var _spedconta = require("./spedconta");
var _sqlcc = require("./sqlcc");
var _subcategoria = require("./subcategoria");
var _subgrupo = require("./subgrupo");
var _tabelacart = require("./tabelacart");
var _tbl_carrinho = require("./tbl_carrinho");
var _tbl_produtos = require("./tbl_produtos");
var _temas = require("./temas");
var _tmp_un = require("./tmp_un");
var _tribut = require("./tribut");
var _tributacaoon = require("./tributacaoon");
var _tributos = require("./tributos");
var _uf = require("./uf");
var _validade = require("./validade");
var _vendedor = require("./vendedor");

function initModels(sequelize) {
  var acesso = _acesso(sequelize, DataTypes);
  var acessocloud = _acessocloud(sequelize, DataTypes);
  var agenda = _agenda(sequelize, DataTypes);
  var agendador = _agendador(sequelize, DataTypes);
  var apuracao = _apuracao(sequelize, DataTypes);
  var balanco = _balanco(sequelize, DataTypes);
  var caborcamento = _caborcamento(sequelize, DataTypes);
  var cadprod = _cadprod(sequelize, DataTypes);
  var cadsegmento = _cadsegmento(sequelize, DataTypes);
  var cancelamentos = _cancelamentos(sequelize, DataTypes);
  var cancvenda = _cancvenda(sequelize, DataTypes);
  var carga = _carga(sequelize, DataTypes);
  var cartoes = _cartoes(sequelize, DataTypes);
  var categoria = _categoria(sequelize, DataTypes);
  var cb = _cb(sequelize, DataTypes);
  var cest = _cest(sequelize, DataTypes);
  var cfop = _cfop(sequelize, DataTypes);
  var cfop2 = _cfop2(sequelize, DataTypes);
  var clientes = _clientes(sequelize, DataTypes);
  var clientes_pet = _clientes_pet(sequelize, DataTypes);
  var clientes_pet_exames = _clientes_pet_exames(sequelize, DataTypes);
  var clientes_pet_prontuario = _clientes_pet_prontuario(sequelize, DataTypes);
  var clientes_pet_receitas = _clientes_pet_receitas(sequelize, DataTypes);
  var clientesad = _clientesad(sequelize, DataTypes);
  var clientescloud = _clientescloud(sequelize, DataTypes);
  var codcfop = _codcfop(sequelize, DataTypes);
  var codmunicip = _codmunicip(sequelize, DataTypes);
  var compras = _compras(sequelize, DataTypes);
  var concbancaria = _concbancaria(sequelize, DataTypes);
  var concbanco = _concbanco(sequelize, DataTypes);
  var concbancos = _concbancos(sequelize, DataTypes);
  var conccontas = _conccontas(sequelize, DataTypes);
  var config1 = _config1(sequelize, DataTypes);
  var contabilista = _contabilista(sequelize, DataTypes);
  var contribuinte = _contribuinte(sequelize, DataTypes);
  var correlacaocfop = _correlacaocfop(sequelize, DataTypes);
  var correlacaocfopcst = _correlacaocfopcst(sequelize, DataTypes);
  var cotacao = _cotacao(sequelize, DataTypes);
  var cotacaoold = _cotacaoold(sequelize, DataTypes);
  var cotacaoprod = _cotacaoprod(sequelize, DataTypes);
  var cotacaoprodold = _cotacaoprodold(sequelize, DataTypes);
  var cotalista = _cotalista(sequelize, DataTypes);
  var csticms = _csticms(sequelize, DataTypes);
  var cupom = _cupom(sequelize, DataTypes);
  var cupons = _cupons(sequelize, DataTypes);
  var cupons_vendidos = _cupons_vendidos(sequelize, DataTypes);
  var cupons_vendidos_cancelados = _cupons_vendidos_cancelados(sequelize, DataTypes);
  var deptos = _deptos(sequelize, DataTypes);
  var dupcob = _dupcob(sequelize, DataTypes);
  var dupconfpag = _dupconfpag(sequelize, DataTypes);
  var dupextrato = _dupextrato(sequelize, DataTypes);
  var dupextratoocorrencia = _dupextratoocorrencia(sequelize, DataTypes);
  var dupmov = _dupmov(sequelize, DataTypes);
  var dupocorrencia = _dupocorrencia(sequelize, DataTypes);
  var duppagar = _duppagar(sequelize, DataTypes);
  var duppagarold = _duppagarold(sequelize, DataTypes);
  var dupreceber = _dupreceber(sequelize, DataTypes);
  var dupreceberold = _dupreceberold(sequelize, DataTypes);
  var ecf = _ecf(sequelize, DataTypes);
  var empresa = _empresa(sequelize, DataTypes);
  var empresalojas = _empresalojas(sequelize, DataTypes);
  var entrada = _entrada(sequelize, DataTypes);
  var entrada_cega = _entrada_cega(sequelize, DataTypes);
  var entradaref = _entradaref(sequelize, DataTypes);
  var entradaservico = _entradaservico(sequelize, DataTypes);
  var entregas = _entregas(sequelize, DataTypes);
  var est_comp = _est_comp(sequelize, DataTypes);
  var estacionamento = _estacionamento(sequelize, DataTypes);
  var estoque = _estoque(sequelize, DataTypes);
  var estoque0701 = _estoque0701(sequelize, DataTypes);
  var estoque_aux = _estoque_aux(sequelize, DataTypes);
  var estoqueajustes = _estoqueajustes(sequelize, DataTypes);
  var estoquecesta = _estoquecesta(sequelize, DataTypes);
  var estoquecloud = _estoquecloud(sequelize, DataTypes);
  var estoquecomposicao = _estoquecomposicao(sequelize, DataTypes);
  var estoquecustobase = _estoquecustobase(sequelize, DataTypes);
  var estoquedesdobcab = _estoquedesdobcab(sequelize, DataTypes);
  var estoquedesdobitens = _estoquedesdobitens(sequelize, DataTypes);
  var estoquefam09012022 = _estoquefam09012022(sequelize, DataTypes);
  var estoqueinativo = _estoqueinativo(sequelize, DataTypes);
  var estoquejunior16122021 = _estoquejunior16122021(sequelize, DataTypes);
  var estoqueloja = _estoqueloja(sequelize, DataTypes);
  var estoquelojacloud = _estoquelojacloud(sequelize, DataTypes);
  var estoquelojaold = _estoquelojaold(sequelize, DataTypes);
  var estoquenutricionais = _estoquenutricionais(sequelize, DataTypes);
  var estoqueold = _estoqueold(sequelize, DataTypes);
  var estoqueold20211216 = _estoqueold20211216(sequelize, DataTypes);
  var estoqueprecompra = _estoqueprecompra(sequelize, DataTypes);
  var estoquetabpreco = _estoquetabpreco(sequelize, DataTypes);
  var estoquevendas = _estoquevendas(sequelize, DataTypes);
  var estoqueviaplan = _estoqueviaplan(sequelize, DataTypes);
  var eventonfe = _eventonfe(sequelize, DataTypes);
  var familia = _familia(sequelize, DataTypes);
  var fechamento = _fechamento(sequelize, DataTypes);
  var ficha = _ficha(sequelize, DataTypes);
  var finalizadores = _finalizadores(sequelize, DataTypes);
  var fincadast = _fincadast(sequelize, DataTypes);
  var fornec = _fornec(sequelize, DataTypes);
  var fornec2 = _fornec2(sequelize, DataTypes);
  var fornec3 = _fornec3(sequelize, DataTypes);
  var forneccloud = _forneccloud(sequelize, DataTypes);
  var forneccobr = _forneccobr(sequelize, DataTypes);
  var fornecprod = _fornecprod(sequelize, DataTypes);
  var grade = _grade(sequelize, DataTypes);
  var grupocontas = _grupocontas(sequelize, DataTypes);
  var grupocontas2 = _grupocontas2(sequelize, DataTypes);
  var ibptax = _ibptax(sequelize, DataTypes);
  var importacao = _importacao(sequelize, DataTypes);
  var invent = _invent(sequelize, DataTypes);
  var inventario = _inventario(sequelize, DataTypes);
  var itcanc = _itcanc(sequelize, DataTypes);
  var itens_invent = _itens_invent(sequelize, DataTypes);
  var itens_vendidos = _itens_vendidos(sequelize, DataTypes);
  var itensficha = _itensficha(sequelize, DataTypes);
  var logcad = _logcad(sequelize, DataTypes);
  var logcotacao = _logcotacao(sequelize, DataTypes);
  var logpreco1 = _logpreco1(sequelize, DataTypes);
  var logpromocao1 = _logpromocao1(sequelize, DataTypes);
  var markup = _markup(sequelize, DataTypes);
  var mercadorias = _mercadorias(sequelize, DataTypes);
  var mercadorias2 = _mercadorias2(sequelize, DataTypes);
  var monitoramento = _monitoramento(sequelize, DataTypes);
  var monitorecf = _monitorecf(sequelize, DataTypes);
  var mxf_tmp_produtos = _mxf_tmp_produtos(sequelize, DataTypes);
  var nfeespiao = _nfeespiao(sequelize, DataTypes);
  var nfenatureza = _nfenatureza(sequelize, DataTypes);
  var nfenaturezaoperacoes = _nfenaturezaoperacoes(sequelize, DataTypes);
  var nfeunidades = _nfeunidades(sequelize, DataTypes);
  var nfp = _nfp(sequelize, DataTypes);
  var oper_ger_credito = _oper_ger_credito(sequelize, DataTypes);
  var operacoes = _operacoes(sequelize, DataTypes);
  var operacoesold = _operacoesold(sequelize, DataTypes);
  var organizador = _organizador(sequelize, DataTypes);
  var pedido = _pedido(sequelize, DataTypes);
  var pedidoitens = _pedidoitens(sequelize, DataTypes);
  var pedtabelacom = _pedtabelacom(sequelize, DataTypes);
  var plu = _plu(sequelize, DataTypes);
  var prod_entrada = _prod_entrada(sequelize, DataTypes);
  var prod_entrada_cega = _prod_entrada_cega(sequelize, DataTypes);
  var prod_orcamento = _prod_orcamento(sequelize, DataTypes);
  var prodcompras = _prodcompras(sequelize, DataTypes);
  var prodorcamento = _prodorcamento(sequelize, DataTypes);
  var produtos = _produtos(sequelize, DataTypes);
  var redes = _redes(sequelize, DataTypes);
  var reducaoz = _reducaoz(sequelize, DataTypes);
  var representantes = _representantes(sequelize, DataTypes);
  var saidas = _saidas(sequelize, DataTypes);
  var sintegra = _sintegra(sequelize, DataTypes);
  var spedconta = _spedconta(sequelize, DataTypes);
  var sqlcc = _sqlcc(sequelize, DataTypes);
  var subcategoria = _subcategoria(sequelize, DataTypes);
  var subgrupo = _subgrupo(sequelize, DataTypes);
  var tabelacart = _tabelacart(sequelize, DataTypes);
  var tbl_carrinho = _tbl_carrinho(sequelize, DataTypes);
  var tbl_produtos = _tbl_produtos(sequelize, DataTypes);
  var temas = _temas(sequelize, DataTypes);
  var tmp_un = _tmp_un(sequelize, DataTypes);
  var tribut = _tribut(sequelize, DataTypes);
  var tributacaoon = _tributacaoon(sequelize, DataTypes);
  var tributos = _tributos(sequelize, DataTypes);
  var uf = _uf(sequelize, DataTypes);
  var validade = _validade(sequelize, DataTypes);
  var vendedor = _vendedor(sequelize, DataTypes);


  return {
    acesso,
    acessocloud,
    agenda,
    agendador,
    apuracao,
    balanco,
    caborcamento,
    cadprod,
    cadsegmento,
    cancelamentos,
    cancvenda,
    carga,
    cartoes,
    categoria,
    cb,
    cest,
    cfop,
    cfop2,
    clientes,
    clientes_pet,
    clientes_pet_exames,
    clientes_pet_prontuario,
    clientes_pet_receitas,
    clientesad,
    clientescloud,
    codcfop,
    codmunicip,
    compras,
    concbancaria,
    concbanco,
    concbancos,
    conccontas,
    config1,
    contabilista,
    contribuinte,
    correlacaocfop,
    correlacaocfopcst,
    cotacao,
    cotacaoold,
    cotacaoprod,
    cotacaoprodold,
    cotalista,
    csticms,
    cupom,
    cupons,
    cupons_vendidos,
    cupons_vendidos_cancelados,
    deptos,
    dupcob,
    dupconfpag,
    dupextrato,
    dupextratoocorrencia,
    dupmov,
    dupocorrencia,
    duppagar,
    duppagarold,
    dupreceber,
    dupreceberold,
    ecf,
    empresa,
    empresalojas,
    entrada,
    entrada_cega,
    entradaref,
    entradaservico,
    entregas,
    est_comp,
    estacionamento,
    estoque,
    estoque0701,
    estoque_aux,
    estoqueajustes,
    estoquecesta,
    estoquecloud,
    estoquecomposicao,
    estoquecustobase,
    estoquedesdobcab,
    estoquedesdobitens,
    estoquefam09012022,
    estoqueinativo,
    estoquejunior16122021,
    estoqueloja,
    estoquelojacloud,
    estoquelojaold,
    estoquenutricionais,
    estoqueold,
    estoqueold20211216,
    estoqueprecompra,
    estoquetabpreco,
    estoquevendas,
    estoqueviaplan,
    eventonfe,
    familia,
    fechamento,
    ficha,
    finalizadores,
    fincadast,
    fornec,
    fornec2,
    fornec3,
    forneccloud,
    forneccobr,
    fornecprod,
    grade,
    grupocontas,
    grupocontas2,
    ibptax,
    importacao,
    invent,
    inventario,
    itcanc,
    itens_invent,
    itens_vendidos,
    itensficha,
    logcad,
    logcotacao,
    logpreco1,
    logpromocao1,
    markup,
    mercadorias,
    mercadorias2,
    monitoramento,
    monitorecf,
    mxf_tmp_produtos,
    nfeespiao,
    nfenatureza,
    nfenaturezaoperacoes,
    nfeunidades,
    nfp,
    oper_ger_credito,
    operacoes,
    operacoesold,
    organizador,
    pedido,
    pedidoitens,
    pedtabelacom,
    plu,
    prod_entrada,
    prod_entrada_cega,
    prod_orcamento,
    prodcompras,
    prodorcamento,
    produtos,
    redes,
    reducaoz,
    representantes,
    saidas,
    sintegra,
    spedconta,
    sqlcc,
    subcategoria,
    subgrupo,
    tabelacart,
    tbl_carrinho,
    tbl_produtos,
    temas,
    tmp_un,
    tribut,
    tributacaoon,
    tributos,
    uf,
    validade,
    vendedor,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
