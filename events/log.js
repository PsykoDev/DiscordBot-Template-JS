/** @format */

module.exports = async (client, info) => {
  client.on("error", (e) => console.error(e))
  client.on("warn", (e) => console.warn(e))
  client.on("debug", (e) => console.info(e))
  //client.logger.debug(info)
  //client.logger.error(info)
  //client.logger.warn(info)
}
