/* KORALIS pilot evidence. ROSBOT PLUS data: Mostafa Barah (2026), CC BY 4.0. */
(() => {
"use strict";
const source = {"lidar":{"fields":"frame_id = laser\nrange_min = 0 m     range_max = 200 m\nranges[207] = 0.5299999713897705 m\nheader.stamp = 1767350346826395480 ns","csv":"timestamp_ns;time_sec;datetime;_header__frame_id;_angle_min;_angle_max;_angle_increment;_time_increment;_scan_time;_range_min;_range_max\n1768912181989222428;1768912181.9892223;2026-01-20T13:29:41.989222;laser;-2.094395160675049;2.094395160675049;0.0037827726919203997;5.00581409141887e-05;0.08314657211303711;0.0;200.0","event":"{\"source\":\"scan.csv:220 · messages.id=4157\",\"bag_timestamp_ns\":\"1768912181989222428\",\"header_stamp_ns\":\"1767350346826395480\",\"t_ms\":33178,\"frame\":\"laser\",\"id\":\"scan-4157\",\"kind\":\"lidar_range\",\"unit\":\"m\",\"value\":\"0.52999997139\",\"valid\":true,\"min_ray_index\":207,\"rays_total\":1109,\"rays_valid\":818}","angleMin":-2.094395160675049,"angleStep":0.0037827726919203997,"ranges":[2.305,2.292,2.281,2.267,2.258,2.258,2.25,2.239,2.222,2.214,null,null,2.03,2.028,2.021,1.996,1.989,1.981,1.963,1.957,1.959,1.952,1.943,1.937,1.934,1.921,1.92,1.906,1.909,1.896,1.886,1.886,1.89,1.874,1.872,1.864,1.859,1.886,1.888,null,null,null,1.553,1.542,1.545,1.542,1.527,1.548,1.544,1.553,1.558,null,1.603,1.626,1.633,1.63,1.64,1.652,1.659,1.676,1.669,1.685,1.698,1.707,1.734,1.726,1.743,1.751,1.759,1.768,1.78,1.782,1.78,1.772,null,null,1.047,1.026,1.021,1.015,1.018,1.015,1.032,null,null,null,2.449,2.462,null,null,1.822,1.797,null,1.745,1.727,1.699,1.699,1.693,1.685,1.674,1.661,1.66,1.66,1.656,1.648,1.644,1.647,1.647,1.634,1.648,1.639,1.626,1.635,1.627,1.626,1.625,1.63,null,null,1.498,1.492,1.499,null,null,1.611,1.621,1.621,1.608,1.611,1.619,1.615,1.615,1.606,1.607,1.611,1.609,1.608,1.604,1.604,1.608,1.607,1.595,1.612,1.611,1.595,1.597,1.596,1.608,1.599,1.598,1.596,1.599,1.599,1.599,1.598,1.598,1.599,1.596,1.597,1.596,1.599,1.598,1.594,1.596,1.599,1.599,1.598,1.599,1.599,1.6,1.609,1.612,1.61,1.611,1.612,1.621,1.611,1.608,1.612,1.621,1.617,1.617,1.622,1.618,1.617,1.618,1.619,1.617,1.63,1.625,1.634,1.629,1.63,1.633,1.634,1.645,1.64,1.642,1.64,1.642,1.645,1.651,1.654,1.658,null,null,0.544,0.53,0.547,0.537,0.533,0.532,0.54,null,null,null,0.894,null,0.914,0.921,0.921,0.91,null,null,null,2.284,2.273,2.277,2.277,2.278,2.276,2.281,2.287,2.284,2.287,2.288,2.296,2.298,2.299,2.294,2.296,2.305,2.296,2.295,2.298,null,null,1.457,1.463,1.457,1.468,null,null,2.318,null,null,1.691,1.681,1.69,1.687,1.714,null,null,2.336,2.34,2.337,2.337,null,null,0.975,0.953,0.966,0.961,0.959,0.961,0.966,null,null,2.369,2.38,2.387,2.39,2.386,2.401,2.402,2.4,2.405,2.41,2.412,2.41,2.422,2.423,2.423,2.42,2.424,null,null,1.046,1.037,1.039,1.034,1.041,1.034,1.045,1.032,1.034,1.023,1.017,1.011,1.023,null,null,2.509,2.504,2.513,2.509,null,null,null,0.988,0.99,0.988,null,null,2.554,2.569,2.564,2.567,2.596,2.595,2.597,2.593,2.608,2.62,2.619,2.619,2.627,2.642,2.64,2.656,2.65,2.663,2.678,2.678,2.676,2.69,2.693,2.704,2.7,2.715,null,null,1.281,1.27,null,null,2.754,2.771,null,null,null,null,2.636,2.629,2.616,2.616,null,null,null,2.833,2.851,2.869,2.879,2.893,2.906,2.907,2.913,2.918,null,null,0.908,0.91,0.911,null,null,0.68,0.678,0.663,0.667,0.675,0.674,0.673,0.679,null,null,3.093,3.101,3.129,3.131,3.149,3.165,3.176,3.178,3.19,3.204,3.207,3.232,3.24,null,null,null,null,3.312,3.317,3.329,null,null,1.44,1.448,null,3.398,3.426,3.45,3.462,null,null,1.473,1.473,1.464,null,null,null,null,null,3.639,3.659,3.668,3.683,3.706,3.717,null,null,null,3.78,3.816,3.837,3.848,3.88,3.887,null,null,1.953,null,null,3.896,3.829,3.873,null,null,null,1.797,1.772,1.775,1.783,null,null,null,null,1.155,1.164,1.16,1.169,null,1.221,1.212,1.219,null,null,null,null,null,4.775,4.818,4.841,4.881,null,4.965,4.992,5.023,5.063,5.1,5.139,5.183,5.225,null,null,null,null,null,null,null,null,null,4.153,4.157,null,null,null,3.01,null,null,6.05,null,null,null,1.586,1.583,1.588,null,null,5.992,null,4.057,4.061,null,null,null,null,null,7.328,7.373,null,null,7.304,7.327,7.323,7.313,null,5.143,null,null,5.353,5.374,null,5.382,null,null,null,null,null,5.495,5.448,null,null,5.312,5.326,5.331,null,5.163,5.157,null,5.299,5.321,5.31,null,null,null,null,null,null,null,5.25,5.257,5.272,5.267,5.268,5.243,5.259,5.26,5.256,5.248,null,5.155,5.145,5.132,5.145,5.12,5.145,5.126,5.134,5.14,5.142,5.126,5.137,5.134,5.096,null,null,7.025,7.022,7.034,7.026,7.026,7.029,7.029,7.035,7.029,7.036,7.032,7.031,7.03,7.042,7.042,7.038,7.04,7.037,7.039,7.042,7.052,7.057,7.06,7.053,7.05,7.065,7.06,7.059,7.066,7.066,7.073,7.08,7.076,7.074,7.08,7.091,7.098,7.096,7.102,null,7.103,7.101,7.12,7.108,7.12,7.124,7.126,7.134,7.134,7.148,7.145,7.158,7.157,7.169,7.178,7.181,7.176,7.187,7.197,7.204,7.205,7.208,7.217,7.222,7.221,7.251,7.24,7.248,7.266,7.285,7.277,7.286,7.289,7.299,7.312,7.328,7.338,7.342,7.339,7.349,7.355,7.371,7.382,7.389,7.398,7.401,7.409,7.424,7.427,7.44,7.45,7.456,7.462,7.485,7.486,7.506,7.508,7.518,7.53,7.543,7.548,7.563,7.583,7.582,7.595,7.6,7.609,7.63,7.638,7.658,7.668,7.677,7.701,7.693,7.708,7.712,7.733,7.747,7.756,7.778,7.79,7.801,7.817,7.819,7.836,7.852,7.877,7.896,7.903,7.92,7.932,7.946,7.958,7.977,7.992,8.012,8.021,8.044,8.065,8.074,null,8.142,8.16,null,null,null,null,null,null,null,null,null,7.664,null,null,7.537,null,7.443,7.41,7.366,7.33,null,null,6.759,null,6.726,6.69,6.668,6.674,6.649,6.624,6.62,6.661,null,6.771,6.751,6.757,6.796,null,6.622,6.584,6.543,6.519,6.488,6.452,6.448,6.486,6.497,6.525,6.54,null,null,null,6.36,6.352,null,1.924,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5.94,5.93,null,null,null,5.859,5.857,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2.235,null,null,null,11.12,null,null,null,null,null,7.56,null,null,null,10.853,10.82,null,null,2.474,2.455,null,10.609,10.605,10.572,10.544,null,null,null,10.428,null,null,null,null,1.51,null,null,null,10.022,null,9.901,null,null,10.043,10.063,10.034,null,null,null,null,null,2.169,2.162,null,null,null,null,null,null,null,null,null,10.307,null,null,null,null,null,null,1.877,null,null,null,null,null,null,null,2.469,null,null,1.37,1.394,1.376,1.381,1.385,1.38,1.36,1.383,1.37,1.361,1.37,1.363,1.35,1.373,1.36,1.361,1.346,1.343,1.348,1.338,1.333,1.334,1.337,1.331,1.326,1.325,1.315,1.334,1.309,1.314,1.317,1.305,1.294,1.305,1.299,1.312,null,1.28,1.288,1.299,1.304,1.292,1.301,1.271,1.278,1.309,1.283,1.276,1.278,1.279,1.273,1.288,1.268,1.272,1.268,1.258,1.251,1.257,1.257,1.268,1.257,1.247,1.251,1.253,1.254,1.25,1.248,1.252,1.251,1.237,1.235,1.23,1.237,1.225,1.222,1.242,1.233,1.241,1.229,1.23,1.227,1.223,1.233,1.231,1.23,1.219,1.218,1.209,1.234,1.233,1.211,1.216,1.235,1.245,1.204,1.244,1.232,1.213,1.228,1.204,1.22,1.213,1.208,null,null,null,null,null,null,null,null,1.906,1.922,null,1.994,2.008,2.001,1.999,2.001,null,2.822,2.829,2.836,2.815,null,null,null,null,2.593,null,null,2.532,null,2.431,2.411,null,null,2.303,null,null,null,null,null,2.066,2.075,2.079,2.065,2.089,2.084,2.105,null,2.137,2.157,2.147,2.147,2.156,2.15,2.16,2.145,2.153,2.159,2.17,2.159,2.168,2.175,2.17,2.183,2.187,2.186,2.194,2.194,2.196,2.202,2.2,2.199,2.204,2.214,2.223,2.217,2.236,2.232,2.223,2.241,2.229,2.246,2.26,2.26,2.258,2.243,2.223,2.222,2.229,null,1.798,1.775,1.757,null]},"stop":{"csv":"timestamp_ns;time_sec;datetime;_linear__x;_linear__y;_linear__z;_angular__x;_angular__y;_angular__z\n1768912190384069847;1768912190.38407;2026-01-20T13:29:50.384070;0.0;0.0;0.0;0.0;0.0;0.0","event":"{\"source\":\"cmd_vel.csv:18 · messages.id=4958\",\"bag_timestamp_ns\":\"1768912190384069847\",\"id\":\"stop-4958\",\"kind\":\"stop_request\",\"t_ms\":47418}","neighbors":"odom.csv:894 · messages.id=5033\nbag.timestamp = 1768912191241910978 ns\ntwist.twist.linear.x = 0.125 m/s\n\nodom.csv:895 · messages.id=5052\nbag.timestamp = 1768912191602027137 ns\ntwist.twist.linear.x = 0.028999999165534973 m/s"},"yakin":{"raw":"{\"header\":{\"stamp\":{\"nsec\":20000000},\"data\":[{\"key\":\"frame_id\",\"value\":[\"yakin\"]},{\"key\":\"seq\",\"value\":[\"0\"]}]},\"frame\":\"yakin\",\"worldPose\":{\"position\":{\"x\":1.25,\"y\":0.5,\"z\":1},\"orientation\":{\"w\":1}},\"angleMin\":-0.1,\"angleMax\":0.1,\"angleStep\":0.05,\"rangeMin\":0.05,\"rangeMax\":5,\"count\":5,\"verticalAngleStep\":\"NaN\",\"verticalCount\":1,\"ranges\":[0.75388085842132568,0.75114339590072632,0.750045657157898,0.75114339590072632,0.75388085842132568],\"intensities\":[0,0,0,0,0]}","normalized":"{\"id\":\"range-20\",\"kind\":\"lidar_range\",\"value\":\"0.750045657157\",\"unit\":\"m\",\"valid\":true,\"source\":\"yakin\",\"t_ms\":20,\"source_line\":1,\"source_sha256\":\"8dafdccc8048e5223c831c2f355e9c1161f20bb37cdfa8d6526808c5a25c44f9\"}","sha":"8dafdccc8048e5223c831c2f355e9c1161f20bb37cdfa8d6526808c5a25c44f9"},"uzak":{"raw":"{\"header\":{\"stamp\":{\"nsec\":20000000},\"data\":[{\"key\":\"frame_id\",\"value\":[\"uzak\"]},{\"key\":\"seq\",\"value\":[\"0\"]}]},\"frame\":\"uzak\",\"worldPose\":{\"position\":{\"y\":-0.5,\"z\":1},\"orientation\":{\"w\":1}},\"angleMin\":-0.1,\"angleMax\":0.1,\"angleStep\":0.05,\"rangeMin\":0.05,\"rangeMax\":5,\"count\":5,\"verticalAngleStep\":\"NaN\",\"verticalCount\":1,\"ranges\":[2.0103490352630615,2.003049373626709,2.0001218318939209,2.003049373626709,2.0103490352630615],\"intensities\":[0,0,0,0,0]}","normalized":"{\"id\":\"range-20\",\"kind\":\"lidar_range\",\"value\":\"2.000121831893\",\"unit\":\"m\",\"valid\":true,\"source\":\"uzak\",\"t_ms\":20,\"source_line\":1,\"source_sha256\":\"a807f208c0fc0fcaa076168d6b3bbf845987a8854c39692c812f8036f3a8685b\"}","sha":"a807f208c0fc0fcaa076168d6b3bbf845987a8854c39692c812f8036f3a8685b"}};
const cases = [
{title:"En yakın LiDAR dönüşü",rule:"MESAFE-01",state:"fail",status:"İhlal edildi",
   description:"Bir taramada geçerli ışınların en kısa mesafesi en az 1 metre olmalıdır.",
   facts:[["Kural eşiği","≥ 1,00 m"],["En kısa ölçüm","0,530 m"],["Geçerli ışın","818 / 1.109"]],
   reason:"İç mekân kaydında 207 numaralı ışın eşik altında kaldı. Karar, sensörün geçerli saydığı dönüşleri kapsar.",
   blocks:[["Özgün bag mesajı · /scan · messages.id=4157",source.lidar.fields],["Yayımcı CSV’si · scan.csv · satır 220",source.lidar.csv],["KORALIS ölçüm olayı · raw/input.jsonl · satır 438",source.lidar.event]],ros:true},
  {title:"Durma isteği",rule:"DUR-01",state:"unknown",status:"Değerlendirilemedi",
   description:"Sıfır hareket komutundan tam 1 saniye sonra boyuna hızın mutlak değeri en fazla 0,05 m/s olmalıdır.",
   facts:[["Hız eşiği","≤ 0,05 m/s"],["Kayıtta hedef an","48,418 s"],["Hedefteki hız","Ölçüm yok"]],
   reason:"En yakın önceki ve sonraki hız örnekleri hedefe 142,159 ms ve 217,957 ms uzaklıkta. Tam hedef anında odometri kaydı yok.",
   blocks:[["Sıfır hareket komutu · cmd_vel.csv · satır 18",source.stop.csv],["KORALIS tetikleyicisi · raw/input.jsonl · satır 1755",source.stop.event],["Komşu özgün bag mesajları · /odom · boyuna hız",source.stop.neighbors]],ros:true},
  ...["yakin","uzak"].map((key,i)=>({
    title:i?"Uzak duvar":"Yakın duvar",rule:"MESAFE-01",state:i?"pass":"fail",status:i?"Sağlandı":"İhlal edildi",
    description:"Gazebo Harmonic sahnesindeki sabit sensör düz bir duvara bakıyor. Kontrol en kısa mesafeyi 1 metreyle karşılaştırıyor.",
    facts:[["Kural eşiği","≥ 1,00 m"],["En kısa ölçüm",i?"2,00012 m":"0,75005 m"],["Sensör zamanı","20 ms"]],
    reason:i?"Beş ışının tamamı 1 metre sınırını karşıladı. Aynı sahnedeki sonraki dört taramada da sonuç sağlandı.":"Merkez ışının ölçtüğü mesafe 1 metrenin altında kaldı. Aynı sahnedeki sonraki dört taramada da sonuç ihlal edildi.",
    blocks:[["Özgün Gazebo LaserScan · "+key+".jsonl · satır 1",source[key].raw],["KORALIS ölçüm olayı · raw/input.jsonl · satır 2",source[key].normalized],["Özgün tarama dosyası · SHA-256",source[key].sha]],ros:false
  }))
];

const ink = "#edf0f0";
const grid = "#52575a";
const muted = "#bac1c3";
const accent = "#ff865b";
const smallFont = "11px ui-monospace, SFMono-Regular, Consolas, monospace";
const labelFont = "600 12px 'Koralis Sans', Arial, sans-serif";

const plots = [
    { title: "En yakın LiDAR dönüşü", meta: "ROSBOT PLUS · #4157",
      caption: "İç mekân taramasının ilk 4 metresi. Turuncu işaret en yakın geçerli dönüşü gösterir.",
      alternative: "Gerçek robotun 1.109 ışınından 818'i geçerlidir. İlk dört metredeki dönüşler çizilmiştir. En yakını 0,530 metredir." },
    { title: "Durma anındaki odometri", meta: "ROSBOT PLUS · #4958",
      caption: "Hedef zamana komşu iki özgün hız ölçümü. Kesikli düşey çizgi ölçümün eksik olduğu anı gösterir.",
      alternative: "Hedeften 142,159 milisaniye önce 0,125 m/s, hedeften 217,957 milisaniye sonra yaklaşık 0,029 m/s. Hedef zamanda ölçüm yoktur." },
    { title: "Yakın duvar taraması", meta: "GAZEBO · 20 ms",
      caption: "Kaydedilmiş beş ışının duvar mesafesi. Turuncu nokta en kısa dönüşü, kesikli çizgi 1 m eşiğini gösterir.",
      alternative: "Beş ışının ölçüldüğü Gazebo yakın duvar taraması. En kısa dönüş 0,75005 metredir ve 1 metrenin altındadır." },
    { title: "Uzak duvar taraması", meta: "GAZEBO · 20 ms",
      caption: "Kaydedilmiş beş ışının duvar mesafesi. Turuncu nokta en kısa dönüşü, kesikli çizgi 1 m eşiğini gösterir.",
      alternative: "Beş ışının ölçüldüğü Gazebo uzak duvar taraması. En kısa dönüş 2,00012 metredir ve 1 metre eşiğini karşılar." }
];

function line(ctx, x1, y1, x2, y2, color, dash = []) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.setLineDash(dash);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
}

function dot(ctx, x, y, radius, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

function label(ctx, text, x, y, align = "left", color = muted) {
    ctx.textAlign = align;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.textAlign = "left";
}

function note(ctx, text, x, y, width, height) {
    ctx.font = labelFont;
    const pad = 5, boxWidth = Math.ceil(ctx.measureText(text).width) + pad * 2;
    const left = Math.max(4, Math.min(width - boxWidth - 4, x));
    const top = Math.max(4, Math.min(height - 23, y));
    ctx.fillStyle = "#151719f5";
    ctx.fillRect(left, top, boxWidth, 19);
    label(ctx, text, left + pad, top + 14, "left", "#ffad8c");
    ctx.font = smallFont;
}

function drawRosScan(ctx, w, h) {
    const rMax = 4, scale = Math.min((w - 28) / 8.25, (h - 27) / 6.15);
    const ox = w / 2, oy = 13 + 4 * scale + (h - 26 - 6 * scale) / 2;
    const start = source.lidar.angleMin, step = source.lidar.angleStep;
    const end = start + step * (source.lidar.ranges.length - 1);
    const project = (r, a) => [ox - Math.sin(a) * r * scale, oy - Math.cos(a) * r * scale];
    for (let r = 1; r <= rMax; r++) {
        ctx.beginPath();
        for (let i = 0; i <= 120; i++) {
            const [x, y] = project(r, start + (end - start) * i / 120);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = r === 1 ? "#c28d79" : r === 4 ? "#5c6163" : "#424648";
        ctx.setLineDash(r === 1 || r === 4 ? [4, 4] : [2, 5]);
        ctx.stroke();
    }
    ctx.setLineDash([]);
    for (const a of [start, 0, end]) {
        const [x, y] = project(rMax, a);
        line(ctx, ox, oy, x, y, "#55595a");
    }
    const points = [];
    source.lidar.ranges.forEach((r, i) => {
        if (r === null || r > rMax) return;
        const [x, y] = project(r, start + i * step);
        points.push({x, y, phase: i / (source.lidar.ranges.length - 1)});
        ctx.fillStyle = "#d0d7d7";
        ctx.fillRect(x - .9, y - .9, 1.8, 1.8);
    });
    const [thresholdX, thresholdY] = project(1, Math.PI / 2);
    label(ctx, "1 m eşik", thresholdX - 7, thresholdY + 4, "right", "#e1b29d");
    dot(ctx, ox, oy, 3.3, ink);
    const index = JSON.parse(source.lidar.event).min_ray_index;
    const [nx, ny] = project(source.lidar.ranges[index], start + index * step);
    const nxLabel = Math.min(w - 62, nx + Math.max(12, scale * .45));
    const nyLabel = Math.max(3, ny - 34);
    line(ctx, nx, ny, nxLabel + 2, nyLabel + 13, accent);
    dot(ctx, nx, ny, 4, accent);
    note(ctx, "0,530 m", nxLabel, nyLabel, w, h);
    label(ctx, "4 m", ox + 4, oy - 4 * scale - 3, "left", muted);
    return points;
}

// Only observed odometry points are drawn; the target time has no measurement.
function drawOdometry(ctx, w, h) {
    const l = 48, r = w - 20, t = 35, b = h - 41;
    const x = ms => l + (ms + 200) / 450 * (r - l);
    const y = speed => b - speed / .15 * (b - t);
    ctx.font = smallFont;
    label(ctx, "|v| (m/s)", l, 18);
    [0, .05, .10, .15].forEach(v => {
        line(ctx, l, y(v), r, y(v), v === .05 ? "#a39b96" : grid, v === .05 ? [4, 4] : []);
        label(ctx, v.toFixed(2).replace(".", ","), l - 8, y(v) + 3, "right");
    });
    [-150, 0, 200].forEach(v => label(ctx, String(v), x(v), b + 15, "center"));
    label(ctx, "Hedefe göre zaman (ms)", r, h - 6, "right");
    line(ctx, x(0), t - 3, x(0), b, accent, [4, 4]);
    note(ctx, "Ölçüm yok", x(0) - 27, 5, w, h);
    const target = BigInt(JSON.parse(source.stop.event).bag_timestamp_ns) + 1000000000n;
    const neighbors = [...source.stop.neighbors.matchAll(/bag\.timestamp = (\d+) ns\ntwist\.twist\.linear\.x = ([\d.]+) m\/s/g)];
    return neighbors.map(([_, stamp, value], i) => {
        const ms = Number(BigInt(stamp) - target) / 1e6;
        const px = x(ms), py = y(Number(value));
        dot(ctx, px, py, 4, ink);
        const align = i === 0 ? "left" : "right";
        label(ctx, i === 0 ? "0,125" : "0,029", px + (i === 0 ? 6 : -6), py - 8, align, ink);
        return {x: px, y: py, phase: (ms + 200) / 450};
    });
}

function drawGazebo(ctx, w, h, key) {
    const scan = JSON.parse(source[key].raw);
    const l = 39, r = w - 18, t = 30, b = h - 42;
    // Both Gazebo cases have identical axes, so their threshold relation is visible.
    const x = i => l + (i + .36) / (scan.count - 1 + .72) * (r - l);
    const y = value => b - value / 2.35 * (b - t);
    const min = Math.min(...scan.ranges);
    ctx.font = smallFont;
    label(ctx, "Mesafe (m)", l, 16);
    [0, .5, 1, 1.5, 2].forEach(v => {
        line(ctx, l, y(v), r, y(v), v === 1 ? "#d8a68f" : grid, v === 1 ? [5, 4] : []);
        label(ctx, String(v).replace(".", ","), l - 7, y(v) + 4, "right");
    });
    label(ctx, "1 m eşik", r, y(1) - 5, "right", "#ffbd9e");
    const points = scan.ranges.map((value, i) => {
        const px = x(i), py = y(value);
        line(ctx, px, b, px, py, "#69717399");
        dot(ctx, px, py, value === min ? 4.5 : 3.4, value === min ? accent : ink);
        label(ctx, String(i + 1), px, b + 15, "center");
        return {x: px, y: py, phase: i / (scan.count - 1)};
    });
    const closest = points[scan.ranges.indexOf(min)];
    note(ctx, min.toLocaleString("tr-TR", {maximumFractionDigits: 5}) + " m",
         closest.x + 3, closest.y - 25, w, h);
    label(ctx, "Tarama ışını", r, h - 6, "right");
    return points;
}

function bindPlot(canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return {select() {}};
    const base = document.createElement("canvas");
    const still = base.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let active = 0, points = [], ratio = 1, raf = 0, phase = 0, last = null, painted = 0;
    let controlsEnabled = document.documentElement.dataset.motion !== "off";
    const onScreen = () => {
        const box = canvas.getBoundingClientRect();
        return box.width > 0 && box.height > 0 && box.bottom > 0 && box.top < window.innerHeight &&
            box.right > 0 && box.left < window.innerWidth;
    };
    let visible = onScreen();
    const moving = () => controlsEnabled && document.documentElement.dataset.motion !== "off" &&
        !reduced.matches && !document.hidden && visible;
    function paint(shine) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(base, 0, 0);
        if (!shine) return;
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        // The sweep only varies the luminosity of recorded samples.
        for (const p of points) {
            const delta = Math.abs(p.phase - phase);
            if (delta >= .09) continue;
            const alpha = (1 - delta / .09) * .65;
            dot(ctx, p.x, p.y, active === 0 ? 1.6 : 3.1, "rgba(255,157,118," + alpha.toFixed(2) + ")");
        }
    }
    function frame(now) {
        raf = 0;
        if (!moving()) { last = null; paint(false); return; }
        if (last !== null) phase = (phase + Math.min(now - last, 100) / 9800) % 1;
        last = now;
        if (now - painted > 45) { paint(true); painted = now; }
        raf = window.requestAnimationFrame(frame);
    }
    function sync() {
        if (raf) window.cancelAnimationFrame(raf);
        raf = 0;
        last = null;
        paint(false);
        if (moving()) raf = window.requestAnimationFrame(frame);
    }
    function render() {
        const rect = canvas.getBoundingClientRect();
        const w = rect.width, h = rect.height;
        if (w < 1 || h < 1) return;
        ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = base.width = Math.round(w * ratio);
        canvas.height = base.height = Math.round(h * ratio);
        still.setTransform(ratio, 0, 0, ratio, 0, 0);
        const shade = still.createLinearGradient(0, 0, w, h);
        shade.addColorStop(0, "#111417");
        shade.addColorStop(.55, "#1b1f22");
        shade.addColorStop(1, "#141719");
        still.fillStyle = shade;
        still.fillRect(0, 0, w, h);
        still.lineWidth = 1;
        if (active === 0) {
            for (let gx = 18; gx < w; gx += 24)
                for (let gy = 16; gy < h; gy += 24) {
                    still.fillStyle = "#535b5e80";
                    still.fillRect(gx, gy, 1, 1);
                }
        }
        still.font = smallFont;
        points = active === 0 ? drawRosScan(still, w, h) :
            active === 1 ? drawOdometry(still, w, h) : drawGazebo(still, w, h, active === 2 ? "yakin" : "uzak");
        visible = onScreen();
        sync();
    }
    if ("ResizeObserver" in window) new ResizeObserver(render).observe(canvas);
    else window.addEventListener("resize", render);
    if ("IntersectionObserver" in window) new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting; sync();
    }).observe(canvas);
    else window.addEventListener("scroll", () => {
        const next = onScreen(); if (next !== visible) { visible = next; sync(); }
    }, {passive:true});
    if (reduced.addEventListener) reduced.addEventListener("change", sync);
    else reduced.addListener(sync);
    document.addEventListener("visibilitychange", sync);
    document.addEventListener("koralis-motion", event => {
        if (typeof event.detail?.enabled === "boolean") controlsEnabled = event.detail.enabled;
        sync();
    });
    if ("MutationObserver" in window) new MutationObserver(() => {
        controlsEnabled = document.documentElement.dataset.motion !== "off";
        sync();
    }).observe(document.documentElement, {attributes:true, attributeFilter:["data-motion"]});
    return {select(index) { active = index; phase = .05; render(); }};
}

function init() {
    const id = name => document.getElementById(name);
    const canvas = id("scan");
    const buttons = [...document.querySelectorAll("button[data-case]")];
    if (!canvas || !buttons.length) return;
    const plot = bindPlot(canvas);
    function select(index, notify) {
        const item = cases[index], chart = plots[index];
        if (!item) return;
        for (const button of buttons) {
            const selected = Number(button.dataset.case) === index;
            button.setAttribute("aria-pressed", String(selected));
            button.classList.toggle("active", selected);
            button.classList.toggle("is-active", selected);
        }
        id("case-title").textContent = item.title;
        id("rule").textContent = item.rule + " / v1.0";
        const result = id("result");
        result.classList.remove("pass", "fail", "unknown");
        result.classList.add(item.state);
        result.textContent = item.status;
        id("description").textContent = item.description;
        id("reason").textContent = item.reason;
        item.facts.forEach(([label, value], i) => {
            id("label" + i).textContent = label;
            id("val" + i).textContent = value;
        });
        const proof = id("proof");
        proof.replaceChildren();
        item.blocks.forEach(([label, raw]) => {
            const origin = document.createElement("p"), code = document.createElement("pre");
            origin.className = "proof-origin";
            origin.textContent = label;
            code.textContent = raw;
            proof.append(origin, code);
        });
        const credit = document.createElement("p");
        credit.className = "credit";
        if (item.ros) {
            credit.textContent = "Mostafa Barah (2026) · ROSBOT PLUS indoor/full · CC BY 4.0. Seçili CSV ve bag alanları bu sunuma uyarlandı. ";
            const link = document.createElement("a");
            link.href = "https://doi.org/10.5281/zenodo.19894190";
            link.textContent = "Özgün veri seti";
            credit.append(link);
        } else {
            credit.textContent = "KORALIS duvar deneyi · Gazebo Sim 8.15.0 · Transport 13.6.0. Özgün sahne, iki tarama dosyası ve tekrar betiği yerel pakette bulunur.";
        }
        proof.append(credit);
        id("plot-title").textContent = chart.title;
        id("plot-meta").textContent = chart.meta;
        id("plot-caption").textContent = chart.caption;
        canvas.setAttribute("role", "img");
        canvas.setAttribute("aria-label", chart.alternative);
        plot.select(index);
        if (notify) {
            id("details").open = false;
            id("announce").textContent = item.title + " — " + item.status;
        }
    }
    for (const button of buttons)
        button.addEventListener("click", () => select(Number(button.dataset.case), true));
    select(0, false);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, {once:true});
else init();
})();
