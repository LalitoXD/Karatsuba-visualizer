var jsav = new JSAV("JSAV-container");
var arr = [7, 8, 9, 10];

jsav.label("Normal Array");
var arr1 = jsav.ds.array(arr);
arr1.highlight(1);
arr1.css(2, {"background-color": "aqua", "color": "rgb(150, 55, 50)"});
arr1.layout();

var getDatos = function ()
{
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;
  if (numero1=="")
  {
    document.getElementById("numero1").focus();
  }
  else
  {
    if (numero2=="")
    {
      document.getElementById("numero2").focus();
    }
    else
    {
      console.log(numero1+" "+numero2);
      document.getElementById("numero1").value="";
      document.getElementById("numero2").value="";
      document.getElementById("numero1").focus();
    }
  }
}

function karatsuba(x,y)
{

  var x1,x0,y1,y0,base,m;
  base  = 10;


  if((x<base)||(y<base)){
    console.log( " X - y = " , x,y, x*y)
    return x * y;
  }

  var dummy_x = x.toString();
  var dummy_y = y.toString();

  var n = (dummy_x.length > dummy_y.length) ? dummy_y.length : dummy_x.length;
  m = Math.round(n/2);



  var high1 = parseInt(dummy_x.substring(0,dummy_x.length-m));
  var low1 = parseInt(dummy_x.substring(dummy_x.length-m,dummy_x.length  )) ;

  var high2 = parseInt(dummy_y.substring(0,dummy_y.length-m)); 
  var low2 = parseInt(dummy_y.substring(dummy_y.length-m,dummy_y.length));


  var z0   =   karatsuba( low1, low2);
  var z1   =   karatsuba(low1+high1, low2+high2);
  var z2   =   karatsuba(high1,high2);

  var res  =   (z2 *  Math.pow(10, 2 * m )  ) + ( (z1-z2-z0) * Math.pow(10,  m )) + z0;

  return res;

 }

var a = 12345;
var b = 6789;
console.log(karatsuba(a,b));
console.log(a * b);



