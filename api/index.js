//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require("axios")

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  const getApiInfo = await axios.get("https://restcountries.com/v3/all");
  let apiInfo = getApiInfo.data.map(e => { //la e son los elementos que yo necesito de la api
      return{
          id : e.cca3,
          name : e.name.common,
          flagsImg : e.flags?.pop(f => f),
          continent : e.region,
          capital : e.capital?.pop(c => c),
          subregión : e.subregion,
          area : e.area,
      }
  })
  await Country.bulkCreate(apiInfo);
  server.listen(3001, () => {
    console.log('%s listening at 3000'); // eslint-disable-line no-console
  });
});

