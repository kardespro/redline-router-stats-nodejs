const axios require("axios")
const BASE = "192.168.16.1"
(async() => {
  console.log(`
    === RedLine Wifi Router Stats ===
  `)
  const _ = await axios.get(`${BASE}/goform/get_router_status`)
  const __ = await axios.get(`${BASE}/goform/webheartbeat`);
  console.log(`
  =============
   UpLoad Speed : ${_.data.upspeed}
   Download Speed : ${_.data.downspeed}
   Terminal ID : ${_.data.ternum}
   HeartBeart : ${__.data.result}
  =============
  `)
})()
