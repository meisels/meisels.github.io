function parseMarkdown(markdownText) {
    const htmlText = markdownText
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*)\*/gim, '<i>$1</i>')
    .replace(/\_\_(.*)\_\_/gim, '<u>$1</u>')
    .replace(/\~\~(.*)\~\~/gim, '<strike>$1</strike>')
    .replace(/\`(.*)\`/gim, '<code>$1</code>')
    .replace(/\n$/gim, '<br>')
    
    return htmlText.trim()
};