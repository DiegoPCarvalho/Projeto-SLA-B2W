const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
const axios = require('axios');
const chave = require('../../chave.js');

//Tipo de Contrato
const tipoOSContrato = "CONTRATO B2W (MANUT. LAB / ON SITE)"

//Modelo Coletores
const skorpioX3 = "COLETOR DE DADOS DATALAOGIC SKORPIO X3 - 50 TECLAS WINDOWS MOBILE 6.5";
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



app.get('/coletores/:estagio', async (req, res) => {
        const estagioReq  = req.params.estagio; 
        const data = await axios(`https://cosmoserp.com/zhaz/aWSPCosmosFBX.aspx?${chave.key},vApiOS,${estagioReq}`);
        const coletores = data.data;
        let dadosChegar = { dado: [] };


        for (let i = 0; i < coletores.length; i++) {
            let descricao = coletores[i].DescricaoTipoOS;
            let Equipamento = coletores[i].NomeEquipamento;
            if ((descricao === tipoOSContrato) && (Equipamento == skorpioX3)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9090wb5C)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9090wb5L)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9090brik)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9090ce5C)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9090ce5L)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9190ce6C)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9190ce6L)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == motorola9190wm65C)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == eda50)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == eda50k)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
            if ((descricao === tipoOSContrato) && (Equipamento == eda51)) {
                dadosChegar.dado.push({
                    OS: coletores[i].OSID,
                    Data: coletores[i].OSData,
                    Cliente: coletores[i].PessoaFantasia,
                    Equipamento: coletores[i].NomeEquipamento,
                    NS: coletores[i].EquipamentoLTS,
                    Data_Move: coletores[i].DataFinalMovto
                })
            }
        }    
    res.json(dadosChegar.dado);
})

app.listen(port, () => {
    try {
        console.log("Servidor rodando http://localhost:" + port);

    } catch (error) {
        console.log("Error: " + error);
    }
})