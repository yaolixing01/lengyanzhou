
        var currentLine=-1, offsetTr = 0;
		var oBody = document.body;
		var headTableHeight;
        var $=function(id){
          return document.getElementById(id);
        }

		var oheaderListTable = $('headerListTable');
        function keyDownEvent(e){
            var e = window.event||e;
            if(e.keyCode==38){
                offsetTr = 0;
                currentLine--;
                changeItem();
            }else if(e.keyCode==40){
                offsetTr = 150;
                currentLine++;
                changeItem();
            }else if(e.keyCode==13&&currentLine>-1){
                addUser(); 
            }
            return false;
        }
        function changeItem(){
            if(!$('buddyListTable')) return false;
			
			if(!oBody) oBody = document.body;
			if(!oheaderListTable) oheaderListTable = $('headerListTable');
            if(!headTableHeight) headTableHeight = oheaderListTable.clientHeight;

            var it = $('buddyListTable');
            if(document.all){
                it = $('buddyListTable').children[0];
            }
            changeBackground();
            if(currentLine<0) currentLine = it.rows.length-1;
            if(currentLine >= it.rows.length) currentLine = 0;

 
			 if(it.rows[currentLine].offsetTop < window.innerHeight/2 -1 )
			 {
				//
				//if(document.documentElement.scrollTop > window.innerHeight)
				{
				    document.documentElement.scrollTop =  headTableHeight ;
				}
				//console.log(document.documentElement.scrollTop);
			 }else //if(it.rows[currentLine].offsetTop < oBody.clientHeight - window.innerHeight/2)
			{
			  document.documentElement.scrollTop =  (it.rows[currentLine].offsetTop) - window.innerHeight/2 - (-70 ) -(-headTableHeight);
			}//else
			{
				
			 }


            it.rows[currentLine].className = "buddyListHighLight";
 
        }
        function changeBackground(){
            var it = $('buddyListTable');
            if(document.all){
                it = $('buddyListTable').children[0];
            }
            for(var i=0; i<it.rows.length; i++){
                /*if(i%2==0){
                    it.rows[i].className = "buddyListOdd";
                }else{
                    it.rows[i].className = "buddyListEven";
                }*/
				if(i != currentLine){
				   it.rows[i].className = "buddyListNormal";
				}else {
					it.rows[i].className = "buddyListHighLight";
				}
            }//for
        }

        function addUser(){
            //var it = $('buddyListTable');
            if(document.all){
                //it = $('buddyListTable').children[0];
            }
            //var trBody = it.rows[currentLine].innerHTML;
            //$('result').innerHTML = $('result').innerHTML+trBody;
        }