const extensionName = "打开网站";
const extensionDescription = "使用 JavaScript 打开网站。";
const extensionBlocks = [
  {
    name: "openWebsite",
    description: "打开网站。",
    parameters: [{ name: "url", type: "string", defaultValue: "https://raw.gitmirror.com/Choneas/Storage/main/%E4%BB%A3%E7%A0%81%26%E5%AD%A6%E4%B9%A0/Webpage/cannotget.html?token=GHSAT0AAAAAACMNM3ULHCOGS6VQBFJHBDUYZOQLAPA" }],
    code: `window.open(url);`,
  },
];
const extensionStartup = () => scratch.registerExtensionBlocks(extensionName, extensionBlocks);
const extensionTeardown = () => scratch.unregisterExtensionBlocks(extensionName);
export default {
  extensionName,
  extensionDescription,
  extensionStartup,
  extensionTeardown,
};