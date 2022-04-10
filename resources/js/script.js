document.getelementbyid("num1").onclick = function write1()
{
  document.getElementById("screen").innerHTML = "1"
}
document.getelementbyid("clear").onclick = function writeclear()
{
  document.getElementById("screen").innerHTML = ""
}
document.getelementbyid("num2").onclick = function write2()
{
  document.getElementById("screen").innerHTML = "2"
}
document.getelementbyid("num3").onclick = function write3()
{
  document.getElementById("screen").innerHTML = "3"
}
document.getelementbyid("num4").onclick = function write4()
{
  document.getElementById("screen").innerHTML = "4"
}
document.getelementbyid("num5").onclick = function write5()
{
  document.getElementById("screen").innerHTML = "5"
}
document.getelementbyid("num6").onclick = function write6()
{
  document.getElementById("screen").innerHTML = "6"
}
document.getelementbyid("num7").onclick = function write7()
{
  document.getElementById("screen").innerHTML = "7"
}
document.getelementbyid("num8").onclick = function write8()
{
  document.getElementById("screen").innerHTML = "8"
}
document.getelementbyid("num9").onclick = function write9()
{
  document.getElementById("screen").innerHTML = "9"
}
document.getelementbyid("num0").onclick = function write0()
{
  document.getElementById("screen").innerHTML = "0"
$(‘.number’).on(‘click’, function() { …code… });
}
$number.on(‘click’, function() {

var numberPressed = $(this).html();

$screen.append(numberPressed);  });
