function wOpen(nPage,nFrame,W,H,S){
	WINDOW=open(nPage,nFrame,'toolbar=no,directories=no,menubar=no,status=no,scrollbars=' + S + ',width=' + W + ',height=' + H + ',resizable=no');
}

function ViewMap(Img,W,H){
	WINDOW=open('','','toolbar=no,directories=no,menubar=no,status=no,scrollbars=no,width=' + W + ',height=' + H + ',resizable=no');
	WINDOW.document.write('<html><head><title>Chrono FAQ\'s</title></head><body bgcolor="#000000"><div aling="center"><img src=' + Img + '></div></body></html>');
}