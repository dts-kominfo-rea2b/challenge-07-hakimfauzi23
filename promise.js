const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emotion) => {
  try {
    // Call Promise
    const IXX = await promiseTheaterIXX();
    const VGC = await promiseTheaterVGC();

    // Mix Result Promise
    const arrMix = [...IXX, ...VGC];

    // Filtered Marah dan Tidak Marah
    let marah = arrMix.filter((o) => o.hasil === "marah");
    let tidakMarah = arrMix.filter((o) => o.hasil === "tidak marah");

    // Membuat Promise, LETS GO!!!
    return new Promise((resolve, project) => {
      if (emotion === "marah") {
        resolve(marah.length);
      }
      if (emotion === "tidak marah") {
        resolve(tidakMarah.length);
      }
    });
  } catch (rejectMessage) {
    console.log(rejectMessage);
  }
};

module.exports = {
  promiseOutput,
};
