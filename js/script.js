"use strict";
const isMobile = {

Android:function()
{
  return navigator.userAgent.match(/Android/i);
},
BlackBerry:function()
{
  return navigator.userAgent.match(/BlackBerry/i);
},
iOS: function()
{
  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
},
Opera: function()
{
  return navigator.userAgent.match(/Opera Mini/i);
},
Windows: function()
{
  return navigator.userAgent.match(/IEMobile/i);
},
any: function()
{
  return
   (
    isMobile.Android() ||
     isMobile.BlackBerry() ||
     isMobile.iOS() ||
       isMobile.Opera() ||
       isMobile.Windows()
  )
}
};

if (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() ||  isMobile.Windows())
{

  document.body.classList.add("_touch");
  }

else
{
  document.body.classList.add("_pc");
}






const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu)
{

  iconMenu.addEventListener("click",function(e)
{
  document.body.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
})
}
/*----------------------------------- */

let
paragraphs = document.querySelectorAll(".twitter__text > .twitter__paragraph"),
spans = document.querySelectorAll(".twitter__spans > span"),
index = 0;
paragraphs[index].style.display = "block";
spans[index].classList.add("_active");

function hideParagraphsAndDeleteActiveClassSpan()
{
for (let i = 0;i < spans.length; i++)
{
  paragraphs[i].style.display = "none";
  spans[i].classList.remove("_active");
}
}

if (paragraphs.length === spans.length)
{

  for (let i = 0;i < spans.length; i++)
  {
    spans[i].onclick = (e) =>
    {
      hideParagraphsAndDeleteActiveClassSpan();
      index = i;
      e.target.classList.add("_active");
        paragraphs[index].style.display = "block";
        paragraphs[index].style.left = 0+ "%";
    }
  }
}
