document.addEventListener("DOMContentLoaded",() => { 
    goIconaMoon();
});

function goIconaMoon(){
	document.querySelectorAll(".iconamoon").forEach(icom => {
		var icname = icom.getAttribute("icon-name");
		
		/*--- GENERATE GITHUB SVG LINK ---*/		
		var genstr = "//glenthemes.github.io/iconamoon/" + icname.replace(/ /g,"%20") + ".svg";
		
		fetch(genstr).then(genthis => {
		  return genthis.text();
		}).then(genthis => {
		  icom.innerHTML = genthis;
		  if(icom.querySelectorAll("[http-equiv='Content-Security-Policy']").length){
		  	icom.innerHTML = "";
		  }
		});
	});//end each
}//end function 
