function getXMLHTTP(){var xmlhttp=false;try{xmlhttp=new XMLHttpRequest();}
catch(e){try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e){try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e1){xmlhttp=false;}}}
return xmlhttp;}
function getSection(sectionId){var strURL=jsLiveSite+"/modules/mod_Programacao/findCat.php?section="+1;var req=getXMLHTTP();if(req){req.onreadystatechange=function(){if(req.readyState==4){if(req.status==200){document.getElementById('cidade').innerHTML=req.responseText;}}}
req.open("GET",strURL,true);req.send(null);}}
function getCat(catId){var strURL=jsLiveSite+"/modules/mod_Programacao/findSubCat.php?cat="+catId;var req=getXMLHTTP();if(req){req.onreadystatechange=function(){if(req.readyState==4){if(req.status==200){document.getElementById('cinema').innerHTML=req.responseText;}else{alert("Sub was a problem while using XMLHTTP:\n"+req.statusText);}}}
req.open("GET",strURL,true);req.send(null);}}
function getSubCat(catId){var strURL=jsLiveSite+"/modules/mod_Programacao/findArticle.php?cat="+catId;var req=getXMLHTTP();if(req){req.onreadystatechange=function(){if(req.readyState==4){if(req.status==200){document.getElementById('filme').innerHTML=req.responseText;}else{alert("There was a problem while using XMLHTTP:\n"+req.statusText);}}}
req.open("GET",strURL,true);req.send(null);}}
function goToPage(id){var node=document.getElementById(id);window.location.href=jsLiveSite+'index.php?option=com_content&view=article&id='+node.options[node.selectedIndex].value+'&Itemid='+ItemID;}