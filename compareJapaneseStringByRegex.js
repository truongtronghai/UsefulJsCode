const productKeywords = ref('')
watch(
  productKeywords,
  debounce((newVal, _) => {
    choices.value = []
    selectAll.value = false

    const regexPattern = ['^']

    newVal
      .trim()
      .replace('　', ' ') // replace full-width blank to half-width blank
      .split(' ')
      .forEach((elem) => {
        if (elem.length)
          regexPattern.push(
            '(?=.*' + elem.toLowerCase().normalize('NFKD') + ')'
          )
      })

    regexPattern.push('.+$')

    const regexPatternStr = regexPattern.join('')
    // console.log(regexPatternStr)
    results.value = productSearchCache.filter((item) => {
      if (Object.keys(item).length) if (item.name === null) item.name = ''

      try {
        return (
          item.name.toLowerCase().normalize('NFKD').search(regexPatternStr) > -1
        )
      } catch (err) {
        // this ignores first element of results
        return true
      }
    })
  }, 200)
)
