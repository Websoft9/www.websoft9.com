<script> 
 
var type=navigator.appName 
 
if (type=="Netscape") 
 
var lang = navigator.language 
 
else
 
var lang = navigator.userLanguage 
 
//cut down to first 2 chars of country code 
 
var lang = lang.substr(0,2) 
 
// 英语
 
if (lang == "en") 
 
window.location.replace('url') 
 
// 简体中文
 
else if (lang == "zh-cn") 
 
window.location.replace('url') 
 
// 繁体中文
 
else if (lang == "zh-tw") 
 
window.location.replace('url') 
 
// 德语
 
else if (lang == "de") 
 
window.location.replace('url') 
 
// 除上面所列的语言
 
else
 
window.location.replace('url')
 
</script>