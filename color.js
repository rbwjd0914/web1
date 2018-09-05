
  function LinksSetcolor(color)
  {
     // var alist=document.querySelectorAll('a');
     // var i=0;
     // while(i<alist.length){
     //    alist[i].style.color=color;
     //     i=i+1;
     // }
     $('a').css('color',color);
  }
  var Body={
    setcolor:function(color){
      //document.querySelector('body').style.color=color;
      $('body').css('color',color);
    },
    Backcolor:function(color){
      //document.querySelector('body').style.backgroundColor=color;
      $('body').css('backgroundColor',color);
    }
  }
  function nightDayhandler(self){

    if(self.value==='night'){

      Body.Backcolor('black');
      Body.setcolor('white');
      self.value='day';
      LinksSetcolor('powderblue');
    }else{
      Body.Backcolor('white');
      Body.setcolor('black');
      self.value='night';
      LinksSetcolor('green');

    }
  }
