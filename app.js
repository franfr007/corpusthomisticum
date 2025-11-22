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
    { id: 'scg-1-c29-36', title: 'Summa contra Gentiles I - Capita 29-36', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg1029.html' },
    { id: 'scg-1-c37-43', title: 'Summa contra Gentiles I - Capita 37-43', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg1037.html' },
    { id: 'scg-1-c44-71', title: 'Summa contra Gentiles I - Capita 44-71', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg1044.html' },
    { id: 'scg-1-c72-96', title: 'Summa contra Gentiles I - Capita 72-96', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg1072.html' },
    { id: 'scg-1-c97-102', title: 'Summa contra Gentiles I - Capita 97-102', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg1097.html' },
    { id: 'scg-2-c1-5', title: 'Summa contra Gentiles II - Capita 1-5', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg2001.html' },
    { id: 'scg-2-c6-38', title: 'Summa contra Gentiles II - Capita 6-38', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg2006.html' },
    { id: 'scg-2-c39-45', title: 'Summa contra Gentiles II - Capita 39-45', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg2039.html' },
    { id: 'scg-2-c46-55', title: 'Summa contra Gentiles II - Capita 46-55', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg2046.html' },
    { id: 'scg-2-c56-90', title: 'Summa contra Gentiles II - Capita 56-90', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg2056.html' },
    { id: 'scg-2-c91-101', title: 'Summa contra Gentiles II - Capita 91-101', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg2091.html' },
    { id: 'scg-3-c1-63', title: 'Summa contra Gentiles III - Capita 1-63', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg3001.html' },
    { id: 'scg-3-c64-110', title: 'Summa contra Gentiles III - Capita 64-110', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg3064.html' },
    { id: 'scg-3-c111-163', title: 'Summa contra Gentiles III - Capita 111-163', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg3111.html' },
    { id: 'scg-4-c1-26', title: 'Summa contra Gentiles IV - Capita 1-26', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg4001.html' },
    { id: 'scg-4-c27-78', title: 'Summa contra Gentiles IV - Capita 27-78', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg4027.html' },
    { id: 'scg-4-c79-97', title: 'Summa contra Gentiles IV - Capita 79-97', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/scg4079.html' },
    
    // SUMMA THEOLOGIAE
    { id: 'sth-pr', title: 'Summa Theologiae - Prooemium', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth0000.html' },
    
    // Prima Pars - COMPLETA
    { id: 'sth-1-q1', title: 'Summa Theologiae Ia - Quaestio 1', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1001.html' },
    { id: 'sth-1-q2', title: 'Summa Theologiae Ia - Quaestio 2', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1002.html' },
    { id: 'sth-1-q3-14', title: 'Summa Theologiae Ia - Quaestiones 3-14', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1003.html' },
    { id: 'sth-1-q15-27', title: 'Summa Theologiae Ia - Quaestiones 15-27', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1015.html' },
    { id: 'sth-1-q28-43', title: 'Summa Theologiae Ia - Quaestiones 28-43', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1028.html' },
    { id: 'sth-1-q44-49', title: 'Summa Theologiae Ia - Quaestiones 44-49', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1044.html' },
    { id: 'sth-1-q50-64', title: 'Summa Theologiae Ia - Quaestiones 50-64', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1050.html' },
    { id: 'sth-1-q65-74', title: 'Summa Theologiae Ia - Quaestiones 65-74', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1065.html' },
    { id: 'sth-1-q75-76', title: 'Summa Theologiae Ia - Quaestiones 75-76', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1075.html' },
    { id: 'sth-1-q77-83', title: 'Summa Theologiae Ia - Quaestiones 77-83', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1077.html' },
    { id: 'sth-1-q84-89', title: 'Summa Theologiae Ia - Quaestiones 84-89', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1084.html' },
    { id: 'sth-1-q90-102', title: 'Summa Theologiae Ia - Quaestiones 90-102', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1090.html' },
    { id: 'sth-1-q103-119', title: 'Summa Theologiae Ia - Quaestiones 103-119', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth1103.html' },
    
    // Prima Secundae - COMPLETA
    { id: 'sth-12-pr', title: 'Summa Theologiae IaIIae - Prooemium', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2000.html' },
    { id: 'sth-12-q1-5', title: 'Summa Theologiae IaIIae - Quaestiones 1-5', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2001.html' },
    { id: 'sth-12-q6-21', title: 'Summa Theologiae IaIIae - Quaestiones 6-21', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2006.html' },
    { id: 'sth-12-q22-25', title: 'Summa Theologiae IaIIae - Quaestiones 22-25', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2022.html' },
    { id: 'sth-12-q26-39', title: 'Summa Theologiae IaIIae - Quaestiones 26-39', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2026.html' },
    { id: 'sth-12-q40-48', title: 'Summa Theologiae IaIIae - Quaestiones 40-48', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2040.html' },
    { id: 'sth-12-q49-54', title: 'Summa Theologiae IaIIae - Quaestiones 49-54', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2049.html' },
    { id: 'sth-12-q55-70', title: 'Summa Theologiae IaIIae - Quaestiones 55-70', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2055.html' },
    { id: 'sth-12-q71', title: 'Summa Theologiae IaIIae - Quaestio 71', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2071.html' },
    { id: 'sth-12-q72', title: 'Summa Theologiae IaIIae - Quaestio 72', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2072.html' },
    { id: 'sth-12-q73', title: 'Summa Theologiae IaIIae - Quaestio 73', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2073.html' },
    { id: 'sth-12-q74', title: 'Summa Theologiae IaIIae - Quaestio 74', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2074.html' },
    { id: 'sth-12-q75-84', title: 'Summa Theologiae IaIIae - Quaestiones 75-84', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2075.html' },
    { id: 'sth-12-q85-89', title: 'Summa Theologiae IaIIae - Quaestiones 85-89', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2085.html' },
    { id: 'sth-12-q90-92', title: 'Summa Theologiae IaIIae - Quaestiones 90-92', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2090.html' },
    { id: 'sth-12-q93', title: 'Summa Theologiae IaIIae - Quaestio 93', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2093.html' },
    { id: 'sth-12-q94', title: 'Summa Theologiae IaIIae - Quaestio 94', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2094.html' },
    { id: 'sth-12-q95-97', title: 'Summa Theologiae IaIIae - Quaestiones 95-97', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2095.html' },
    { id: 'sth-12-q98-105', title: 'Summa Theologiae IaIIae - Quaestiones 98-105', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2098.html' },
    { id: 'sth-12-q106-108', title: 'Summa Theologiae IaIIae - Quaestiones 106-108', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2106.html' },
    { id: 'sth-12-q109-114', title: 'Summa Theologiae IaIIae - Quaestiones 109-114', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth2109.html' },
    
    // Secunda Secundae - COMPLETA
    { id: 'sth-22-pr', title: 'Summa Theologiae IIaIIae - Prooemium', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3000.html' },
    { id: 'sth-22-q1-16', title: 'Summa Theologiae IIaIIae - Quaestiones 1-16', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3001.html' },
    { id: 'sth-22-q17-22', title: 'Summa Theologiae IIaIIae - Quaestiones 17-22', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3017.html' },
    { id: 'sth-22-q23-24', title: 'Summa Theologiae IIaIIae - Quaestiones 23-24', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3023.html' },
    { id: 'sth-22-q25-26', title: 'Summa Theologiae IIaIIae - Quaestiones 25-26', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3025.html' },
    { id: 'sth-22-q27-33', title: 'Summa Theologiae IIaIIae - Quaestiones 27-33', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3027.html' },
    { id: 'sth-22-q34-43', title: 'Summa Theologiae IIaIIae - Quaestiones 34-43', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3034.html' },
    { id: 'sth-22-q44', title: 'Summa Theologiae IIaIIae - Quaestio 44', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3044.html' },
    { id: 'sth-22-q45-46', title: 'Summa Theologiae IIaIIae - Quaestiones 45-46', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3045.html' },
    { id: 'sth-22-q47-56', title: 'Summa Theologiae IIaIIae - Quaestiones 47-56', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3047.html' },
    { id: 'sth-22-q57-60', title: 'Summa Theologiae IIaIIae - Quaestiones 57-60', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3057.html' },
    { id: 'sth-22-q61-78', title: 'Summa Theologiae IIaIIae - Quaestiones 61-78', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3061.html' },
    { id: 'sth-22-q79', title: 'Summa Theologiae IIaIIae - Quaestio 79', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3079.html' },
    { id: 'sth-22-q80', title: 'Summa Theologiae IIaIIae - Quaestio 80', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3080.html' },
    { id: 'sth-22-q81', title: 'Summa Theologiae IIaIIae - Quaestio 81', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3081.html' },
    { id: 'sth-22-q82-91', title: 'Summa Theologiae IIaIIae - Quaestiones 82-91', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3082.html' },
    { id: 'sth-22-q92-100', title: 'Summa Theologiae IIaIIae - Quaestiones 92-100', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3092.html' },
    { id: 'sth-22-q101', title: 'Summa Theologiae IIaIIae - Quaestio 101', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3101.html' },
    { id: 'sth-22-q102-105', title: 'Summa Theologiae IIaIIae - Quaestiones 102-105', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3102.html' },
    { id: 'sth-22-q106-108', title: 'Summa Theologiae IIaIIae - Quaestiones 106-108', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3106.html' },
    { id: 'sth-22-q109-120', title: 'Summa Theologiae IIaIIae - Quaestiones 109-120', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3109.html' },
    { id: 'sth-22-q121', title: 'Summa Theologiae IIaIIae - Quaestio 121', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3121.html' },
    { id: 'sth-22-q122', title: 'Summa Theologiae IIaIIae - Quaestio 122', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3122.html' },
    { id: 'sth-22-q123-140', title: 'Summa Theologiae IIaIIae - Quaestiones 123-140', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3123.html' },
    { id: 'sth-22-q141-142', title: 'Summa Theologiae IIaIIae - Quaestiones 141-142', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3141.html' },
    { id: 'sth-22-q143', title: 'Summa Theologiae IIaIIae - Quaestio 143', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3143.html' },
    { id: 'sth-22-q144-145', title: 'Summa Theologiae IIaIIae - Quaestiones 144-145', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3144.html' },
    { id: 'sth-22-q146-154', title: 'Summa Theologiae IIaIIae - Quaestiones 146-154', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3146.html' },
    { id: 'sth-22-q155-169', title: 'Summa Theologiae IIaIIae - Quaestiones 155-169', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3155.html' },
    { id: 'sth-22-q170', title: 'Summa Theologiae IIaIIae - Quaestio 170', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3170.html' },
    { id: 'sth-22-q171-178', title: 'Summa Theologiae IIaIIae - Quaestiones 171-178', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3171.html' },
    { id: 'sth-22-q179-182', title: 'Summa Theologiae IIaIIae - Quaestiones 179-182', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3179.html' },
    { id: 'sth-22-q183-189', title: 'Summa Theologiae IIaIIae - Quaestiones 183-189', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth3183.html' },
    
    // Tertia Pars - COMPLETA
    { id: 'sth-3-pr', title: 'Summa Theologiae IIIa - Prooemium', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4000.html' },
    { id: 'sth-3-q1', title: 'Summa Theologiae IIIa - Quaestio 1', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4001.html' },
    { id: 'sth-3-q2-15', title: 'Summa Theologiae IIIa - Quaestiones 2-15', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4002.html' },
    { id: 'sth-3-q16-26', title: 'Summa Theologiae IIIa - Quaestiones 16-26', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4016.html' },
    { id: 'sth-3-q27-39', title: 'Summa Theologiae IIIa - Quaestiones 27-39', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4027.html' },
    { id: 'sth-3-q40-45', title: 'Summa Theologiae IIIa - Quaestiones 40-45', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4040.html' },
    { id: 'sth-3-q46-52', title: 'Summa Theologiae IIIa - Quaestiones 46-52', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4046.html' },
    { id: 'sth-3-q53-59', title: 'Summa Theologiae IIIa - Quaestiones 53-59', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4053.html' },
    { id: 'sth-3-q60-65', title: 'Summa Theologiae IIIa - Quaestiones 60-65', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4060.html' },
    { id: 'sth-3-q66-71', title: 'Summa Theologiae IIIa - Quaestiones 66-71', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4066.html' },
    { id: 'sth-3-q72', title: 'Summa Theologiae IIIa - Quaestio 72', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4072.html' },
    { id: 'sth-3-q73', title: 'Summa Theologiae IIIa - Quaestio 73', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4073.html' },
    { id: 'sth-3-q74-77', title: 'Summa Theologiae IIIa - Quaestiones 74-77', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4074.html' },
    { id: 'sth-3-q78', title: 'Summa Theologiae IIIa - Quaestio 78', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4078.html' },
    { id: 'sth-3-q79', title: 'Summa Theologiae IIIa - Quaestio 79', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4079.html' },
    { id: 'sth-3-q80-81', title: 'Summa Theologiae IIIa - Quaestiones 80-81', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4080.html' },
    { id: 'sth-3-q82', title: 'Summa Theologiae IIIa - Quaestio 82', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4082.html' },
    { id: 'sth-3-q83', title: 'Summa Theologiae IIIa - Quaestio 83', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4083.html' },
    { id: 'sth-3-q84-90', title: 'Summa Theologiae IIIa - Quaestiones 84-90', category: 'Opera Maiora', url: 'https://www.corpusthomisticum.org/sth4084.html' },
    
    // ============ QUAESTIONES DISPUTATAE ============
    { id: 'qd-spiritualibus', title: 'De spiritualibus creaturis', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qds.html' },
    { id: 'qd-unione', title: 'De unione Verbi', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdi.html' },
    
    // De veritate - COMPLETA
    { id: 'qd-ver-q1', title: 'De veritate - Quaestio 1', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv01.html' },
    { id: 'qd-ver-q2-4', title: 'De veritate - Quaestiones 2-4', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv02.html' },
    { id: 'qd-ver-q5-7', title: 'De veritate - Quaestiones 5-7', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv05.html' },
    { id: 'qd-ver-q8-9', title: 'De veritate - Quaestiones 8-9', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv08.html' },
    { id: 'qd-ver-q10', title: 'De veritate - Quaestio 10', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv10.html' },
    { id: 'qd-ver-q11', title: 'De veritate - Quaestio 11', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv11.html' },
    { id: 'qd-ver-q12-13', title: 'De veritate - Quaestiones 12-13', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv12.html' },
    { id: 'qd-ver-q14', title: 'De veritate - Quaestio 14', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv14.html' },
    { id: 'qd-ver-q15-17', title: 'De veritate - Quaestiones 15-17', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv15.html' },
    { id: 'qd-ver-q18-19', title: 'De veritate - Quaestiones 18-19', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv18.html' },
    { id: 'qd-ver-q20', title: 'De veritate - Quaestio 20', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv20.html' },
    { id: 'qd-ver-q21', title: 'De veritate - Quaestio 21', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv21.html' },
    { id: 'qd-ver-q22-a1-10', title: 'De veritate - Quaestio 22 articuli 1-10', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv2201.html' },
    { id: 'qd-ver-q22-a11', title: 'De veritate - Quaestio 22 articulus 11', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv2211.html' },
    { id: 'qd-ver-q22-a12-15', title: 'De veritate - Quaestio 22 articuli 12-15', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv2212.html' },
    { id: 'qd-ver-q23', title: 'De veritate - Quaestio 23', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv23.html' },
    { id: 'qd-ver-q24', title: 'De veritate - Quaestio 24', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv24.html' },
    { id: 'qd-ver-q25-26', title: 'De veritate - Quaestiones 25-26', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv25.html' },
    { id: 'qd-ver-q27-29', title: 'De veritate - Quaestiones 27-29', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdv27.html' },
    
    // De potentia - COMPLETA
    { id: 'qd-pot-q1-2', title: 'De potentia - Quaestiones 1-2', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdp1.html' },
    { id: 'qd-pot-q3', title: 'De potentia - Quaestio 3', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdp3.html' },
    { id: 'qd-pot-q4', title: 'De potentia - Quaestio 4', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdp4.html' },
    { id: 'qd-pot-q5-6', title: 'De potentia - Quaestiones 5-6', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdp5.html' },
    { id: 'qd-pot-q7', title: 'De potentia - Quaestio 7', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdp7.html' },
    { id: 'qd-pot-q8-10', title: 'De potentia - Quaestiones 8-10', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdp8.html' },
    
    // De anima - COMPLETA
    { id: 'qd-anima-pr', title: 'De anima - Prooemium', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qda00.html' },
    { id: 'qd-anima-a1-13', title: 'De anima - Articuli 1-13', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qda01.html' },
    { id: 'qd-anima-a14-21', title: 'De anima - Articuli 14-21', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qda14.html' },
    
    // De malo - COMPLETA
    { id: 'qd-malo-q1', title: 'De malo - Quaestio 1', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdm01.html' },
    { id: 'qd-malo-q2-3', title: 'De malo - Quaestiones 2-3', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdm02.html' },
    { id: 'qd-malo-q4-5', title: 'De malo - Quaestiones 4-5', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdm04.html' },
    { id: 'qd-malo-q6-7', title: 'De malo - Quaestiones 6-7', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdm06.html' },
    { id: 'qd-malo-q8-15', title: 'De malo - Quaestiones 8-15', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdm08.html' },
    { id: 'qd-malo-q16', title: 'De malo - Quaestio 16', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdm16.html' },
    
    // De virtutibus - COMPLETA
    { id: 'qd-virt-q1-a1-2', title: 'De virtutibus - Quaestio 1 ad articulum 2', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdw100.html' },
    { id: 'qd-virt-q1-a3-13', title: 'De virtutibus - Quaestio 1 articuli 3-13', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdw103.html' },
    { id: 'qd-virt-q2', title: 'De virtutibus - Quaestio 2', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdw2.html' },
    { id: 'qd-virt-q3', title: 'De virtutibus - Quaestio 3', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdw3.html' },
    { id: 'qd-virt-q4', title: 'De virtutibus - Quaestio 4', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdw4.html' },
    { id: 'qd-virt-q5', title: 'De virtutibus - Quaestio 5', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/qdw5.html' },
    
    // Quodlibeta - COMPLETOS
    { id: 'quod-1', title: 'Quodlibet I', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q01.html' },
    { id: 'quod-2', title: 'Quodlibet II', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q02.html' },
    { id: 'quod-3', title: 'Quodlibet III', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q03.html' },
    { id: 'quod-4', title: 'Quodlibet IV', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q04.html' },
    { id: 'quod-5', title: 'Quodlibet V', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q05.html' },
    { id: 'quod-6', title: 'Quodlibet VI', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q06.html' },
    { id: 'quod-7', title: 'Quodlibet VII', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q07.html' },
    { id: 'quod-8', title: 'Quodlibet VIII', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q08.html' },
    { id: 'quod-9', title: 'Quodlibet IX', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q09.html' },
    { id: 'quod-10', title: 'Quodlibet X', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q10.html' },
    { id: 'quod-11', title: 'Quodlibet XI', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q11.html' },
    { id: 'quod-12', title: 'Quodlibet XII', category: 'Quaestiones', url: 'https://www.corpusthomisticum.org/q12.html' },
    
    // ============ OPUSCULA ============
    
    // Opuscula philosophica
    { id: 'ente', title: 'De ente et essentia', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oee.html' },
    { id: 'principiis', title: 'De principiis naturae', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/opn.html' },
    { id: 'unitate', title: 'De unitate intellectus', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oca.html' },
    { id: 'aeternitate', title: 'De aeternitate mundi', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ocm.html' },
    { id: 'substantiis', title: 'De substantiis separatis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ots.html' },
    
    // Opuscula theologica
    { id: 'articulis', title: 'De articulis Fidei', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oss.html' },
    { id: 'rationibus', title: 'De rationibus Fidei', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ocg.html' },
    { id: 'decretales', title: 'Super Decretales', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/o2d.html' },
    { id: 'rigans', title: 'Principium Rigans montes', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/otd.html' },
    
    // Compendium theologiae - COMPLETO
    { id: 'comp-1-c1-184', title: 'Compendium theologiae I - Capita 1-184', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ott101.html' },
    { id: 'comp-1-c185-246', title: 'Compendium theologiae I - Capita 185-246', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ott1185.html' },
    { id: 'comp-2', title: 'Compendium theologiae - Liber 2', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ott2.html' },
    
    // Opuscula polemica pro mendicantibus
    { id: 'retrahentes', title: 'Contra retrahentes', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ocr.html' },
    { id: 'perfectione', title: 'De perfectione', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oap.html' },
    
    // Contra impugnantes - COMPLETO
    { id: 'impugn-pr', title: 'Contra impugnantes - Prooemium', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oci0.html' },
    { id: 'impugn-p1', title: 'Contra impugnantes - Pars 1', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oci1.html' },
    { id: 'impugn-p2-4', title: 'Contra impugnantes - Partes 2-4', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oci2.html' },
    { id: 'impugn-p5', title: 'Contra impugnantes - Pars 5', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oci5.html' },
    
    // Censurae
    { id: 'errores', title: 'Contra errores Graecorum', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/oce.html' },
    { id: 'forma', title: 'De forma absolutionis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/osf.html' },
    
    // Rescripta
    { id: 'bernardum', title: 'Ad Bernardum', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/os6.html' },
    { id: 'ducissam', title: 'Ad ducissam Brabantiae', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ori.html' },
    { id: 'emptione', title: 'De emptione', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/opw.html' },
    { id: 'iudiciis', title: 'De iudiciis astrorum', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/ote.html' },
    { id: 'mixtione', title: 'De mixtione elementorum', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/opx.html' },
    { id: 'motu-cordis', title: 'De motu cordis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/opc.html' },
    { id: 'operationibus', title: 'De operationibus occultis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/opo.html' },
    { id: 'sortibus', title: 'De sortibus', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/otr.html' },
    
    // De regno - COMPLETO
    { id: 'regno', title: 'De regno - Ad librum 2 caput 4', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/orp.html' },
    
    // Responsiones
    { id: 'resp-6', title: 'De 6 articulis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/os5.html' },
    { id: 'resp-30', title: 'De 30 articulis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/os1.html' },
    { id: 'resp-36', title: 'De 36 articulis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/os2.html' },
    { id: 'resp-43', title: 'De 43 articulis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/os3.html' },
    { id: 'resp-108', title: 'De 108 articulis', category: 'Opuscula', url: 'https://www.corpusthomisticum.org/os4.html' },
    
    // ============ COMMENTARIA IN ARISTOTELEM ============
    
    // Expositio libri Peryermeneias
    { id: 'peryerm', title: 'In Peryermeneias - Ad librum 2 lectionem 2', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpe.html' },
    
    // Expositio libri Posteriorum Analyticorum
    { id: 'post-anal-1', title: 'In Posteriorum Analyticorum - Liber 1', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpa1.html' },
    { id: 'post-anal-2', title: 'In Posteriorum Analyticorum - Liber 2', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpa2.html' },
    
    // In libros Physicorum
    { id: 'physic-1-l1', title: 'In Physicorum - Liber 1 lectio 1', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpy011.html' },
    { id: 'physic-1-2', title: 'In Physicorum - Liber 1 lectio 2-liber 2', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpy012.html' },
    { id: 'physic-3-4', title: 'In Physicorum - Libri 3-4', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpy03.html' },
    { id: 'physic-5-6', title: 'In Physicorum - Libri 5-6', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpy05.html' },
    { id: 'physic-7-8', title: 'In Physicorum - Libri 7-8', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpy07.html' },
    
    // In libros De caelo et mundo
    { id: 'caelo-pr', title: 'In De caelo et mundo - Prooemium', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ccm0.html' },
    { id: 'caelo-1', title: 'In De caelo et mundo - Liber 1', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ccm1.html' },
    { id: 'caelo-2', title: 'In De caelo et mundo - Liber 2', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ccm2.html' },
    { id: 'caelo-3', title: 'In De caelo et mundo - Liber 3', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ccm3.html' },
    
    // In libros De generatione et corruptione
    { id: 'gen-pr', title: 'In De generatione - Prooemium', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cgc00.html' },
    { id: 'gen-1', title: 'In De generatione - Liber 1', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cgc01.html' },
    
    // Sentencia super Meteora
    { id: 'meteora-1-2-10', title: 'Sentencia super Meteora - Ad librum 2 caput 10', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cme1.html' },
    { id: 'meteora-2-13-15', title: 'Sentencia super Meteora - Liber 2 capita 13-15', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cme213.html' },
    
    // Sentencia libri De anima
    { id: 'de-anima-1', title: 'Sentencia libri De anima - Liber 1', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/can1.html' },
    { id: 'de-anima-2', title: 'Sentencia libri De anima - Liber 2', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/can2.html' },
    { id: 'de-anima-3', title: 'Sentencia libri De anima - Liber 3', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/can3.html' },
    
    // Sentencia libri De sensu et sensato
    { id: 'sensu-1', title: 'Sentencia De sensu - Tractatus 1', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/css01.html' },
    { id: 'sensu-2', title: 'Sentencia De sensu - Tractatus 2: De memoria', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/css02.html' },
    
    // Sententia libri Ethicorum
    { id: 'ethic-1-l1-3', title: 'Sententia Ethicorum - Liber 1 lectiones 1-3', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ctc0101.html' },
    { id: 'ethic-1-l4-18', title: 'Sententia Ethicorum - Liber 1 lectiones 4-18', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ctc0104.html' },
    { id: 'ethic-1-l19-20', title: 'Sententia Ethicorum - Liber 1 lectiones 19-20', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ctc0119.html' },
    { id: 'ethic-2-3-l1-13', title: 'Sententia Ethicorum - Liber 2-liber 3 lectiones 1-13', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ctc02.html' },
    { id: 'ethic-3-l14-5', title: 'Sententia Ethicorum - Liber 3 lectio 14-liber 5', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ctc0314.html' },
    { id: 'ethic-6', title: 'Sententia Ethicorum - Liber 6', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ctc06.html' },
    { id: 'ethic-7', title: 'Sententia Ethicorum - Liber 7', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ctc07.html' },
    { id: 'ethic-8-9', title: 'Sententia Ethicorum - Libri 8-9', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ctc08.html' },
    { id: 'ethic-10', title: 'Sententia Ethicorum - Liber 10', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/ctc10.html' },
    
    // Sententia libri Politicorum
    { id: 'politic', title: 'Sententia Politicorum - Ad librum 3 lectionem 6', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cpo.html' },
    
    // Sententia libri Metaphysicae
    { id: 'metaph-pr', title: 'Sententia Metaphysicae - Prooemium', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp00.html' },
    { id: 'metaph-1-l1-3', title: 'Sententia Metaphysicae - Liber 1 lectiones 1-3', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp0101.html' },
    { id: 'metaph-1-l4-17', title: 'Sententia Metaphysicae - Liber 1 lectiones 4-17', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp0104.html' },
    { id: 'metaph-2', title: 'Sententia Metaphysicae - Liber 2', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp02.html' },
    { id: 'metaph-3', title: 'Sententia Metaphysicae - Liber 3', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp03.html' },
    { id: 'metaph-4', title: 'Sententia Metaphysicae - Liber 4', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp04.html' },
    { id: 'metaph-5', title: 'Sententia Metaphysicae - Liber 5', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp05.html' },
    { id: 'metaph-6', title: 'Sententia Metaphysicae - Liber 6', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp06.html' },
    { id: 'metaph-7-8', title: 'Sententia Metaphysicae - Libri 7-8', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp07.html' },
    { id: 'metaph-9', title: 'Sententia Metaphysicae - Liber 9', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp09.html' },
    { id: 'metaph-10', title: 'Sententia Metaphysicae - Liber 10', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp10.html' },
    { id: 'metaph-11', title: 'Sententia Metaphysicae - Liber 11', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp11.html' },
    { id: 'metaph-12', title: 'Sententia Metaphysicae - Liber 12', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cmp12.html' },
    
    // ============ COMMENTARIA IN NEOPLATONICOS ============
    
    // Super librum De causis
    { id: 'de-causis-pr', title: 'Super De causis - Prooemium', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cdc00.html' },
    { id: 'de-causis-l1-32', title: 'Super De causis - Lectiones 1-32', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cdc01.html' },
    
    // Super De divinis nominibus
    { id: 'div-nom-pr', title: 'Super De divinis nominibus - Prooemium', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cdn00.html' },
    { id: 'div-nom-c1-2', title: 'Super De divinis nominibus - Capita 1-2', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cdn01.html' },
    { id: 'div-nom-c3', title: 'Super De divinis nominibus - Caput 3', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cdn03.html' },
    { id: 'div-nom-c4-8', title: 'Super De divinis nominibus - Capita 4-8', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cdn04.html' },
    { id: 'div-nom-c9-11', title: 'Super De divinis nominibus - Capita 9-11', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cdn09.html' },
    { id: 'div-nom-c12-13', title: 'Super De divinis nominibus - Capita 12-13', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cdn12.html' },
    
    // ============ COMMENTARIA IN BOETHIUM ============
    
    { id: 'ebdomadibus', title: 'Expositio libri De ebdomadibus', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cbh.html' },
    { id: 'trinitate', title: 'Super De Trinitate - Recensio vulgata', category: 'Commentaria', url: 'https://www.corpusthomisticum.org/cbt.html' },
    
    // ============ COMMENTARIA BIBLICA ============
    
    // Super Psalmos
    { id: 'psalm-pr', title: 'Super Psalmos - Prooemium', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cps00.html' },
    { id: 'psalm-1', title: 'Super Psalmos - Psalmus 1', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cps01.html' },
    { id: 'psalm-2-10', title: 'Super Psalmos - Psalmi 2-10', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cps02.html' },
    { id: 'psalm-11-20', title: 'Super Psalmos - Psalmi 11-20', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cps11.html' },
    { id: 'psalm-21-30', title: 'Super Psalmos - Psalmi 21-30', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cps21.html' },
    { id: 'psalm-31-40', title: 'Super Psalmos - Psalmi 31-40', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cps31.html' },
    { id: 'psalm-41-50', title: 'Super Psalmos - Psalmi 41-50', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cps41.html' },
    { id: 'psalm-51', title: 'Super Psalmos - Psalmus 51', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cps51.html' },
    { id: 'psalm-52-54', title: 'Super Psalmos - Psalmi 52-54', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cps52.html' },
    
    // Super Iob
    { id: 'iob-pr', title: 'Super Iob - Prooemium', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cio00.html' },
    { id: 'iob-c1-2', title: 'Super Iob - Capita 1-2', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cio01.html' },
    { id: 'iob-c3-14', title: 'Super Iob - Capita 3-14', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cio03.html' },
    { id: 'iob-c15-21', title: 'Super Iob - Capita 15-21', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cio15.html' },
    { id: 'iob-c22-31', title: 'Super Iob - Capita 22-31', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cio22.html' },
    { id: 'iob-c32-37', title: 'Super Iob - Capita 32-37', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cio32.html' },
    { id: 'iob-c38-41', title: 'Super Iob - Capita 38-41', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cio38.html' },
    { id: 'iob-c42', title: 'Super Iob - Caput 42', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cio42.html' },
    
    // Commentaria cursoria - In Ieremiam
    { id: 'ieremiam', title: 'In Ieremiam', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cph.html' },
    
    // Super Isaiam - COMPLETO
    { id: 'isaiam-pr', title: 'Super Isaiam - Prooemium', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cis00.html' },
    { id: 'isaiam-c1-l1', title: 'Super Isaiam - Caput 1 lectio 1', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cis01a.html' },
    { id: 'isaiam-c1-2-c33', title: 'Super Isaiam - Caput 1 lectio 2-caput 33', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cis01b.html' },
    { id: 'isaiam-c34-39', title: 'Super Isaiam - Capita 34-39', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cis34.html' },
    { id: 'isaiam-c40-49', title: 'Super Isaiam - Capita 40-49', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cis40.html' },
    { id: 'isaiam-c50-66', title: 'Super Isaiam - Capita 50-66', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cis50.html' },
    
    // Super Matthaeum - Reportatio Petri de Andria
    { id: 'matth-pa-pr', title: 'Super Matthaeum (Petri de Andria) - Prooemium', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cma00.html' },
    { id: 'matth-pa-c1-2', title: 'Super Matthaeum (Petri de Andria) - Capita 1-2', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cma01.html' },
    { id: 'matth-pa-c3-4', title: 'Super Matthaeum (Petri de Andria) - Capita 3-4', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cma03.html' },
    { id: 'matth-pa-c5-v1-10a', title: 'Super Matthaeum (Petri de Andria) - Caput 5 v. 1-10a', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cma0500.html' },
    { id: 'matth-pa-c5-v10b-22', title: 'Super Matthaeum (Petri de Andria) - Caput 5 v. 10b-22', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cma0510.html' },
    { id: 'matth-pa-c6-v9-14', title: 'Super Matthaeum (Petri de Andria) - Caput 6 v. 9-14', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cma0609.html' },
    
    // Super Matthaeum - Reportatio Leodegarii Bissuntini
    { id: 'matth-lb-c6-v9-14', title: 'Super Matthaeum (Leodegarii) - Caput 6 v. 9-14', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cml0609.html' },
    { id: 'matth-lb-c6-v19-c12', title: 'Super Matthaeum (Leodegarii) - Caput 6 v. 19-Caput 12', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cml0619.html' },
    { id: 'matth-lb-c13-16', title: 'Super Matthaeum (Leodegarii) - Capita 13-16', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cml13.html' },
    { id: 'matth-lb-c17-20', title: 'Super Matthaeum (Leodegarii) - Capita 17-20', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cml17.html' },
    { id: 'matth-lb-c21-25', title: 'Super Matthaeum (Leodegarii) - Capita 21-25', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cml21.html' },
    { id: 'matth-lb-c26-28', title: 'Super Matthaeum (Leodegarii) - Capita 26-28', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cml26.html' },
    
    // Super Ioannem - COMPLETO
    { id: 'ioann-pr', title: 'Super Ioannem - Prooemium', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih00.html' },
    { id: 'ioann-c1', title: 'Super Ioannem - Caput 1', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih01.html' },
    { id: 'ioann-c2', title: 'Super Ioannem - Caput 2', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih02.html' },
    { id: 'ioann-c3-4', title: 'Super Ioannem - Capita 3-4', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih03.html' },
    { id: 'ioann-c5', title: 'Super Ioannem - Caput 5', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih05.html' },
    { id: 'ioann-c6', title: 'Super Ioannem - Caput 6', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih06.html' },
    { id: 'ioann-c7-11', title: 'Super Ioannem - Capita 7-11', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih07.html' },
    { id: 'ioann-c12', title: 'Super Ioannem - Caput 12', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih12.html' },
    { id: 'ioann-c13-17', title: 'Super Ioannem - Capita 13-17', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih13.html' },
    { id: 'ioann-c18-19', title: 'Super Ioannem - Capita 18-19', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih18.html' },
    { id: 'ioann-c20-21', title: 'Super Ioannem - Capita 20-21', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cih20.html' },
    
    // CATENA AUREA - COMPLETA
    // Catena in Matthaeum
    { id: 'cat-mt-ded', title: 'Catena in Matthaeum - Dedicatio', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmt00a.html' },
    { id: 'cat-mt-pr', title: 'Catena in Matthaeum - Prooemium', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmt00b.html' },
    { id: 'cat-mt-c1-2', title: 'Catena in Matthaeum - Capita 1-2', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmt01.html' },
    { id: 'cat-mt-c3-4', title: 'Catena in Matthaeum - Capita 3-4', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmt03.html' },
    { id: 'cat-mt-c5-9', title: 'Catena in Matthaeum - Capita 5-9', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmt05.html' },
    { id: 'cat-mt-c10', title: 'Catena in Matthaeum - Caput 10', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmt10.html' },
    { id: 'cat-mt-c11-12', title: 'Catena in Matthaeum - Capita 11-12', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmt11.html' },
    { id: 'cat-mt-c13-16', title: 'Catena in Matthaeum - Capita 13-16', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmt13.html' },
    { id: 'cat-mt-c17-20', title: 'Catena in Matthaeum - Capita 17-20', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmt17.html' },
    { id: 'cat-mt-c21-25', title: 'Catena in Matthaeum - Capita 21-25', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmt21.html' },
    { id: 'cat-mt-c26-28', title: 'Catena in Matthaeum - Capita 26-28', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmt26.html' },
    
    // Catena in Marcum
    { id: 'cat-mc-ded', title: 'Catena in Marcum - Dedicatio', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmc00a.html' },
    { id: 'cat-mc-pr', title: 'Catena in Marcum - Prooemium', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmc00b.html' },
    { id: 'cat-mc-c1-13', title: 'Catena in Marcum - Capita 1-13', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmc01.html' },
    { id: 'cat-mc-c14-16', title: 'Catena in Marcum - Capita 14-16', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cmc14.html' },
    
    // Catena in Lucam
    { id: 'cat-lc-pr', title: 'Catena in Lucam - Prooemium', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/clc00.html' },
    { id: 'cat-lc-c1-l1', title: 'Catena in Lucam - Caput 1 lectio 1', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/clc011.html' },
    { id: 'cat-lc-c1-l2-c2', title: 'Catena in Lucam - Caput 1 lectio 2-caput 2', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/clc012.html' },
    { id: 'cat-lc-c3', title: 'Catena in Lucam - Caput 3', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/clc03.html' },
    { id: 'cat-lc-c4-8', title: 'Catena in Lucam - Capita 4-8', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/clc04.html' },
    { id: 'cat-lc-c9-13', title: 'Catena in Lucam - Capita 9-13', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/clc09.html' },
    { id: 'cat-lc-c14-18', title: 'Catena in Lucam - Capita 14-18', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/clc14.html' },
    { id: 'cat-lc-c19-21', title: 'Catena in Lucam - Capita 19-21', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/clc19.html' },
    { id: 'cat-lc-c22-24', title: 'Catena in Lucam - Capita 22-24', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/clc22.html' },
    
    // Catena in Ioannem
    { id: 'cat-io-pr', title: 'Catena in Ioannem - Prooemium', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cjo00.html' },
    { id: 'cat-io-c1', title: 'Catena in Ioannem - Caput 1', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cjo01.html' },
    { id: 'cat-io-c2', title: 'Catena in Ioannem - Caput 2', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cjo02.html' },
    { id: 'cat-io-c3-4', title: 'Catena in Ioannem - Capita 3-4', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cjo03.html' },
    { id: 'cat-io-c5-11', title: 'Catena in Ioannem - Capita 5-11', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cjo05.html' },
    { id: 'cat-io-c12-21', title: 'Catena in Ioannem - Capita 12-21', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cjo12.html' },
    
    // IN EPISTOLAS S. PAULI - COMPLETO
    // Super Romanos
    { id: 'rom-pr', title: 'Super Romanos - Prooemium', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cro00.html' },
    { id: 'rom-c1-l1-4', title: 'Super Romanos - Caput 1 lectiones 1-4', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cro011.html' },
    { id: 'rom-c1-l5', title: 'Super Romanos - Caput 1 lectio 5', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cro015.html' },
    { id: 'rom-c1-l6-c4', title: 'Super Romanos - Caput 1 lectio 6-caput 4', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cro016.html' },
    { id: 'rom-c5-11', title: 'Super Romanos - Capita 5-11', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cro05.html' },
    { id: 'rom-c12-16', title: 'Super Romanos - Capita 12-16', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cro12.html' },
    
    // Super I ad Corinthios
    { id: '1cor-c1-7-v10', title: 'Super I Corinthios - Capita 1-7 v. 10', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/c1c.html' },
    { id: '1cor-c11-13-v11', title: 'Super I Corinthios (Rep. Reginaldi) - Capita 11-13 v. 11', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/c1r.html' },
    { id: '1cor-c11-16', title: 'Super I Corinthios (Rep. vulgata) - Capita 11-16', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/c1v.html' },
    
    // Super II ad Corinthios
    { id: '2cor', title: 'Super II Corinthios - Reportatio vulgata', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/c2c.html' },
    
    // Otras epístolas de San Pablo
    { id: 'galatas', title: 'Super Galatas', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cgl.html' },
    { id: 'ephesios', title: 'Super Ephesios', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cep.html' },
    { id: 'philippenses', title: 'Super Philippenses', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cpl.html' },
    { id: 'colossenses', title: 'Super Colossenses', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/ccl.html' },
    { id: '1thess', title: 'Super I Thessalonicenses', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/c1t.html' },
    { id: '2thess', title: 'Super II Thessalonicenses', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/c2t.html' },
    { id: '1tim', title: 'Super I Timotheum', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/ct1.html' },
    { id: '2tim', title: 'Super II Timotheum', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/ct2.html' },
    { id: 'titum', title: 'Super Titum', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/ctt.html' },
    { id: 'philemonem', title: 'Super Philemonem', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/cpm.html' },
    
    // Super Epistolam ad Hebraeos
    { id: 'hebr-c1-6', title: 'Super Hebraeos (Rep. vulgata) - Capita 1-6', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/che01.html' },
    { id: 'hebr-pr', title: 'Super Hebraeos - Prooemium', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/che00.html' },
    { id: 'hebr-c7-10', title: 'Super Hebraeos - Capita 7-10', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/che07.html' },
    { id: 'hebr-c11-13', title: 'Super Hebraeos - Capita 11-13', category: 'Commentaria Biblica', url: 'https://www.corpusthomisticum.org/che11.html' },
    
    // ============ COLLATIONES ET SERMONES ============
    
    // Collationes
    { id: 'symbolum', title: 'In Symbolum Apostolorum', category: 'Collationes', url: 'https://www.corpusthomisticum.org/csv.html' },
    { id: 'ave', title: 'Expositio Salutationis angelicae', category: 'Collationes', url: 'https://www.corpusthomisticum.org/cst.html' },
    { id: 'praecepta', title: 'De decem praeceptis', category: 'Collationes', url: 'https://www.corpusthomisticum.org/cac.html' },
    
    // In orationem dominicam
    { id: 'pater-pr', title: 'In orationem dominicam - Prooemium', category: 'Collationes', url: 'https://www.corpusthomisticum.org/csu00.html' },
    { id: 'pater-a2-7', title: 'In orationem dominicam - Articuli 2-7', category: 'Collationes', url: 'https://www.corpusthomisticum.org/csu02.html' },
    
    // Sermones
    { id: 'serm-attendite', title: 'Sermo: Attendite a falsis', category: 'Collationes', url: 'https://www.corpusthomisticum.org/haf.html' },
    { id: 'serm-ecce-rex', title: 'Sermo: Ecce Rex tuus venit', category: 'Collationes', url: 'https://www.corpusthomisticum.org/her.html' },
    { id: 'serm-exiit', title: 'Sermo: Exiit qui seminat', category: 'Collationes', url: 'https://www.corpusthomisticum.org/hes.html' },
    { id: 'serm-homo-quidem', title: 'Sermo: Homo quidem fecit cenam', category: 'Collationes', url: 'https://www.corpusthomisticum.org/hhf.html' },
    { id: 'serm-osanna', title: 'Sermo: Osanna Filio David', category: 'Collationes', url: 'https://www.corpusthomisticum.org/hof.html' },
    { id: 'serm-puer', title: 'Sermo: Puer Jesus', category: 'Collationes', url: 'https://www.corpusthomisticum.org/hpj.html' },
    
    // ============ DOCUMENTA ============
    
    { id: 'doc-inventarium', title: 'Inventarium castri Traiecti', category: 'Documenta', url: 'https://www.corpusthomisticum.org/act.html' },
    { id: 'doc-secreto', title: 'De secreto', category: 'Documenta', url: 'https://www.corpusthomisticum.org/ose.html' },
    { id: 'doc-ordinationes', title: 'Ordinationes pro promotione studii', category: 'Documenta', url: 'https://www.corpusthomisticum.org/ava.html' },
    
    // ============ OPERA PROBABILIA AUTHENTICITATE ============
    
    // Lectura Romana in primum Sententiarum
    { id: 'lect-romana-index', title: 'Lectura Romana - Index quaestionum', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/snrindex.html' },
    { id: 'lect-romana', title: 'Lectura Romana in primum Sententiarum', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/snr.html' },
    
    // Quaestiones
    { id: 'de-libro-vitae', title: 'De libro vitae', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/plv.html' },
    
    // Officium Corporis Christi
    { id: 'off-corpus-sacerdos', title: 'Officium Corporis Christi "Sacerdos"', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/pcx.html' },
    
    // Sermones (Opera Probabilia)
    { id: 'prob-serm-abjiciamus', title: 'Sermo: Abjiciamus opera', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/pao.html' },
    { id: 'prob-serm-beata-gens', title: 'Sermo: Beata gens', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/pbg.html' },
    { id: 'prob-serm-beati-qui', title: 'Sermo: Beati qui habitant', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/pbh.html' },
    { id: 'prob-serm-beatus-vir', title: 'Sermo: Beatus vir', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/pbv.html' },
    { id: 'prob-serm-coelum', title: 'Sermo: Coelum et terra', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/pct.html' },
    { id: 'prob-serm-ecce-ego', title: 'Sermo: Ecce ego', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/pee.html' },
    { id: 'prob-serm-germinet', title: 'Sermo: Germinet terra', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/pgt.html' },
    { id: 'prob-serm-homo-dives', title: 'Sermo: Homo quidam erat dives', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/phq.html' },
    { id: 'prob-serm-lux', title: 'Sermo: Lux orta', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/plo.html' },
    { id: 'prob-serm-hic-est-liber', title: 'Principium biblicum: Hic est liber', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/ptc.html' },
    
    // Preces
    { id: 'adoro-te', title: 'Adoro te devote', category: 'Opera Probabilia', url: 'https://www.corpusthomisticum.org/pat.html' },
    
    // ============ OPERA DUBIA AUTHENTICITATE ============
    
    // Quaestiones
    { id: 'cognitione', title: 'De cognitione animae', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/dca.html' },
    { id: 'immortalitate', title: 'De immortalitate animae', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/dia.html' },
    
    // Opuscula philosophica
    { id: 'fallaciis', title: 'De fallaciis', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/dp3.html' },
    { id: 'propositionibus', title: 'De propositionibus modalibus', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/dpp.html' },
    
    // Rescripta
    { id: 'sortibus-brev', title: 'De sortibus (Recensio brevior)', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/dtb.html' },
    
    // Commentaria cursoria
    { id: 'threnos', title: 'In Threnos', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/cth.html' },
    
    // Opera liturgica
    { id: 'off-corpus-sapientia', title: 'Officium Corporis Christi "Sapientia"', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/dcx.html' },
    
    // Sermones (Opera Dubia)
    { id: 'dub-serm-anima', title: 'Sermo: Anima mea', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/dam.html' },
    { id: 'dub-serm-petite', title: 'Sermo: Petite et accipietis', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/dpa.html' },
    { id: 'dub-serm-sapientia', title: 'Sermo: Sapientia confortabit', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/dsc.html' },
    { id: 'dub-serm-tria', title: 'Sermo: Tria retinent', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/dtr.html' },
    
    // Preces
    { id: 'dub-concede', title: 'Prex: Concede michi', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/d04.html' },
    
    // Acta Capitulorum
    { id: 'acta-1260', title: 'Acta Cap. Prov. Romanae - Neapoli 1260', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/a60.html' },
    { id: 'acta-1261', title: 'Acta Cap. Prov. Romanae - Urbeveteri 1261', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/a61.html' },
    { id: 'acta-1262', title: 'Acta Cap. Prov. Romanae - Perusii 1262', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/a62.html' },
    { id: 'acta-1263', title: 'Acta Cap. Prov. Romanae - Rome 1263', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/a63.html' },
    { id: 'acta-1264', title: 'Acta Cap. Prov. Romanae - Viterbii 1264', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/a64.html' },
    { id: 'acta-1265', title: 'Acta Cap. Prov. Romanae - Anagnie 1265', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/a65.html' },
    { id: 'acta-1266', title: 'Acta Cap. Prov. Romanae - Tuderti 1266', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/a66.html' },
    { id: 'acta-1267', title: 'Acta Cap. Prov. Romanae - Luce 1267', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/a67.html' },
    { id: 'acta-1268', title: 'Acta Cap. Prov. Romanae - Viterbii 1268', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/a68.html' },
    { id: 'acta-1272', title: 'Acta Cap. Prov. Romanae - Florentie 1272', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/a72.html' },
    { id: 'acta-1273', title: 'Acta Cap. Prov. Romanae - Rome 1273', category: 'Opera Dubia', url: 'https://www.corpusthomisticum.org/a73.html' }
];


// Estado de la aplicación
let state = {
    workerUrl: '',
    selectedWork: null,
    sections: [],
    currentSection: 0,
    searchTerm: '',
    collapsedCategories: new Set()
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    state.workerUrl = document.getElementById('workerUrl').value;
    renderWorksList();
    document.getElementById('workerUrl').addEventListener('change', (e) => {
        state.workerUrl = e.target.value;
    });
});

// Renderizar lista de obras con categorías colapsables
function renderWorksList() {
    const worksList = document.getElementById('worksList');
    
    let filteredWorks = WORKS;
    if (state.searchTerm) {
        filteredWorks = filteredWorks.filter(w => 
            w.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            w.category.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
    }
    
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
    
    const groupedWorks = {};
    filteredWorks.forEach(work => {
        if (!groupedWorks[work.category]) {
            groupedWorks[work.category] = [];
        }
        groupedWorks[work.category].push(work);
    });
    
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
        }).join('');
    
    worksList.innerHTML = searchHtml + categoriesHtml;
}

function toggleCategory(category) {
    if (state.collapsedCategories.has(category)) {
        state.collapsedCategories.delete(category);
    } else {
        state.collapsedCategories.add(category);
    }
    renderWorksList();
}

function searchWorks(term) {
    state.searchTerm = term;
    renderWorksList();
}

// Cargar una obra
async function loadWork(workId) {
    const work = WORKS.find(w => w.id === workId);
    if (!work) return;
    
    state.selectedWork = work;
    
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
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const latinText = extractLatinText(doc);
        
        if (!latinText) {
            throw new Error('No se pudo extraer el texto latino');
        }
        
        state.sections = [{
            title: work.title,
            latin: latinText,
            spanish: null
        }];
        
        state.currentSection = 0;
        
        await renderSection(0);
        
    } catch (err) {
        showError(`Error al cargar la obra: ${err.message}`);
    }
}

function hideReader() {
    document.getElementById('reader').style.display = 'none';
    document.getElementById('worksList').style.display = 'block';
    state.selectedWork = null;
    state.sections = [];
}

function extractLatinText(doc) {
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
    
    return text.trim() || `Esta es una sección de la obra ${state.selectedWork ? state.selectedWork.title : ''}.`;
}

function showError(message) {
    const reader = document.getElementById('reader');
    const currentContent = reader.innerHTML;
    
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
    
    if (!section.spanish) {
        await translateSection(index);
    }
}

async function changeSection(newIndex) {
    const index = parseInt(newIndex);
    if (index < 0 || index >= state.sections.length) return;
    
    state.currentSection = index;
    await renderSection(index);
}

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
        
        state.sections[index].spanish = translation;
        
        const translationContent = document.getElementById('translationContent');
        if (translationContent) {
            translationContent.innerHTML = `<p>${translation}</p>`;
        }
        
    } catch (err) {
        showError(`Error en la traducción: ${err.message}`);
    }
}
