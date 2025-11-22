// Configuración de obras organizadas por categorías - VERSIÓN COMPLETÍSIMA
const WORKS = [
    // ============ OPERA MAIORA ============
    
    // SCRIPTUM SUPER SENTENTIIS
    { id: 'sent-prooemium', title: 'Scriptum super Sententiis - Prooemium', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp0000.html' },
    { id: 'sent-q1', title: 'Scriptum super Sententiis - Quaestio 1', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp0001.html' },
    
    // Liber 1
    { id: 'sent-1-d1', title: 'Super Sententiis I - Distinctio 1', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1001.html' },
    { id: 'sent-1-d2-pr', title: 'Super Sententiis I - Distinctio 2 prooemium', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp10020.html' },
    { id: 'sent-1-d2-a12', title: 'Super Sententiis I - Distinctio 2 articuli 1-2', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp10021.html' },
    { id: 'sent-1-d2-a3', title: 'Super Sententiis I - Distinctio 2 articulus 3', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp10023.html' },
    { id: 'sent-1-d2-a45', title: 'Super Sententiis I - Distinctio 2 articuli 4-5', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp10024.html' },
    { id: 'sent-1-d3', title: 'Super Sententiis I - Distinctio 3', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1003.html' },
    { id: 'sent-1-d4-7', title: 'Super Sententiis I - Distinctiones 4-7', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1004.html' },
    { id: 'sent-1-d8', title: 'Super Sententiis I - Distinctio 8', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1008.html' },
    { id: 'sent-1-d9-18', title: 'Super Sententiis I - Distinctiones 9-18', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1009.html' },
    { id: 'sent-1-d19-21', title: 'Super Sententiis I - Distinctiones 19-21', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1019.html' },
    { id: 'sent-1-d22-25', title: 'Super Sententiis I - Distinctiones 22-25', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1022.html' },
    { id: 'sent-1-d26-32', title: 'Super Sententiis I - Distinctiones 26-32', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1026.html' },
    { id: 'sent-1-d33-34', title: 'Super Sententiis I - Distinctiones 33-34', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1033.html' },
    { id: 'sent-1-d35-41', title: 'Super Sententiis I - Distinctiones 35-41', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1035.html' },
    { id: 'sent-1-d42-44', title: 'Super Sententiis I - Distinctiones 42-44', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1042.html' },
    { id: 'sent-1-d45-48', title: 'Super Sententiis I - Distinctiones 45-48', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp1045.html' },
    
    // Liber 2
    { id: 'sent-2-pr', title: 'Super Sententiis II - Prooemium', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2000.html' },
    { id: 'sent-2-d1', title: 'Super Sententiis II - Distinctio 1', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2001.html' },
    { id: 'sent-2-d2-4', title: 'Super Sententiis II - Distinctiones 2-4', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2002.html' },
    { id: 'sent-2-d5-8', title: 'Super Sententiis II - Distinctiones 5-8', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2005.html' },
    { id: 'sent-2-d9-11', title: 'Super Sententiis II - Distinctiones 9-11', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2009.html' },
    { id: 'sent-2-d12-15', title: 'Super Sententiis II - Distinctiones 12-15', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2012.html' },
    { id: 'sent-2-d16-20', title: 'Super Sententiis II - Distinctiones 16-20', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2016.html' },
    { id: 'sent-2-d21', title: 'Super Sententiis II - Distinctio 21', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2021.html' },
    { id: 'sent-2-d22', title: 'Super Sententiis II - Distinctio 22', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2022.html' },
    { id: 'sent-2-d23-29', title: 'Super Sententiis II - Distinctiones 23-29', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2023.html' },
    { id: 'sent-2-d30-33', title: 'Super Sententiis II - Distinctiones 30-33', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2030.html' },
    { id: 'sent-2-d34', title: 'Super Sententiis II - Distinctio 34', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2034.html' },
    { id: 'sent-2-d35-41', title: 'Super Sententiis II - Distinctiones 35-41', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2035.html' },
    { id: 'sent-2-d42-43', title: 'Super Sententiis II - Distinctiones 42-43', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2042.html' },
    { id: 'sent-2-d44', title: 'Super Sententiis II - Distinctio 44', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp2044.html' },
    
    // Liber 3
    { id: 'sent-3-pr', title: 'Super Sententiis III - Prooemium', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3000.html' },
    { id: 'sent-3-d1', title: 'Super Sententiis III - Distinctio 1', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3001.html' },
    { id: 'sent-3-d2-4', title: 'Super Sententiis III - Distinctiones 2-4', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3002.html' },
    { id: 'sent-3-d5', title: 'Super Sententiis III - Distinctio 5', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3005.html' },
    { id: 'sent-3-d6-12', title: 'Super Sententiis III - Distinctiones 6-12', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3006.html' },
    { id: 'sent-3-d13-16', title: 'Super Sententiis III - Distinctiones 13-16', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3013.html' },
    { id: 'sent-3-d17-20', title: 'Super Sententiis III - Distinctiones 17-20', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3017.html' },
    { id: 'sent-3-d21-22', title: 'Super Sententiis III - Distinctiones 21-22', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3021.html' },
    { id: 'sent-3-d23-25', title: 'Super Sententiis III - Distinctiones 23-25', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3023.html' },
    { id: 'sent-3-d26', title: 'Super Sententiis III - Distinctio 26', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3026.html' },
    { id: 'sent-3-d27-32', title: 'Super Sententiis III - Distinctiones 27-32', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3027.html' },
    { id: 'sent-3-d33', title: 'Super Sententiis III - Distinctio 33', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3033.html' },
    { id: 'sent-3-d34-35', title: 'Super Sententiis III - Distinctiones 34-35', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3034.html' },
    { id: 'sent-3-d36', title: 'Super Sententiis III - Distinctio 36', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3036.html' },
    { id: 'sent-3-d37-40', title: 'Super Sententiis III - Distinctiones 37-40', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp3037.html' },
    
    // Liber 4
    { id: 'sent-4-pr', title: 'Super Sententiis IV - Prooemium', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4000.html' },
    { id: 'sent-4-d1', title: 'Super Sententiis IV - Distinctio 1', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4001.html' },
    { id: 'sent-4-d2', title: 'Super Sententiis IV - Distinctio 2', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4002.html' },
    { id: 'sent-4-d3-6', title: 'Super Sententiis IV - Distinctiones 3-6', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4003.html' },
    { id: 'sent-4-d7', title: 'Super Sententiis IV - Distinctio 7', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4007.html' },
    { id: 'sent-4-d8-10', title: 'Super Sententiis IV - Distinctiones 8-10', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4008.html' },
    { id: 'sent-4-d11-12', title: 'Super Sententiis IV - Distinctiones 11-12', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4011.html' },
    { id: 'sent-4-d13', title: 'Super Sententiis IV - Distinctio 13', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4013.html' },
    { id: 'sent-4-d14', title: 'Super Sententiis IV - Distinctio 14', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4014.html' },
    { id: 'sent-4-d15', title: 'Super Sententiis IV - Distinctio 15', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4015.html' },
    { id: 'sent-4-d16-17', title: 'Super Sententiis IV - Distinctiones 16-17', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4016.html' },
    { id: 'sent-4-d18-19', title: 'Super Sententiis IV - Distinctiones 18-19', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4018.html' },
    { id: 'sent-4-d20-22', title: 'Super Sententiis IV - Distinctiones 20-22', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4020.html' },
    { id: 'sent-4-d23', title: 'Super Sententiis IV - Distinctio 23', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4023.html' },
    { id: 'sent-4-d24-25', title: 'Super Sententiis IV - Distinctiones 24-25', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4024.html' },
    { id: 'sent-4-d26', title: 'Super Sententiis IV - Distinctio 26', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4026.html' },
    { id: 'sent-4-d27-33', title: 'Super Sententiis IV - Distinctiones 27-33', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4027.html' },
    { id: 'sent-4-d34-36', title: 'Super Sententiis IV - Distinctiones 34-36', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4034.html' },
    { id: 'sent-4-d37-42', title: 'Super Sententiis IV - Distinctiones 37-42', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4037.html' },
    { id: 'sent-4-d43-44', title: 'Super Sententiis IV - Distinctiones 43-44', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4043.html' },
    { id: 'sent-4-d45-46', title: 'Super Sententiis IV - Distinctiones 45-46', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4045.html' },
    { id: 'sent-4-d47-48', title: 'Super Sententiis IV - Distinctiones 47-48', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4047.html' },
    { id: 'sent-4-d49-q1', title: 'Super Sententiis IV - Distinctio 49 quaestio 1', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp40491.html' },
    { id: 'sent-4-d49-q2', title: 'Super Sententiis IV - Distinctio 49 quaestio 2', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp40492.html' },
    { id: 'sent-4-d49-q3', title: 'Super Sententiis IV - Distinctio 49 quaestio 3', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp40493.html' },
    { id: 'sent-4-d49-q4', title: 'Super Sententiis IV - Distinctio 49 quaestio 4', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp40494.html' },
    { id: 'sent-4-d49-q5', title: 'Super Sententiis IV - Distinctio 49 quaestio 5', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp40495.html' },
    { id: 'sent-4-d50', title: 'Super Sententiis IV - Distinctio 50', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/snp4050.html' },
    
    // SUMMA CONTRA GENTILES
    { id: 'scg-1-c1-9', title: 'Summa contra Gentiles I - Capita 1-9', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg1001.html' },
    { id: 'scg-1-c10-13', title: 'Summa contra Gentiles I - Capita 10-13', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg1010.html' },
    { id: 'scg-1-c14-28', title: 'Summa contra Gentiles I - Capita 14-28', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg1014.html' },
    { id: 'scg-1-c29-44', title: 'Summa contra Gentiles I - Capita 29-44', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg1029.html' },
    { id: 'scg-1-c45-71', title: 'Summa contra Gentiles I - Capita 45-71', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg1045.html' },
    { id: 'scg-1-c72-102', title: 'Summa contra Gentiles I - Capita 72-102', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg1072.html' },
    
    { id: 'scg-2-c1-21', title: 'Summa contra Gentiles II - Capita 1-21', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg2001.html' },
    { id: 'scg-2-c22-38', title: 'Summa contra Gentiles II - Capita 22-38', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg2022.html' },
    { id: 'scg-2-c39-55', title: 'Summa contra Gentiles II - Capita 39-55', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg2039.html' },
    { id: 'scg-2-c56-78', title: 'Summa contra Gentiles II - Capita 56-78', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg2056.html' },
    { id: 'scg-2-c79-101', title: 'Summa contra Gentiles II - Capita 79-101', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg2079.html' },
    
    { id: 'scg-3-c1-25', title: 'Summa contra Gentiles III - Capita 1-25', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg3001.html' },
    { id: 'scg-3-c26-63', title: 'Summa contra Gentiles III - Capita 26-63', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg3026.html' },
    { id: 'scg-3-c64-83', title: 'Summa contra Gentiles III - Capita 64-83', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg3064.html' },
    { id: 'scg-3-c84-110', title: 'Summa contra Gentiles III - Capita 84-110', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg3084.html' },
    { id: 'scg-3-c111-138', title: 'Summa contra Gentiles III - Capita 111-138', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg3111.html' },
    { id: 'scg-3-c139-163', title: 'Summa contra Gentiles III - Capita 139-163', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg3139.html' },
    
    { id: 'scg-4-c1-50', title: 'Summa contra Gentiles IV - Capita 1-50', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg4001.html' },
    { id: 'scg-4-c51-97', title: 'Summa contra Gentiles IV - Capita 51-97', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg4051.html' },
    
    // SUMMA THEOLOGIAE - Prima Pars
    { id: 'sth-1-q1-13', title: 'Summa Theologiae I - Quaestiones 1-13', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1001.html' },
    { id: 'sth-1-q14-26', title: 'Summa Theologiae I - Quaestiones 14-26', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1014.html' },
    { id: 'sth-1-q27-43', title: 'Summa Theologiae I - Quaestiones 27-43', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1027.html' },
    { id: 'sth-1-q44-49', title: 'Summa Theologiae I - Quaestiones 44-49', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1044.html' },
    { id: 'sth-1-q50-64', title: 'Summa Theologiae I - Quaestiones 50-64', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1050.html' },
    { id: 'sth-1-q65-74', title: 'Summa Theologiae I - Quaestiones 65-74', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1065.html' },
    { id: 'sth-1-q75-89', title: 'Summa Theologiae I - Quaestiones 75-89', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1075.html' },
    { id: 'sth-1-q90-102', title: 'Summa Theologiae I - Quaestiones 90-102', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1090.html' },
    { id: 'sth-1-q103-119', title: 'Summa Theologiae I - Quaestiones 103-119', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1103.html' },
    
    // SUMMA THEOLOGIAE - Prima Secundae
    { id: 'sth-1-2-q1-5', title: 'Summa Theologiae I-II - Quaestiones 1-5', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2001.html' },
    { id: 'sth-1-2-q6-21', title: 'Summa Theologiae I-II - Quaestiones 6-21', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2006.html' },
    { id: 'sth-1-2-q22-48', title: 'Summa Theologiae I-II - Quaestiones 22-48', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2022.html' },
    { id: 'sth-1-2-q49-70', title: 'Summa Theologiae I-II - Quaestiones 49-70', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2049.html' },
    { id: 'sth-1-2-q71-89', title: 'Summa Theologiae I-II - Quaestiones 71-89', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2071.html' },
    { id: 'sth-1-2-q90-105', title: 'Summa Theologiae I-II - Quaestiones 90-105', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2090.html' },
    { id: 'sth-1-2-q106-114', title: 'Summa Theologiae I-II - Quaestiones 106-114', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2106.html' },
    
    // SUMMA THEOLOGIAE - Secunda Secundae
    { id: 'sth-2-2-q1-7', title: 'Summa Theologiae II-II - Quaestiones 1-7', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3001.html' },
    { id: 'sth-2-2-q8-16', title: 'Summa Theologiae II-II - Quaestiones 8-16', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3008.html' },
    { id: 'sth-2-2-q17-22', title: 'Summa Theologiae II-II - Quaestiones 17-22', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3017.html' },
    { id: 'sth-2-2-q23-46', title: 'Summa Theologiae II-II - Quaestiones 23-46', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3023.html' },
    { id: 'sth-2-2-q47-56', title: 'Summa Theologiae II-II - Quaestiones 47-56', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3047.html' },
    { id: 'sth-2-2-q57-79', title: 'Summa Theologiae II-II - Quaestiones 57-79', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3057.html' },
    { id: 'sth-2-2-q80-100', title: 'Summa Theologiae II-II - Quaestiones 80-100', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3080.html' },
    { id: 'sth-2-2-q101-122', title: 'Summa Theologiae II-II - Quaestiones 101-122', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3101.html' },
    { id: 'sth-2-2-q123-140', title: 'Summa Theologiae II-II - Quaestiones 123-140', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3123.html' },
    { id: 'sth-2-2-q141-170', title: 'Summa Theologiae II-II - Quaestiones 141-170', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3141.html' },
    { id: 'sth-2-2-q171-189', title: 'Summa Theologiae II-II - Quaestiones 171-189', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3171.html' },
    
    // SUMMA THEOLOGIAE - Tertia Pars
    { id: 'sth-3-q1-26', title: 'Summa Theologiae III - Quaestiones 1-26', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4001.html' },
    { id: 'sth-3-q27-45', title: 'Summa Theologiae III - Quaestiones 27-45', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4027.html' },
    { id: 'sth-3-q46-59', title: 'Summa Theologiae III - Quaestiones 46-59', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4046.html' },
    { id: 'sth-3-q60-72', title: 'Summa Theologiae III - Quaestiones 60-72', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4060.html' },
    { id: 'sth-3-q73-90', title: 'Summa Theologiae III - Quaestiones 73-90', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4073.html' },
    
    // SUMMA THEOLOGIAE - Supplementum
    { id: 'sth-sup-q1-34', title: 'Summa Theologiae Supplementum - Quaestiones 1-34', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth5001.html' },
    { id: 'sth-sup-q35-68', title: 'Summa Theologiae Supplementum - Quaestiones 35-68', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth5035.html' },
    { id: 'sth-sup-q69-99', title: 'Summa Theologiae Supplementum - Quaestiones 69-99', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth5069.html' },
    
    // ============ COMMENTARIA IN SACRAM SCRIPTURAM ============
    { id: 'cmt-job', title: 'Expositio super Job', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cjb.html' },
    { id: 'cmt-psa', title: 'Postilla super Psalmos', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cps.html' },
    { id: 'cmt-isa', title: 'Expositio super Isaiam', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cis.html' },
    { id: 'cmt-jer', title: 'Expositio super Jeremiam', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cje.html' },
    { id: 'cmt-thr', title: 'Expositio super Threnos', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cth.html' },
    { id: 'cmt-mat', title: 'Catena Aurea in Matthaeum', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cmt.html' },
    { id: 'cmt-mar', title: 'Catena Aurea in Marcum', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cmc.html' },
    { id: 'cmt-luc', title: 'Catena Aurea in Lucam', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cml.html' },
    { id: 'cmt-joh', title: 'Catena Aurea in Johannem', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cmj.html' },
    { id: 'cmt-jn', title: 'Super Evangelium Johannis', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cjo.html' },
    { id: 'cmt-rom', title: 'Super Epistolam ad Romanos', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cro.html' },
    { id: 'cmt-1cor', title: 'Super I Epistolam ad Corinthios', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/c1c.html' },
    { id: 'cmt-2cor', title: 'Super II Epistolam ad Corinthios', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/c2c.html' },
    { id: 'cmt-gal', title: 'Super Epistolam ad Galatas', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cga.html' },
    { id: 'cmt-eph', title: 'Super Epistolam ad Ephesios', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cep.html' },
    { id: 'cmt-phi', title: 'Super Epistolam ad Philippenses', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cph.html' },
    { id: 'cmt-col', title: 'Super Epistolam ad Colossenses', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/ccl.html' },
    { id: 'cmt-1th', title: 'Super I Epistolam ad Thessalonicenses', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/c1t.html' },
    { id: 'cmt-2th', title: 'Super II Epistolam ad Thessalonicenses', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/c2t.html' },
    { id: 'cmt-1ti', title: 'Super I Epistolam ad Timotheum', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/c1m.html' },
    { id: 'cmt-2ti', title: 'Super II Epistolam ad Timotheum', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/c2m.html' },
    { id: 'cmt-tit', title: 'Super Epistolam ad Titum', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cti.html' },
    { id: 'cmt-phm', title: 'Super Epistolam ad Philemonem', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/cfm.html' },
    { id: 'cmt-heb', title: 'Super Epistolam ad Hebraeos', category: 'Commentaria in Sacram Scripturam', url: 'https://www.corpusthomisticum.org/che.html' },
    
    // ============ COMMENTARIA IN ARISTOTELEM ============
    { id: 'cmt-phi1', title: 'Sententia libri De sensu et sensato', category: 'Commentaria in Aristotelem', url: 'https://www.corpusthomisticum.org/css.html' },
    { id: 'cmt-phi2', title: 'Sententia libri De memoria et reminiscentia', category: 'Commentaria in Aristotelem', url: 'https://www.corpusthomisticum.org/cmm.html' },
    { id: 'cmt-eth', title: 'Sententia libri Ethicorum', category: 'Commentaria in Aristotelem', url: 'https://www.corpusthomisticum.org/cel.html' },
    { id: 'cmt-pol', title: 'Sententia libri Politicorum', category: 'Commentaria in Aristotelem', url: 'https://www.corpusthomisticum.org/cpo.html' },
    { id: 'cmt-met', title: 'Sententia libri Metaphysicae', category: 'Commentaria in Aristotelem', url: 'https://www.corpusthomisticum.org/cme.html' },
    { id: 'cmt-phy', title: 'Sententia libri Physicorum', category: 'Commentaria in Aristotelem', url: 'https://www.corpusthomisticum.org/cph.html' },
    { id: 'cmt-cae', title: 'Sententia libri De caelo et mundo', category: 'Commentaria in Aristotelem', url: 'https://www.corpusthomisticum.org/cdc.html' },
    { id: 'cmt-gen', title: 'Sententia libri De generatione et corruptione', category: 'Commentaria in Aristotelem', url: 'https://www.corpusthomisticum.org/cgc.html' },
    { id: 'cmt-ani', title: 'Sententia libri De anima', category: 'Commentaria in Aristotelem', url: 'https://www.corpusthomisticum.org/cda.html' },
    { id: 'cmt-int', title: 'Expositio libri Peryermenias', category: 'Commentaria in Aristotelem', url: 'https://www.corpusthomisticum.org/cpe.html' },
    { id: 'cmt-pos', title: 'Expositio libri Posteriorum', category: 'Commentaria in Aristotelem', url: 'https://www.corpusthomisticum.org/cpo.html' },
    
    // ============ COMMENTARIA IN ALIOS AUCTORES ============
    { id: 'cmt-bdt', title: 'Expositio libri Boetii De trinitate', category: 'Commentaria in Alios', url: 'https://www.corpusthomisticum.org/cbt.html' },
    { id: 'cmt-bdh', title: 'Expositio libri Boetii De hebdomadibus', category: 'Commentaria in Alios', url: 'https://www.corpusthomisticum.org/cbh.html' },
    { id: 'cmt-pdn', title: 'Super librum De causis', category: 'Commentaria in Alios', url: 'https://www.corpusthomisticum.org/clc.html' },
    { id: 'cmt-dio', title: 'Expositio libri Dionysii De divinis nominibus', category: 'Commentaria in Alios', url: 'https://www.corpusthomisticum.org/cdn.html' },
    
    // ============ QUAESTIONES DISPUTATAE ============
    { id: 'qdv', title: 'Quaestiones disputatae De veritate', category: 'Quaestiones Disputatae', url: 'https://www.corpusthomisticum.org/qdv.html' },
    { id: 'qdp', title: 'Quaestiones disputatae De potentia', category: 'Quaestiones Disputatae', url: 'https://www.corpusthomisticum.org/qdp.html' },
    { id: 'qda', title: 'Quaestio disputata De anima', category: 'Quaestiones Disputatae', url: 'https://www.corpusthomisticum.org/qda.html' },
    { id: 'qds', title: 'Quaestiones disputatae De spiritualibus creaturis', category: 'Quaestiones Disputatae', url: 'https://www.corpusthomisticum.org/qds.html' },
    { id: 'qdu', title: 'Quaestio disputata De unione verbi incarnati', category: 'Quaestiones Disputatae', url: 'https://www.corpusthomisticum.org/qdu.html' },
    { id: 'qdm', title: 'Quaestiones disputatae De malo', category: 'Quaestiones Disputatae', url: 'https://www.corpusthomisticum.org/qdm.html' },
    { id: 'qdvi', title: 'Quaestiones disputatae De virtutibus', category: 'Quaestiones Disputatae', url: 'https://www.corpusthomisticum.org/qdvi.html' },
    
    // ============ QUAESTIONES QUODLIBETALES ============
    { id: 'qql-1', title: 'Quodlibet I', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql1.html' },
    { id: 'qql-2', title: 'Quodlibet II', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql2.html' },
    { id: 'qql-3', title: 'Quodlibet III', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql3.html' },
    { id: 'qql-4', title: 'Quodlibet IV', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql4.html' },
    { id: 'qql-5', title: 'Quodlibet V', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql5.html' },
    { id: 'qql-6', title: 'Quodlibet VI', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql6.html' },
    { id: 'qql-7', title: 'Quodlibet VII', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql7.html' },
    { id: 'qql-8', title: 'Quodlibet VIII', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql8.html' },
    { id: 'qql-9', title: 'Quodlibet IX', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql9.html' },
    { id: 'qql-10', title: 'Quodlibet X', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql10.html' },
    { id: 'qql-11', title: 'Quodlibet XI', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql11.html' },
    { id: 'qql-12', title: 'Quodlibet XII', category: 'Quaestiones Quodlibetales', url: 'https://www.corpusthomisticum.org/qql12.html' },
    
    // ============ OPUSCULA ============
    { id: 'opu-ent', title: 'De ente et essentia', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oee.html' },
    { id: 'opu-pri', title: 'De principiis naturae', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/opn.html' },
    { id: 'opu-aet', title: 'De aeternitate mundi', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oae.html' },
    { id: 'opu-sub', title: 'De substantiis separatis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oss.html' },
    { id: 'opu-uni', title: 'De unitate intellectus', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oui.html' },
    { id: 'opu-reg', title: 'De regno', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ore.html' },
    { id: 'opu-art', title: 'De articulis fidei', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oaf.html' },
    { id: 'opu-com', title: 'Compendium theologiae', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oct.html' },
    { id: 'opu-per', title: 'De perfectione vitae spiritualis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/opv.html' },
    { id: 'opu-rat', title: 'De rationibus fidei', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/orf.html' },
    { id: 'opu-mix', title: 'De mixtione elementorum', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ome.html' },
    { id: 'opu-mot', title: 'De motu cordis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/omc.html' },
    { id: 'opu-nat', title: 'De natura materiae', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/onm.html' },
    { id: 'opu-occ', title: 'De occultis operationibus naturae', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ooo.html' },
    { id: 'opu-sor', title: 'De sortibus', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oso.html' },
    { id: 'opu-jud', title: 'De judiciis astrorum', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oja.html' }
];

// Estado de la aplicación
let state = {
    workerUrl: '',
    selectedWork: null,
    sections: [],
    currentSection: 0,
    searchTerm: '',
    collapsedCategories: new Set() // Para trackear categorías colapsadas
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    state.workerUrl = document.getElementById('workerUrl').value;
    
    renderWorksList();
    
    // Event listener para configuración
    document.getElementById('workerUrl').addEventListener('change', (e) => {
        state.workerUrl = e.target.value;
    });
});

// Renderizar lista de obras con categorías colapsables
function renderWorksList() {
    const worksList = document.getElementById('worksList');
    
    // Filtrar obras según búsqueda
    let filteredWorks = WORKS;
    
    if (state.searchTerm) {
        filteredWorks = filteredWorks.filter(w => 
            w.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            w.category.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
    }
    
    // Buscador
    const searchHtml = `
        <div class="search-box fade-in">
            <input 
                type="text" 
                placeholder="Buscar obra o categoría..." 
                value="${state.searchTerm}"
                oninput="searchWorks(this.value)"
            >
        </div>
    `;
    
    // Agrupar obras por categoría
    const groupedWorks = {};
    filteredWorks.forEach(work => {
        if (!groupedWorks[work.category]) {
            groupedWorks[work.category] = [];
        }
        groupedWorks[work.category].push(work);
    });
    
    // Renderizar categorías colapsables
    const categoriesHtml = Object.entries(groupedWorks)
        .map(([category, works]) => {
            const isCollapsed = state.collapsedCategories.has(category);
            
            return `
                <div class="category-section ${isCollapsed ? 'collapsed' : ''} fade-in">
                    <div class="category-header" onclick="toggleCategory('${category}')">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <h2>${category}</h2>
                            <span class="category-count">${works.length} ${works.length === 1 ? 'obra' : 'obras'}</span>
                        </div>
                        <span class="category-toggle">▼</span>
                    </div>
                    <div class="category-content">
                        <div class="works-grid">
                            ${works.map(work => `
                                <div class="work-card" onclick="loadWork('${work.id}')">
                                    <h3>${work.title}</h3>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        })
        .join('');
    
    worksList.innerHTML = searchHtml + categoriesHtml;
}

// Toggle de categoría
function toggleCategory(category) {
    if (state.collapsedCategories.has(category)) {
        state.collapsedCategories.delete(category);
    } else {
        state.collapsedCategories.add(category);
    }
    renderWorksList();
}

// Buscar obras
function searchWorks(term) {
    state.searchTerm = term;
    renderWorksList();
}

// Cargar una obra
async function loadWork(workId) {
    const work = WORKS.find(w => w.id === workId);
    if (!work) return;
    
    state.selectedWork = work;
    
    // Mostrar loading
    const reader = document.getElementById('reader');
    reader.innerHTML = `
        <div class="reader-header">
            <h2>${work.title}</h2>
            <button class="back-button" onclick="hideReader()">← Volver</button>
        </div>
        <div class="loading">
            <div class="spinner"></div>
            <p>Cargando texto...</p>
        </div>
    `;
    reader.style.display = 'block';
    document.getElementById('worksList').style.display = 'none';
    
    try {
        // Fetch del contenido con el Worker como proxy
        const response = await fetch(`${state.workerUrl}/fetch`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: work.url
            })
        });
        
        if (!response.ok) {
            throw new Error(`Error al cargar: ${response.status}`);
        }
        
        const data = await response.json();
        const html = data.html;
        
        // Parse del HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Extraer el texto latino
        const latinText = extractLatinText(doc);
        
        if (!latinText) {
            throw new Error('No se pudo extraer el texto latino');
        }
        
        // Dividir en secciones
        state.sections = [{
            title: work.title,
            latin: latinText,
            spanish: null
        }];
        
        state.currentSection = 0;
        
        // Renderizar
        await renderSection(0);
        
    } catch (err) {
        showError(`Error al cargar la obra: ${err.message}`);
    }
}

// Ocultar el reader
function hideReader() {
    document.getElementById('reader').style.display = 'none';
    document.getElementById('worksList').style.display = 'block';
    state.selectedWork = null;
    state.sections = [];
}

// Extraer texto latino del HTML
function extractLatinText(doc) {
    // Buscar el contenido principal (varía según la estructura del Corpus Thomisticum)
    const selectors = [
        'body > p',
        'body > table p',
        'body > center > p',
        'body > div p'
    ];
    
    let text = '';
    
    for (const selector of selectors) {
        const elements = doc.querySelectorAll(selector);
        if (elements.length > 0) {
            elements.forEach(el => {
                text += el.textContent.trim() + '\n\n';
            });
            break;
        }
    }
    
    return text.trim() || `
        <h2>Obra completa</h2>
        <p>Esta es una sección de la obra ${state.selectedWork ? state.selectedWork.title : ''}.</p>
        <p>El texto latino se cargará desde ${state.selectedWork ? state.selectedWork.url : ''}.</p>
    `;
}

// Mostrar error
function showError(message) {
    const reader = document.getElementById('reader');
    const currentContent = reader.innerHTML;
    
    // Si ya hay contenido, agregar el error
    if (currentContent && !currentContent.includes('loading')) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.innerHTML = `<strong>Error:</strong> ${message}`;
        reader.insertBefore(errorDiv, reader.children[1]);
    } else {
        reader.innerHTML = `
            <div class="reader-header">
                <h2>${state.selectedWork ? state.selectedWork.title : 'Error'}</h2>
                <button class="back-button" onclick="hideReader()">← Volver</button>
            </div>
            <div class="error">
                <strong>Error:</strong> ${message}
            </div>
        `;
    }
}

// Renderizar una sección
async function renderSection(index) {
    const section = state.sections[index];
    
    const reader = document.getElementById('reader');
    reader.innerHTML = `
        <div class="reader-header">
            <h2>${state.selectedWork.title}</h2>
            <button class="back-button" onclick="hideReader()">← Volver</button>
        </div>
        <div class="reader-controls">
            <div class="control-group">
                <label>Sección:</label>
                <select onchange="changeSection(this.value)">
                    ${state.sections.map((s, i) => `
                        <option value="${i}" ${i === index ? 'selected' : ''}>
                            ${s.title}
                        </option>
                    `).join('')}
                </select>
            </div>
            <div class="control-group">
                <button onclick="changeSection(${index - 1})" ${index === 0 ? 'disabled' : ''}>
                    ← Anterior
                </button>
                <button onclick="changeSection(${index + 1})" ${index === state.sections.length - 1 ? 'disabled' : ''}>
                    Siguiente →
                </button>
            </div>
        </div>
        <div class="text-display">
            <div class="text-column">
                <h3>Textus Latinus</h3>
                <div class="text-content">
                    <p>${section.latin}</p>
                </div>
            </div>
            <div class="text-column">
                <h3>Versión Española</h3>
                <div class="text-content" id="translationContent">
                    ${section.spanish ? `<p>${section.spanish}</p>` : '<div class="loading"><div class="spinner"></div><p>Traduciendo...</p></div>'}
                </div>
            </div>
        </div>
    `;
    
    // Si no hay traducción, traducir
    if (!section.spanish) {
        await translateSection(index);
    }
}

// Cambiar de sección
async function changeSection(newIndex) {
    const index = parseInt(newIndex);
    if (index < 0 || index >= state.sections.length) return;
    
    state.currentSection = index;
    await renderSection(index);
}

// Traducir una sección
async function translateSection(index) {
    if (!state.workerUrl) {
        showError('Por favor, configura la URL del Cloudflare Worker');
        return;
    }
    
    const section = state.sections[index];
    
    try {
        const response = await fetch(`${state.workerUrl}/translate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: section.latin
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Error de API: ${response.status}`);
        }
        
        const data = await response.json();
        const translation = data.translation;
        
        // Guardar la traducción
        state.sections[index].spanish = translation;
        
        // Actualizar solo el contenido de la traducción
        const translationContent = document.getElementById('translationContent');
        if (translationContent) {
            translationContent.innerHTML = `<p>${translation}</p>`;
        }
        
    } catch (err) {
        showError(`Error en la traducción: ${err.message}`);
    }
}
