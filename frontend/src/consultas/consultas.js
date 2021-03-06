//#region Configuração 
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
require('dotenv').config();
const key = process.env.KEY

app.use(cors());
const axios = require('axios');
//#endregion

//#region Tipo de Manutenção  
const tipoOSContrato = "CONTRATO B2W (MANUT. LAB / ON SITE)"
//#endregion

//#region Modelo de Equipamentos

//#region Modelo Coletores
const skorpioX3 = "COLETOR DE DADOS DATALAOGIC SKORPIO X3 - 50 TECLAS WINDOWS MOBILE 6.5";
const skorpio = "COLETOR DE DADOS DATALOGIC SKORPIO";
const motorola9090wb5C = "COLETOR DE DADOS MOTOROLA MC9090 GUN WIN MOBILE/LASER CURTA DISTANCIA";
const motorola9090wb5L = "COLETOR DE DADOS MOTOROLA MC9090 GUN WIN MOBILE/LASER LONGA DISTANCIA";
const motorola9090brik = "COLETOR DE DADOS MOTOROLA MC9090K";
const motorola9090ce5C = "COLETOR DE DADOS MOTOROLA MC9090 GUN WIN CE / LASER CURTA DISTANCIA";
const motorola9090ce5L = "COLETOR DE DADOS MOTOROLA MC9090 GUN WIN CE / LASER LONGA DISTANCIA";
const motorola9190wm65C = "COLETOR MOTOROLA MC9190G WINDOWS MOBILE / LASER CURTA DISTANCIA";
const motorola9190ce6C = "COLETOR MOTOROLA MC9190G WINDOWS CE / LASER DE CURTA DISTANCIA";
const motorola9190ce6L = "COLETOR MOTOROLA MC9190G WINDOWS CE / LASER DE LONGA DISTANCIA";
const eda50 = "COLETOR DE DADOS HONEYWELL EDA50 COM ANDROID";
const eda50k = "COLETOR DE DADOS HONEYWELL SCANPAL EDA50K";
const eda51 = "COLETOR DE DADOS HONEYWELL EDA51 ANDROID , 2D , WIFI , BLUETOOTH , NFC";
//#endregion

//#region Modelo Impressoras
    const impressoaS4M = "IMPRESSORA TERMICA ZEBRA S4M 203 DPI C/ USB , PARALELO , SERIAL";
    const impressoraZT230 = "IMPRESSORA TÉRMICA ZEBRA ZT230 - 203 DPI";
    const impressora110XI3 = "IMPRESSORA TÉRMICA ZEBRA 110XiIII";
    const impressora110XI4 = "IMPRESSORA TÉRMICA ZEBRA 110XI4";
    const impressoraAgorxOS214 = "IMPRESSORA TÉRMICA ARGOX OS-214 PLUS";
    const impressoraGC420T = "IMPRESSORA TERMICA ZEBRA GC420T";

//#endregion

//#region Modelo Leitores
    const baseLS3578 = "BASE DO LEITOR DE DADOS SYMBOL LS3578";
    const leitorDS3578 = "LEITOR DE DADOS MOTOROLA DS3578";
    const leitorLS3578 = "LEITOR DE DADOS MOTOROLA LS3578";
    const leitorLS2208 = "LEITOR DE DADOS MOTOROLA LS2208";
    const leitorLI4278 = "LEITOR DE DADOS MOTOROLA LI4278 BLUETOOTH";
    const leitorLS3408b = "LEITOR DE DADOS MOTOROLA LS3408 COM BASE";
    const leitorLS3408u = "LEITOR DE DADOS MOTOROLA LS3408 USB";
    const leitorDatalogicGD4430 = "LEITOR DE DADOS 2D DATALOGIC GRYPHON GD4430 USB";
    const leitorDatalogicGM4400 = "LEITOR DE DADOS 2D DATALOGIC GRYPHON GM4400 BLUETOOTH";
    const leitorHoneyVoy1202G = "LEITOR DE DADOS HONEYWELL VOYAGER 1202G";
    const leitorCompexH100 = "LEITOR DE DADOS COMPEX CPX-HR100";
    const leitorDS2278 = "LEITOR DE CODIGO DE BARRAS SYMBOL DS2278";
    const leitorDS2278b = "BASE DO LEITOR ZEBRA DS2278";
//#endregion

//#endregion

//#region Api Coletores
app.get('/coletores/:estagio', async (req, res) => {
        const estagioReq  = req.params.estagio; 
        const data = await axios(`https://cosmoserp.com/zhaz/aWSPCosmosFBX.aspx?${key},vApiOS,${estagioReq}`);
        const coletores = data.data;
        let dadosColetores = { dado: [] };
        await formataData(coletores);

        for (let i = 0; i < coletores.length; i++) {
            let descricao = coletores[i].DescricaoTipoOS;
            let Equipamento = coletores[i].NomeEquipamento;
            if ((descricao === tipoOSContrato) && (Equipamento == skorpioX3)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9090wb5C)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9090wb5L)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9090brik)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9090ce5C)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9090ce5L)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9190ce6C)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9190ce6L)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9190wm65C)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == eda50)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == eda50k)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == eda51)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == skorpio)) {
                dadosColetores.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
        }    
    res.json(dadosColetores.dado);
})
//#endregion

//#region Api Impressoras
    app.get('/impressoras/:estagio', async (req, res) => {
        const estagioReq = req.params.estagio;
        const dataImp = await axios(`https://cosmoserp.com/zhaz/aWSPCosmosFBX.aspx?${key},vApiOS,${estagioReq}`);
        const impressoras = dataImp.data;
        let dadosImpressoras = { dado: [] };
        await formataData(impressoras);

        for (let i = 0; i < impressoras.length; i++) {
            let descricao = impressoras[i].DescricaoTipoOS;
            let Equipamento = impressoras[i].NomeEquipamento;
            if ((descricao === tipoOSContrato) && (Equipamento == impressoaS4M)) {
                dadosImpressoras.dado.push({
                    OS: impressoras[i].OSID,
                    Data: impressoras[i].OSData,
                    Cliente: impressoras[i].PessoaFantasia,
                    Equipamento: impressoras[i].NomeEquipamento,
                    NS: impressoras[i].EquipamentoLTS,
                    Data_Move: impressoras[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == impressoraZT230)) {
                dadosImpressoras.dado.push({
                    OS: impressoras[i].OSID,
                    Data: impressoras[i].OSData,
                    Cliente: impressoras[i].PessoaFantasia,
                    Equipamento: impressoras[i].NomeEquipamento,
                    NS: impressoras[i].EquipamentoLTS,
                    Data_Move: impressoras[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == impressora110XI3)) {
                dadosImpressoras.dado.push({
                    OS: impressoras[i].OSID,
                    Data: impressoras[i].OSData,
                    Cliente: impressoras[i].PessoaFantasia,
                    Equipamento: impressoras[i].NomeEquipamento,
                    NS: impressoras[i].EquipamentoLTS,
                    Data_Move: impressoras[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == impressora110XI4)) {
                dadosImpressoras.dado.push({
                    OS: impressoras[i].OSID,
                    Data: impressoras[i].OSData,
                    Cliente: impressoras[i].PessoaFantasia,
                    Equipamento: impressoras[i].NomeEquipamento,
                    NS: impressoras[i].EquipamentoLTS,
                    Data_Move: impressoras[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == impressoraAgorxOS214)) {
                dadosImpressoras.dado.push({
                    OS: impressoras[i].OSID,
                    Data: impressoras[i].OSData,
                    Cliente: impressoras[i].PessoaFantasia,
                    Equipamento: impressoras[i].NomeEquipamento,
                    NS: impressoras[i].EquipamentoLTS,
                    Data_Move: impressoras[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == impressoraGC420T)) {
                dadosImpressoras.dado.push({
                    OS: impressoras[i].OSID,
                    Data: impressoras[i].OSData,
                    Cliente: impressoras[i].PessoaFantasia,
                    Equipamento: impressoras[i].NomeEquipamento,
                    NS: impressoras[i].EquipamentoLTS,
                    Data_Move: impressoras[i].DataFinalMovto
                })
            }
        }

        res.json(dadosImpressoras.dado)
    })

//#endregion

//#region Api Leitores
    app.get('/leitores/:estagio', async(req, res) => {
        const estagioReq = req.params.estagio;
        const dataLeitor = await axios(`https://cosmoserp.com/zhaz/aWSPCosmosFBX.aspx?${key},vApiOS,${estagioReq}`);
        const leitores = dataLeitor.data;
        let dadosLeitores = { dado : [] };
        await formataData(leitores);

        for (let i = 0; i < leitores.length; i++) {
            let descricao = leitores[i].DescricaoTipoOS;
            let Equipamento = leitores[i].NomeEquipamento;
            if ((descricao === tipoOSContrato) && (Equipamento == baseLS3578)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorDS3578)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorLS3578)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorLS2208)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorLI4278)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorLS3408b)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorLS3408u)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorDatalogicGD4430)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorDatalogicGM4400)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorHoneyVoy1202G)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorCompexH100)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorDS2278)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == leitorDS2278b)) {
                dadosLeitores.dado.push({
                    OS: leitores[i].OSID,
                    Data: leitores[i].OSData,
                    Cliente: leitores[i].PessoaFantasia,
                    Equipamento: leitores[i].NomeEquipamento,
                    NS: leitores[i].EquipamentoLTS,
                    Data_Move: leitores[i].DataFinalMovto
                })
            }
        }
      
        res.send(dadosLeitores.dado)
    })
//#endregion

//#region Servidor

app.listen(port, () => {
    try {
        console.log("Servidor rodando http://localhost:" + port);

    } catch (error) {
        console.log("Error: " + error);
    }
})
//#endregion

//#region formatação de data e hora

formataData = async (dataItem) => {
    for (var i = 0; i < dataItem.length; i++) {
        var dataA = dataItem[i];
        var dataF = await dataA.OSData.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1-$4:$5');
        dataA.OSData = await dataF;
    }

    for (var i = 0; i < dataItem.length; i++) {
        var dataA = dataItem[i];
        var dataF = await dataA.DataFinalMovto.replace(/(\d*)-(\d*)-(\d*)T(\d*):(\d*).*/, '$3/$2/$1 $4:$5');
        dataA.DataFinalMovto = await dataF;
    }
}

formataHora = async (dataHora) =>{
    for (var i = 0; i < dataHora.length; i++) {
        var data = await dataHora[i];
        var hora = await data.DataFinalMovto.replace(/(\d*)/, )  
    }
}

//#endregion