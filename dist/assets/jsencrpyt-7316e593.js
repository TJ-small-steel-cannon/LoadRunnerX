import{J as e}from"./jsencrypt.min-12ac9c79.js";const t=`MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMAXkY16VUvJEVqY82/k2hxCjGkCQfne
Gn7Vq3hsCLuGmmxYa6JeNeBkRIdkIWIGWvnXfbjPu/4AQ/TmsgRa2CcCAwEAAQ==`,r=`MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAwBeRjXpVS8kRWpjz
b+TaHEKMaQJB+d4aftWreGwIu4aabFhrol414GREh2QhYgZa+dd9uM+7/gBD9Oay
BFrYJwIDAQABAkEAqY7kSwbV7byBFgB2uak/obxYZoS4qg+UQarn3bc3ChceewcT
nT2Dp47J/UAoM3Yudn9mWfnaJmul18LrfNqh4QIhAP3eA8fdzdlSVUrG9woWc2p/
npTCuNq7xdkOJj6atKT3AiEAwbSyFPGfNFrkHA1WYxthcCmVt+aNGyZC15t+9IAH
ClECICSQOF0t7frx58ToWSZDy4W4Mb/dN8CRMNKtPgbgQ0pLAiBRP5qmoEZ37lvZ
zFpczaJMKpUrAuBS7/R/fTB+G6lYUQIgNSvKBaW92oVS8vGHCokLEUevTP0bc33e
GDhI52QNvgo=`;function o(n){const A=new e;return A.setPublicKey(t),A.encrypt(n)}function a(n){const A=new e;return A.setPrivateKey(r),A.decrypt(n)}export{a as d,o as e};
