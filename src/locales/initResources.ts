import { set } from "lodash-es"

const req = require['context']("./resources", false, /\.ts$/);

req.keys().map(path => {
  const context = req(path).default || req(path);
  // 此处 context 即为每个 .js 文件的导出内容
  console.log(context);
  return "ANYTHING"
})

/**
 * handle language folder file to a tress structure just like
 * {
 *  en: {
 *    layout: {
 *      header: {
 *        "Home"
 *      }
 *    }
 *  },
 *  zh_cn: {
 *    layout: {
 *      header: {
 *        "首页"
 *      }
 *    }
 *  }
 * }
 * so you can manage your language clearly
 * @param modules language modules
 * @param prefix language folder name
 * @returns
 */

function initResources(
  modules: Record<string,
    {
      [key: string]: any
    }>,
  prefix = "languages",
) {
  const obj: Record<string,
    {
      [key: string]: any
    }> = {}

  Object.keys(modules).forEach((key) => {
    const module = modules[key].default
    const reg = new RegExp(`./${prefix}/`, "g")
    const keyList = key.replace(reg, "").split(".")[0].split("/")
    const lang = keyList.shift()
    const objKey = keyList.join(".")
    if (!lang) return
    set(obj, lang, obj[lang] || {})
    set(obj[lang], objKey, module)
  })

  return obj
}

const resources = initResources
export default resources
